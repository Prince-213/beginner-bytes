/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import Lenis from "@studio-freight/lenis";

import { motion, AnimatePresence } from "motion/react";
import { useLayoutEffect, useRef } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  //@ts-ignore
  const root: any = useRef();

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={root}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.45 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
