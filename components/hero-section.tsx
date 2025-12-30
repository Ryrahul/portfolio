"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
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

  const socialLinks = [
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
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-10"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
            {/* Simple border glow */}
            <div
              className="absolute inset-0 rounded-full bg-white/20 blur-md"
              aria-hidden="true"
            ></div>

            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-700">
              <Image
                src="/me.jpg"
                alt="Aakash Subedi - Full Stack Developer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white"
        >
          AAKASH SUBEDI
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
          className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed"
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="bg-white text-black hover:bg-zinc-200 px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300"
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("about")}
            className="border border-zinc-600 text-zinc-300 hover:text-white hover:border-zinc-400 px-8 py-3 rounded-full font-medium transition-all duration-300"
          >
            About Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="flex gap-4 justify-center"
          aria-label="Social media links"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                social.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={social.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full h-12 w-12 flex items-center justify-center bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all duration-300"
            >
              <social.icon className="h-5 w-5" aria-hidden="true" />
            </motion.a>
          ))}
        </motion.nav>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to About section"
          className="rounded-full text-zinc-500 hover:text-white h-12 w-12 flex items-center justify-center bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 transition-all duration-300"
        >
          <ArrowDown className="h-6 w-6" aria-hidden="true" />
        </motion.button>
      </motion.div>
    </div>
  );
}
