"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UserCheck,
  FileText,
  Linkedin,
  Users,
  DollarSign,
  Award,
  TrendingUp,
  Check,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Pricing from "@/components/pricing";

const services = [
  "Mock Interviews",
  "Interview Preparation Resources",
  "One-On-One Mentorship",
  "Resume Building",
  "Expert Feedback",
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  console.log(mounted);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    // dev2 only
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-white to-pink-50">
        {/* Background decoration */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[20vh] bg-[#f8f9fa]"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)",
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Feeling{" "}
                <span className="text-teal-700 animate-pulse">Nervous</span>{" "}
                About Interview?
              </h1>
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Prepare <span className="text-teal-600">#Confidently</span>
                </h2>
                <p className="text-gray-600">With Our Hub Services</p>
              </div>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={service}
                    className={`flex items-center space-x-3  animate-fade-in`}
                    style={{
                      animationDelay: `${index * 200}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <Check className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Schedule A Mock Interview →
                </Link>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500 line-through">₹999</span>
                  <span className="text-teal-600 font-semibold">
                    249/- only
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-teal-800 transform hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-800/40 z-10"></div>
                <Image
                  src="/hero.png"
                  alt="One-on-One Sessions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    One-on-One Sessions
                  </h3>
                  <p className="text-sm md:text-base opacity-90">
                    Schedule 1:1 mock interviews with experts from top IT
                    companies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <UserCheck size={48} className="text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                One-to-One Mock Interviews
              </h3>
              <p className="text-gray-600">
                Practice with industry experts and receive personalized feedback
                to improve your interview skills.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <FileText size={48} className="text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Resume Building</h3>
              <p className="text-gray-600">
                Craft a compelling resume that highlights your strengths and
                catches the eye of recruiters.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Linkedin size={48} className="text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                LinkedIn Profile Optimization
              </h3>
              <p className="text-gray-600">
                Enhance your online presence and attract potential employers
                with an optimized LinkedIn profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Users size={48} className="text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Personalized Coaching
              </h3>
              <p className="text-center text-gray-600">
                Tailored guidance to meet your specific needs and goals.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <DollarSign size={48} className="text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-center text-gray-600">
                Competitive rates to fit various budgets without compromising
                quality.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Award size={48} className="text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
              <p className="text-center text-gray-600">
                Learn from industry professionals with years of experience.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp size={48} className="text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Results-driven</h3>
              <p className="text-center text-gray-600">
                Our focus is on helping you achieve your career goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "The interviewer was crucial in my interview preparation. I have
                a friend who’s about to apply for the same program, and
                Interviewhub helped me prepare for it. Thanks again for all your
                support! "
              </p>
              <div className="flex items-center">
                <Image
                  src="/suraj.jpg"
                  alt="Client"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Suraj Kawade</p>
                  <p className="text-gray-500">Big Data Admi</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "It was a fantastic experience being interviewed by such
                professionals. I gained valuable insights into my weaknesses and
                the chance to improve them. Thank you for the opportunity!"
              </p>
              <div className="flex items-center">
                <Image
                  src="/user2.jpg"
                  alt="Client"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Krishna Ghate</p>
                  <p className="text-gray-500">Software Testing</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "It was a great experience to have a mock interview, especially
                after not interviewing for many years. It helped me get back
                into the rhythm. The feedback was valuable, highlighting areas
                to focus on and encouraging me to keep up the things I was doing
                well. Overall, I’m very satisfied with the service provided by
                Interviewhub"
              </p>
              <div className="flex items-center">
                <Image
                  src="/user3.jpg"
                  alt="Client"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Akshay Shelke</p>
                  <p className="text-gray-500">Data Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Trusted By Leading Companies
          </h2>
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center justify-center">
                <Image
                  src="/google.png"
                  alt="Google"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/microsoft.png"
                  alt="Microsoft"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/amazon.png"
                  alt="Amazon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <Pricing />
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How do mock interviews work?
                </AccordionTrigger>
                <AccordionContent>
                  Our mock interviews are conducted online via video call with
                  experienced industry professionals. They simulate real
                  interview conditions and provide immediate feedback on your
                  performance, including areas for improvement and practical
                  tips.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What's included in the resume building service?
                </AccordionTrigger>
                <AccordionContent>
                  Our resume building service includes a comprehensive review of
                  your current resume, professional rewriting, ATS optimization,
                  and formatting. We also provide a cover letter template and
                  LinkedIn profile recommendations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How long does the process take?
                </AccordionTrigger>
                <AccordionContent>
                  The timeline varies depending on the service. Mock interviews
                  can be scheduled within 48 hours. Resume building typically
                  takes 3-5 business days, and LinkedIn optimization takes 2-3
                  business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Do you offer industry-specific preparation?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we have experts from various industries including tech,
                  finance, healthcare, and marketing. They provide targeted
                  preparation based on your specific industry and role
                  requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What is your refund policy?</AccordionTrigger>
                <AccordionContent>
                  We offer a 100% satisfaction guarantee. If you're not
                  satisfied with our services, we offer a full refund within 7
                  days of purchase or will work with you to address your
                  concerns.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-20">
        <div className="container mx-auto px-4">
          <div className="bg-teal-600 rounded-3xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16">
              {/* Left side with illustration */}
              <div className="w-full md:w-1/3 mb-8 md:mb-0 relative animate-fade-in-up">
                <div className="relative w-64 h-64 mx-auto">
                  <Image
                    src="/s_cta_box.svg"
                    alt="Educator Illustration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right side with content */}
              <div className="w-full md:w-2/3 md:pl-8 text-white space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Join our education team for inspiration and development!
                </h2>
                <p className="text-lg md:text-xl text-white/90">
                  Join our dynamic team of educators focused on innovation and
                  student success.
                </p>
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors duration-300 transform hover:scale-105"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
