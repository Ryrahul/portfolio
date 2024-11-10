"use client";

import { motion } from "framer-motion";
import Layout from "../app/components/Layout";
import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import About from "../app/components/About";
import Skills from "../app/components/Skills";
import Projects from "../app/components/Projects";
import Footer from "../app/components/Footer";

export default function Portfolio() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </motion.div>
    </Layout>
  );
}
