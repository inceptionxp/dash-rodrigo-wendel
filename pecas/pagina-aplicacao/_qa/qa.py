import json, pathlib, sys
from playwright.sync_api import sync_playwright

HTML = pathlib.Path(__file__).resolve().parent.parent / "index.html"
QA   = pathlib.Path(__file__).resolve().parent
URL  = HTML.as_uri()

CHECK_JS = """
() => {
  const fams = ['Archivo','Hanken Grotesk','Space Mono'];
  const fonts = {};
  fams.forEach(f => { fonts[f] = document.fonts.check('16px "'+f+'"'); });
  const doc = document.documentElement;
  const over = [];
  document.querySelectorAll('*').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.right > doc.clientWidth + 1 || r.left < -1) {
      if (r.width > 0 && r.height > 0) {
        const cs = getComputedStyle(el);
        if (cs.position === 'fixed' || cs.position === 'absolute') return;
        over.push({tag: el.tagName, cls: el.className && el.className.toString().slice(0,60),
                   left: Math.round(r.left), right: Math.round(r.right)});
      }
    }
  });
  const scrollers = [];
  document.querySelectorAll('*').forEach(el => {
    if (el.scrollWidth > el.clientWidth + 1) {
      const cs = getComputedStyle(el);
      scrollers.push({tag: el.tagName, cls: el.className && el.className.toString().slice(0,60),
                      sw: el.scrollWidth, cw: el.clientWidth, ox: cs.overflowX});
    }
  });
  // alvos de toque
  const small = [];
  document.querySelectorAll('a, button, input, select, textarea, summary').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) return;
    if (r.height < 44) small.push({tag: el.TagName || el.tagName, cls: (el.className||'').toString().slice(0,40),
                                   h: Math.round(r.height), txt: (el.textContent||'').trim().slice(0,30)});
  });
  const h1 = document.querySelector('h1');
  const h1cs = getComputedStyle(h1);
  const hero = document.querySelector('.hero');
  const cta  = hero.querySelector('.linha-cta');
  return {
    fonts,
    docScroll: {sw: doc.scrollWidth, cw: doc.clientWidth},
    bodyScroll: {sw: document.body.scrollWidth, cw: document.body.clientWidth},
    overflowEls: over.slice(0,15),
    scrollers: scrollers.slice(0,15),
    smallTargets: small.slice(0,15),
    h1: {fontSize: h1cs.fontSize, w: Math.round(h1.getBoundingClientRect().width),
         h: Math.round(h1.getBoundingClientRect().height),
         lines: Math.round(h1.getBoundingClientRect().height / parseFloat(h1cs.lineHeight))},
    heroH: Math.round(hero.getBoundingClientRect().height),
    ctaBottom: Math.round(cta.getBoundingClientRect().bottom),
    vh: window.innerHeight
  };
}
"""

out = {}
with sync_playwright() as p:
    b = p.chromium.launch()
    for w, h, tag in [(1440, 900, "1440"), (390, 844, "390")]:
        page = b.new_page(viewport={"width": w, "height": h}, device_scale_factor=2)
        page.goto(URL)
        page.wait_for_load_state("networkidle")
        page.wait_for_timeout(900)
        out[tag] = page.evaluate(CHECK_JS)
        page.screenshot(path=str(QA / f"dobra-{tag}.png"), full_page=False)
        page.evaluate("() => { document.querySelectorAll('.rev').forEach(e=>e.classList.add('vis')); }")
        page.wait_for_timeout(400)
        page.screenshot(path=str(QA / f"full-{tag}.png"), full_page=True)
        page.close()
    b.close()
print(json.dumps(out, indent=1, ensure_ascii=False))
