import json, sys, pathlib
from playwright.sync_api import sync_playwright
url = "file://" + str(pathlib.Path("index.html").resolve())
JS = """() => {
  const st = document.createElement('style');
  st.textContent = '*{transition:none!important;animation:none!important}';
  document.head.appendChild(st);
  document.querySelectorAll('.rev').forEach(e=>e.classList.add('vis'));
  document.body.getBoundingClientRect();
  const OBST = Array.from(document.querySelectorAll('hr, .junta, svg, img, [class*=fio]'));
  const TXT  = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,p,li,summary,figcaption,span.rotulo,label'));
  const vis = e => { const r=e.getBoundingClientRect(); const cs=getComputedStyle(e);
      if (!(r.width>0 && r.height>0)) return false;
      if (cs.visibility==='hidden' || cs.display==='none' || parseFloat(cs.opacity)<=0.05) return false;
      const d = e.closest('details'); if (d && !d.open && !d.querySelector('summary').contains(e)) return false;
      if (e.checkVisibility && !e.checkVisibility({checkOpacity:true, checkVisibilityCSS:true, contentVisibilityAuto:true})) return false;
      return true; };
  const rect = e => { const r=e.getBoundingClientRect();
      return {l:r.left+scrollX, t:r.top+scrollY, r:r.right+scrollX, b:r.bottom+scrollY}; };
  const inter = (a,b) => !(a.r<=b.l+0.5 || b.r<=a.l+0.5 || a.b<=b.t+0.5 || b.b<=a.t+0.5);
  const col = [];
  const txts = TXT.filter(vis).filter(e => (e.textContent||'').trim().length>0);
  const obs  = OBST.filter(vis);
  for (const t of txts) {
    const rt = rect(t);
    for (const o of obs) {
      if (t.contains(o) || o.contains(t)) continue;
      const ro = rect(o);
      if (inter(rt,ro)) col.push({txt:(t.textContent||'').trim().slice(0,48), tag:t.tagName,
        obs:o.tagName+'.'+(o.className.baseVal!==undefined?o.className.baseVal:o.className)});
    }
  }
  // menor corpo de texto e menor line-height entre elementos de texto com conteudo direto
  let minFs=999, minFsEl='', minLh=999, minLhEl='', minCorpo=999, minCorpoEl='', minLhP=999, minLhPEl='';
  for (const t of txts) {
    const direto = Array.from(t.childNodes).some(n=>n.nodeType===3 && n.textContent.trim().length>1);
    if (!direto) continue;
    const cs = getComputedStyle(t);
    const fs = parseFloat(cs.fontSize);
    if (fs < minFs) { minFs=fs; minFsEl=t.tagName+'.'+t.className+' :: '+(t.textContent||'').trim().slice(0,40); }
    if (t.tagName==='P' || t.tagName==='LI') {
      const lh = parseFloat(cs.lineHeight)/fs;
      if (lh < minLh) { minLh=lh; minLhEl=t.tagName+'.'+t.className+' :: '+(t.textContent||'').trim().slice(0,40); }
      const cls = (t.className||'')+'';
      const corrido = !/mono|rotulo|num-|fw-legenda|foto-legenda|ficha-linha|fonte|rod-legal|crit-k/.test(cls)
                      && cs.fontFamily.indexOf('Space Mono') < 0;
      if (corrido) {
        if (fs < minCorpo) { minCorpo=fs; minCorpoEl=t.tagName+'.'+cls+' :: '+(t.textContent||'').trim().slice(0,40); }
        if (lh < minLhP) { minLhP=lh; minLhPEl=t.tagName+'.'+cls+' :: '+(t.textContent||'').trim().slice(0,40); }
      }
    }
  }
  return {altura: document.documentElement.scrollHeight,
          overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
          colisoes: col, minFs, minFsEl, minLh: Math.round(minLh*100)/100, minLhEl,
          minCorpo, minCorpoEl, minLhP: Math.round(minLhP*100)/100, minLhPEl,
          dobras: Array.from(document.querySelectorAll('section.dobra')).map(s=>({id:s.id, h:Math.round(s.getBoundingClientRect().height)}))};
}"""
out = {}
with sync_playwright() as p:
    b = p.chromium.launch()
    for tag,w,h in (("1440",1440,900),("390",390,844)):
        pg = b.new_page(viewport={"width":w,"height":h}, device_scale_factor=1)
        pg.goto(url, wait_until="domcontentloaded", timeout=20000); pg.wait_for_function("() => document.fonts.status==='loaded'", timeout=15000); pg.wait_for_timeout(600)
        out[tag] = pg.evaluate(JS)
        pg.close()
    b.close()
for tag,d in out.items():
    print("==",tag,"altura",d["altura"],"overflow",d["overflow"],"colisoes",len(d["colisoes"]))
    print("   menor corpo:",d["minFs"],"px ->",d["minFsEl"])
    print("   menor line-height:",d["minLh"],"->",d["minLhEl"])
    print("   menor corpo de TEXTO CORRIDO:",d["minCorpo"],"px ->",d["minCorpoEl"])
    print("   menor line-height de TEXTO CORRIDO:",d["minLhP"],"->",d["minLhPEl"])
    print("   dobras:", ", ".join("%s=%s"%(x["id"],x["h"]) for x in d["dobras"]))
    for c in d["colisoes"][:14]: print("   COL:",c)
