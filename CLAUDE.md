# Project guidance

Use the NotebookLM skill when I ask for:
- source-grounded summaries
- research synthesis
- document-based strategy
- extracting insights from PDFs, notes, or source files

Default behavior:
- prefer NotebookLM-backed outputs when source fidelity matters
- use the installed notebooklm skill instead of generic summarization when relevant
- keep outputs practical and concise unless I ask for depth

## Project priorities

For this project, use NotebookLM especially for:
- business strategy extraction from PDFs and notes
- positioning and offer synthesis
- objection mining
- trust / proof insight extraction
- summarizing long research before implementation

When research files exist in the repo, check them before making major messaging decisions.

## Reference repositories

Six open-source repos are cloned at `~/Desktop/reference-repos/` for implementation reference:

- **coolify** — deployment UI, infra dashboards
- **dub** — Next.js App Router, auth, SaaS patterns, link tracking
- **pocketbase** — backend data modeling, auth, realtime API
- **trigger.dev** — background jobs, cron, webhooks, async workflows
- **papercups** — live chat widget, customer support inbox
- **hoppscotch** — API client UI, workspace/collection layouts

**Default behavior:** Proactively check these repos when implementing features that overlap their domain. Before building something from scratch (auth, background jobs, link tracking, chat, deployment config, API design), read the relevant repo for patterns and best practices. Mention when you're drawing from them.

