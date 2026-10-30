#!/usr/bin/env python3
"""Fetch official South African trade sources, generate one sourced guide with OpenRouter,
and add it to the static article registry. Fail closed: no article is committed on QA failure."""
import json, os, re, sys, time
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen
from html.parser import HTMLParser

SITE="https://kaapstays.co.za"
TOPICS=[
("South African fruit export requirements: what international buyers should verify","South African fruit export requirements"),
("How to verify a South African agricultural exporter before placing an order","verify South African exporter"),
("South African dried fruit sourcing: specifications, packaging and buyer checks","South African dried fruit sourcing"),
("Rooibos tea sourcing from South Africa: a practical importer checklist","rooibos tea sourcing South Africa"),
("South African macadamia nuts: grades, documentation and sourcing questions","South African macadamia nuts"),
("Chrome ore sourcing in South Africa: due diligence for international buyers","chrome ore sourcing South Africa"),
("Manganese ore procurement from South Africa: questions buyers should ask","manganese ore South Africa")]
SOURCES=[
("South African Department of Agriculture","https://www.nda.gov.za/"),
("Perishable Products Export Control Board","https://www.ppecb.com/"),
("South African Revenue Service","https://www.sars.gov.za/customs-and-excise/"),
("International Trade Administration Commission of South Africa","https://www.itac.org.za/"),
("Department of Trade, Industry and Competition","https://www.thedtic.gov.za/"),
("South African Table Grape Industry","https://www.satgi.co.za/"),
("South African Macadamia Growers' Association","https://samac.org.za/")]
OUT=Path("src/lib/generated-articles.json")

class Extract(HTMLParser):
 def __init__(self): super().__init__(); self.parts=[]; self.skip=0
 def handle_starttag(self,t,a):
  if t in ("script","style","nav","footer"): self.skip+=1
 def handle_endtag(self,t):
  if t in ("script","style","nav","footer") and self.skip: self.skip-=1
 def handle_data(self,d):
  if not self.skip and d.strip(): self.parts.append(d.strip())

def fetch(name,url):
 try:
  req=Request(url,headers={"User-Agent":"KaapstaysEditorialResearch/1.0","Accept":"text/html"})
  with urlopen(req,timeout=20) as r:
   if r.status!=200:return None
   raw=r.read(1200000).decode("utf-8","replace")
  p=Extract();p.feed(raw); body=re.sub(r"\s+"," "," ".join(p.parts))
  return {"name":name,"url":url,"extract":body[:7000]} if len(body)>400 else None
 except Exception as e:
  print(f"Skipping unavailable source {url}: {e}",file=sys.stderr);return None

def generate(topic,keyword,research):
 prompt=f"""Create a genuinely useful, original Kaapstays buyer guide for international buyers sourcing from South Africa.
Topic: {topic}. Primary keyword: {keyword}.
Use ONLY supported facts from extracts. Do not invent suppliers, prices, stock, export volumes, certificates,
grades, legal requirements or current availability. Clearly distinguish practical advice from verified facts.
Where public sources are insufficient, tell buyers exactly what to verify with the competent authority.
No keyword stuffing or filler. Do not claim Kaapstays guarantees supply.
Return ONLY JSON:
{{"slug":"lowercase-hyphen-slug","title":"under 65 characters","description":"120 to 170 characters",
"eyebrow":"Buyer guide","intro":"90-130 words","sections":[{{"heading":"...","body":"at least 90 words","bullets":["..."]}}],
"faqs":[{{"question":"...","answer":"..."}],"sources":[{{"name":"exact supplied source name","url":"exact supplied URL"}}]}}
Need 5-7 sections, 3+ FAQs, and cite at least 3 URLs from extracts. Avoid claims not grounded in the source material.
Sources/extracts: {json.dumps(research,ensure_ascii=False)}"""
 payload={"model":os.getenv("OPENROUTER_MODEL","openrouter/free"),"temperature":0.3,"max_tokens":6500,
 "messages":[{"role":"user","content":prompt}]}
 req=Request("https://openrouter.ai/api/v1/chat/completions",data=json.dumps(payload).encode(),
 headers={"Authorization":"Bearer "+os.environ["OPENROUTER_API_KEY"],"Content-Type":"application/json",
 "HTTP-Referer":SITE,"X-Title":"Kaapstays Editorial Publisher"})
 for n in range(3):
  try:
   with urlopen(req,timeout=120) as r: result=json.loads(r.read())
   text=result["choices"][0]["message"]["content"].strip()
   text=re.sub(r"^\`\`\`(?:json)?\s*|\s*\`\`\`$","",text)
   return json.loads(text)
  except Exception:
   if n==2: raise
   time.sleep(3*(n+1))

def main():
 if not os.getenv("OPENROUTER_API_KEY"): raise RuntimeError("Missing OPENROUTER_API_KEY secret")
 articles=json.loads(OUT.read_text()) if OUT.exists() else []
 topic,keyword=TOPICS[len(articles)%len(TOPICS)]
 research=[v for name,url in SOURCES if (v:=fetch(name,url))]
 if len(research)<3: raise RuntimeError(f"Only {len(research)} trusted sources fetched; aborting")
 a=generate(topic,keyword,research)
 for field in ("slug","title","description","intro","sections","faqs","sources"):
  if not a.get(field): raise ValueError("Missing article field: "+field)
 if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*",a["slug"]): raise ValueError("Bad slug")
 if len(a["title"])>65 or not 120<=len(a["description"])<=170: raise ValueError("SEO metadata length check failed")
 if len(a["sections"])<5 or len(a["faqs"])<3: raise ValueError("Insufficient article depth")
 if any(len(s.get("body",""))<450 for s in a["sections"]): raise ValueError("A section is too short")
 fetched={s["url"] for s in research}
 if len(a["sources"])<3 or any(s.get("url") not in fetched for s in a["sources"]): raise ValueError("Sources must be fetched allow-listed URLs")
 if keyword.lower() not in (a["title"]+" "+a["intro"]).lower(): raise ValueError("Target keyword missing from title/intro")
 if any(x["slug"]==a["slug"] for x in articles): raise ValueError("Duplicate slug")
 a.update({"path":"/insights/"+a["slug"],"date":datetime.now(timezone.utc).date().isoformat(),"keyword":keyword})
 a["links"]=[{"href":"/services/product-sourcing","label":"South African product sourcing"},{"href":"/services/supplier-sourcing","label":"Supplier sourcing support"},{"href":"/products/fresh-apples","label":"South African products"}]
 articles.append(a);OUT.parent.mkdir(parents=True,exist_ok=True)
 OUT.write_text(json.dumps(articles,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
 print("Article added to static site registry:",a["path"])

if __name__=="__main__": main()
