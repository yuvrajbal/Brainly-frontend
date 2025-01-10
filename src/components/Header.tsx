import { ChevronDown, PlusIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { getUserDetails } from "@/services/userService";
import { Sparkles } from "lucide-react";

interface HeaderProps {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  userModalState: boolean;
  setUserModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const BrainlyProBadge = ({ className = "" }) => {
  return (
    <div
      className={`inline-flex items-center gap-1 px-2 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white text-sm font-medium shadow-lg ${className}`}
    >
      <Sparkles size={14} className="animate-pulse" />
      <span className="mr-1">BrainlyAI Pro</span>
    </div>
  );
};

export default function Header({
  modalState,
  setModalState,
  userModalState,
  setUserModalState,
}: HeaderProps) {
  const userIconRef = useRef<HTMLDivElement>(null);
  const [loggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [isPro, setIsPro] = useState(true);
  const [username, setUsername] = useState<string>("");

  const getUserCredentials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

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
  // useEffect(() => {
  //   const getStatus = async () => {
  //     const status = await getSubscriptionStatus();
  //     setIsPro(status);
  //   };
  //   getStatus();
  // }, []);
  useEffect(() => {
    const getUserData = async () => {
      const userDetails = await getUserDetails();
      setUsername(userDetails.username);
      setIsPro(userDetails.isPremium);
    };
    getUserData();
  }, []);
  const upgradetoPro = () => {
    navigate("/upgrade");
  };

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
            {isPro ? (
              <BrainlyProBadge />
            ) : (
              <Button
                variant="pro"
                text="Upgrade Pro"
                onClick={upgradetoPro}
                className=""
              />
            )}

            <Button
              variant="primary"
              text="Add Memory"
              icon={PlusIcon}
              onClick={handleOpenAddContent}
            />
            {loggedIn ? (
              <div className="relative">
                <div
                  className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
                  ref={userIconRef}
                  onClick={handleOpenUserModal}
                >
                  <ChevronDown className=" " />
                  <div className="cursor-pointer rounded-full bg-gray-100 dark:bg-zinc-900 w-8 h-8 flex items-center justify-center">
                    {getUserCredentials(username)}
                  </div>
                </div>
              </div>
            ) : (
              <Button
                variant="primary"
                text="Log In"
                onClick={() => navigate("/auth/signin")}
              />
            )}
          </div>
        </header>
      </div>
    </div>
  );
}
