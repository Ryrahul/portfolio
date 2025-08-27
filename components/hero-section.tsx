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
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black flex items-center justify-center">
      {/* Background grid */}
      <div className="absolute inset-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 blur-md animate-pulse-slow"></div>

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

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">
            AAKASH SUBEDI
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-6"
        >
          <p className="text-lg md:text-xl text-zinc-400 font-light tracking-wider mb-2">
            FULL STACK DEVELOPER
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-zinc-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Hello folks, I'm Aakash. Welcome to my digital space. Scroll down to
          explore my journey, projects, and the technologies I'm passionate
          about. I'd love to hear your thoughts and feedback.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 border-0"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-2 border-purple-500/50 text-purple-300 hover:text-white hover:bg-purple-600/20 hover:border-purple-400 px-8 py-3 rounded-full font-medium backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 bg-purple-900/10"
              onClick={() => scrollToSection("about")}
            >
              About Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="flex gap-4 justify-center"
        >
          {[
            {
              href: "https://github.com/subediaakash",
              icon: Github,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/aakash-subedi-a9986625a/",
              icon: Linkedin,
              label: "LinkedIn",
            },
            {
              href: "https://x.com/void_aakash",
              icon: Twitter,
              label: "Twitter",
            },
            {
              href: "mailto:contact.aakash77@gmail.com",
              icon: Mail,
              label: "Email",
            },
          ].map((social, index) => (
            <motion.div
              key={social.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12 bg-zinc-900/40 border-2 border-zinc-600/50 hover:bg-purple-600/20 text-zinc-400 hover:text-purple-300 hover:border-purple-400/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="ghost"
            onClick={() => scrollToSection("about")}
            size="icon"
            className="rounded-full text-zinc-400 hover:text-purple-300 h-12 w-12 bg-zinc-900/30 hover:bg-purple-600/20 border-2 border-zinc-600/30 hover:border-purple-400/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
