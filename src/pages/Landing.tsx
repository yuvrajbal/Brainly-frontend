import { useState } from "react";
import {
  Sun,
  Moon,
  Search,
  Link,
  Youtube,
  Twitter,
  Brain,
  Zap,
} from "lucide-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Brainly
            </span>
            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Key Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Pricing
              </a>
            </div>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
              <Moon className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

const Hero = () => (
  <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Transform Your Knowledge Management with AI
          </h1>
          <p className="text-xl opacity-90">
            Organize, connect, and discover insights from your information using
            powerful AI technology.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Get Started Free
          </button>
        </div>
        <div className="relative">
          <img
            src="/api/placeholder/600/400"
            alt="Dashboard Preview"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6 text-blue-600" />,
      title: "AI-Powered Search",
      description:
        "Natural language search that understands context and intent",
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: "Smart Connections",
      description: "Automatically discover relationships between your content",
    },
    {
      icon: <Link className="w-6 h-6 text-blue-600" />,
      title: "Universal Content Support",
      description: "Support for URLs, tweets, YouTube videos, and more",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        How It Works
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <Twitter className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Add Content
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Paste URLs, tweets, or YouTube links. Our AI automatically
                processes and indexes the content.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                AI Processing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI analyzes content, extracts key information, and creates
                connections.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/api/placeholder/500/400"
          alt="How it works"
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  </section>
);

const PricingPlans = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      features: [
        "10 AI searches per day",
        "Basic content addition",
        "Standard support",
        "Web interface access",
      ],
      cta: "Get Started",
    },
    {
      name: "Pro",
      price: "29",
      features: [
        "Unlimited AI searches",
        "Unlimited content addition",
        "Priority support",
        "API access",
        "Advanced analytics",
        "Custom integrations",
      ],
      cta: "Upgrade to Pro",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  ${plan.price}
                </span>
                <span className="text-gray-600 dark:text-gray-300">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Brainly</h4>
          <p className="text-gray-400">
            Transform your knowledge management with AI-powered tools and
            insights.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
          <ul className="space-y-2">
            <li>
              <a href="#features" className="hover:text-blue-400">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-blue-400">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                API
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Brainly. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <PricingPlans />
      <Footer />
    </div>
  );
};

export default App;
