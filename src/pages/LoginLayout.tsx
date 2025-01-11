import { BackgroundBeams } from "@/components/ui/background-beams";
import { Outlet } from "react-router-dom";

export default function LoginLayout() {
  return (
    <main className="relative ">
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>
      <div className="relative">
        <Outlet />
      </div>
    </main>
  );
}
