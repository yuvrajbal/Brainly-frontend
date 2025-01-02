import { useEffect } from "react";
import { Check } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";

type PricingCardProps = {
  plan: String;
  price: String;
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
  return (
    <div
      className={`w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-200 hover:shadow-lg ${
        popular ? "border-2 border-indigo-500 relative" : ""
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="p-6 space-y-2 text-center">
        <h3 className="text-2xl font-bold">BrainlyAI Pro {plan}</h3>
        <div className="space-y-1">
          <p className="text-4xl font-bold">${price}</p>
          <p className="text-sm text-gray-500">per {billing}</p>
        </div>
      </div>

      {/* Features */}
      <div className="p-6 space-y-4 border-t border-gray-100">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-indigo-500 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-100">
        <button
          onClick={onSelect}
          className={`w-full py-2.5 px-4 rounded-lg font-semibold transition-all duration-200 ${
            popular
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
          }`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin?redirect=/upgrade");
      return;
    }
  }, []);
  const commonFeatures = [
    "Unlimited AI Chat Responses",
    "Advanced Question Analysis",
    "Step-by-Step Solutions",
    "Multiple Subject Support",
    "24/7 AI Assistance",
    "Personalized Learning Path",
  ];

  const annualFeatures = [
    ...commonFeatures,
    "Priority Response Time",
    "Advanced Study Analytics",
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
  const handleCancelSub = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/cancel-subscription`,
        {
          headers: {
            authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log("frotnend error while canceling subscription", err);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-gray-600">
          Get unlimited access to BrainlyAI Pro features
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <PricingCard
          plan="Monthly"
          price="10"
          billing="month"
          features={commonFeatures}
          popular={false}
          onSelect={() => handleSubscribe("month")}
        />

        <PricingCard
          plan="Annual"
          price="99"
          billing="year"
          features={annualFeatures}
          popular={true}
          onSelect={() => handleSubscribe("year")}
        />
      </div>

      <p className="text-center mt-6 text-sm text-gray-500">
        All plans include a 7-day money-back guarantee
      </p>
      <Button
        variant="secondary"
        text="Cancel Subscription"
        onClick={handleCancelSub}
      />
    </div>
  );
};

export default PricingSection;
