import { Outlet } from "react-router-dom";
import NavigationBar from "./components/Navigation";
import Header from "./components/Header";
export default function Layout() {
  return (
    <div className="max-w-7xl mx-auto p-2 md:px-4 md:py-3">
      <div>
        <Header />
      </div>
      <Outlet />
    </div>
  );
}
