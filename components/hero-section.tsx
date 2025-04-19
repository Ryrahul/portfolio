"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Text Content - Left side on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            AAKASH SUBEDI
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-lg md:text-xl mt-2 text-zinc-400 font-light tracking-wider">
              FULL STACK DEVELOPER
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-zinc-300 text-sm md:text-base mt-6 mb-8 max-w-lg">
              Yet another full stack developer too . Trying to be what a 12 year
              kid used to dream of. Building some useful stuff more than a
              project, so that people use it. I may not have strong porfolio but
              i shall catch on soon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full text-sm"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8 flex gap-4 justify-center md:justify-start"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-zinc-400 hover:text-black"
            >
              <a href="https://github.com/subediaakash">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-zinc-400 hover:text-black"
            >
              <a href="https://www.linkedin.com/in/aakash-subedi-a9986625a/">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-zinc-400 hover:text-black"
            >
              <a href="https://x.com/Aakash12527680">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Image - Right side on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 blur-md"></div>

            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-800">
              <Image
                src="/me.jpg"
                alt="Aakash Subedi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-zinc-400 hover:text-white h-8 w-8"
          >
            <ArrowDown className="h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
