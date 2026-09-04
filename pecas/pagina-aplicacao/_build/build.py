import re, pathlib
base = pathlib.Path(".")
kit = pathlib.Path("../brandbook-academia-dtm/kit-frameworks/svg")
tpl = (base/"_build/v3.tpl.html").read_text(encoding="utf-8")

# logo em base64 recuperado da v2
v2 = (base/"_v2-2026-09-03.html").read_text(encoding="utf-8")
m = re.search(r'src="(data:image/png;base64,[^"]+)"', v2)
assert m, "logo nao encontrado"
tpl = tpl.replace("{{LOGO}}", m.group(1))

fw = {
 "F9":"F9-dado-de-mercado.svg",
 "F1":"F1-guarda-chuva-dtm.svg",
 "F5":"F5-martelo-unico-e-arsenal.svg",
 "F3":"F3-escada-terapeutica.svg",
 "F4":"F4-percurso-da-formacao.svg",
 "F8":"F8-carreira-em-numeros.svg",
}
for k,f in fw.items():
    svg = (kit/f).read_text(encoding="utf-8").strip()
    assert svg.startswith("<svg"), f
    tpl = tpl.replace("{{%s}}" % k, svg)

# contador de vagas · octogonos, sem texto dentro (linguagem do kit)
def octo(x,y,s,**kw):
    c = s*0.293
    pts = [(x+c,y),(x+s-c,y),(x+s,y+c),(x+s,y+s-c),(x+s-c,y+s),(x+c,y+s),(x,y+s-c),(x,y+c)]
    a = " ".join('%s="%s"' % (k.replace("_","-"),v) for k,v in kw.items())
    return '<polygon points="%s" %s/>' % (" ".join("%.2f,%.2f"%p for p in pts), a)

s, gap, x0, y0 = 34, 8, 4, 8
parts = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 82" width="100%" role="img" '
         'aria-label="Contador de vagas: oito octogonos cheios e quatro vazios, o teto da turma" '
         'fill="none" style="color:var(--fw-cor,#F4F3EC);display:block">']
for i in range(12):
    x = x0 + i*(s+gap)
    if i < 8:
        parts.append(octo(x,y0,s, fill="currentColor", fill_opacity="0.92"))
    else:
        parts.append(octo(x,y0,s, fill="none", stroke="currentColor", stroke_width="2", stroke_opacity="0.42"))
larg = 8*s + 7*gap
parts.append('<rect x="%d" y="%d" width="%d" height="6" fill="#CDF23F"/>' % (x0, y0+s+10, larg))
parts.append('</svg>')
tpl = tpl.replace("{{CONTADOR}}", "".join(parts))

assert "{{" not in tpl, re.findall(r"\{\{\w+\}\}", tpl)
(base/"index.html").write_text(tpl, encoding="utf-8")
print("ok", len(tpl), "bytes")
print("R$ ocorrencias:", tpl.count("R$"))
