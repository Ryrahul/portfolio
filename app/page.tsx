"use client";

import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import ExperienceItem from "@/components/experience-item";
import SkillBadge from "@/components/skill-badge";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import GitHubContributions from "@/components/github-contributions";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Animation variants for sections
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const frontendSkills = [
    "React.js",
    "Next.js",
    "Jotai",
    "Tanstack Query",
    "Three.js",
    "Framer Motion",
    "Tailwind",
  ];
  const backendSkills = [
    "Express.js",
    "Nest.js",
    "PostgreSQL",
    "Websockets",
    "WRTC",
    "Redis",
    "Langchain",
    "FastAPI",
  ];
  const tools = ["Git", "Vim", "Docker", "AWS", "Renderer", "Puppeteer"];
  const languages = ["Python", "TypeScript", "C++", "Java", "Go"];

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <main
        id="main-content"
        className="flex min-h-screen flex-col items-center bg-gradient-to-b from-black to-zinc-900"
        role="main"
      >
        {/* Hero Section */}
        <header ref={targetRef} className="w-full">
          <HeroSection />
        </header>

        {/* Content Container with consistent width and centering */}
        <div className="w-full max-w-4xl px-4 sm:px-6 py-16 mx-auto space-y-20">
          {/* About Me Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
            id="about"
            aria-labelledby="about-heading"
          >
            <motion.div
              variants={itemVariants}
              className="text-center space-y-4"
            >
              <h2
                id="about-heading"
                className="text-3xl md:text-4xl font-bold text-white"
              >
                About Me
              </h2>
              <div className="section-divider" aria-hidden="true"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-zinc-300 text-base md:text-lg text-center leading-relaxed max-w-3xl mx-auto"
            >
              Software developer skilled in React, Next.js, Express.js, and
              PostgreSQL, currently delving into AI integration and application
              testing. Experienced in building software solutions, incorporating
              artificial intelligence, and conducting tests to ensure
              scalability and performance.
            </motion.p>
          </motion.section>

          {/* Contact and Education Cards */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
            aria-label="Contact and Education Information"
          >
            <motion.div variants={cardVariants}>
              <Card className="bg-zinc-900/60 border-zinc-800/50 overflow-hidden backdrop-blur-sm card-hover">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"
                  aria-hidden="true"
                ></div>
                <CardContent className="p-8 md:grid md:grid-cols-2 md:gap-8 gap-y-8 text-sm text-zinc-300 relative">
                  {/* Contact Section */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center text-center gap-3"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Contact
                    </h3>
                    <address className="not-italic space-y-2">
                      <p className="text-zinc-300">Jakkashandra, Kanakapura</p>
                      <p className="flex items-center justify-center gap-2">
                        <Mail
                          className="w-4 h-4 text-purple-400"
                          aria-hidden="true"
                        />
                        <a
                          href="mailto:contact.aakash77@gmail.com"
                          className="hover:text-purple-400 transition-colors duration-300 focus:outline-none focus:text-purple-400"
                        >
                          contact.aakash77@gmail.com
                        </a>
                      </p>
                      <a
                        href="https://www.aksh.work"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-purple-400 transition-colors duration-300 focus:outline-none focus:text-purple-400 justify-center"
                      >
                        aksh.work
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                    </address>
                    <nav
                      className="flex gap-3 mt-4"
                      aria-label="Social media links"
                    >
                      <a
                        href="https://github.com/subediaakash"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit GitHub profile"
                        className="rounded-full h-9 w-9 flex items-center justify-center bg-zinc-900/50 border border-zinc-700 hover:bg-zinc-800/50 hover:border-purple-500/50 smooth-hover text-zinc-400 hover:text-white transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" aria-hidden="true" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/aakash-subedi-a9986625a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit LinkedIn profile"
                        className="rounded-full h-9 w-9 flex items-center justify-center bg-zinc-900/50 border border-zinc-700 hover:bg-zinc-800/50 hover:border-purple-500/50 smooth-hover text-zinc-400 hover:text-white transition-colors duration-300"
                      >
                        <Linkedin className="w-4 h-4" aria-hidden="true" />
                      </a>
                    </nav>
                  </motion.div>

                  {/* Education Section */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Education
                    </h3>
                    <p className="font-medium text-zinc-200">
                      B.Tech Computer Science and Engineering
                    </p>
                    <p className="text-zinc-300">
                      Jain University, Bengaluru, India
                    </p>
                    <p className="text-zinc-400">
                      Specialisation in Artificial Intelligence
                    </p>
                    <time className="text-zinc-400" dateTime="2022-09/2026-04">
                      Sep 2022 – Apr 2026
                    </time>
                    <p className="text-purple-400 font-medium">
                      Current CGPA: 8.7
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.section>

          {/* GitHub Contributions */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 w-full"
            aria-labelledby="github-heading"
          >
            <motion.div
              variants={itemVariants}
              className="text-center space-y-4"
            >
              <h2
                id="github-heading"
                className="text-3xl md:text-4xl font-bold text-white"
              >
                GitHub Contributions
              </h2>
              <div className="section-divider" aria-hidden="true"></div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="w-full flex justify-center"
            >
              <div className="w-full max-w-4xl px-2">
                <GitHubContributions />
              </div>
            </motion.div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
            aria-labelledby="experience-heading"
          >
            <motion.div
              variants={itemVariants}
              className="text-center space-y-4"
            >
              <h2
                id="experience-heading"
                className="text-3xl md:text-4xl font-bold text-white"
              >
                Experience
              </h2>
              <div className="section-divider" aria-hidden="true"></div>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-zinc-900/60 border-zinc-800/50 backdrop-blur-sm card-hover">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"
                  aria-hidden="true"
                ></div>
                <CardContent className="p-8 relative">
                  <div className="space-y-8">
                    <ExperienceItem
                      title="Full Stack Engineer"
                      company="Nihin Media"
                      period="Jan 2026-Present"
                      details={[
                        "Integrating generative AI capabilities into the core product to enhance user experience.",
                        "Maintaining and improving the product infrastructure for reliability and scalability.",
                      ]}
                      index={0}
                    />

                    <ExperienceItem
                      title="Software Developer Intern"
                      company="Ainocular"
                      period="July 2025-Dec 2025"
                      details={[
                        "Developed and tested software solutions with a focus on scalability and performance.",
                        "Incorporated artificial intelligence into applications to enhance functionality.",
                      ]}
                      index={1}
                    />

                    <ExperienceItem
                      title="Software Developer Intern"
                      company="Lookaround.in"
                      period="Jan 2025-June 2025"
                      details={[
                        "Built company's SaaS backend from scratch using Express.js and PostgreSQL.",
                        "Refactored existing codebase to improve performance and maintainability.",
                      ]}
                      index={2}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
            id="projects"
            aria-labelledby="projects-heading"
          >
            <motion.div
              variants={itemVariants}
              className="text-center space-y-4"
            >
              <h2
                id="projects-heading"
                className="text-3xl md:text-4xl font-bold text-white"
              >
                Featured Projects
              </h2>
              <div className="section-divider" aria-hidden="true"></div>
            </motion.div>

            <div
              className="grid gap-6 md:grid-cols-2 auto-rows-fr"
              role="list"
              aria-label="Project list"
            >
              <ProjectCard
                title="Google Docs Clone"
                description="Real-time collaborative text editor with user permissions, file sharing, and rich text formatting. Tested with Jest and Cypress."
                index={0}
                repoUrl="https://github.com/subediaakash/Google-Docs-Like-Text-Editor"
              />

              <ProjectCard
                title="Zomato MCP"
                description="AI agent that orders, lists, and manages food items. Implements Zomato's MCP functionality using TypeScript."
                index={1}
                repoUrl="https://github.com/subediaakash/zomato-mcp"
              />

              <ProjectCard
                title="Splitwise Clone"
                description="Bill splitting app built with Next.js. Features include expense tracking, payment history, and settlement system."
                index={2}
                repoUrl="https://github.com/subediaakash/splitwise-clone"
              />

              <ProjectCard
                title="Study Sync"
                description="Collaborative study platform with group formation, goal setting, and Pomodoro-based sessions. Praised by angel investors."
                index={3}
                repoUrl="https://github.com/subediaakash/Study-Sync"
              />
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
            aria-labelledby="skills-heading"
          >
            <motion.div
              variants={itemVariants}
              className="text-center space-y-4"
            >
              <h2
                id="skills-heading"
                className="text-3xl md:text-4xl font-bold text-white"
              >
                Skills & Technologies
              </h2>
              <div className="section-divider" aria-hidden="true"></div>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-zinc-900/60 border-zinc-800/50 overflow-hidden backdrop-blur-sm card-hover">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"
                  aria-hidden="true"
                ></div>
                <CardContent className="p-8 relative">
                  <div className="space-y-10">
                    <motion.div variants={itemVariants}>
                      <h3 className="text-xl font-semibold mb-6 text-white text-center">
                        Frontend
                      </h3>
                      <ul
                        className="flex flex-wrap gap-3 justify-center"
                        role="list"
                        aria-label="Frontend skills"
                      >
                        {frontendSkills.map((skill, index) => (
                          <li key={skill}>
                            <SkillBadge
                              skill={skill}
                              index={index}
                              category="frontend"
                            />
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <h3 className="text-xl font-semibold mb-6 text-white text-center">
                        Backend
                      </h3>
                      <ul
                        className="flex flex-wrap gap-3 justify-center"
                        role="list"
                        aria-label="Backend skills"
                      >
                        {backendSkills.map((skill, index) => (
                          <li key={skill}>
                            <SkillBadge
                              skill={skill}
                              index={index}
                              category="backend"
                            />
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <h3 className="text-xl font-semibold mb-6 text-white text-center">
                        Tools
                      </h3>
                      <ul
                        className="flex flex-wrap gap-3 justify-center"
                        role="list"
                        aria-label="Development tools"
                      >
                        {tools.map((tool, index) => (
                          <li key={tool}>
                            <SkillBadge
                              skill={tool}
                              index={index}
                              category="tools"
                            />
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <h3 className="text-xl font-semibold mb-6 text-white text-center">
                        Languages
                      </h3>
                      <ul
                        className="flex flex-wrap gap-3 justify-center"
                        role="list"
                        aria-label="Programming languages"
                      >
                        {languages.map((language, index) => (
                          <li key={language}>
                            <SkillBadge
                              skill={language}
                              index={index}
                              category="languages"
                            />
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.section>

          {/* Enhanced Contact Button */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center pt-8"
            aria-label="Contact call to action"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="mailto:contact.aakash77@gmail.com"
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-full text-lg font-medium btn-glow smooth-hover shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.section>
        </div>

        {/* Footer */}
        <footer className="w-full border-t border-zinc-800/50 mt-20 bg-zinc-900/30 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo/Name */}
              <div className="text-center md:text-left">
                <p className="text-xl font-bold text-gradient-animate">
                  Aakash Subedi
                </p>
                <p className="text-zinc-400 text-sm mt-1">
                  Full Stack Developer
                </p>
              </div>

              {/* Social Links */}
              <nav className="flex gap-4" aria-label="Footer social links">
                <a
                  href="https://github.com/subediaakash"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-zinc-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <Github className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aakash-subedi-a9986625a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-zinc-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="mailto:contact.aakash77@gmail.com"
                  aria-label="Email"
                  className="text-zinc-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </a>
              </nav>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-zinc-500 text-sm flex items-center gap-1 justify-center md:justify-end">
                  © {currentYear} Made with
                  <Heart
                    className="w-4 h-4 text-red-500 fill-red-500"
                    aria-hidden="true"
                  />
                  <span className="sr-only">love</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
