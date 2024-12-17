"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Interview<span className="text-teal-600">HUB</span>
          </Link>
          <nav
            className="hidden md:flex space-x-8 justify-center items-center
          "
          >
            <Link
              href="/"
              className="text-gray-600 hover:text-teal-600 transition duration-300"
            >
              Home
            </Link>
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
            <Button className="bg-teal-800">Schedule a Interview</Button>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-teal-600 transition duration-300"
            >
              Home
            </Link>
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
      )}
    </header>
  );
};

export default Header;
