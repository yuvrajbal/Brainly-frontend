import { getUsername } from "@/services/userService";
import { useEffect, useState } from "react";

export default function Greeting() {
  const [user, setUser] = useState<string>("");
  useEffect(() => {
    const getUser = async () => {
      const username = await getUsername();
      setUser(username);
    };
    getUser();
  }, []);
  return (
    <div className="bg-gradient-to-b mt-20 md:mt-0 mb-8 dark:from-neutral-100 from-neutral-800 dark:via-neutral-50 via-neutral-600 dark:to-neutral-800 to-neutral-300  bg-clip-text">
      <h1 className=" font-normal md:text-6xl tracking-[-0.03em] text-4xl text-transparent">
        Good Evening <span className="">{user}</span>
      </h1>
    </div>
  );
}
