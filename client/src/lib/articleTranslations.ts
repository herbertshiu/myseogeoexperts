/* Harbour Ledger style: Traditional Chinese reads as a first-class editorial voice, not a literal translation layer. */

import type { Article } from "./articles";

type Translation = {
  category: string;
  title: string;
  excerpt: string;
  standfirst: string;
  sections: Array<{ heading: string; body: string }>;
  recommendations: string[];
};

export const zhHkUi = {
  back: "返回索引",
  deskCopy: "編輯部稿件",
  writtenBy: "撰文",
  hongKongDesk: "香港搜尋情報編輯部",
  inThisNote: "本篇重點",
  localContext: "香港語境",
  alwaysMatters: "始終重要。",
  recommendation: "編輯部建議",
  nextSprint: "下一個 sprint 就做這些。",
  whyExists: "為什麼寫這篇：",
  ifThisIsYourProblem: "如果這正是你的問題",
  bringPage: "把你的頁面帶到編輯部。",
  implementation: "itehk.com.hk 的實作團隊可以把這個建議落地，建立更持久的搜尋系統。",
  visit: "瀏覽 itehk.com.hk",
};

export const zhHkArticles: Record<string, Translation> = {
  "local-search-is-not-a-small-version-of-the-internet": {
    category: "本地搜尋",
    title: "本地搜尋，不是縮小版的互聯網",
    excerpt: "為什麼地區、語言、地圖結果和服務範圍，會改變香港企業的搜尋工作。",
    standfirst: "香港客戶可以在海外 SEO 策略載入之前，從廣東話查詢跳到地圖結果，再跳到 WhatsApp 對話。本地曝光是一個連接起來的系統，不是一串目錄登記。",
    sections: [
      { heading: "地區本身就是搜尋意圖", body: "香港的搜尋意圖，往往在使用者開啟地圖之前已經帶有地理位置。「銅鑼灣 物理治療」、「觀塘 裝修」和「將軍澳 補習」不是單純的關鍵字變體，而是對距離、熟悉感和實際交通範圍的要求。你的頁面需要寫清楚真正服務的地點，以及不同地區有什麼不同。" },
      { heading: "語言是行為訊號", body: "繁體中文和英文應該是兩個平行的入口，而不是機械翻譯的練習。搜尋用語、證明方式和行動呼籲可以不同，因為問題本身就不同。能夠承認兩種搜尋行為的頁面，更容易取得信任，也更容易被系統正確分類。" },
      { heading: "建議：把本地證明連在一起", body: "在地區頁面、Google Business Profile、服務詳情、聯絡方式和第一方證據之間，建立一致的訊號鏈。讓下一步清楚可見：路線、電話、預約，或 WhatsApp 對話。本地 SEO 最強的時候，發現與轉化是同一條路。" },
    ],
    recommendations: ["每個真實服務地區建立一個有用頁面，而不是每個關鍵字變體一頁。", "確保地址、營業時間、電話和服務語言在各平台一致。", "加入有助訪客判斷地點是否真正方便的社區語境。"],
  },
  "the-ai-answer-box-needs-more-than-keywords": {
    category: "AI 曝光",
    title: "AI 答案框需要的不只是關鍵字",
    excerpt: "當點擊發生在答案之後，什麼會令香港企業值得被引用。",
    standfirst: "生成式搜尋把研究的第一步壓縮了。如果答案引擎要把你的企業當作來源，頁面必須在試圖說服讀者之前，先清楚呈現專業、邊界和證據。",
    sections: [
      { heading: "先說清楚你協助的決定", body: "最強的內容不會只瞄準「數碼營銷」這類廣泛題目，而是幫助讀者在一組實際選項中作決定：雙語服務頁是否需要分開規劃意圖、本地零售商應如何組織分類頁，或企業在宣稱專業前需要證明什麼。" },
      { heading: "讓證據容易被引用", body: "使用直接定義、清晰比較、原創觀察和明確更新日期。不要把建議藏在一堵填充文字後面。一個有用的頁面，既要給人一個可以採取行動的答案，也要給 AI 一段不必猜測就能代表的內容。" },
      { heading: "建議：發表你的立場", body: "建立一個小而有判斷力的 field note 索引，而不是大量互相替代的文章。把相關內容連在一起，說明建議在哪些條件下會改變，並連結到背後的實作工作。清晰往往比數量更接近被引用。" },
    ],
    recommendations: ["在首 100 字內先回答問題，再在後文展示推理。", "使用可以獨立成立的定義、表格和例子。", "把建議連到讓它成為現實的服務或技術實作。"],
  },
  "technical-seo-when-the-site-is-busy": {
    category: "技術 SEO",
    title: "網站很忙的時候，技術 SEO 要先做什麼",
    excerpt: "當團隊無法暫停產品目錄、活動日程或下一個版本時，一套實際的分流順序。",
    standfirst: "大部分技術 SEO 問題並不是因為缺少工具，而是因為團隊先修復最吵的警報。更好的順序，是先保護爬行路徑、可索引的意圖，以及已經獲得注意力的頁面。",
    sections: [
      { heading: "從真正帶來生意的路徑開始", body: "先列出解釋、比較和轉化的頁面。然後檢查搜尋引擎能否透過內部連結到達它們、canonical 訊號是否一致，以及帶有活動參數時頁面是否仍然成立。技術工作有價值，是因為它保護一條生意路徑，而不是產生一份更漂亮的審計報告。" },
      { heading: "把健康問題和機會分開", body: "缺少一個 alt attribute，和一個被封鎖的分類頁，風險並不相同。保持一個簡短的嚴重程度階梯：無法到達、無法索引、造成誤導、速度慢，最後才是單純不整齊。這讓香港小團隊把有限的發佈時段用在保護需求的改動上。" },
      { heading: "建議：保留變更紀錄", body: "記錄改了什麼、為什麼改、影響哪些 URL，以及如何判斷它是否有效。一份簡單的變更紀錄，可以在開發者、營銷人員和代理商之間建立共同記憶，也令日後診斷更快。" },
    ],
    recommendations: ["先保護高意圖路徑，再清理低影響警告。", "把 canonical、redirect、內部連結和可索引性當作一個系統檢查。", "為發佈、遷移和模板更改留下日期紀錄。"],
  },
  "content-that-gets-referenced": {
    category: "內容系統",
    title: "會被引用的內容，應該如何寫",
    excerpt: "一套把專業知識變成可連結、可引用、值得重訪頁面的內容系統。",
    standfirst: "內容日曆不等於立場。真正有用的資產，是背後那個可以長久存在的解釋：一個框架、一個本地觀察、一條決策規則，或一份會隨時間更容易被引用的證據。",
    sections: [
      { heading: "從一個張力開始", body: "最好的 brief 往往從一個分歧或取捨開始：雙語頁面與重複意圖、快速改版與穩定 URL、廣泛受眾與可信立場。張力為文章提供任務，也給讀者一個轉發它的理由。" },
      { heading: "建立一個可以重用的想法", body: "一篇強而有力的文章，可以被簡化成模型、清單或比較，而不失去細節。這種結構同時支援搜尋摘要、AI 擷取、內部連結，以及把有用解釋轉發給同事的人類行為。" },
      { heading: "建議：從實際工作發表", body: "把 sales call、客服訊息、發佈和審計中反覆出現的問題，轉化成編輯內容。第一方模式比一般建議更難複製，也給你的網域一個更充分的存在理由。" },
    ],
    recommendations: ["每篇文章只幫讀者作出一個決定。", "把每個框架寫成可掃讀的摘要，再提供深入解釋。", "保留來源紀錄，讓日後更新改善原文，而不是不斷複製新頁面。"],
  },
};

export function localizeArticle(article: Article, language: "en-HK" | "zh-HK") {
  if (language === "en-HK") return article;
  const translation = zhHkArticles[article.slug];
  if (!translation) return article;
  return { ...article, ...translation };
}
