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
      <div className="w-full max-w-3xl px-4 sm:px-6 py-12 mx-auto">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-12"
        >
          {/* About Me Section */}
          <div className="space-y-6" id="about">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white text-center"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-zinc-300 text-sm text-center"
            >
              Software developer and OOP enthusiast skilled in React, Next.js,
              Express.js, and PostgreSQL, currently delving into AI integration
              and application testing. Experienced in building software
              solutions, incorporating artificial intelligence, and conducting
              tests to ensure scalability and performance.
            </motion.p>
          </div>

          {/* Contact and Education Cards - Now in a vertical layout */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800 overflow-hidden">
                <CardContent className="p-6 md:grid md:grid-cols-2 gap-6 text-center text-sm text-zinc-300">
                  {/* Contact Section */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">
                      Contact
                    </h3>
                    <p>Jakkashandra, Kanakapura</p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <Mail className="w-4 h-4" />
                      <a
                        href="mailto:contact.aakash77@gmail.com"
                        className="hover:text-purple-400 transition-colors"
                      >
                        contact.aakash77@gmail.com
                      </a>
                    </div>
                    <div className="flex justify-center mt-2">
                      <a
                        href="https://devaakash.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-purple-400 transition-colors"
                      >
                        devaakash.xyz
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="flex gap-3 mt-4 justify-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-8 w-8 bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800"
                      >
                        <a href="https://github.com/subediaakash">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-8 w-8 bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800"
                      >
                        <a href="https://www.linkedin.com/in/aakash-subedi-a9986625a/">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Education Section */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">
                      Education
                    </h3>
                    <p className="font-medium">
                      B.Tech Computer Science and Engineering
                    </p>
                    <p>Jain University, Bengaluru, India</p>
                    <p>Specialisation in Artificial Intelligence</p>
                    <p>Sep 2022 – Apr 2026</p>
                    <p>Current CGPA: 8.7</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* GitHub Contributions */}
          <div className="space-y-6 flex justify-center items-center flex-col">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white text-center"
            >
              GitHub Contributions
            </motion.h2>
            <GitHubContributions />
          </div>

          {/* Experience Section */}
          <div className="space-y-6">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white text-center"
            >
              Experience
            </motion.h2>
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-6">
                <div className="space-y-8">
                  <ExperienceItem
                    title="Lead"
                    company="Neuron Club, Jain University"
                    period="Oct 2024-Present"
                    details={[
                      "Delivered comprehensive full-stack development workshops encompassing modern frontend technologies like React and backend technologies like Node.js to 55 students, achieving a 95% course completion rate and positive feedback.",
                      "Provided mentorship to budding developers with early coding experience.",
                    ]}
                    index={0}
                  />

                  <ExperienceItem
                    title="Web Facilitator"
                    company="GDSC, Jain University"
                    period="Sept 2024-March 2025"
                    details={[
                      "Conducted full-stack development workshops, teaching modern frontend and backend technologies.",
                      "Mentored students in React, Next.js, Express.js, and database management.",
                      "Assisted students in understanding best practices for scalable and high-performance web applications.",
                    ]}
                    index={1}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects Section - Now in a vertical layout for consistency */}
          <div className="space-y-6">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white text-center"
            >
              Projects
            </motion.h2>
            <div className="space-y-6" id="projects">
              <ProjectCard
                title="Google Docs Clone"
                description="Developed and tested a real-time collaborative text editor implemented user permissions, file sharing, and rich text formatting features. Ensured reliability and performance through comprehensive testing with Jest and Cypress."
                index={0}
                repoUrl="https://github.com/subediaakash/Google-Docs-Like-Text-Editor"
              />

              <ProjectCard
                title="Course Finder"
                description="Developed course finding website with personalized search history and wishlists and earning recognition from the engineers working with TVS and professors for the user experience and quality of code."
                index={2}
                repoUrl="https://github.com/subediaakash/find-the-right-course/"
              />

              <ProjectCard
                title="Splitwise Clone"
                description="Built a Splitwise clone using Next.js for seamless bill splitting among friends. Added features like bill tracking, history, and a pseudo-payment system."
                index={3}
                repoUrl="https://github.com/subediaakash/splitwise-clone"
              />

              <ProjectCard
                title="Study Sync"
                description="Built a collaborative study platform where students can form groups, set academic goals, and participate in focused Pomodoro-based study sessions, a concept that received positive feedback from several angel investors."
                index={1}
                repoUrl="https://github.com/subediaakash/Study-Sync"
              />
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white text-center"
            >
              Skills
            </motion.h2>
            <Card className="bg-zinc-900/50 border-zinc-800 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
              <CardContent className="p-6 relative">
                <div className="space-y-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h3 className="text-lg font-semibold mb-4 text-white">
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
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

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-lg font-semibold mb-4 text-white">
                      Backend
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
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

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-lg font-semibold mb-4 text-white">
                      Tools
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
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

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-lg font-semibold mb-4 text-white">
                      Languages
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
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
          </div>

          {/* Contact Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center pt-6"
          >
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full">
              <Link href="mailto:contact.aakash77@gmail.com">Get In Touch</Link>
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
