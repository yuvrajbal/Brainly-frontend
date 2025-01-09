import { useEffect, useState } from "react";
import { ArrowRight, Check, Loader2, SparklesIcon, Star } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
type PricingCardProps = {
  plan: String;
  price: number;
  billing: String;
  features: String[];
  popular: Boolean;
  onSelect: () => void;
};

const PricingCard = ({
  plan,
  price,
  billing,
  features,
  popular,
  onSelect,
}: PricingCardProps) => {
  // Calculate annual price and savings
  const monthlyEquivalent = billing === "year" ? price / 12 : price;
  const annualOriginalPrice = 9.99 * 12;
  const annualSavings = annualOriginalPrice - price;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleButtonClick = () => {
    setIsLoading(true);
    onSelect();
  };
  return (
    <div
      className={`
        relative w-full max-w-sm rounded-2xl overflow-hidden
        transition-all duration-300 hover:scale-105
        bg-white dark:bg-gray-800
        shadow-md hover:shadow-xl
        border border-gray-200 dark:border-gray-700
        ${popular ? "border-2 border-indigo-500 dark:border-indigo-400" : ""}
      `}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-1 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
            <Star className="w-4 h-4" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="p-8 space-y-4 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          BrainlyAI Pro {plan}
        </h3>

        {/* Pricing */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-gray-500 dark:text-gray-400 text-lg">$</span>
            <span className="text-5xl font-bold text-gray-900 dark:text-white">
              {price}
            </span>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              per {billing}
            </p>

            {/* Show monthly equivalent for annual plans */}
            {billing === "year" && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                ${monthlyEquivalent.toFixed(2)}/mo when billed annually
              </p>
            )}

            {/* Original price and savings for annual plans */}
            {billing === "year" && (
              <div className="mt-2 space-y-1">
                <p className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  ${annualOriginalPrice} original price
                </p>
                <p className="text-sm text-green-500 font-medium">
                  Save ${annualSavings} annually
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="p-8 space-y-6 border-t border-gray-100 dark:border-gray-700">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="p-8 border-t border-gray-100 dark:border-gray-700">
        <button
          onClick={handleButtonClick}
          className={`
            group w-full py-3 px-4 rounded-xl font-semibold
            transition-all duration-200 flex items-center justify-center gap-2
            ${
              popular
                ? "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
            }  ${isLoading ? "opacity-75 cursor-not-allowed" : ""}
          `}
        >
          Subscribe Now
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          )}
        </button>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth/signin?redirect=/upgrade");
      return;
    }
    if (status === "cancelled") {
      toast.error("Payment was cancelled. Please try again.");
    }
  }, [status, navigate]);
  const commonFeatures = [
    "Unlimited AI Chat Responses",
    "Step-by-Step Solutions",
    "24/7 AI Assistance",
    "Unlimited Document Uploads",
  ];

  const annualFeatures = [
    ...commonFeatures,
    "Priority Response Time",
    "API access",
    "Save $21 Annually",
  ];

  const handleSubscribe = async (plan: string) => {
    console.log(`Selected ${plan} plan`);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/create-subscription`,
        {
          duration: plan,
        },
        {
          headers: {
            authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      if (response.data) {
        window.location.href = response.data?.session?.url;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" min-h-screen bg-gradient-to-b from-gray-100  to-white  dark:from-gray-900 dark:to-gray-800 py-16">
      <Toaster richColors />

      {/* Header Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-xl">
              <SparklesIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Simple, transparent pricing
            </span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Choose Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Perfect Plan
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get unlimited access to BrainlyAI Pro features and supercharge your
            productivity
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            plan="Monthly"
            price={9.99}
            billing="month"
            features={commonFeatures}
            popular={false}
            onSelect={() => handleSubscribe("month")}
          />

          <PricingCard
            plan="Annual"
            price={99.99}
            billing="year"
            features={annualFeatures}
            popular={true}
            onSelect={() => handleSubscribe("year")}
          />
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700/50">
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              30-day money-back guarantee
            </span>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Have questions?{" "}
            <a
              href="/welcome/#faq"
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              Check our FAQ
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
