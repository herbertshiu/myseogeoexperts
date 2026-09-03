/* Harbour Ledger style: keep content structured like a publication index, with precise metadata, useful local context, and no invented social proof. */

export type Article = {
  slug: string;
  issue: string;
  category: string;
  title: string;
  excerpt: string;
  standfirst: string;
  readTime: string;
  date: string;
  image: string;
  accent: string;
  author: string;
  sections: Array<{ heading: string; body: string }>;
  recommendations: string[];
};

export const articles: Article[] = [
  {
    slug: "local-search-is-not-a-small-version-of-the-internet",
    issue: "FIELD NOTE 01",
    category: "Local Search",
    title: "Local search is not a small version of the internet",
    excerpt: "Why districts, languages, map packs, and service-area signals change the job for Hong Kong businesses.",
    standfirst:
      "A Hong Kong customer can move from a Cantonese query to a map result to a WhatsApp conversation in the time it takes an overseas playbook to load. Local visibility is a connected system, not a list of directory submissions.",
    readTime: "8 min read",
    date: "18 Sep 2026",
    image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=1400&q=85",
    accent: "vermilion",
    author: "The Desk",
    sections: [
      {
        heading: "The district is part of the query",
        body:
          "Hong Kong search intent often carries geography before a user ever opens a map. “Causeway Bay physio”, “觀塘 裝修”, and “Tseung Kwan O tutoring” are not just keyword variations; they are requests for proximity, familiarity, and a realistic travel radius. Your pages need to name the places you actually serve and explain what changes by location.",
      },
      {
        heading: "Language is a behaviour signal",
        body:
          "Treat Traditional Chinese and English as parallel entry points, not as a machine translation exercise. The phrasing, proof, and calls to action can differ because the questions differ. A page that acknowledges both search behaviours is easier for people to trust and easier for systems to classify.",
      },
      {
        heading: "Recommendation: connect the local proof",
        body:
          "Build a consistent chain between your location pages, Google Business Profile, service details, contact paths, and first-party evidence. Make the next action obvious: a directions link, a call, a booking path, or a WhatsApp conversation. Local SEO is strongest when discovery and conversion feel like one route.",
      },
    ],
    recommendations: [
      "Create one useful page per real service area, not one page per keyword variant.",
      "Keep address, opening hours, phone, and service language consistent everywhere.",
      "Add neighbourhood context that helps a visitor decide if the location is genuinely convenient.",
    ],
  },
  {
    slug: "the-ai-answer-box-needs-more-than-keywords",
    issue: "FIELD NOTE 02",
    category: "AI Visibility",
    title: "The AI answer box needs more than keywords",
    excerpt: "What makes a Hong Kong business useful enough to be cited when the click happens after the answer.",
    standfirst:
      "Generative search compresses the first step of research. If an answer engine is going to use your business as a source, the page must make its expertise, boundaries, and evidence legible before it tries to sound persuasive.",
    readTime: "6 min read",
    date: "11 Sep 2026",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85",
    accent: "jade",
    author: "The Desk",
    sections: [
      {
        heading: "Be specific about the decision",
        body:
          "The strongest content does not target a broad topic such as “digital marketing”. It helps someone decide between a practical set of options: whether a bilingual service page needs separate intent mapping, how a local retailer should structure collection pages, or what a company must prove before it claims expertise.",
      },
      {
        heading: "Make evidence easy to quote",
        body:
          "Use direct definitions, clear comparisons, original observations, and visible update dates. Avoid hiding the recommendation beneath a wall of filler. A useful page gives a human reader an answer they can act on and gives an AI system a passage it can represent without guessing.",
      },
      {
        heading: "Recommendation: publish a point of view",
        body:
          "Create a small library of decisive field notes instead of a large archive of interchangeable posts. Link related pieces together, show the conditions where your advice changes, and reference the implementation work behind the recommendation. Citation follows clarity more often than volume.",
      },
    ],
    recommendations: [
      "Write the answer in the first 100 words, then show the reasoning underneath.",
      "Use definitions, tables, and examples that can stand alone when quoted.",
      "Link recommendations to the service or technical implementation that makes them real.",
    ],
  },
  {
    slug: "technical-seo-when-the-site-is-busy",
    issue: "FIELD NOTE 03",
    category: "Technical SEO",
    title: "Technical SEO when the site is busy",
    excerpt: "A practical triage order for teams who cannot pause the catalogue, campaign calendar, or next release.",
    standfirst:
      "Most technical SEO problems are not caused by a lack of tools. They are caused by fixing the loudest alert first. The better sequence protects crawl paths, indexable intent, and the pages that already earn attention.",
    readTime: "7 min read",
    date: "04 Sep 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    accent: "navy",
    author: "The Desk",
    sections: [
      {
        heading: "Start with the money path",
        body:
          "Map the pages that explain, compare, and convert. Then check whether search engines can reach them through internal links, whether canonical signals agree, and whether the page still works without a campaign parameter. Technical work is valuable when it protects a business path, not when it produces a prettier audit.",
      },
      {
        heading: "Separate health from opportunity",
        body:
          "A missing alt attribute and a blocked category page do not carry the same business risk. Keep a short severity ladder: unreachable, unindexable, misleading, slow, then merely untidy. This lets a small Hong Kong team focus its limited release windows on the changes that preserve demand.",
      },
      {
        heading: "Recommendation: keep a change ledger",
        body:
          "Record what changed, why it changed, which URLs were affected, and how you will tell if it worked. A simple change ledger creates institutional memory between developers, marketers, and agencies—and makes future diagnosis much faster.",
      },
    ],
    recommendations: [
      "Protect high-intent routes before cleaning low-impact warnings.",
      "Review canonicals, redirects, internal links, and indexability as one system.",
      "Keep a dated record of releases, migrations, and template changes.",
    ],
  },
  {
    slug: "content-that-gets-referenced",
    issue: "FIELD NOTE 04",
    category: "Content Systems",
    title: "Content that gets referenced",
    excerpt: "A publishing system for turning specialist knowledge into pages people can link to, quote, and revisit.",
    standfirst:
      "A content calendar is not a point of view. The useful asset is the durable explanation behind it: a framework, a local observation, a decision rule, or a piece of evidence that becomes easier to reference over time.",
    readTime: "5 min read",
    date: "28 Aug 2026",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    accent: "vermilion",
    author: "The Desk",
    sections: [
      {
        heading: "Start with a tension",
        body:
          "The best briefs begin with a disagreement or a trade-off: bilingual pages versus duplicated intent, a fast redesign versus stable URLs, a broad audience versus a credible point of view. Tension gives the article a job and gives readers a reason to pass it on.",
      },
      {
        heading: "Build one reusable idea",
        body:
          "A strong article can be reduced to a simple model, checklist, or comparison without losing its nuance. That structure supports search snippets, AI retrieval, internal linking, and the human act of forwarding a useful explanation to a colleague.",
      },
      {
        heading: "Recommendation: publish from the work",
        body:
          "Turn recurring questions from sales calls, support tickets, releases, and audits into editorial material. First-hand patterns are harder to copy than generic advice, and they give your domain a stronger reason to exist in the conversation.",
      },
    ],
    recommendations: [
      "Give every article one decision it helps a reader make.",
      "Turn each framework into a scannable summary and a deeper explanation.",
      "Keep a source note so future updates improve the original instead of multiplying it.",
    ],
  },
];

export const categories = ["All notes", "Local Search", "AI Visibility", "Technical SEO", "Content Systems"];

export function findArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
