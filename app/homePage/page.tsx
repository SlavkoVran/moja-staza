"use client";
import { Contact } from "@/app/homePage/components/Contact";
import { AboutUs } from "./components/AboutUs";
import { Home } from "./components/Home";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HamburgerButton } from "./components/HamburgerButton";
import { useActiveSection } from "@/app/hooks/useActiveSection";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const activeSection = useActiveSection(["home", "about_us", "contact"]);

  return (
    <div className="relative">
      <header className="bg-background flex justify-end items-center h-14 shadow fixed top-0 left-0 right-0 z-50 px-4">
        <HamburgerButton isOpen={menuOpen} toggle={toggleMenu} />
        <nav className="hidden sm:flex gap-10 text-white text-lg">
          <a
            href="#home"
            className={
              activeSection === "home" ? "text-orange-500 font-bold" : ""
            }
          >
            Home
          </a>
          <a
            href="#about_us"
            className={
              activeSection === "about_us" ? "text-orange-500 font-bold" : ""
            }
          >
            About Us
          </a>
          <a
            href="#contact"
            className={
              activeSection === "contact" ? "text-orange-500 font-bold" : ""
            }
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Mobile meni */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-14 left-0 right-0 bg-background shadow z-40 flex flex-col items-end px-4 py-4 text-white text-lg sm:hidden"
          >
            <a href="#" onClick={() => setMenuOpen(false)} className="mb-2">
              Home
            </a>
            <a
              href="#about_us"
              onClick={() => setMenuOpen(false)}
              className="mb-2"
            >
              About Us
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
      <main
        className="pt-14 snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth"
        id="scroll-container"
      >
        <section id="home" className="snap-start h-screen">
          <Home />
        </section>
        <section id="about_us" className="snap-start h-screen">
          <AboutUs />
        </section>
        <section id="contact" className="snap-start h-screen">
          <Contact />
        </section>
      </main>
    </div>
  );
}
