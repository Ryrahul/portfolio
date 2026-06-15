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
  ${b("Aakash Subedi")}  ${d("///")}  ${w("Software Engineer")}
  ${d("Bengaluru, India")}
`;

const experience = `
  ${y.bold("EXPERIENCE")}

  ${w("Software Engineer")}  ${d("@")} ${c("Nihin Media K.K.")}
  ${d("▸ January 2026 - Present")}

  ${w("SDE Intern")}  ${d("@")} ${c("Ainocular")}
  ${d("▸ July 2025 - December 2025")}

  ${w("SDE Intern")}  ${d("@")} ${c("Lookaround.in")}
  ${d("▸ Jan 2025 - June 2025")}
`;

const techStack = `
  ${m.bold("TECH STACK")}

  Typescript, Python, Go, AWS, Postgresdb,
  Redis, Docker, React.js, Next.js,
  Express.js, Nest.js, FastAPI ${d("...and more")}
`;

const projects = `
  ${r.bold("PROJECTS")}

  ${c("◆")} ${b("Study Sync")}
    ${d("Platform that syncs students to study in group")}
  ${c("◆")} ${b("Express Backend Agent")}
    ${d("Agent that writes end to end backend in express")}
  ${c("◆")} ${b("CLI Music Player")}
    ${d("Cli based music player, that scrapes musics via youtube")}
  ${c("◆")} ${b("Google Docs Clone")}
    ${d("Real-time collaborative text editor with permissions")}
  ${c("◆")} ${b("Zomato MCP")}
    ${d("AI agent that manages food items via Zomato")}
  ${c("◆")} ${b("Splitwise Clone")}
    ${d("Bill splitting app with expense tracking")}

  ${d.italic("Note: Every saturday/sunday i build a lot of projects")}
`;

const education = `
  ${g.bold("EDUCATION")}

  ${w("B.Tech Computer Science And Engineering")}  ${d("(2022-2026)")}
`;

const hobbies = `
  ${g.bold("HOBBIES")}

  ${d("▸")} Reading books  ${d("▸")} Writing poems
`;

const links = `
  ${c.bold("LINKS")}

  ${d("GitHub")}    ${c("github.com/subediaakash")}
  ${d("LinkedIn")}  ${c("linkedin.com/in/aakash-subedi-a9986625a")}
  ${d("Twitter")}   ${c("x.com/void_aakash")}
  ${d("Email")}     ${c("contact.aakash77@gmail.com")}
  ${d("Web")}       ${c("aksh.work")}
  ${d("Blog")}      ${c("aksh.work/blogs")}
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
  title: "devaakash",
  titleAlignment: "center",
});

console.log("\n" + boxed);
console.log(d("\n  inspired from typehere.app\n"));
