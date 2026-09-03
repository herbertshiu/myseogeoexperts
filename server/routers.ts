/* Harbour Ledger style: AI is a concise editorial layer—an accountable reading aid, not a replacement for the full field note. */

import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { invokeLLM } from "./_core/llm";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  articles: router({
    summarize: publicProcedure
      .input(z.object({
        title: z.string().min(1).max(300),
        standfirst: z.string().min(1).max(1200),
        body: z.string().min(1).max(9000),
        language: z.enum(["en-HK", "zh-HK"]),
      }))
      .mutation(async ({ input }) => {
        const languageName = input.language === "zh-HK" ? "Traditional Chinese used in Hong Kong" : "English used in Hong Kong";
        const response = await invokeLLM({
          messages: [
            {
              role: "system",
              content: `You are the Harbour Ledger SEO desk. Create a concise reading aid for a field note. Return only structured JSON. Write in ${languageName}. The summary must be grounded only in the supplied article, avoid invented facts, avoid hype, and make the SEO/GEO implication clear.`,
            },
            {
              role: "user",
              content: `Article title: ${input.title}\nStandfirst: ${input.standfirst}\nArticle body: ${input.body}\n\nCreate a 2-sentence summary and exactly 3 practical SEO insights, each no longer than 18 words.`,
            },
          ],
          maxTokens: 360,
          responseFormat: {
            type: "json_schema",
            json_schema: {
              name: "article_seo_summary",
              strict: true,
              schema: {
                type: "object",
                properties: {
                  summary: { type: "string", description: "A concise two-sentence summary." },
                  insights: { type: "array", items: { type: "string" }, minItems: 3, maxItems: 3 },
                },
                required: ["summary", "insights"],
                additionalProperties: false,
              },
            },
          },
        });
        const content = response.choices[0]?.message?.content;
        const raw = typeof content === "string" ? content : content?.map(part => part.type === "text" ? part.text : "").join("") || "";
        const parsed = JSON.parse(raw) as { summary?: string; insights?: string[] };
        const fallbackInsights = input.language === "zh-HK"
          ? ["先理解地區意圖，再擴展關鍵字。", "讓語言行為與服務證明保持一致。", "把下一個轉化行動寫得清楚。"]
          : ["Read district intent before expanding the keyword set.", "Keep language behaviour aligned with service proof.", "Make the next conversion action explicit."];
        const insights = parsed.insights?.filter((insight) => insight.trim() && !insight.includes("Max Depth")) ?? [];
        return { summary: parsed.summary?.trim() || input.standfirst, insights: (insights.length >= 3 ? insights : fallbackInsights).slice(0, 3) };
      }),
  }),
});

export type AppRouter = typeof appRouter;
