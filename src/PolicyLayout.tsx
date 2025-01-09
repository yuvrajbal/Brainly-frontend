import { Link, Outlet, useNavigate } from "react-router-dom";
import { Brain } from "lucide-react";
import { Toaster } from "sonner";

export default function PolicyLayout() {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/auth/signin");
  };
  return (
    <main>
      <Toaster richColors />
      <div className="sticky top-0 z-50 dark:bg-neutral-900 bg-white shadow-md transition-shadow duration-300">
        <div className="  flex justify-between items-center  py-4 max-w-7xl mx-auto px-4 md:px-8">
          <Link
            className="dark:text-white text-gray-900 text-2xl font-bold flex items-center gap-3"
            to="/welcome/#home"
          >
            <Brain className="dark:stroke-indigo-500 stroke-indigo-700 size-7 " />
            Brainly AI
          </Link>
          <div className="dark:text-gray-300 text-gray-800 text-base flex gap-12 items-center  ">
            <Link to="/welcome/#home" className="hover:text-gray-400">
              Home
            </Link>
            <Link to="/welcome/#features" className="hover:text-gray-400">
              Features
            </Link>
            <Link to="/welcome/#pricing" className="hover:text-gray-400">
              Pricing
            </Link>
            <Link to="/welcome/#about" className="hover:text-gray-400">
              About
            </Link>
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white dark:text-gray-300 textransition-all duration-300 px-4 py-2 rounded-md"
              onClick={navigateLogin}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </main>
  );
}
