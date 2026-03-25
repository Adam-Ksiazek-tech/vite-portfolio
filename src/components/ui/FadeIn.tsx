import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements; // np. div, h1, section
  once?: boolean; // viewport: once: true
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
  as = "div",
  once = true,
}: FadeInProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}