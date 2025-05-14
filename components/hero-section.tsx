"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react"; // Assuming Mail is used elsewhere or intended
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

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 flex flex-col items-center justify-center">
        {/* Profile Image - Centered at top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 blur-md"></div>

            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-800">
              <Image
                src="/me.jpg" // Ensure this path is correct in your public folder
                alt="Aakash Subedi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content - Centered below image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
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
            <p className="text-zinc-300 text-sm md:text-base mt-6 mb-8 max-w-lg mx-auto">
              Hey Aakash this side, Glad you are here . Scroll down to see who
              am I and what have I done so far . I would love to take your
              suggestions and feedbacks on my works .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-3 justify-center"
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
            className="mt-8 flex gap-4 justify-center"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-8 w-8 bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              asChild // Use asChild to pass props to the anchor tag for proper link behavior
            >
              <a
                href="https://github.com/subediaakash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-8 w-8 bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/aakash-subedi-a9986625a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-8 w-8 bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              asChild
            >
              <a
                href="https://x.com/void_aakash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            {/* If you intend to use the Mail icon, you can add a similar button:
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-8 w-8 bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              asChild
            >
              <a href="mailto:your-email@example.com">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            */}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2" // Removed pointer-events-none
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                console.log("Button was clicked");
                aboutSection.scrollIntoView({ behavior: "smooth" });
              } else {
                console.warn("About section not found");
              }
            }}
            size="icon"
            className="rounded-full text-zinc-400 hover:text-white h-8 w-8 z-20 cursor-pointer"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
