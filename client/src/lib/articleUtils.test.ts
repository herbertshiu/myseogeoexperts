import { describe, expect, it } from "vitest";
import { articles } from "./articles";
import { getRelatedArticles } from "./articleUtils";

describe("getRelatedArticles", () => {
  it("prioritizes notes in the same category and excludes the current article", () => {
    const current = articles[0];
    const related = getRelatedArticles(current, articles, 3);
    expect(related).toHaveLength(3);
    expect(related.some((article) => article.slug === current.slug)).toBe(false);
    expect(related[0]?.category).toBe(current.category);
  });

  it("respects the requested recommendation limit", () => {
    expect(getRelatedArticles(articles[1], articles, 2)).toHaveLength(2);
  });
});
