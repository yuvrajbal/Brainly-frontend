import { useNavigate } from "react-router-dom";
import { HomeIcon, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="text-center px-4 md:px-8 py-8">
        <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          404
        </h1>

        <div className="w-full h-[1px] bg-gray-200 dark:bg-neutral-800 my-8" />

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-8">
          Oops! The page you are looking for might have been removed, had its
          name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors duration-300"
          >
            <ArrowLeft className="size-5" />
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-300"
          >
            <HomeIcon className="size-5" />
            Back to Home
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span>Need help?</span>
          <a
            href="/contact"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
