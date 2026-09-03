/* Harbour Ledger style: treat each note as a considered bilingual briefing with an AI reading aid and a deliberate next route through the index. */

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, Bookmark, Clock3, MapPin, RefreshCw, Sparkles } from "lucide-react";
import { Link, useRoute } from "wouter";
import { articles, findArticle } from "@/lib/articles";
import { localizeArticle, zhHkUi } from "@/lib/articleTranslations";
import { getRelatedArticles } from "@/lib/articleUtils";
import { getSiteLanguage, languageChangedEvent, setSiteLanguage, type SiteLanguage } from "@/lib/siteFeatures";
import { trpc } from "@/lib/trpc";

function RelatedCard({ article, language }: { article: (typeof articles)[number]; language: SiteLanguage }) {
  const localized = localizeArticle(article, language);
  return <article className="related-card"><Link href={`/notes/${article.slug}`} className="related-card__image"><img src={article.image} alt="" /><span>{article.issue}</span></Link><div><p>{localized.category} / {article.readTime}</p><Link href={`/notes/${article.slug}`} className="related-card__title">{localized.title}</Link><Link href={`/notes/${article.slug}`} className="read-link">{language === "zh-HK" ? "閱讀筆記" : "Read the note"} <ArrowUpRight size={14} /></Link></div></article>;
}

export default function ArticlePage() {
  const [, params] = useRoute("/notes/:slug");
  const article = params?.slug ? findArticle(params.slug) : undefined;
  const [language, setLanguage] = useState<SiteLanguage>(getSiteLanguage);
  const summaryMutation = trpc.articles.summarize.useMutation();

  useEffect(() => {
    const syncLanguage = () => setLanguage(getSiteLanguage());
    window.addEventListener(languageChangedEvent, syncLanguage);
    return () => window.removeEventListener(languageChangedEvent, syncLanguage);
  }, []);

  useEffect(() => {
    if (!article) return;
    const url = new URL(window.location.href);
    const englishUrl = new URL(url.pathname, url.origin).toString();
    const chineseUrl = `${englishUrl}?lang=zh-HK`;
    const canonicalUrl = language === "zh-HK" ? chineseUrl : englishUrl;
    document.documentElement.lang = language;
    document.title = `${language === "zh-HK" ? localizeArticle(article, language).title : article.title} — myseogeoexperts`;
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = canonicalUrl;
    const alternateLinks = [["en-HK", englishUrl], ["zh-HK", chineseUrl], ["x-default", englishUrl]] as const;
    const created = alternateLinks.map(([hreflang, href]) => { const link = document.createElement("link"); link.rel = "alternate"; link.hreflang = hreflang; link.href = href; document.head.appendChild(link); return link; });
    return () => { created.forEach((link) => link.remove()); canonical?.remove(); document.documentElement.lang = "en-HK"; };
  }, [article, language]);

  useEffect(() => {
    if (!article) return;
    const content = localizeArticle(article, language);
    summaryMutation.mutate({ title: content.title, standfirst: content.standfirst, body: content.sections.map((section) => `${section.heading}: ${section.body}`).join("\n\n"), language });
  }, [article?.slug, language]);

  if (!article) return <div className="article-missing"><p className="eyebrow">404 / NOTE NOT FOUND</p><h1>The desk could not locate that field note.</h1><Link href="/" className="button button--dark">Return to the index <ArrowLeft size={16} /></Link></div>;

  const content = localizeArticle(article, language);
  const isChinese = language === "zh-HK";
  const relatedArticles = useMemo(() => getRelatedArticles(article!, articles, 3), [article?.slug]);
  const aiSummary = summaryMutation.data;
  const summaryLabel = isChinese ? "AI 快讀 / SEO 訊號" : "AI QUICK READ / SEO SIGNAL";
  const summaryLoading = isChinese ? "正在整理這篇筆記的 SEO 訊號……" : "Distilling the SEO signal from this note…";
  const summaryError = isChinese ? "AI 快讀暫時未能載入，先閱讀編輯部的完整筆記。" : "The AI quick read is unavailable right now. The full desk note is still here.";

  function changeLanguage(nextLanguage: SiteLanguage) { setLanguage(nextLanguage); setSiteLanguage(nextLanguage); }
  function retrySummary() { summaryMutation.reset(); const retryContent = localizeArticle(article!, language); summaryMutation.mutate({ title: retryContent.title, standfirst: retryContent.standfirst, body: retryContent.sections.map((section) => `${section.heading}: ${section.body}`).join("\n\n"), language }); }

  return <div className="article-page">
    <div className="article-topbar"><Link href="/" className="back-link"><ArrowLeft size={15} /> {isChinese ? zhHkUi.back : "Back to the index"}</Link><span>{article.issue} / {content.category}</span><div className="language-toggle" role="group" aria-label="Article language"><button type="button" className={!isChinese ? "is-active" : ""} aria-pressed={!isChinese} onClick={() => changeLanguage("en-HK")}>EN</button><span>/</span><button type="button" className={isChinese ? "is-active" : ""} aria-pressed={isChinese} onClick={() => changeLanguage("zh-HK")}>繁中</button></div><span className="article-topbar__right"><Bookmark size={14} /> {isChinese ? zhHkUi.deskCopy : "Desk copy"}</span></div>
    <section className="article-hero"><div className="article-hero__rail"><span>{article.issue}</span><div className="rail-rule" /><span className="article-hero__coordinates">HK / 04<br />FIELD COPY</span></div><div className="article-hero__content"><div className="article-hero__meta"><span className="signal-tag signal-tag--vermilion">{content.category}</span><span>{article.date}</span><span>{article.readTime}</span></div><h1>{content.title}</h1><p>{content.standfirst}</p><div className="article-author"><span className="author-stamp">HL</span><span>{isChinese ? zhHkUi.writtenBy : "Written by"} <b>{article.author}</b><br />{isChinese ? zhHkUi.hongKongDesk : "Hong Kong search intelligence desk"}</span></div></div><div className="article-hero__image"><img src={article.image} alt="" /><span>FIG. {article.issue.replace("FIELD NOTE ", "")} / A LOCAL SIGNAL IN CONTEXT</span></div></section>
    <div className="article-body-layout"><aside className="article-sidebar"><p className="eyebrow">{isChinese ? zhHkUi.inThisNote : "IN THIS NOTE"}</p><ol>{content.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`}><span>0{index + 1}</span>{section.heading}</a></li>)}</ol><div className="sidebar-local"><MapPin size={15} /><span>{isChinese ? zhHkUi.localContext : "Hong Kong context"}<br /><b>{isChinese ? zhHkUi.alwaysMatters : "Always matters."}</b></span></div></aside>
      <article className="article-body">
        <section className="article-ai-summary" aria-live="polite"><div className="ai-summary__header"><span className="ai-summary__icon"><Sparkles size={16} /></span><div><p className="eyebrow">{summaryLabel}</p><span>{isChinese ? "由編輯部內置模型整理" : "Prepared by the desk's built-in model"}</span></div><span className="ai-summary__badge">AI</span></div>{summaryMutation.isPending ? <div className="ai-summary__loading"><span className="summary-pulse" />{summaryLoading}</div> : summaryMutation.isError ? <div className="ai-summary__error"><p>{summaryError}</p><button type="button" onClick={retrySummary}><RefreshCw size={14} /> {isChinese ? "再試一次" : "Try again"}</button></div> : aiSummary ? <div className="ai-summary__content"><p>{aiSummary.summary}</p><div className="ai-insights"><span>{isChinese ? "三個可行訊號" : "THREE ACTIONABLE SIGNALS"}</span>{aiSummary.insights.map((insight) => <div key={insight}><b>+</b>{insight}</div>)}</div></div> : null}</section>
        <p className="article-lede">{content.standfirst}</p>{content.sections.map((section, index) => <section className="article-section" key={section.heading} id={`section-${index + 1}`}><div className="article-section__index">0{index + 1}</div><div><h2>{section.heading}</h2><p>{section.body}</p></div></section>)}
        <div className="recommendation-box"><div><p className="eyebrow">{isChinese ? zhHkUi.recommendation : "DESK RECOMMENDATION"}</p><h2>{isChinese ? zhHkUi.nextSprint : "Do this in the next sprint."}</h2></div><ul>{content.recommendations.map((recommendation) => <li key={recommendation}><span>+</span>{recommendation}</li>)}</ul></div>
        <div className="article-source-note"><Clock3 size={15} /><p><b>{isChinese ? zhHkUi.whyExists : "Why this note exists:"}</b> {isChinese ? "SEO 和 GEO 建議，只有放在真實市場的限制中才有用。當平台、語言行為和網站狀況改變時，請重新檢視這篇筆記。" : "SEO and GEO advice gets useful when it is grounded in the constraints of a real market. Revisit this note as platforms, language behaviour, and site conditions change."}</p></div>
        <div className="related-section"><div className="related-heading"><div><p className="eyebrow">{isChinese ? "繼續閱讀" : "KEEP READING"}</p><h2>{isChinese ? "相近的搜尋訊號" : "Related field notes"}</h2></div><span>03 / {String(relatedArticles.length).padStart(2, "0")}</span></div><div className="related-grid">{relatedArticles.map((related) => <RelatedCard key={related.slug} article={related} language={language} />)}</div></div>
        <div className="article-cta"><div><p className="eyebrow">{isChinese ? zhHkUi.ifThisIsYourProblem : "IF THIS IS YOUR PROBLEM"}</p><h2>{isChinese ? zhHkUi.bringPage : "Bring the page to the desk."}</h2><p>{isChinese ? zhHkUi.implementation : "The implementation team at itehk.com.hk can help turn the recommendation into a durable search system."}</p></div><a href="https://itehk.com.hk/" target="_blank" rel="noreferrer" className="button button--paper">{isChinese ? zhHkUi.visit : "Visit itehk.com.hk"} <ArrowUpRight size={16} /></a></div>
      </article>
    </div>
  </div>;
}
