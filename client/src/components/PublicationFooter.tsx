/* Harbour Ledger style: close each page like a publication colophon—quiet, useful, bilingual, and connected to the implementation desk. */

import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRight, Check, LoaderCircle, Mail } from "lucide-react";
import { Link } from "wouter";
import { getSiteLanguage, languageChangedEvent, subscribeToNewsletter, type SiteLanguage } from "@/lib/siteFeatures";

export function PublicationFooter() {
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState<SiteLanguage>(getSiteLanguage);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");

  useEffect(() => {
    const syncLanguage = () => setLanguage(getSiteLanguage());
    window.addEventListener(languageChangedEvent, syncLanguage);
    return () => window.removeEventListener(languageChangedEvent, syncLanguage);
  }, []);

  const isChinese = language === "zh-HK";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      const result = await subscribeToNewsletter(email);
      setStatus(result === "duplicate" ? "duplicate" : "success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="publication-footer">
      <div className="footer-topline"><span>{isChinese ? "MYSEOGEOEXPERTS / 香港" : "MYSEOGEOEXPERTS / HONG KONG"}</span><span>{isChinese ? "讀懂訊號，做好下一步。" : "READ THE SIGNAL. MAKE THE MOVE."}</span></div>
      <div className="footer-newsletter">
        <div><p className="footer-label">{isChinese ? "編輯部通訊 / 不定期" : "THE DESK LETTER / OCCASIONAL"}</p><h2>{isChinese ? "下一個 sprint 的實用訊號。" : "Useful signals for the next sprint."}</h2><p>{isChinese ? "給在香港建立線上業務的團隊：本地 SEO、GEO 和搜尋行為筆記。" : "Local SEO, GEO, and search behaviour notes for teams building online in Hong Kong."}</p></div>
        {status === "success" || status === "duplicate" ? <div className="newsletter-success"><span><Check size={16} /></span><div><strong>{status === "duplicate" ? (isChinese ? "你已經在名單上。" : "You’re already on the list.") : (isChinese ? "你已經加入名單。" : "You’re on the list.")}</strong><p>{isChinese ? "我們會保持訊號有用，而且不會頻繁打擾。" : "We’ll keep the signal useful and infrequent."}</p></div></div> : <form className="newsletter-form" onSubmit={handleSubmit}><label htmlFor="newsletter-email">{isChinese ? "電郵地址" : "Email address"}</label><div><Mail size={15} /><input id="newsletter-email" type="email" required value={email} onChange={(event) => { setEmail(event.target.value); setStatus("idle"); }} placeholder="you@company.hk" aria-describedby="newsletter-note newsletter-error" /><button type="submit" disabled={status === "loading"} aria-label={isChinese ? "訂閱編輯部通訊" : "Subscribe to the desk letter"}>{status === "loading" ? <LoaderCircle className="spin" size={16} /> : <ArrowUpRight size={17} />}</button></div><small id="newsletter-note">{isChinese ? "訂閱即代表你同意接收編輯部的本地 SEO/GEO 更新。" : "By subscribing, you agree to receive local SEO/GEO updates from the desk."}</small>{status === "error" && <small id="newsletter-error" className="newsletter-error">{isChinese ? "請輸入有效的電郵地址，然後再試一次。" : "Please enter a valid email address and try again."}</small>}</form>}
      </div>
      <div className="footer-grid">
        <div className="footer-brand-block"><Link href="/" className="brand brand--footer" aria-label="myseogeoexperts home"><span className="brand-mark" aria-hidden="true"><span /></span><span className="brand-name">myseogeo<span>experts</span></span></Link><p>{isChinese ? "給香港企業的搜尋、地圖和機器答案曝光指南。" : "A field guide for Hong Kong companies building visibility across search, maps, and machine answers."}</p></div>
        <div><p className="footer-label">{isChinese ? "索引" : "INDEX"}</p><a href="/#notes">{isChinese ? "Field notes" : "Field notes"}</a><a href="/#playbook">{isChinese ? "實作手冊" : "The playbook"}</a><a href="/#about">{isChinese ? "關於編輯部" : "About the desk"}</a></div>
        <div><p className="footer-label">{isChinese ? "實作" : "IMPLEMENTATION"}</p><a href="https://itehk.com.hk/" target="_blank" rel="noreferrer">itehk.com.hk <ArrowUpRight size={13} /></a><a href="mailto:desk@myseogeoexperts.hk">{isChinese ? "電郵編輯部" : "Email the desk"}</a></div>
        <div className="footer-note"><p className="footer-label">{isChinese ? "編輯按語" : "EDITOR'S NOTE"}</p><p>{isChinese ? "沒有虛構評價，沒有舶來策略。只有給在這裡做生意的團隊，真正有用的觀察。" : "No manufactured testimonials. No imported playbook. Just useful observations for teams doing business here."}</p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 myseogeoexperts</span><span>{isChinese ? "第 04 期 / 編輯部稿件" : "ISSUE 04 / DESK COPY"}</span></div>
    </footer>
  );
}
