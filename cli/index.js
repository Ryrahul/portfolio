#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const w = chalk.white;
const d = chalk.gray;
const b = chalk.bold.white;
const c = chalk.cyan;
const g = chalk.green;
const y = chalk.yellow;
const m = chalk.magenta;
const r = chalk.red;

// ANSI clickable hyperlink: \e]8;;URL\aTEXT\e]8;;\a
const link = (text, url) => `\u001B]8;;${url}\u0007${c(text)}\u001B]8;;\u0007`;

const divider = d("─".repeat(56));

const header = `
  ${b("Rahul Raj Yadav")}  ${d("///")}  ${w("Tech Lead - Backend Engineering")}
  ${d("Nepal 🇳🇵")}
`;

const experience = `
  ${y.bold("EXPERIENCE")}

  ${w("AI Engineer")}  ${d("@")} ${c("IDEfforts")}
  ${d("▸ June 2026 - Present")}

  ${w("Founding Backend & AI Engineer")}  ${d("@")} ${c("GradeLab")}
  ${d("▸ January 2026 - Present")}

  ${w("Hyperce")}  ${d("(3 yrs 3 mos)")}
    ${w("Tech Lead - Backend Engineering")}  ${d("▸ Jan 2026 - Jun 2026")}
    ${w("AI Engineer")}  ${d("▸ Oct 2025 - Jan 2026")}
    ${w("Back End Developer")}  ${d("▸ Apr 2023 - Oct 2025")}

  ${w("SDE Intern")}  ${d("@")} ${c("Galaxy.ai")}
  ${d("▸ June 2025 - December 2025")}

  ${w("Technical Lead")}  ${d("@")} ${c("GDSC")}
  ${d("▸ August 2023 - June 2025")}
`;

const techStack = `
  ${m.bold("TECH STACK")}

  TypeScript, Node.js, NestJS, Express.js, Next.js,
  React, GraphQL, Go, Python, FastAPI, PostgreSQL,
  MongoDB, Redis, Docker, K8s, Serverless, AWS,
  LangChain, LangGraph, Mastra, Vendure ${d("...and more")}
`;

const projects = `
  ${r.bold("PROJECTS")}

  ${c("◆")} ${link("Notebook", "https://github.com/Ryrahul/Learning-Notebook")}
    ${d("Infinite-canvas study notebooks — handwriting, diagrams, autosave")}
    ${d("▸")} ${link("notebook.rahulweb.online", "https://notebook.rahulweb.online/")}
  ${c("◆")} ${link("Vendure Plugin Ecosystem", "https://github.com/Ryrahul/Vendure-plugins")}
    ${d("8+ publishable Vendure plugins — search, AI, promos, FAQ, auth")}
  ${c("◆")} ${link("Vendure AI", "https://github.com/Ryrahul/Vendure-ai")}
    ${d("AI shopping assistant — LLM chat, pgvector, cart, checkout")}
  ${c("◆")} ${link("GPT Clone", "https://github.com/Ryrahul/Gpt-Clone")}
    ${d("A ChatGPT clone built from scratch")}
  ${c("◆")} ${link("Type-Faah", "https://github.com/Ryrahul/type-faah")}
    ${d("Fun vibe-coded keyboard typing test app")}
    ${d("▸")} ${link("bakchodi-type.vercel.app", "https://bakchodi-type.vercel.app/")}

  ${d.italic(`More at ${link("github.com/Ryrahul", "https://github.com/Ryrahul?tab=repositories")}`)}
`;

const openSource = `
  ${g.bold("OPEN SOURCE")}

  ${c("◆")} #1 ${link("Vendure Enthusiast", "https://vendure.io/enthusiasts")} (450 VXP)
    Top contributor to ${link("Vendure", "https://github.com/vendurehq/vendure")} (8.2k+ stars)
    ${link("35+ merged PRs", "https://github.com/vendurehq/vendure/pulls?q=is%3Apr+author%3ARyrahul+is%3Amerged")}
  ${c("◆")} Contributor to ${link("Vex", "https://github.com/SpaceParrots/vex")} — CLI & MCP server for Vendure
  ${c("◆")} Published npm packages under ${link("@rahul_vendure", "https://www.npmjs.com/settings/rahul_vendure/packages")} scope
`;

const education = `
  ${g.bold("EDUCATION")}

  ${w("B.Tech Computer Science And Engineering")}  ${d("(2022-2026)")}
`;

const hobbies = `
  ${g.bold("HOBBIES")}

  ${d("▸")} Swimming  ${d("▸")} Riding bikes  ${d("▸")} Trying new technologies
`;

const links_section = `
  ${c.bold("LINKS")}

  ${d("GitHub")}    ${link("github.com/Ryrahul", "https://github.com/Ryrahul")}
  ${d("LinkedIn")}  ${link("linkedin.com/in/rahul-raj-yadav", "https://www.linkedin.com/in/rahul-raj-yadav-03b06b258/")}
  ${d("Twitter")}   ${link("x.com/ry_rahull", "https://x.com/ry_rahull")}
  ${d("NPM")}       ${link("@rahul_vendure", "https://www.npmjs.com/settings/rahul_vendure/packages")}
  ${d("Blog")}      ${link("hashnode.com/@ryrahul", "https://hashnode.com/@ryrahul")}
  ${d("Email")}     ${link("rahul.yadav@idefforts.com", "mailto:rahul.yadav@idefforts.com")}
`;

const card = [
  header,
  divider,
  experience,
  divider,
  techStack,
  divider,
  projects,
  divider,
  openSource,
  divider,
  education,
  divider,
  hobbies,
  divider,
  links_section,
].join("\n");

const boxed = boxen(card, {
  padding: 1,
  borderStyle: "round",
  borderColor: "cyan",
  title: "ryrahul",
  titleAlignment: "center",
});

console.log("\n" + boxed);
console.log(d("\n  inspired from typehere.app\n"));
