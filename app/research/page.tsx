import { BorderBeam } from "@/components/ui/border-beam";
import { images } from "@/constants";
import Image from "next/image";
import React from "react";

const Research = () => {
  return (
    <>
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        {/* Left Div - Image */}

        {/* Right Div - Paragraph with Heading */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 bg-gray-100 rounded-lg flex flex-col p-4">
          <div className="relative flex h-auto p-6 py-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap  from-black to-gray-300/80 bg-clip-text text-left text-xl leading-none text-gray-800 ">
              <h1 className="px-4 text-left text-3xl md:text-4xl font-semibold mb-4">
                Game Changing
              </h1>
              At SIHO Research, our Game Theory approach integrates probability
              analysis, conviction-based position sizing, and strategic
              investments in early-stage companies with high growth potential.
              We continuously monitor these companies and regularly introduce
              new promising ventures to our portfolio. This disciplined,
              research-driven strategy is designed to maximize long-term wealth
              generation by capitalizing on emerging opportunities while
              managing risk with precision.
            </span>
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={images.research1}
            alt="Game Changing Research"
            width={400} // Reduced image size
            height={300}
            className="object-contain rounded-lg "
            loading="lazy" // Lazy loading the image
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between p-4">
        {/* Left Div - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={images.bigbets}
            alt="Big Bets Research"
            width={400} // Reduced image size
            height={300}
            className="object-cover rounded-lg "
            loading="lazy" // Lazy loading the image
          />
        </div>

        {/* Right Div - Paragraph with Heading */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 bg-gray-100 rounded-lg flex flex-col p-4">
          <div className="relative flex h-auto p-6 py-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap  from-black to-gray-300/80 bg-clip-text text-left text-xl leading-none text-gray-800 ">
              <h1 className="px-4 text-left text-3xl md:text-4xl font-semibold mb-4">
                Big Bets
              </h1>
              At SIHO Research, our investment strategy involves analyzing over
              100 key factors to identify high-potential opportunities. This
              comprehensive process is fully managed by our proprietary
              algorithmic engine, which handles every aspect from opportunity
              identification and in-depth analysis to buying, monitoring,
              stop-loss management, and position reduction. Our platform has
              undergone rigorous back-testing over a seven-year period and has
              been successfully operating live for more than a year,
              demonstrating its reliability and effectiveness in real-world
              market conditions.
            </span>
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        {/* Left Div - Paragraph with Heading */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 bg-gray-100 rounded-lg flex flex-col p-4">
          <div className="relative flex h-auto p-6 py-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap  from-black to-gray-300/80 bg-clip-text text-left text-xl leading-none text-gray-800 ">
              <h1 className="px-4 text-left text-3xl md:text-4xl font-semibold mb-4">
                Algorithmic Trading
              </h1>
              Our investment strategy involves analyzing over 100 key factors to
              identify high-potential opportunities. This comprehensive process
              is fully managed by our proprietary algorithmic engine, which
              handles every aspect from opportunity identification and in-depth
              analysis to buying, monitoring, stop-loss management, and position
              reduction. Our platform has undergone rigorous back-testing over a
              seven-year period and has been successfully operating live for
              more than a year, demonstrating its reliability and effectiveness
              in real-world market conditions.
            </span>
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>

        {/* Right Div - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={images.algotrade}
            alt="Algorithmic Trading"
            width={400} // Reduced image size
            height={300}
            className="object-cover rounded-lg "
            loading="lazy" // Lazy loading the image
          />
        </div>
      </div>
    </>
  );
};

export default Research;
