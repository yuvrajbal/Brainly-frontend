import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

interface Feature {
  title: string;
  description: string;
}

interface ComingSoonTemplateProps {
  title: string;
  description: string;

  features: Feature[];

  estimatedDate: string;
  signupPlaceholder: string;

  backgroundClass: string;
}

const ComingSoonTemplate = ({
  title,
  description,
  features,
  estimatedDate,
  signupPlaceholder,
  backgroundClass,
}: ComingSoonTemplateProps) => {
  const [email, setEmail] = useState("");
  const handleWaitList = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/waitlist`,
        {
          item: title,
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setEmail("");
      if (response.status === 200) {
        toast.success("Added to waitlist");
      }
    } catch (err) {
      setEmail("");
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 411) {
          toast.error("Already added to waitlist");
        } else {
          toast.error("Failed to add to waitlist");
        }
      } else {
        toast.error("Error adding to waitlist");
      }
    }
  };
  return (
    <div className={`min-h-screen ${backgroundClass} py-16 px-4`}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl">{description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/80 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center space-y-6">
            <p className="text-lg text-gray-700">
              Estimated Launch: {estimatedDate}
            </p>

            <div className="w-full max-w-md">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={signupPlaceholder}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={handleWaitList}
                >
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Documentation = () => (
  <ComingSoonTemplate
    title="BrainlyAI Documentation - Coming Soon"
    description="Your comprehensive guide to mastering BrainlyAI's knowledge management capabilities. From basic setup to advanced AI-powered features."
    features={[
      {
        title: "Interactive Tutorials",
        description:
          "Step-by-step guides with live code examples and AI-assisted learning paths customized to your skill level.",
      },
      {
        title: "Best Practices",
        description:
          "Learn optimal knowledge organization strategies and AI-enhanced content structuring techniques.",
      },
      {
        title: "Use Cases",
        description:
          "Real-world examples of how organizations leverage BrainlyAI for knowledge management and retrieval.",
      },
      {
        title: "Video Guides",
        description:
          "Visual walkthroughs of complex features and AI-powered functionalities.",
      },
    ]}
    estimatedDate="Q1 2025"
    signupPlaceholder="Enter email for documentation updates"
    backgroundClass="bg-gradient-to-br from-blue-50 to-indigo-100"
  />
);

export const APIReference = () => (
  <ComingSoonTemplate
    title="BrainlyAI API Reference - Coming Soon"
    description="Harness the power of our AI-driven knowledge management system with our comprehensive API documentation."
    features={[
      {
        title: "RESTful Endpoints",
        description:
          "Complete API reference with authentication, rate limits, and response formats for seamless integration.",
      },
      {
        title: "AI Capabilities",
        description:
          "Access our advanced AI models for content analysis, classification, and intelligent retrieval.",
      },
      {
        title: "Code Samples",
        description:
          "Ready-to-use examples in popular programming languages with SDK support.",
      },
      {
        title: "Webhooks",
        description:
          "Real-time event notifications and automated workflow triggers for your applications.",
      },
    ]}
    estimatedDate="Q2 2025"
    signupPlaceholder="Get notified when API docs are live"
    backgroundClass="bg-gradient-to-br from-purple-50 to-blue-100"
  />
);

export const Blog = () => (
  <ComingSoonTemplate
    title="BrainlyAI Blog - Coming Soon"
    description="Dive deep into AI-powered knowledge management with insights, updates, and expert perspectives."
    features={[
      {
        title: "Tech Deep Dives",
        description:
          "Detailed explorations of our AI algorithms, architecture, and innovative features.",
      },
      {
        title: "Success Stories",
        description:
          "Case studies and testimonials from organizations transforming their knowledge management.",
      },
      {
        title: "Product Updates",
        description:
          "Stay informed about new features, improvements, and AI capabilities.",
      },
      {
        title: "Industry Insights",
        description:
          "Expert perspectives on AI, knowledge management, and organizational learning.",
      },
    ]}
    estimatedDate="Q1 2025"
    signupPlaceholder="Subscribe to our blog updates"
    backgroundClass="bg-gradient-to-br from-green-50 to-blue-100"
  />
);

export const Community = () => (
  <ComingSoonTemplate
    title="BrainlyAI Community - Coming Soon"
    description="Join a vibrant community of knowledge management enthusiasts, AI practitioners, and BrainlyAI experts."
    features={[
      {
        title: "Discussion Forums",
        description:
          "Connect with peers, share experiences, and get help from community experts.",
      },
      {
        title: "Knowledge Exchange",
        description:
          "Share and discover best practices, templates, and integration patterns.",
      },
      {
        title: "Events & Webinars",
        description:
          "Virtual meetups, expert sessions, and hands-on workshops.",
      },
      {
        title: "Community Projects",
        description:
          "Collaborate on open-source tools and extensions for BrainlyAI.",
      },
    ]}
    estimatedDate="Q2 2025"
    signupPlaceholder="Join the community waitlist"
    backgroundClass="bg-gradient-to-br from-orange-50 to-red-100"
  />
);

export default {
  Documentation,
  APIReference,
  Blog,
  Community,
};
