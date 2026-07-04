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

const divider = d("─".repeat(56));

const header = `
  ${b("Rahul Raj Yadav")}  ${d("///")}  ${w("Tech Lead - Backend Engineering")}
  ${d("India")}
`;

const experience = `
  ${y.bold("EXPERIENCE")}

  ${w("AI Engineer")}  ${d("@")} ${c("IDEfforts")}
  ${d("▸ June 2026 - Present")}

  ${w("Founding Backend & AI Engineer")}  ${d("@")} ${c("GradeLab")}
  ${d("▸ January 2026 - Present")}

  ${w("Tech Lead - Backend Engineering")}  ${d("@")} ${c("Hyperce")}
  ${d("▸ April 2023 - June 2026")}

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

  ${c("◆")} ${b("Vendure Plugin Ecosystem")}
    ${d("8+ publishable Vendure plugins — search, AI, promos, FAQ, auth")}
  ${c("◆")} ${b("Vendure AI")}
    ${d("AI shopping assistant — LLM chat, pgvector, cart, checkout")}
  ${c("◆")} ${b("GPT Clone")}
    ${d("A ChatGPT clone built from scratch")}
  ${c("◆")} ${b("type-faah")}
    ${d("Fun vibe-coded keyboard typing test app")}

  ${d.italic("More at github.com/Ryrahul")}
`;

const openSource = `
  ${g.bold("OPEN SOURCE")}

  ${c("◆")} Core contributor to ${b("Vendure")} — 27-30+ merged PRs
  ${c("◆")} Published npm packages under ${b("@rahul_vendure")} scope
  ${c("◆")} Vendure Enthusiast badge holder
`;

const education = `
  ${g.bold("EDUCATION")}

  ${w("B.Tech Computer Science And Engineering")}  ${d("(2022-2026)")}
`;

const hobbies = `
  ${g.bold("HOBBIES")}

  ${d("▸")} Swimming  ${d("▸")} Riding bikes  ${d("▸")} Trying new technologies
`;

const links = `
  ${c.bold("LINKS")}

  ${d("GitHub")}    ${c("github.com/Ryrahul")}
  ${d("LinkedIn")}  ${c("linkedin.com/in/rahul-raj-yadav-03b06b258")}
  ${d("Twitter")}   ${c("x.com/ry_rahull")}
  ${d("npm")}       ${c("npmjs.com/settings/rahul_vendure/packages")}
  ${d("Blog")}      ${c("hashnode.com/@ryrahul")}
  ${d("Email")}     ${c("rahul.yadav@idefforts.com")}
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
  links,
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
