import { Outlet, useNavigate } from "react-router-dom";
import NavigationBar from "./components/Navigation";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import AddContent from "./components/AddContent";
export default function Layout() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isloggedin, setIsLoggedIn] = useState<boolean>(false);
  const handleCloseAddContent = () => {
    setModalOpen(false);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      navigate("/signin");
    }
  }, []);
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.03] relative ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
      <div className="max-w-full mx-auto">
        <Header setModalState={setModalOpen} modalState={modalOpen} />

        <Outlet />

        {modalOpen && (
          <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black  bg-opacity-50">
            <div className="relative w-full max-w-md max-h-[90vh] overflow-auto ">
              <AddContent onClose={handleCloseAddContent} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
