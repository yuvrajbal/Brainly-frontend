import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "sonner";
export default function Layout() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     // setIsLoggedIn(true);
  //     // navigate("/home");
  //   } else {
  //     navigate("/");
  //   }
  // }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const darkMode = savedMode ? JSON.parse(savedMode) : true;
    if (darkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, []);
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.03] relative ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_90%,black)]"></div>
      <div className="max-w-full mx-auto">
        {/* <Toaster richColors /> */}
        <Outlet />
      </div>
    </div>
  );
}
