import HeaderWelcome from "@/components/HeaderWelcome";
import {
  BookmarkCheck,
  Check,
  ChevronDown,
  Github,
  LockKeyhole,
  MessageSquareMore,
  MousePointerClick,
  SquareTerminal,
  Star,
  TrendingUp,
  Twitter,
  Upload,
  Zap,
} from "lucide-react";
import React, { ElementType, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
type CardProps = {
  title: string;
  icon: ElementType;
  description: string;
};
type WorkingProps = {
  index: Number;
  title: string;
  description: string;
  tags: string[];
};
type TagProps = {
  title: string;
};

type PlansProps = {
  plan: string;
  price: number;
  features: string[];
  popular: boolean;
  onSelect: () => void;
};

type TestimonialProps = {
  name: string;
  designation: string;
  review: string;
  image: string;
};
type FaqProps = {
  question: string;
  answer: string;
};
export default function WelcomePage() {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/auth/signin");
  };
  const navigateUpgrade = () => {
    navigate("/upgrade");
  };
  const handleEnterprise = () => {
    const email = "sales@brainlyai.com"; // Replace with your actual sales email
    const subject = encodeURIComponent("Enterprise Plan Inquiry");
    const body = encodeURIComponent(
      "Hello,\n\nI am interested in learning more about the Enterprise plan. Please provide details about pricing and features.\n\nThank you."
    );

    // Construct the mailto URL
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

    // Open the mailto link
    window.location.href = mailtoUrl;
  };
  const handleGithub = () => {
    window.open("https://github.com/yuvrajbal/Brainly-frontend");
  };
  const handleTwitter = () => {
    window.open("https://x.com/YuvrajBal4");
  };
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Scroll to the element smoothly
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const Features = () => {
    const Card: React.FC<CardProps> = ({ icon: Icon, title, description }) => {
      return (
        <div className="bg-neutral-900 p-6 rounded-xl flex flex-col gap-4 hover:transform hover:scale-105 transition-all duration-300">
          <div className="bg-indigo-600/20 rounded-lg p-4 flex w-fit">
            <Icon className="size-7 text-indigo-500" />
          </div>
          <h1 className="text-lg text-white font-bold">{title}</h1>
          <div className="text-gray-400 text-base">{description}</div>
        </div>
      );
    };
    const features = [
      {
        icon: Upload,
        title: "Universal Import",
        description:
          "Import content from any source - URLs, PDFs, documents, tweets, or YouTube videos. Your knowledge, unified in one place.",
      },
      {
        icon: MessageSquareMore,
        title: "AI Chat Interface",
        description:
          "Chat naturally with your knowledge base. Ask questions, get summaries, and discover insights through intuitive conversations.",
      },
      {
        icon: BookmarkCheck,
        title: "Smart Organization",
        description:
          "Automatically categorize and tag your content. Find exactly what you need with powerful search and filtering.",
      },
      {
        icon: Zap,
        title: "Quick Actions",
        description:
          "Generate summaries, extract key points, and create action items from your content with one click.",
      },
      {
        icon: LockKeyhole,
        title: "Secure Storage",
        description:
          "Your data is encrypted and securely stored. Control access and sharing with granular permissions.",
      },
      {
        icon: MousePointerClick,
        title: "Smart Connections",
        description:
          "Discover relationships between different pieces of content. Get AI-powered recommendations and insights.",
      },
    ];
    return (
      <main className="bg-neutral-800  py-10 " id="features">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-white text-4xl font-bold mt-10 mb-4 text-center">
            Powerful Features for Your Knowledge Base
          </h1>
          <div className="text-gray-300 text-xl text-center mb-4">
            Transform how you store and interact with your information
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12  ">
            {features.map((feature) => (
              <Card
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </main>
    );
  };
  const Working = () => {
    const Card: React.FC<WorkingProps> = ({
      index,
      title,
      description,
      tags,
    }) => {
      const Tag: React.FC<TagProps> = ({ title }) => {
        return (
          <div className="px-3 py-1 bg-neutral-700 rounded-full text-gray-300 text-sm">
            {title}
          </div>
        );
      };
      return (
        <div className="bg-neutral-800 p-6 rounded-lg flex flex-col gap-4 items-center">
          <div className="text-white font-bold text-xl bg-indigo-600 rounded-full size-10 flex justify-center items-center mb-2 ">
            {index.toString()}
          </div>
          <div className="text-xl font-semibold text-white">{title}</div>
          <div className="text-gray-400 font-normal text-center">
            {description}
          </div>
          <div className="flex flex-row flex-wrap gap-2 mt-2 ">
            {tags.map((tag) => (
              <Tag title={tag} />
            ))}
          </div>
        </div>
      );
    };
    const workings = [
      {
        index: 1,
        title: "Add Your Content",
        description:
          "Import any type of content - paste URLs, upload documents, or add notes directly. Support for web pages, PDFs, tweets, and YouTube videos.",
        tags: ["URLs", "PDFs", "Notes"],
      },
      {
        index: 2,
        title: "AI Processing",
        description:
          "Our AI automatically analyzes, indexes, and connects your content. Creates smart summaries and extracts key information for easy reference.",
        tags: ["Analysis", "Indexing", "Summaries"],
      },
      {
        index: 3,
        title: "Chat & Discover",
        description:
          "Ask questions, explore connections, and get insights from your knowledge base through natural conversation with AI.",
        tags: ["Chat", "Search", "Insights"],
      },
    ];

    return (
      <main className="py-20 max-w-7xl mx-auto px-4 md:px-8" id="working">
        <h1 className="text-white text-4xl font-bold mb-4 mt-4 text-center">
          How Brainly AI Works
        </h1>
        <div className="text-xl text-gray-300 text-center">
          Three simple steps to your personalized AI knowledge assistant
        </div>
        <div className="relative">
          <div className="absolute left-0 right-0 h-1 top-1/2 bg-indigo-600/30"></div>
          <div className="relative grid grid-cols-1 sm:grid-cols-3 mt-12 gap-8">
            {workings.map((working) => (
              <Card
                index={working.index}
                title={working.title}
                description={working.description}
                tags={working.tags}
              />
            ))}
          </div>
        </div>
      </main>
    );
  };

  const GetStarted = () => {
    return (
      <div className="max-w-7xl md:p-8 p-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 bg-neutral-800   p-8 rounded-xl  ">
          <div className="flex flex-col gap-2 md:w-2/3">
            <h1 className="text-2xl font-bold text-white mb-4">
              Ready to transform your knowledge management?
            </h1>
            <p className="text-gray-300">
              Start organizing and chatting with your content in minutes. No
              credit card required.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-end">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300  text-lg font-semibold text-white py-4 px-8 rounded-lg "
              onClick={navigateLogin}
            >
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    );
  };
  const Pricing = () => {
    const PricingCard = ({
      plan,
      price,
      features,
      popular,
      onSelect,
    }: PlansProps) => {
      return (
        <div
          className={`w-full bg-neutral-900 rounded-2xl  shadow-md transition-all duration-200 hover:shadow-lg  ${
            popular
              ? "border-2 border-indigo-500 relative transform scale-105"
              : "border border-neutral-700 hover:border-indigo-500"
          }`}
        >
          {popular && (
            <div className="absolute top-0 right-0 bg-indigo-500  text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
              Popular
            </div>
          )}

          {/* Header */}
          <div className="p-6 space-y-2 text-center text-white">
            <h3 className="text-xl font-bold ">{plan}</h3>
            <div className="space-y-1">
              <span className="text-4xl font-bold">${price}</span>
              <span className="text-sm text-gray-400">/month </span>
            </div>
          </div>

          {/* Features */}
          <div className="p-6 space-y-4 ">
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <Check className="h-5 w-5 text-indigo-500 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="p-6 ">
            <button
              onClick={onSelect}
              className={`w-full py-2.5 px-4 rounded-lg  text-white font-semibold transition-all duration-200 ${
                popular
                  ? "bg-indigo-600  hover:bg-indigo-700"
                  : "bg-neutral-700  hover:bg-neutral-600"
              }`}
            >
              {plan === "Pro" && "Start Pro Trial"}
              {plan === "Free" && "Get Started"}
              {plan === "Enterprise" && "Contact Sales"}
            </button>
          </div>
        </div>
      );
    };
    const tiers: PlansProps[] = [
      {
        plan: "Free",
        price: 0,
        features: [
          "Limited searches (20 per day)",
          "2 document storage",
          "Basic support",
        ],
        popular: false,
        onSelect: navigateLogin,
      },
      {
        plan: "Pro",
        price: 9.99,
        features: [
          "Unlimited searches",
          "10 document storage",
          "Priority support",
          "Customizable AI assistance",
        ],
        popular: true,
        onSelect: navigateUpgrade,
      },
      {
        plan: "Enterprise",
        price: 49.99,
        features: [
          "Unlimited searches and storage",
          "API usage included",
          "Dedicated account manager",
          "Enterprise-grade security",
        ],
        popular: false,
        onSelect: handleEnterprise,
      },
    ];
    return (
      <main className="bg-neutral-800   px-4 md:px-8 py-20 " id="pricing">
        <div className=" max-w-7xl mx-auto px-8  ">
          <h1 className="text-4xl font-bold text-white mb-4 text-center ">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-300 text-xl text-center mb-4">
            Choose the perfect plan for your needs
          </p>
          <div className="grid grid-cols-1  gap-4 md:gap-8 md:grid-cols-3 mt-12">
            {tiers.map((tier) => (
              <PricingCard
                plan={tier.plan}
                price={tier.price}
                features={tier.features}
                popular={tier.popular}
                onSelect={tier.onSelect}
              />
            ))}
          </div>
        </div>
      </main>
    );
  };

  const Testimonials = () => {
    const [users, setUsers] = useState<TestimonialProps[]>([]);
    const testimonials = [
      "Brainly AI has revolutionized how I manage my research. The ability to chat with my collected knowledge is game-changing. It's like having a personal research assistant available 24/7.",
      "With Brainly AI, I no longer waste hours sifting through PDFs and videos. The retrieval tool surfaces exactly what I need in seconds.",
      "Keeping track of internal documents and resources used to be a nightmare. Brainly AI is the ultimate knowledge concierge for my team.",
      "As a video creator, organizing and referencing my material used to be a headache. Brainly AI’s ability to parse video transcripts is a game-changer.",
      "I deal with massive datasets and complex documentation. Brainly AI ensures I never lose track of crucial insights. It's like having an AI-powered memory.",
    ];
    useEffect(() => {
      // Fetch random users from the API
      fetch("https://randomuser.me/api/?results=3")
        .then((response) => response.json())
        .then((data) => {
          const formattedUsers = data.results.map(
            (user: any, index: number) => ({
              name: `${user.name.first} ${user.name.last}`,
              image: user.picture.large,
              designation: `Professional in ${
                [
                  "Research",
                  "Academia",
                  "Corporate",
                  "Content Creation",
                  "Data Science",
                ][index]
              }`,
              review: testimonials[index], // Assign corresponding testimonial
            })
          );
          setUsers(formattedUsers);
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }, []);
    const Card: React.FC<TestimonialProps> = ({
      name,
      designation,
      review,
      image,
    }) => {
      return (
        <div className="p-8 rounded-xl bg-neutral-800">
          <div className="flex gap-2">
            <img src={image} alt="user" className="size-10 rounded-full" />
            <div>
              <div className="text-white">{name}</div>
              <div className="text-gray-400">{designation}</div>
            </div>
          </div>
          <div className="text-gray-400 my-4">{review}</div>
          <div className="flex gap-1">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <Star className="fill-indigo-500 stroke-none" key={index} />
              ))}
          </div>
        </div>
      );
    };
    return (
      <div className="py-24 max-w-7xl mx-auto px-4 md:px-8" id="about">
        <h1 className="text-white font-bold text-4xl mb-4 text-center">
          What Our Users Say
        </h1>
        <p className="text-xl text-gray-300 text-center mb-16">
          Join thousands of satisfied users who transformed their knowledge
          management
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {users.map((user) => (
            <Card
              name={user.name}
              designation={user.designation}
              image={user.image}
              review={user.review}
            />
          ))}
        </div>
      </div>
    );
  };
  const Faq = () => {
    const FaqButton: React.FC<FaqProps> = ({ question, answer }) => {
      const [isPressed, SetIsPressed] = useState<boolean>(false);
      return (
        <div className="bg-neutral-800 rounded-lg px-6 py-4" id="faq">
          <button
            onClick={() => SetIsPressed(!isPressed)}
            className="text-white text-lg font-semibold flex justify-between items-center  w-full  "
          >
            {question}
            <ChevronDown
              className={`text-indigo-500  transform transition-transform duration-300 ${
                isPressed ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {isPressed && (
            <p className="text-gray-300 text-left mt-4">{answer}</p>
          )}
        </div>
      );
    };
    const faqs = [
      {
        question: "How secure is my data",
        answer:
          "Your data is encrypted end-to-end and stored securely on our servers. We use industry-standard security protocols and never share your information with third parties.",
      },
      {
        question: "What file types are supported?",
        answer:
          "We support PDF, plain text, URLs, tweets, YouTube videos, and more. Our AI can process and understand content from various sources.",
      },
      {
        question: "Can I export my data?",
        answer:
          "Yes, you can export your knowledge base in various formats. We provide easy export options to ensure you always have access to your information.",
      },
      {
        question: "What's the difference between Free and Pro plans?",
        answer:
          "Pro plans include unlimited storage, advanced AI features, priority support, and custom organization options. Free plans are great for basic use but have limited storage and features.",
      },
    ];
    return (
      <div>
        <div className="text-center">
          <h1 className="font-bold text-white text-4xl mb-4 ">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-xl">
            Get quick answers to common questions
          </p>
          <div className="max-w-3xl mx-auto flex flex-col gap-6 py-16">
            {faqs.map((faq) => (
              <FaqButton question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ActionBanner = () => {
    const users = [
      "Harvard Univerity",
      "Stanford Research",
      "MIT Labs",
      "Google",
    ];
    return (
      <div className="bg-neutral-800 py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8  ">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"></div>
            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Transform Your Knowlegde Management Today
                </h2>
                <p className="text-xl text-gray-100 mb-10 ">
                  Join thousands of users who are already powering their
                  learning and research with AI. Start for free, no credit card
                  required.
                </p>
                <div className="flex items-center justify-center gap-8">
                  <button
                    className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                    onClick={navigateUpgrade}
                  >
                    Subscribe Pro
                  </button>
                  <button
                    className="bg-neutral-900 bg-opacity-50 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-70 transition-all duration-300"
                    onClick={navigateLogin}
                  >
                    Get Started Free
                  </button>
                </div>
                <div className="flex items-center justify-center gap-8 mt-8">
                  <div className="flex items-center gap-1">
                    <Check className="text-white size-4" />
                    <span className="text-white ">Cancel anytime</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="text-white size-4" />
                    <span className="text-white">No credit card needed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <p className="text-gray-400 text-sm">
              Trusted by researchers, students, and professionals from
            </p>
            <div className="flex gap-4 justify-center mt-3">
              {users.map((user) => (
                <span className="text-gray-500 ">{user}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => {
    return (
      <footer className="bg-neutral-900">
        <div className="max-w-7xl mx-auto  px-4 md:px-8 pt-20 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16   ">
            <div className="col-span-1 md:col-span-2">
              <h1 className="text-white font-bold text-2xl mb-6">Brainly AI</h1>
              <p className="text-gray-400 max-w-md mb-6">
                Transform how you store, organize, and interact with your
                knowledge. Powered by cutting-edge AI technology.
              </p>
              <div className="flex gap-3 text-gray-400  ">
                <Twitter
                  className=" hover:text-indigo-500"
                  onClick={handleTwitter}
                />

                <Github
                  className="hover:text-indigo-500"
                  onClick={handleGithub}
                />
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="#features"
                  className="text-gray-400 hover:text-indigo-500 transition-colors"
                >
                  {" "}
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-indigo-500 transition-colors"
                >
                  {" "}
                  Pricing
                </a>
                <a
                  href="#working"
                  className="text-gray-400 hover:text-indigo-500 transition-colors"
                >
                  {" "}
                  Integrations
                </a>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-indigo-500 transition-colors"
                >
                  {" "}
                  Enterprise
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <div className="flex flex-col gap-2">
                <Link
                  to="/policies/documentation"
                  className="text-gray-400 hover:text-indigo-500 transition-colors"
                >
                  {" "}
                  Documentation
                </Link>
                <Link
                  to="/policies/api-reference"
                  className="text-gray-400 hover:text-indigo-500 transition-colors"
                >
                  {" "}
                  API Reference
                </Link>
                <Link
                  to="/policies/blog"
                  className="text-gray-400 hover:text-indigo-500 transition-colors"
                >
                  {" "}
                  Blog
                </Link>
                <Link
                  to="/policies/community"
                  className="text-gray-400 hover:text-indigo-500 transition-colors"
                >
                  {" "}
                  Community
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
              <div className="text-gray-400 text-sm">
                © 2024 Brainly AI. All rights reserved.
              </div>
              <div className="flex gap-6">
                <a
                  href="/policies/privacy-policy"
                  className="text-gray-400 hover:text-indigo-500 text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/policies/terms-of-service"
                  className="text-gray-400 hover:text-indigo-500 text-sm transition-colors"
                >
                  Terms of Service
                </a>

                <a
                  href="/policies/cookie-policy"
                  className="text-gray-400 hover:text-indigo-500 text-sm transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  return (
    <main className="bg-neutral-900  ">
      <HeaderWelcome />

      {/* home */}
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 py-20 px-4 md:px-8"
        id="home"
      >
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl tracking-normal font-bold text-white max-w-lg">
            Your Personal AI
            <div className="text-indigo-500">Knowledge Assistant</div>
          </h1>
          <div className="text-gray-300 text-xl mt-8 font-normal tracking-normal">
            Transform any content into an interactive knowledge base. Add
            documents, URLs, tweets, or YouTube videos and chat with your
            personalized AI assistant.
          </div>
          <div className="flex gap-4 mt-6">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300  text-lg font-semibold text-white py-3 px-8 rounded-lg"
              onClick={navigateLogin}
            >
              Try for Free
            </button>
            <a
              className="bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 text-lg font-semibold text-white py-4 px-8 rounded-lg"
              href="#working"
            >
              See How it Works
            </a>
          </div>
          <div className="text-gray-300 flex gap-4 mt-10">
            <div className="flex gap-2">
              <Check className="text-indigo-500" /> No Credit Card Required
            </div>
            <div className="flex gap-2">
              <Check className="text-indigo-500" /> Cancel Anytime
            </div>
          </div>
        </div>
        <div className="md:w-1/2 px-4 ">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-75"></div>
            <div className=" relative bg-neutral-800 rounded-lg shadow-2xl p-6 ">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-neutral-700 px-4 py-2 flex gap-4 text-gray-200 items-center">
                  <Zap className="text-indigo-500 size-5" />
                  Add any URL, document or note
                </div>
                <div className="bg-neutral-700 px-4 py-2 flex gap-4 text-gray-200 items-center">
                  <SquareTerminal className="text-indigo-500 size-5" />
                  Chat with your knowledge base
                </div>
                <div className="bg-neutral-700 px-4 py-2 flex gap-4 text-gray-200 items-center">
                  <TrendingUp className="text-indigo-500 size-5" />
                  Get AI powered insights
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Working />
      <GetStarted />
      <Pricing />
      <Testimonials />
      <Faq />
      <ActionBanner />
      <Footer />
    </main>
  );
}
