import {
  ChevronDown,
  Code,
  Github,
  LogIn,
  LogOut,
  Moon,
  PlusIcon,
  Sun,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AddContent from "./AddContent";
import { useNavigate } from "react-router-dom";
import { buttonBaseClasses } from "@mui/material";
import Button from "./Button";

export default function Header({
  modalState,
  setModalState,
}: {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isAddContentOpen, setIsAddContentOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userIconRef = useRef<HTMLDivElement>(null);
  const [loggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const getUserCredentials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [darkMode]);
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    console.log(JSON.stringify(newMode));
    localStorage.setItem("darkMode", JSON.stringify(newMode));
    document.documentElement.classList.toggle("dark", newMode);
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
    setModalState(!modalState);
    // setIsAddContentOpen(true);
    // setIsDropDownOpen(false);
  };

  // Function to close AddContent componentp
  const handleCloseAddContent = () => {
    setIsAddContentOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  const handleGithub = () => {
    window.open("https://github.com/yuvrajbal/Brainly-frontend");
  };
  const navigateHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  });
  return (
    <div className=" fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black/85 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-[2000px] mx-auto">
        <header className=" flex justify-between items-center  py-4 px-2 sm:px-6  ">
          <button onClick={navigateHome}>
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
              className="lucide lucide-brain dark:text-gray-300"
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
          </button>

          <div className="flex gap-4 items-center">
            <button
              className="rounded-md p-2 flex items-center gap-1 bg-gray-100 text-gray-900 hover:text-gray-800 dark:bg-zinc-900 dark:text-gray-300 dark:hover:text-gray-400 font-medium "
              onClick={handleOpenAddContent}
            >
              <PlusIcon className="w-5 h-5" />
              <div>Add Memory</div>
            </button>
            {loggedIn ? (
              <div className="relative">
                <div
                  className="flex items-center gap-2 hover:cursor-pointer"
                  ref={userIconRef}
                  onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                >
                  <ChevronDown className="dark:text-gray-500" />
                  <div className="cursor-pointer rounded-full bg-gray-100 dark:bg-zinc-900 dark:text-gray-300 w-8 h-8 flex items-center justify-center">
                    {getUserCredentials("YuvrajBal")}
                  </div>
                </div>
                {isDropDownOpen && (
                  <div className="fixed inset-0 z-50  ">
                    <div
                      ref={dropdownRef}
                      className="absolute right-0 mr-4 mt-16 w-64 bg-white dark:bg-zinc-800 border dark:border-gray-600 rounded-lg shadow-lg "
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
                          className="w-full flex items-center px-4 py-2 text-gray-400 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600"
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
                          {darkMode ? (
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
                          className="w-full flex items-center px-4 py-2 text-gray-400 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600"
                          onClick={() => {}}
                        >
                          <Code className="w-4 h-4 mr-3" /> API
                        </button>

                        <button
                          className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                          onClick={handleGithub}
                        >
                          <Github className="w-4 h-4 mr-3" /> GitHub
                        </button>

                        <button
                          className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600"
                          onClick={handleLogout}
                        >
                          {loggedIn ? (
                            <div className="flex items-center">
                              <LogOut className="w-4 h-4 mr-3" /> Logout
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <LogIn className="w-4 h-4 mr-3" /> Log In
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button
                variant="primary"
                text="Log In"
                onClick={() => navigate("/signin")}
              />
            )}
          </div>
        </header>
      </div>
    </div>
  );
}
