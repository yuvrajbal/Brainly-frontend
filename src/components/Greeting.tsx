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
    <div className="mb-8">
      <h1 className="text-gray-500 font-semibold text-4xl">
        Good Evening <span className="text-gray-300">{user}</span>
      </h1>
    </div>
  );
}
