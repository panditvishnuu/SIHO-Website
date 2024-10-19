import { StickyScrollRevealDemo } from "@/components/scrollReveal";
import { MarqueeDemo } from "@/components/TestimonialSlider";
import { TimelineDemo } from "@/components/timeline";
import { images } from "@/constants";
import { BarChart } from "@mui/x-charts";
import Image from "next/image";
import React from "react";

const webinars = [
  {
    id: 1,
    title: "The Importance of Mindset in Investing",
    description: "Common Myths about Stock Market and how to overcome",
  },
  {
    id: 2,
    title: "The Power of Equity Investing",
    description:
      "Compare equity with other asset classes and the power of compounding",
  },
  {
    id: 3,
    title: "Simplifying Investing",
    description: "Use best practices of investing",
  },
  {
    id: 4,
    title: "10x in 10 years",
    description: "Explore the possibilities",
  },
  {
    id: 5,
    title: "Using Tech and AI in Investing",
    description: "Automate the process",
  },
  {
    id: 6,
    title: "Your Investment Journey to Financial Freedom",
    description: "Join us",
  },
];

const points = [
  {
    id: 1,
    text: "Have just 10 mins a day and want to build wealth.",
  },
  {
    id: 2,
    text: "Never invested before but eager to generate passive income.",
  },
  {
    id: 3,
    text: "Have invested before but faced losses and are now ready for a better strategy.",
  },
  {
    id: 4,
    text: "Busy schedule, yet determined to create passive wealth.",
  },
  {
    id: 5,
    text: "Looking for an alternative income source to secure your future.",
  },
  {
    id: 6,
    text: "Passionate about creating a freedom lifestyle through smart investing.",
  },
];

const data = [
  {
    image: images.webinar1,
    title: "Engaged Participants",
    description:
      "Attendees have the opportunity to connect with like-minded individuals.",
  },
  {
    image: images.webinar2,
    title: "Knowledgeable Speaker",
    description:
      "15 years of experience of investing in equities and building softwares to simplify the investing process.",
  },
  {
    image: images.webinar3,
    title: "Relevant for all",
    description: "Attendees are from different walks of life and age groups.",
  },
];

const Webimages = [
  images.image11,
  images.image1,
  images.image5,
  images.image2,
  images.image15,
  images.image13,
];

const page = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 rounded-lg">
        <div className="md:w-1/3 w-full mb-4 md:mb-0">
          <Image
            src={images.nitin}
            alt="About Founder"
            className="rounded-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto p-6   rounded-lg">
          {/* Header Section */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Achieve Financial Freedom with Confidence
            </h2>
            <p className="mt-2 text-gray-600">
              Empower your wealth with SIHO's proven investment framework,
              designed to simplify investing and maximize returns with just 10
              minutes a day. Let your money work for you—effortlessly.
            </p>
          </div>

          {/* Divider */}
          <hr className="my-6 border-gray-200" />

          {/* About Section */}
          <div className="flex items-center">
            <div>
              <h3 className="text-2xl md:text-4xl text-gray-800 font-semibold">
                Nitin Kumar
              </h3>
              <p className="mt-2 text-gray-600">
                Nitin Kumar is a forward-thinking investor with a passion for
                leveraging technology to enhance financial success. Combining
                his expertise in meditation, leadership, and investing, Nitin
                has built a strong track record of identifying high-growth
                opportunities and consistently delivering impressive returns.
                His dedication to solving complex, real-world challenges has
                enabled him to lead others toward financial independence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
            Webinar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinars.map((webinar) => (
              <div
                key={webinar.id}
                className="p-6  rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white text-lg font-bold">
                    {webinar.id}
                  </span>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">
                    {webinar.title}
                  </h3>
                </div>
                <p className="text-gray-600">{webinar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
            Webinar is for people looking who
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side: Points */}
            <div className="space-y-6">
              {points.map((point) => (
                <div
                  key={point.id}
                  className="flex items-center bg-gray-800 text-white rounded-lg p-4 shadow-lg"
                >
                  <span className="flex items-center justify-center h-10 w-10 min-w-[2.5rem] min-h-[2.5rem] rounded-full bg-orange-500 text-white text-lg font-bold">
                    {point.id}
                  </span>
                  <p className="ml-4 text-lg font-medium leading-6">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Right side: Images */}
            <div className="grid grid-cols-2 gap-4">
              {Webimages.map((img, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={img}
                    alt={`webinar audience ${index + 1}`}
                    className="w-full h-40 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center min-h-screen  p-6">
        <div>
          <Image
            src="https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951437.jpg?t=st=1729308227~exp=1729311827~hmac=9b6dd8c2f58cd9e9ace4720a43fe227384f565b83bd507fd970c3a77173d0440&w=360"
            alt=""
            height={430}
            width={430}
            className="rounded-lg "
          />
        </div>
        <div className="bg-gray-600 text-white rounded-lg shadow-xl w-full max-w-md p-6 space-y-6">
          <h2 className="text-3xl font-bold text-center">Join Webinar</h2>
          <p className="text-center text-lg">
            Sign up now to join our exciting webinar and get all the investment
            insights you need to achieve financial freedom!
          </p>

          <form className="space-y-4">
            {/* Full Name Input */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="px-4 py-2 rounded  text-gray-800 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="px-4 py-2 rounded  text-gray-800 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Date Input */}
            <div className="flex flex-col">
              <label htmlFor="date" className="text-sm font-medium mb-1">
                Webinar Date
              </label>
              <input
                type="date"
                id="date"
                className="px-4 py-2 rounded  text-gray-800 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Time Input */}
            <div className="flex flex-col">
              <label htmlFor="time" className="text-sm font-medium mb-1">
                Webinar Time
              </label>
              <input
                type="time"
                id="time"
                className="px-4 py-2 rounded  text-gray-800 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Join Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Join Webinar
              </button>
            </div>
          </form>

          {/* Extra Info */}
          <div className="text-center text-sm text-gray-400">
            * We will send you a reminder before the webinar begins.
          </div>
        </div>
      </div>

      <TimelineDemo />

      <section className=" py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Previous <span className="text-orange-500">Webinar Photos</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                className=" shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#register"
              className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>

      <h1 className="text-center font-semibold text-4xl md:text-5xl mt-6">
        Investing Journey
      </h1>

      <StickyScrollRevealDemo />

      <h1 className="text-2xl md:text-4xl font-semibold text-center">
        Financial Freedom
      </h1>
      <div className="flex justify-center">
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: [
                "2011",
                "2012",
                "2013",
                "2014",
                "2015",
                "2016",
                "2017",
                "2018",
                "2019",
                "2020",
                "2021",
                "2022",
                "2023",
                "2024",
              ],
            },
          ]}
          series={[
            {
              data: [
                1, 1.42, 2.3, 2.6, 4.4, 4.51, 6.15, 6.5, 7.11, 8.63, 13.43,
                15.29, 20.43, 26.93,
              ],
            },
          ]}
          width={600} // Reduced image size
          height={500}
        />
      </div>

      <h1 className="text-2xl md:text-5xl font-semibold text-center mt-10 mb-4">
        Testimonials
      </h1>

      <MarqueeDemo />
    </>
  );
};

export default page;
