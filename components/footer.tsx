import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">SIHO Research</h2>
            <p className="text-gray-400">
              SIHO is a cutting-edge stock research and analytics firm dedicated
              to providing high-quality, data-driven investment insights. We
              leverage the latest technology, including AI, ML, and both
              fundamental and technical analysis, to evaluate and execute
              investment opportunities. As our own biggest customer, we
              currently manage our own money and do not manage other people's
              money or provide advisory services. Our mission is to simplify
              investing for investors.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:ml-36">
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul>
              <li>
                <a
                  href="/home"
                  className="hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/research"
                  className="hover:text-white transition duration-300"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center md:text-left">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} SIHO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
