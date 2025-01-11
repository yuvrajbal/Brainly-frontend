import { Link, Outlet, useNavigate } from "react-router-dom";
import { Brain, Menu, X } from "lucide-react";
import { Toaster } from "sonner";
import { useState } from "react";

export default function PolicyLayout() {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/auth/signin");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { href: "/welcome/#home", label: "Home" },
    { href: "/welcome/#features", label: "Features" },
    { href: "/welcome/#pricing", label: "Pricing" },
    { href: "/welcome/#about", label: "About" },
  ];

  return (
    <>
      <div className="sticky top-0 z-50 bg-neutral-900 shadow-md transition-shadow duration-300">
        <Toaster richColors />

        <div className="flex justify-between items-center py-4 max-w-7xl mx-auto px-4 md:px-8">
          <a
            className="text-white text-2xl font-bold flex items-center gap-3"
            href="/home"
          >
            <Brain className="stroke-indigo-500 size-7" />
            Brainly AI
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-gray-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex text-gray-300 text-base gap-12 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="hover:text-gray-400"
              >
                {item.label}
              </Link>
            ))}
            <button
              className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 px-4 py-2 rounded-md"
              onClick={navigateLogin}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-neutral-900 border-t border-neutral-800 md:hidden">
              <div className="flex flex-col items-center py-4 space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-gray-300 hover:text-gray-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 px-4 py-2 rounded-md w-40"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigateLogin();
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
  // return (
  //   <main>
  //     <Toaster richColors />
  //     <div className="sticky top-0 z-50 dark:bg-neutral-900 bg-white shadow-md transition-shadow duration-300">
  //       <div className="  flex justify-between items-center  py-4 max-w-7xl mx-auto px-4 md:px-8">
  //         <Link
  //           className="dark:text-white text-gray-900 text-2xl font-bold flex items-center gap-3"
  //           to="/welcome/#home"
  //         >
  //           <Brain className="dark:stroke-indigo-500 stroke-indigo-700 size-7 " />
  //           Brainly AI
  //         </Link>
  //         <div className="dark:text-gray-300 text-gray-800 text-base flex gap-12 items-center  ">
  //           <Link to="/welcome/#home" className="hover:text-gray-400">
  //             Home
  //           </Link>
  //           <Link to="/welcome/#features" className="hover:text-gray-400">
  //             Features
  //           </Link>
  //           <Link to="/welcome/#pricing" className="hover:text-gray-400">
  //             Pricing
  //           </Link>
  //           <Link to="/welcome/#about" className="hover:text-gray-400">
  //             About
  //           </Link>
  //           <button
  //             className="bg-indigo-600 hover:bg-indigo-700 text-white dark:text-gray-300 textransition-all duration-300 px-4 py-2 rounded-md"
  //             onClick={navigateLogin}
  //           >
  //             Get Started
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     <Outlet />
  //   </main>
  // );
}
