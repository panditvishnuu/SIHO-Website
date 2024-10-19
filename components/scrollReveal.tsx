"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "US, 2009",
    description:
      "In 2009, the company took its first step toward revolutionizing investment strategies by developing an initial version of its investment research platform. This was a foundational period where the focus was on building a system that could streamline the process of equity research. The goal was to create a tool that could analyze various financial metrics and provide actionable insights to investors.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <h1 className="h-[85%] w-[85%] flex items-center justify-center text-xl md:text-2xl font-semibold">
          US, 2009: Development of Initial Investment Research Platform
        </h1>
      </div>
    ),
  },
  {
    title: "Germany, 2012",
    description:
      "By 2012, the platform had evolved significantly with the introduction of 54 key research areas. This expansion reflected the company's deep commitment to covering a wide range of factors that influence investment decisions, ranging from fundamental analysis to technical indicators, economic metrics, and perhaps even environmental, social, and governance (ESG) considerations.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <h1 className="h-[85%] w-[85%] flex items-center justify-center text-xl md:text-2xl font-semibold">
          Germany, 2012: Improved System with 54 Key Research Areas
        </h1>
      </div>
    ),
  },
  {
    title: "London, 2017",
    description:
      "By 2017, the platform saw another major enhancement with the introduction of multibagger and probability-based features. A multibagger refers to an investment that multiplies in value over time, and this feature likely incorporated advanced algorithms that could identify stocks or investment opportunities with the potential for exponential returns based on historical patterns and future projections.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <h1 className="h-[85%] w-[85%] flex items-center justify-center text-xl md:text-2xl font-semibold">
          London, 2017: Enhanced Platform with Multibagger and Probability-Based
          Features
        </h1>
      </div>
    ),
  },
  {
    title: "Bengaluru, 2022",
    description:
      "In 2022, the platform reached a new pinnacle of innovation with the integration of Generative AI. This advancement harnessed the power of artificial intelligence to provide deeper insights into both research and investment strategies. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <h1 className="h-[85%] w-[85%] flex items-center justify-center text-xl md:text-2xl font-semibold">
          Bengaluru, 2022: Generative AI Boosts Research and Investment
          Strategies
        </h1>
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
