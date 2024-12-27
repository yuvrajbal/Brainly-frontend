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
      <h1 className="dark:text-gray-500 text-gray-600 font-semibold text-4xl">
        Good Evening{" "}
        <span className="dark:text-gray-300 text-gray-800">{user}</span>
      </h1>
    </div>
  );
}
