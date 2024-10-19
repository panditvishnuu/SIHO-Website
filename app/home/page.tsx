"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import { words } from "@/constants/index";
import { AppleCardsCarouselDemo } from "@/components/carousal";
import NumberTicker from "@/components/ui/number-ticker";
import BlurIn from "@/components/ui/blur-in";
import { FadeText } from "@/components/ui/fade-text";
import { FocusCards } from "@/components/ui/focus-cards";
import { images } from "@/constants/index";
import { BackgroundBoxesDemo } from "@/components/backgroundBoxes";

export function FocusCardsDemo() {
  const cards = [
    { title: "", src: images.image1 },
    { title: "", src: images.image2 },
    { title: "", src: images.image3 },
    { title: "", src: images.image4 },
    { title: "", src: images.image5 },
    { title: "", src: images.image6 },
    { title: "", src: images.image7 },
    { title: "", src: images.image8 },
    { title: "", src: images.image9 },
    { title: "", src: images.image10 },
    { title: "", src: images.image11 },
    { title: "", src: images.image12 },
    { title: "", src: images.image13 },
    { title: "", src: images.image14 },
    { title: "", src: images.image15 },
  ];

  return <FocusCards cards={cards} />;
}

export function GridPatternLinearGradient() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"></p>
      <GridPattern
        width={30}
        height={30}
        x={0}
        y={0}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
}

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen bg-cover bg-center -pt-10 md:pt-0">
        <div className="absolute inset-0 top-0">
          <GridPatternLinearGradient />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen pt-8 md:-mt-20">
          <section className="flex flex-col md:flex-row items-center justify-between m-10 md:m-20 gap-8">
            {/* First Div */}
            <div className="bg-transparent text-black rounded-xl w-full md:w-1/2 mb-6 md:mb-0 p-6 ">
              {/* Typewriter Effect */}
              <TypewriterEffect
                words={words}
                className="text-4xl md:text-3xl font-bold"
              />

              {/* Description Paragraph */}
              <p className="text-lg text-center leading-relaxed mt-4">
                SIHO combines tech-based investment strategies, developed over a
                decade, to identify great companies in India and ride the
                journey using an AI-driven process.
              </p>

              {/* Optional Button or Call to Action */}
              <div className="flex justify-center mt-6">
                <button className=" text-white px-6 py-3 rounded-full font-bold bg-[#202025] hover:bg-[#000000] hover:text-white transition duration-200">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Second Div */}
            <div className="rounded-lg w-full md:w-1/2">
              <Image
                src="https://img.freepik.com/free-vector/employee-working-office-interior-workplace-flat-vector-illustration_1150-37459.jpg?t=st=1728731688~exp=1728735288~hmac=adc4e7dce631c58aff7b0f29ab0ca31352da3cdbf1f6ce1d175a22a038662db5&w=740"
                height={700}
                width={700}
                alt="Office Illustration"
                className="rounded-lg"
              />
            </div>
          </section>
        </div>
      </div>

      <div>
        <AppleCardsCarouselDemo />
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-evenly p-8 bg-gradient-to-r from-blue-50 to-white">
        {/* Card 1 - Experience & CAGR */}
        <div className="bg-white rounded-lg p-6 md:p-8 w-full md:max-w-[45%] h-1/2">
          <div className="text-3xl md:text-4xl text-left md:text-left">
            <span className="text-blue-600 font-bold">
              11 years of experience
            </span>{" "}
            with a compound annual growth rate{" "}
            <span className="font-bold">(CAGR)</span> of more than <br />
            <NumberTicker
              value={29.6}
              decimalPlaces={1}
              className="text-3xl md:text-6xl font-bold pt-3 text-blue-700"
            />{" "}
            <span className="text-blue-700">{"%"}</span>
          </div>
        </div>

        {/* Card 2 - Team Description */}
        <div className="bg-white rounded-lg p-6 md:p-8 w-full md:max-w-[45%] h-1/2">
          <BlurIn
            word="We are a team of -"
            className="text-left text-4xl font-light text-gray-700"
          />
          <div className="flex flex-col space-y-4 pt-6">
            <FadeText
              className="text-2xl md:text-3xl font-medium text-blue-900"
              direction="up"
              framerProps={{ show: { transition: { delay: 0.2 } } }}
              text="- Platform Architects"
            />
            <FadeText
              className="text-2xl md:text-3xl font-medium text-blue-900"
              direction="right"
              framerProps={{ show: { transition: { delay: 0.4 } } }}
              text="- Equity Research Analysts"
            />
            <FadeText
              className="text-2xl md:text-3xl font-medium text-blue-900"
              direction="down"
              framerProps={{ show: { transition: { delay: 0.6 } } }}
              text="- AI Engineers"
            />
            <FadeText
              className="text-2xl md:text-3xl font-medium text-blue-900"
              direction="left"
              framerProps={{ show: { transition: { delay: 0.8 } } }}
              text="- CFAs and MBAs"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full">
        {/* Background Div */}
        <div className="h-screen relative">
          <BackgroundBoxesDemo />
        </div>

        {/* Overlay Div */}
        <div className="absolute inset-0 flex items-center justify-center ">
          <section className="common-gap mt-24 mb-28 md:h-screen flex items-center">
            <div className="container mx-auto mb-9">
              <div className="flex justify-center">
                <div className="slidercircle relative">
                  <div className="circle-one"></div>
                  <div className="circle-two">
                    <div className="circle-arround-two-3 anima">
                      <Image src={images.up} alt="Image1" className="img" />
                    </div>
                    <div className="circle-arround-two-5 anima">
                      <Image src={images.down} alt="Image1" className="img" />
                    </div>
                    <div className="circle-arround-two-4 anima">
                      <Image src={images.exit} alt="Image1" className="img" />
                    </div>
                    <div className="circle-arround-two-1 anima">
                      <Image
                        src={images.companies}
                        alt="Image1"
                        className="img"
                      />
                    </div>
                    <div className="circle-arround-two-2 anima">
                      <Image src={images.brain} alt="Image1" className="img" />
                    </div>
                  </div>
                  <div className="circle-middle">
                    <Image src={images.allocation} alt="Image1" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-center mt-10 text-4xl md:text-6xl font-bold mb-10">
          Simplifying Investing For India
        </h1>
        <FocusCardsDemo />
      </div>
    </>
  );
};

export default Home;
