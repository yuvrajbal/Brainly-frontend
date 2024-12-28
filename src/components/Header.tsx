import { ChevronDown, PlusIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Header({
  modalState,
  setModalState,
  userModalState,
  setUserModalState,
}: {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  userModalState: boolean;
  setUserModalState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
  // const [darkMode, setDarkMode] = useState(() => {
  //   const savedMode = localStorage.getItem("darkMode");
  //   return savedMode ? JSON.parse(savedMode) : true;
  // });
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.remove("light");
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     document.documentElement.classList.add("light");
  //   }
  // }, [darkMode]);

  const handleOpenAddContent = () => {
    setModalState(!modalState);
  };
  const handleOpenUserModal = () => {
    setUserModalState(!userModalState);
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
          <button
            onClick={navigateHome}
            className="dark:hover:text-gray-400 dark:text-gray-300 hover:text-gray-600"
          >
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
              className="lucide lucide-brain"
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
              className="rounded-md p-2 flex items-center gap-1 bg-gray-100 text-gray-900  hover:text-gray-700 dark:bg-zinc-900 dark:text-gray-300 dark:hover:text-gray-400 font-medium "
              onClick={handleOpenAddContent}
            >
              <PlusIcon className="w-5 h-5" />
              <div>Add Memory</div>
            </button>
            {loggedIn ? (
              <div className="relative">
                <div
                  className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
                  ref={userIconRef}
                  onClick={handleOpenUserModal}
                >
                  <ChevronDown className=" " />
                  <div className="cursor-pointer rounded-full bg-gray-100 dark:bg-zinc-900 w-8 h-8 flex items-center justify-center">
                    {getUserCredentials("YuvrajBal")}
                  </div>
                </div>
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
