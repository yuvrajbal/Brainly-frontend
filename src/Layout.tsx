import { Outlet } from "react-router-dom";
import NavigationBar from "./components/Navigation";
import Header from "./components/Header";
export default function Layout() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.03] relative ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
      <div className=" max-w-7xl mx-auto">
        <div className="">
          <Header />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
