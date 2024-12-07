import { useState } from "react";
import Button from "./Button";

type formProps = {
  type: "signin" | "signup";
  submit: () => void;
};

export default function UserSignForm({ type, submit }: formProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className="max-w-md">
      <h1 className="text-xl font-semibold">
        {type === "signin"
          ? "Sign In to your account"
          : "Sign Up to create account"}
      </h1>
      <form onSubmit={submit} className="flex flex-col gap-4 mt-6">
        <div className="flex flex-col gap-2">
          <label
            className="font-medium text-gray-700 text-md"
            htmlFor="username"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="John Smith"
            className="placeholder-gray-400 w-full text-gray-900 px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="font-medium text-gray-700 text-md"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="username"
            type="password"
            placeholder="John@Smith123"
            className="placeholder-gray-400 w-full text-gray-900 px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          text={type === "signin" ? "Sign In" : "Sign Up"}
          variant="primary"
          onClick={submit}
        />
      </form>
    </main>
  );
}
