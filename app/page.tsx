"use client";

import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
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

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-black to-zinc-900">
      <div ref={targetRef} className="w-full">
        <HeroSection />
      </div>

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
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About Me
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-zinc-300 text-base md:text-lg text-center leading-relaxed max-w-3xl mx-auto"
          >
            Software developer skilled in React, Next.js, Express.js, and
            PostgreSQL, currently delving into AI integration and application
            testing. Experienced in building software solutions, incorporating
            artificial intelligence, and conducting tests to ensure scalability
            and performance.
          </motion.p>
        </motion.section>

        {/* Contact and Education Cards */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={cardVariants}>
            <Card className="bg-zinc-900/60 border-zinc-800/50 overflow-hidden backdrop-blur-sm card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
              <CardContent className="p-8 md:grid md:grid-cols-2 md:gap-8 gap-y-8 text-sm text-zinc-300 relative">
                {/* Contact Section */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Contact
                  </h3>
                  <p className="text-zinc-300">Jakkashandra, Kanakapura</p>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <a
                      href="mailto:contact.aakash77@gmail.com"
                      className="hover:text-purple-400 transition-colors duration-300"
                    >
                      contact.aakash77@gmail.com
                    </a>
                  </div>
                  <a
                    href="https://devaakash.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-purple-400 transition-colors duration-300"
                  >
                    devaakash.xyz
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <div className="flex gap-3 mt-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full h-9 w-9 bg-zinc-900/50 border-zinc-700 hover:bg-zinc-800/50 hover:border-purple-500/50 smooth-hover"
                    >
                      <a
                        href="https://github.com/subediaakash"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full h-9 w-9 bg-zinc-900/50 border-zinc-700 hover:bg-zinc-800/50 hover:border-purple-500/50 smooth-hover"
                    >
                      <a
                        href="https://www.linkedin.com/in/aakash-subedi-a9986625a/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
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
                  <p className="text-zinc-400">Sep 2022 – Apr 2026</p>
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
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              GitHub Contributions
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
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
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Experience
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="bg-zinc-900/60 border-zinc-800/50 backdrop-blur-sm card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
              <CardContent className="p-8 relative">
                <div className="space-y-8">
                  <ExperienceItem
                    title="Software Developer Intern"
                    company="Ainocular"
                    period="July 2025-Present"
                    details={[
                      "Developing and testing software solutions with a focus on scalability and performance.",
                      "Incorporating artificial intelligence into applications to enhance functionality and user experience.",
                    ]}
                    index={0}
                  />

                  <ExperienceItem
                    title="Software Developer Intern"
                    company="Lookaround.in"
                    period="Jan 2025-June 2025"
                    details={[
                      "Built company's saas idea's backend from scratch using Express.js and PostgreSQL.",
                      "Refactored existing codebase to improve performance and maintainability.",
                    ]}
                    index={1}
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
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Featured Projects
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 auto-rows-fr">
            <ProjectCard
              title="Google Docs Clone"
              description="Developed and tested a real-time collaborative text editor implemented user permissions, file sharing, and rich text formatting features. Ensured reliability and performance through comprehensive testing with Jest and Cypress."
              index={0}
              repoUrl="https://github.com/subediaakash/Google-Docs-Like-Text-Editor"
            />

            <ProjectCard
              title="Course Finder"
              description="Developed course finding website with personalized search history and wishlists and earning recognition from the engineers working with TVS and professors for the user experience and quality of code."
              index={1}
              repoUrl="https://github.com/subediaakash/find-the-right-course/"
            />

            <ProjectCard
              title="Splitwise Clone"
              description="Built a Splitwise clone using Next.js for seamless bill splitting among friends. Added features like bill tracking, history, and a pseudo-payment system."
              index={2}
              repoUrl="https://github.com/subediaakash/splitwise-clone"
            />

            <ProjectCard
              title="Study Sync"
              description="Built a collaborative study platform where students can form groups, set academic goals, and participate in focused Pomodoro-based study sessions, a concept that received positive feedback from several angel investors."
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
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Skills & Technologies
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="bg-zinc-900/60 border-zinc-800/50 overflow-hidden backdrop-blur-sm card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
              <CardContent className="p-8 relative">
                <div className="space-y-10">
                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold mb-6 text-white text-center">
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {frontendSkills.map((skill, index) => (
                        <SkillBadge
                          key={skill}
                          skill={skill}
                          index={index}
                          category="frontend"
                        />
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold mb-6 text-white text-center">
                      Backend
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {backendSkills.map((skill, index) => (
                        <SkillBadge
                          key={skill}
                          skill={skill}
                          index={index}
                          category="backend"
                        />
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold mb-6 text-white text-center">
                      Tools
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {tools.map((tool, index) => (
                        <SkillBadge
                          key={tool}
                          skill={tool}
                          index={index}
                          category="tools"
                        />
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold mb-6 text-white text-center">
                      Languages
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {languages.map((language, index) => (
                        <SkillBadge
                          key={language}
                          skill={language}
                          index={index}
                          category="languages"
                        />
                      ))}
                    </div>
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
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-full text-lg font-medium btn-glow smooth-hover shadow-lg hover:shadow-xl">
              <Link href="mailto:contact.aakash77@gmail.com">Get In Touch</Link>
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
