/* Harbour Ledger style: related reading should follow editorial proximity, not random recirculation. */

import type { Article } from "./articles";

export function getRelatedArticles(current: Article, allArticles: Article[], limit = 3) {
  return allArticles
    .filter((article) => article.slug !== current.slug)
    .map((article, index) => ({ article, score: article.category === current.category ? 2 : 0, index }))
    .sort((left, right) => right.score - left.score || left.index - right.index)
    .slice(0, limit)
    .map(({ article }) => article);
}
