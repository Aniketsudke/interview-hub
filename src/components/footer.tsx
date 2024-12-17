import Link from "next/link";
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Interview<span className="text-teal-600">HUB</span>
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8">
            <Link
              href="/services"
              className="text-gray-600 hover:text-teal-600 transition duration-300"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-teal-600 transition duration-300"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-teal-600 transition duration-300"
            >
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-teal-600 transition duration-300"
          >
            <Facebook size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-teal-600 transition duration-300"
          >
            <Twitter size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-teal-600 transition duration-300"
          >
            <LinkedIn size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-teal-600 transition duration-300"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
