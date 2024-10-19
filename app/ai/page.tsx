import { images } from "@/constants";
import Image from "next/image";

const AI = () => {
  return (
    <>
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:ml-16 md:mt-8">
        {/* Left Div - Paragraph with Heading */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0 bg-blue-100 rounded-lg flex flex-col p-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-left pb-4">
            SIHO Platform Highlights
          </h2>
          <div className="max-h-80 overflow-y-auto custom-scrollbar">
            <ul className="space-y-6 text-gray-700 pr-4">
              <li className="flex items-start">
                <span className="text-white p-2 mr-4">✔️</span>
                <p className="text-lg leading-relaxed">
                  Our platform leverages advanced software programming and AI to
                  manage the end-to-end equity research and execution process.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-white p-2 mr-4">✔️</span>
                <p className="text-lg leading-relaxed">
                  Evaluates companies on macroeconomic factors, fundamentals,
                  technical analysis, competitive moats, and business potential
                  to make precise, informed investment decisions.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-white p-2 mr-4">✔️</span>
                <p className="text-lg leading-relaxed">
                  Fully automates buying, selling, stop-loss, averaging up, and
                  averaging down processes.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-white p-2 mr-4">✔️</span>
                <p className="text-lg leading-relaxed">
                  Long-term strategy: Delivered a 29.6% CAGR over 11 years in
                  live markets and 24.5% over 20 years of backtesting.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-white p-2 mr-4">✔️</span>
                <p className="text-lg leading-relaxed">
                  Mid-term strategy: Achieved 41.19% CAGR over 5 years,
                  outperforming the small-cap index (29%), mid-cap index (23%),
                  and Sensex (18%).
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-white p-2 mr-4">✔️</span>
                <p className="text-lg leading-relaxed">
                  IT sector performance: Delivered 33.5% CAGR over 5 years,
                  beating both the IT index and leading IT-focused mutual funds.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-white p-2 mr-4">✔️</span>
                <p className="text-lg leading-relaxed">
                  A data-driven, AI-powered approach ensures accuracy and
                  reliability in managing investments for sustained long-term
                  growth.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Div - Image */}
        <div className="w-full md:w-2/3 flex justify-center">
          <Image
            src={images.AI}
            alt="AI Platform"
            width={600} // Reduced image size
            height={500}
            className="object-contain rounded-lg"
            loading="lazy" // Lazy loading the image
          />
        </div>
      </div>

      {/* Second Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Investment Performance Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-50 rounded-lg shadow-lg">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Duration
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 bg-yellow-200">
                    Absolute Return
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 bg-yellow-200">
                    XIRR
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Small Cap Index Avg. Annual Returns
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Mid Cap Index Avg. Annual Returns
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Sensex Avg. Annual Returns
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Year till Date
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold bg-yellow-100">
                    50.40%
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold bg-yellow-100">
                    50.40%
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">33%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">33%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">14.84%</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 text-sm text-gray-600">1 Year</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold bg-yellow-100">
                    52.02%
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold bg-yellow-100">
                    52.02%
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">53.26%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">53%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">23.02%</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 text-sm text-gray-600">2 Year</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold bg-yellow-100">
                    208.00%
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold bg-yellow-100">
                    44.20%
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">38%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">37%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">16.05%</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 text-sm text-gray-600">5 Year</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold bg-yellow-100">
                    561.00%
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold bg-yellow-100">
                    41.19%
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">29.00%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">23.00%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">18.00%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AI;
