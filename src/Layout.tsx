import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Layout() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    } else {
      navigate("/welcome");
    }
  }, []);

  return (
    <div className="">
      <Outlet />
    </div>
  );
}
