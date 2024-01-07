import highlightjs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { useEffect, useRef } from "react";
import { useCodeStore } from "../state/code-store";

interface TypedCharsProps {
  language: string;
}

export function TypedChars({ language }: TypedCharsProps) {
  const isSyntaxHighlightingEnabled = false;
  useCodeStore((state) => state.code);
  const index = useCodeStore((state) => state.index);
  const typedChars = useCodeStore((state) => state.correctChars);
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isSyntaxHighlightingEnabled) return;
    if (typedRef.current) {
      const element = typedRef.current;

      // Clear the previous highlights
      element.innerHTML = element.textContent || "";

      // Apply new highlighting
      highlightjs.highlightElement(element);
    }
  }, [index, isSyntaxHighlightingEnabled]);

  return (
    <span
      className={`text-violet-400 ${language}`}
      ref={typedRef}
      style={{ background: "none" }}
    >
      {typedChars()}
    </span>
  );
}
