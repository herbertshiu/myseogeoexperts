# Homepage localization, AI summaries, and related articles

- [x] Read the built-in LLM guidance and confirm the project capability needed for AI summaries.
- [x] Add Traditional Chinese homepage editorial copy for the remaining sections.
- [x] Define AI summary states, fallback behavior, and localized insight labels.
- [x] Add an AI summary feature to every article detail route.
- [x] Add dynamic related-article selection from the shared article model.
- [x] Verify English and Traditional Chinese article flows, loading/error states, type check, build, and responsive layouts.

- [x] Verify the AI summary loading and error states by forcing a failed or slow summary request in both languages.
- [x] Capture and review narrow-width mobile screenshots for the homepage and article pages after adding AI summaries and related articles.

- [x] Force the article summary endpoint to fail once and verify the localized error state and retry action in both English and Traditional Chinese.
- [x] Force or simulate a delayed article summary response and confirm the loading state renders correctly in both English and Traditional Chinese.

- [x] Inspect the committed package scripts, Vercel settings, and repository output paths.
- [x] Add a Vercel-compatible build command and static output configuration if needed.
- [x] Verify the configured build produces deployable files and preserves SPA route fallback behavior.

- [ ] Verify a deep article URL resolves correctly under the Vercel-style static output.
- [ ] Choose and implement a Vercel strategy that preserves the server-side article summary endpoint, or document the static-only limitation clearly.
- [ ] Verify the final Vercel strategy end to end before checkpointing.
