import { Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeaderWelcome() {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/auth/signin");
  };
  return (
    <div className="sticky top-0 z-50 bg-neutral-900 shadow-md transition-shadow duration-300">
      <div className="  flex justify-between items-center  py-4 max-w-7xl mx-auto px-4 md:px-8">
        <a
          className="text-white text-2xl font-bold flex items-center gap-3"
          href="#home"
        >
          <Brain className="stroke-indigo-500 size-7 " />
          Brainly AI
        </a>
        <div className="text-gray-300 text-base flex gap-12 items-center  ">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#features" className="hover:text-gray-400">
            Features
          </a>
          <a href="#pricing" className="hover:text-gray-400">
            Pricing
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 px-4 py-2 rounded-md"
            onClick={navigateLogin}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
