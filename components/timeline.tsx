import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { images } from "@/constants";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="bg-slate-200 dark:bg-neutral-800 rounded-lg p-6 shadow-md hover:shadow-lg flex flex-col md:flex-row md:items-center">
          <Image
            src={images.siho}
            alt="SIHO Research Logo"
            width={50}
            height={50}
            className="mr-6 mb-4 md:mb-0"
          />
          <div>
            <h3 className="text-neutral-900 dark:text-white text-xl font-semibold mb-1">
              SIHO Research
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
              2024 - Present
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-base">
              Founded SIHO Research, simplifying investing. Delivered a CAGR of
              29.6% over 11 years in live environments, and 24.5% over 20 years
              in backtesting.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      logo: "/logos/chargebee-logo.png",
      content: (
        <div className="bg-slate-200 dark:bg-neutral-800 rounded-lg p-6 shadow-lg flex flex-col md:flex-row md:items-center">
          <Image
            src={images.chargeebee}
            alt="Chargebee Logo"
            width={50}
            height={50}
            className="mr-6 mb-4 md:mb-0"
          />
          <div>
            <h3 className="text-neutral-900 dark:text-white text-xl font-semibold mb-1">
              Chargebee
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
              2023 - Present
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              AI leader at Chargebee, Director of Engineering. Managed 8-figure
              income projects.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2021-2022",
      logo: "/logos/walmart-logo.png",
      content: (
        <div className="bg-slate-200 dark:bg-neutral-800 rounded-lg p-6 shadow-lg flex flex-col md:flex-row md:items-center">
          <Image
            src={images.walmart}
            alt="Walmart Logo"
            width={50}
            height={50}
            className="mr-6 mb-4 md:mb-0"
          />
          <div>
            <h3 className="text-neutral-900 dark:text-white text-xl font-semibold mb-1">
              Walmart
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
              2021 - 2022
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              Joined Walmart as Senior Manager. Led Compensation and Benefits
              Team.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2018-2020",
      logo: "/logos/sap-logo.png",
      content: (
        <div className="bg-slate-200 dark:bg-neutral-800 rounded-lg p-6 shadow-lg flex flex-col md:flex-row md:items-center">
          <Image
            src={images.sap}
            alt="SAP Logo"
            width={50}
            height={50}
            className="mr-6 mb-4 md:mb-0"
          />
          <div>
            <h3 className="text-neutral-900 dark:text-white text-xl font-semibold mb-1">
              SAP
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
              2018 - 2020
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              Software Development Architect at SAP Bangalore. Developed SAP’s
              commerce platform.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2015 - 2017",
      logo: "/logos/bat-logo.png",
      content: (
        <div className="bg-slate-200 dark:bg-neutral-800 rounded-lg p-6 shadow-lg flex flex-col md:flex-row md:items-center">
          <Image
            src={images.bat}
            alt="BAT Logo"
            width={50}
            height={50}
            className="mr-6 mb-4 md:mb-0"
          />
          <div>
            <h3 className="text-neutral-900 dark:text-white text-xl font-semibold mb-1">
              British American Tobacco
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
              2021 - 2022
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              Led digital transformation initiatives at BAT, enhancing
              operational efficiencies and digital marketing strategies across
              global markets.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2013 - 2014",
      logo: "/logos/adidas-logo.png",
      content: (
        <div className="bg-slate-200 dark:bg-neutral-800 rounded-lg p-6 shadow-lg flex flex-col md:flex-row md:items-center">
          <Image
            src={images.adidas}
            alt="Adidas Logo"
            width={50}
            height={50}
            className="mr-6 mb-4 md:mb-0"
          />
          <div>
            <h3 className="text-neutral-900 dark:text-white text-xl font-semibold mb-1">
              Adidas
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
              2020 - 2021
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              Headed global product marketing at Adidas, spearheading
              sustainability campaigns and innovative product designs.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2009 - 2011",
      logo: "/logos/bank-of-america-logo.png",
      content: (
        <div className="bg-slate-200 dark:bg-neutral-800 rounded-lg p-6 shadow-lg flex flex-col md:flex-row md:items-center">
          <Image
            src={images.boi}
            alt="Bank of America Logo"
            width={50}
            height={50}
            className="mr-6 mb-4 md:mb-0"
          />
          <div>
            <h3 className="text-neutral-900 dark:text-white text-xl font-semibold mb-1">
              Bank of America
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
              2018 - 2020
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              Managed financial services and innovation initiatives, optimizing
              operational processes and enhancing customer experience.
            </p>
          </div>
        </div>
      ),
    },
    
    {
      title: "2007",
      logo: "/logos/home-university-logo.png",
      content: (
        <div className="bg-slate-200 dark:bg-neutral-800 rounded-lg p-6 shadow-lg flex flex-col md:flex-row md:items-center">
          <Image
            src={images.home}
            alt="Home University Logo"
            width={50}
            height={50}
            className="mr-6 mb-4 md:mb-0"
          />
          <div>
            <h3 className="text-neutral-900 dark:text-white text-xl font-semibold mb-1">
              Launched Home University
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
              2013 - 2015
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              Founded Home University, an online learning platform providing
              accessible education to thousands of students globally.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2005",
      logo: "/logos/infosys-logo.png",
      content: (
        <div className="bg-slate-200 dark:bg-neutral-800 rounded-lg p-6 shadow-lg flex flex-col md:flex-row md:items-center">
          <Image
            src={images.infosys}
            alt="Infosys Logo"
            width={50}
            height={50}
            className="mr-6 mb-4 md:mb-0"
          />
          <div>
            <h3 className="text-neutral-900 dark:text-white text-xl font-semibold mb-1">
              Infosys
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
              2015 - 2018
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              Worked as a software engineer at Infosys, developing large-scale
              enterprise solutions for Fortune 500 clients.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
