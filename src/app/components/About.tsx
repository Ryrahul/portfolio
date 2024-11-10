"use client";

import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Building } from "lucide-react";

export default function About() {
  const aboutItems = [
    "I'm 20 years old and currently focused on learning web development",
    "Passionate about creating beautiful and functional websites",
    "Looking forward to expanding my skills into real-time connections",
    "Eager to connect with fellow developers and tech enthusiasts",
  ];

  const personalInfo = [
    { icon: <User className="w-5 h-5" />, text: "Aakash Subedi" },
    { icon: <MapPin className="w-5 h-5" />, text: "Nepal" },
    { icon: <GraduationCap className="w-5 h-5" />, text: "B-tech" },
    { icon: <Building className="w-5 h-5" />, text: "Jain University" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
          >
            <img
              src="/spartan.jpg"
              alt="Aakash Subedi"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="flex flex-col gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
            >
              {personalInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center mb-3 text-white"
                >
                  {item.icon}
                  <span className="ml-2 font-mono">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {aboutItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start text-white"
                >
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="font-mono">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
