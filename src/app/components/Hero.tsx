"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatedBackground />
      <div className="z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/me.jpg"
            alt="Aakash Subedi"
            width={300}
            height={300}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4 font-mono"
        >
          Aakash Subedi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl font-mono"
        >
          Web Developer | Nepal
        </motion.p>
      </div>
    </section>
  );
}
