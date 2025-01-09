import { getUsername } from "@/services/userService";
import { Code, Github, LogOut, Moon, Sun, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserModal({ onClose }: { onClose: () => void }) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true;
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

  useEffect(() => {
    const getUser = async () => {
      const user = await getUsername();
      setUsername(user);
    };
    getUser();
  }, []);
  const getUserCredentials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    console.log(JSON.stringify(newMode));
    localStorage.setItem("darkMode", JSON.stringify(newMode));
    document.documentElement.classList.toggle("dark", newMode);
  };
  const handleGithub = () => {
    window.open("https://github.com/yuvrajbal/Brainly-frontend");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/signin");
  };
  const navigateProfile = () => {
    navigate("/profile");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div
      ref={dropdownRef}
      className="  mt-16 w-64 bg-white dark:bg-zinc-800 border dark:border-gray-600 rounded-lg shadow-lg "
    >
      <div className="p-4 border-b dark:border-gray-600 flex  items-center">
        <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
          {getUserCredentials("YuvrajBal")}
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-white">
            {username}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {`${username}@openai.com`}
          </p>
        </div>
      </div>
      <div className="py-1">
        <button
          className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
          onClick={navigateProfile}
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
          <div className="flex items-center">
            <LogOut className="w-4 h-4 mr-3" /> Logout
          </div>
        </button>
      </div>
    </div>
  );
}
