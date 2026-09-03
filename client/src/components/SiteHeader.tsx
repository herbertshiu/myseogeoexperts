/* Harbour Ledger style: publication masthead, ink navy structure, vermilion signal accents, and page-turn interactions in both supported languages. */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { getSiteLanguage, languageChangedEvent, setSiteLanguage, type SiteLanguage } from "@/lib/siteFeatures";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<SiteLanguage>(getSiteLanguage);
  const isChinese = language === "zh-HK";

  useEffect(() => {
    const syncLanguage = (event: Event) => setLanguage((event as CustomEvent<SiteLanguage>).detail || getSiteLanguage());
    window.addEventListener(languageChangedEvent, syncLanguage);
    return () => window.removeEventListener(languageChangedEvent, syncLanguage);
  }, []);

  const navItems = isChinese ? [
    { label: "Field notes", href: "/#notes" },
    { label: "實作手冊", href: "/#playbook" },
    { label: "關於編輯部", href: "/#about" },
  ] : [
    { label: "Field notes", href: "/#notes" },
    { label: "Playbook", href: "/#playbook" },
    { label: "About the desk", href: "/#about" },
  ];

  return (
    <>
      <div className="issue-bar"><div className="issue-bar__inner"><span><b>{isChinese ? "香港" : "HONG KONG"}</b> / {isChinese ? "搜尋情報" : "SEARCH INTELLIGENCE"} / VOL. 04</span><span className="issue-bar__right"><span className="status-dot" /> {isChinese ? "更新於 2026 年 9 月 18 日" : "Updated 18 September 2026"}</span></div></div>
      <header className="site-header"><div className="masthead"><Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="myseogeoexperts home"><span className="brand-mark" aria-hidden="true"><span /></span><span className="brand-name">myseogeo<span>experts</span></span></Link><button className="mobile-menu" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen((value) => !value)}><span className="sr-only">Toggle navigation</span>{open ? <X size={21} /> : <Menu size={21} />}</button><nav id="site-navigation" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<div className="header-language" role="group" aria-label="Site language"><button type="button" className={!isChinese ? "is-active" : ""} aria-pressed={!isChinese} onClick={() => setSiteLanguage("en-HK")}>EN</button><span>/</span><button type="button" className={isChinese ? "is-active" : ""} aria-pressed={isChinese} onClick={() => setSiteLanguage("zh-HK")}>繁中</button></div><a className="nav-cta" href="https://itehk.com.hk/" target="_blank" rel="noreferrer">{isChinese ? "與編輯部合作" : "Work with the desk"} <ArrowUpRight size={15} strokeWidth={2.2} /></a></nav></div></header>
    </>
  );
}
