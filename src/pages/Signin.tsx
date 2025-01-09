import UserSignForm, { userSchemaType } from "@/components/SigninUp";
import { signIn } from "@/services/userService";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const redirectTo =
    new URLSearchParams(location.search).get("redirect") || "/home";
  useEffect(() => {
    if (token) {
      navigate(redirectTo);
    }
  }, [token, redirectTo, navigate]);

  const handleSignIn = async (data: userSchemaType) => {
    try {
      const response = await signIn(data);

      if (response === 200) {
        setTimeout(() => {
          navigate(redirectTo);
        }, 1000);
      }
    } catch (error) {
      // Error handling is managed by signIn function
      console.error("Signin navigation error", error);
    }
  };

  return (
    <main className=" mx-auto max-w-5xl  flex flex-col justify-center items-center min-h-screen  ">
      <UserSignForm type="signin" submit={handleSignIn} />
      <h2 className="dark:text-white text-base font-normal text-gray-900 mt-8">
        Don't have an account?{" "}
        <a href="/auth/signup" className="underline pl-1 font-semibold">
          Get started
        </a>
      </h2>
    </main>
  );
}

{
  /* <div className=" fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black/85 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[2000px] mx-auto">
          <header className=" flex justify-between items-center  py-4 px-2 sm:px-6  ">
            <button
              onClick={navigateLanding}
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
              <Button
                variant="secondary"
                text="Sign Up"
                onClick={() => navigate("/signup")}
                className=" "
              />
            </div>
          </header>
        </div>
      </div> */
}
