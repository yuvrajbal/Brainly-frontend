import {
  ChevronDown,
  Code,
  Github,
  LogOut,
  Moon,
  PlusIcon,
  Sun,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AddContent from "./AddContent";

export default function Header() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isAddContentOpen, setIsAddContentOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userIconRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const getUserCredentials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add your dark mode implementation logic here
    // This might involve changing document classes, updating local storage, etc.
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        userIconRef.current &&
        !userIconRef.current.contains(event.target as Node)
      ) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpenAddContent = () => {
    setIsAddContentOpen(true);
    // Optionally close dropdown if it's open
    setIsDropDownOpen(false);
  };

  // Function to close AddContent component
  const handleCloseAddContent = () => {
    setIsAddContentOpen(false);
  };

  return (
    <header className="flex justify-between items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-brain"
      >
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
        <path d="M6 18a4 4 0 0 1-1.967-.516" />
        <path d="M19.967 17.484A4 4 0 0 1 18 18" />
      </svg>
      <div className="flex gap-4 items-center">
        <button
          className="flex items-center gap-1 bg-gray-100 text-gray-900 px-2 py-1 rounded-md"
          onClick={handleOpenAddContent}
        >
          <PlusIcon className="w-5 h-5" />
          Add Memory
        </button>
        <div className="relative">
          <div
            className="flex items-center gap-2 hover:cursor-pointer"
            ref={userIconRef}
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          >
            <ChevronDown />
            <div className="cursor-pointer rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center">
              {getUserCredentials("YuvrajBal")}
            </div>
          </div>
          {isDropDownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-64 bg-white darl:bg-gray-700 border dark:border-gray-600 rounded-lg shadow-lg z-50"
            >
              <div className="p-4 border-b dark:border-gray-600 flex  items-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                  {getUserCredentials("YuvrajBal")}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    Yuvraj Bal
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    yuvrajbal@openai.com
                  </p>
                </div>
              </div>
              <div className="py-1">
                <button
                  className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => {
                    /* Handle profile */
                  }}
                >
                  <User className="w-4 h-4 mr-3" /> Profile
                </button>

                <button
                  className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={toggleDarkMode}
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="w-4 h-4 mr-3" /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 mr-3" /> Dark Mode
                    </>
                  )}
                </button>

                <button
                  className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => {
                    /* Handle API settings */
                  }}
                >
                  <Code className="w-4 h-4 mr-3" /> API
                </button>

                <button
                  className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => {
                    /* Handle GitHub link */
                  }}
                >
                  <Github className="w-4 h-4 mr-3" /> GitHub
                </button>

                <button
                  className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => {
                    /* Handle logout */
                  }}
                >
                  <LogOut className="w-4 h-4 mr-3" /> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {isAddContentOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md max-h-[90vh] overflow-auto">
            <AddContent onClose={handleCloseAddContent} />
          </div>
        </div>
      )}
    </header>
  );
}
