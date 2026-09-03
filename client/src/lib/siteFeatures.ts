/* Harbour Ledger style: language and lead capture are treated as quiet utilities that support the publication, never distract from reading. */

export type SiteLanguage = "en-HK" | "zh-HK";
export const languageChangedEvent = "myseogeo-language-changed";

export function getSiteLanguage(): SiteLanguage {
  if (typeof window === "undefined") return "en-HK";
  return new URLSearchParams(window.location.search).get("lang") === "zh-HK" ? "zh-HK" : "en-HK";
}

export function setSiteLanguage(language: SiteLanguage) {
  const url = new URL(window.location.href);
  if (language === "zh-HK") url.searchParams.set("lang", "zh-HK");
  else url.searchParams.delete("lang");
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  window.dispatchEvent(new CustomEvent(languageChangedEvent, { detail: language }));
}

export type NewsletterResult = "subscribed" | "duplicate";

export async function subscribeToNewsletter(email: string): Promise<NewsletterResult> {
  const normalizedEmail = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) throw new Error("Please enter a valid email address.");
  await new Promise((resolve) => window.setTimeout(resolve, 650));
  const stored = JSON.parse(window.localStorage.getItem("myseogeoexperts-mock-leads") || "[]") as string[];
  if (stored.includes(normalizedEmail)) return "duplicate";
  window.localStorage.setItem("myseogeoexperts-mock-leads", JSON.stringify([...stored, normalizedEmail]));
  return "subscribed";
}
