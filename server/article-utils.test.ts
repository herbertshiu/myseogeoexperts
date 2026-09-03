import { describe, expect, it } from "vitest";
import { articles } from "../client/src/lib/articles";
import { getRelatedArticles } from "../client/src/lib/articleUtils";

describe("getRelatedArticles", () => {
  it("prioritizes same-category notes and excludes the current article", () => {
    const current = articles[0];
    const related = getRelatedArticles(current, articles, 3);
    expect(related).toHaveLength(3);
    expect(related.some((article) => article.slug === current.slug)).toBe(false);
    const firstDifferentCategory = related.findIndex((article) => article.category !== current.category);
    const sameCategoryCount = related.filter((article) => article.category === current.category).length;
    expect(firstDifferentCategory === -1 || firstDifferentCategory >= sameCategoryCount).toBe(true);
  });

  it("respects the requested recommendation limit", () => {
    expect(getRelatedArticles(articles[1], articles, 2)).toHaveLength(2);
  });
});
