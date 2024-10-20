"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { images } from "@/constants";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Execution Driven By
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Knowledge",
    title:
      "Investing in equities requires a deep understanding of business. Our team of experienced equity analysts with over 15 years of market expertise. We thoroughly analyse financial statements, valuations, sector trends, and competitive landscapes, using technical analysis and macroeconomic insights to guide our decisions.",
    src: "https://img.freepik.com/free-photo/business-person-futuristic-business-environment_23-2150970197.jpg?t=st=1729404112~exp=1729407712~hmac=bb0635e50325ba28d77ad568d545bfec7ca4f242f502abebf7065835d82447f5&w=740",
  },
  {
    category: "Tech & AI Based Process",
    title:
      "With over 4,500 companies listed on the Indian market, we use proprietary algorithms to filter and identify the best investment opportunities. Our decisions are powered by SIHO's advanced AI platform, which manages investment positions through a well-defined workflow.",
    src: "https://img.freepik.com/free-photo/person-using-ar-technology-perform-their-occupation_23-2151137475.jpg?t=st=1729156170~exp=1729159770~hmac=0badac16c1b974cec3560d3bf9fb01fec10a2385aa0092a56c4b6da50ba1c154&w=996",
  },
  {
    category: "Conviction",
    title:
      "We believe strongly in the power of equity investing and the immense growth potential of India. As the country continues its growth trajectory, we are confident that its entrepreneurs will build exceptional businesses. In the past two decades, India has produced over 140 companies that have delivered 100x returns.",
    src: "https://img.freepik.com/premium-photo/full-shot-people-coins_978521-55740.jpg?w=740",
  },

  {
    category: "Analytical",
    title:
      "SIHO employs a rigorous analytical approach to evaluate investment opportunities. This involves collecting and scrutinizing vast amounts of data, including macroeconomic indicators, company fundamentals, and market trends. By leveraging advanced analytical tools and methodologies, SIHO is able to discern patterns and insights that guide investment decisions.",
    src: "https://img.freepik.com/free-photo/technology-hologram-indoors_23-2151833350.jpg?t=st=1729404143~exp=1729407743~hmac=40b6251c678b09fde21aff12ba877417b1b07506c175f09595b0431c2ccff6d8&w=360",
  },
  {
    category: "Innovative",
    title:
      "At the core of SIHO’s operational philosophy is innovation. The platform integrates the latest advancements in technology, such as artificial intelligence and machine learning, to refine its investment strategies. This innovation extends to the development of proprietary algorithms that analyze market conditions and predict trends, giving SIHO a competitive edge.",
    src: "https://img.freepik.com/premium-vector/idea-development-businessman-watering-bulb_1050284-531.jpg?w=740",
  },
  {
    category: "Strategic",
    title:
      "SIHO’s investment methodology is rooted in strategic thinking. Every decision is made with a long-term vision in mind, focusing on sustainable growth rather than short-term gains. The strategic framework considers various factors such as market dynamics, company performance, and investor goals.",
    src: "https://img.freepik.com/premium-photo/businesspeople-gathered-around-table-discussing-project-reviewing-graphs_885831-173215.jpg?w=740",
  },
];
