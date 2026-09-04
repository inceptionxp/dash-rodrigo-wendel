import json, pathlib
from playwright.sync_api import sync_playwright

HTML = pathlib.Path(__file__).resolve().parent.parent / "index.html"
QA   = pathlib.Path(__file__).resolve().parent
URL  = HTML.as_uri()

CHECK = """
() => {
  const doc = document.documentElement;
  const over = [];
  document.querySelectorAll('*').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.right > doc.clientWidth + 1 || r.left < -1) {
      if (r.width > 0 && r.height > 0) {
        const cs = getComputedStyle(el);
        if (cs.position === 'fixed' || cs.position === 'absolute') return;
        over.push({tag: el.tagName, cls: (el.className||'').toString().slice(0,60)});
      }
    }
  });
  const small = [];
  document.querySelectorAll('a, button, input, select, textarea, summary').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) return;
    if (r.height < 44) small.push({cls:(el.className||'').toString().slice(0,40), h: Math.round(r.height), txt:(el.textContent||'').trim().slice(0,28)});
  });
  const imgs = [...document.images].filter(i=>i.src.slice(0,5)!=='data:').map(i => {
    const r = i.getBoundingClientRect(); const p = i.parentElement.getBoundingClientRect();
    return {src: i.currentSrc.split('/').pop(), ok: i.complete && i.naturalWidth>0,
            box: Math.round(r.width)+'x'+Math.round(r.height),
            estoura: r.width > p.width + 1 || r.height > p.height + 1, lazy: i.getAttribute('loading')};
  });
  const chapas = [...document.querySelectorAll('.chapa')].map(c => {
    const r = c.getBoundingClientRect(); const par = c.parentElement.getBoundingClientRect();
    return {cls:c.className, w:Math.round(r.width), h:Math.round(r.height), estoura: r.width > par.width + 1};
  });
  return {docScroll:{sw:doc.scrollWidth, cw:doc.clientWidth}, overflowEls:over.slice(0,10),
          smallTargets:small.slice(0,10), imgs, chapas};
}
"""

out = {}
with sync_playwright() as p:
    b = p.chromium.launch()
    for w, h, tag in [(1440, 900, "1440"), (390, 844, "390")]:
        page = b.new_page(viewport={"width": w, "height": h}, device_scale_factor=2)
        page.goto(URL); page.wait_for_load_state("networkidle")
        page.screenshot(path=str(QA / f"dobra-{tag}.png"), full_page=False)   # 1a dobra, estado real
        page.evaluate("""() => {
          document.querySelectorAll('img[loading=lazy]').forEach(i => { i.loading = 'eager'; i.src = i.src; });
          document.querySelectorAll('.rev').forEach(e => e.classList.add('vis'));
        }""")
        page.wait_for_load_state("networkidle")
        for _ in range(40):
            if page.evaluate("() => [...document.images].every(i => i.complete && i.naturalWidth > 0)"): break
            page.wait_for_timeout(500)
        else:
            raise SystemExit("imagens nao carregaram")
        page.wait_for_timeout(800)
        out[tag] = page.evaluate(CHECK)
        # captura por viewport (element screenshot com mix-blend-mode as vezes sai sem a foto)
        for sel, nome, desloca in [("#mecanismo","mecanismo",'.par-foto'), ("#percurso","percurso",'#percurso .curso'), ("#professor","professor",'#professor .chapa--retrato')]:
            page.evaluate(f"() => document.querySelector('{sel}').scrollIntoView()")
            page.wait_for_timeout(500)
            page.evaluate(f"() => window.scrollBy(0, document.querySelector('{desloca}').getBoundingClientRect().top - 110)")
            page.wait_for_timeout(900)
            page.screenshot(path=str(QA / f"foto-{nome}-{tag}.png"))
        page.evaluate("() => window.scrollTo(0,0)"); page.wait_for_timeout(300)
        page.screenshot(path=str(QA / f"full-{tag}.png"), full_page=True)
        page.close()
    b.close()
pathlib.Path(QA / "resultado-fotos.json").write_text(json.dumps(out, indent=1, ensure_ascii=False))
print(json.dumps(out, indent=1, ensure_ascii=False))
