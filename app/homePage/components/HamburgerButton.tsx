"use client";

import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

export const HamburgerButton = ({ isOpen, toggle }: Props) => {
  return (
    <button
      onClick={toggle}
      className="sm:hidden z-50"
      aria-label="Toggle menu"
    >
      <div className="w-6 h-6 relative flex items-center justify-center">
        <motion.span
          className="absolute h-0.5 w-6 bg-white"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 0 : -8,
          }}
          transition={{ duration: 0.25 }}
        />

        <motion.span
          className="absolute h-0.5 w-6 bg-white"
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        />

        <motion.span
          className="absolute h-0.5 w-6 bg-white"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 0 : 8,
          }}
          transition={{ duration: 0.25 }}
        />
      </div>
    </button>
  );
};
