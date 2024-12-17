import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

interface PricingTierProps {
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  features,
  isPopular,
}) => (
  <div
    className={`bg-white p-8 rounded-lg shadow-md ${
      isPopular ? "border-2 border-teal-500" : ""
    }`}
  >
    {isPopular && (
      <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-4xl font-bold mb-6">${price}</p>
    <ul className="mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <Check className="text-green-500 mr-2" size={20} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button
      className={` w-full block text-center py-2 px-4 rounded ${
        isPopular
          ? "bg-teal-600 text-white hover:bg-teal-700"
          : "bg-gray-200 text-800 hover:bg-teal-700 hover:text-white"
      } transition duration-300`}
    >
      Choose Your Plan
    </Button>
  </div>
);

export default function Pricing() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Pricing Plans
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier
            title="Basic Package"
            price={99}
            features={[
              "1 Mock Interview",
              "Resume Feedback",
              "Basic LinkedIn Review",
              "Email Support",
            ]}
            isPopular={false}
          />
          <PricingTier
            title="Basic Package"
            price={99}
            features={[
              "1 Mock Interview",
              "Resume Feedback",
              "Basic LinkedIn Review",
              "Email Support",
            ]}
            isPopular={true}
          />
          <PricingTier
            title="Basic Package"
            price={99}
            features={[
              "1 Mock Interview",
              "Resume Feedback",
              "Basic LinkedIn Review",
              "Email Support",
            ]}
            isPopular={false}
          />
        </div>
      </div>
    </div>
  );
}
