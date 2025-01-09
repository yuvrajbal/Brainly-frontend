import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "./Button";
import { Toaster } from "sonner";

const userSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be atleast 3 characters long")
    .max(10, "Username must not exceed 10 characters")
    .regex(/^[a-zA-Z]+$/, "Username must only contain letters"),

  password: z
    .string()
    .min(8, "Password should be atleast 8 characters long")
    .max(20, "Password should not exceed 20 characters")
    .regex(/[A-Z]/, "Password should contain atleast one uppercase character")
    .regex(/[a-z]/, "Password should contain atleast one lowercase character")
    .regex(/\d/, "Password should contain atleast one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain atleast one special character"
    ),
});
export type userSchemaType = z.infer<typeof userSchema>;

type formProps = {
  type: "signin" | "signup";
  submit: (data: userSchemaType) => void;
};

export default function UserSignForm({ type, submit }: formProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userSchemaType>({ resolver: zodResolver(userSchema) });

  return (
    <main className="max-w-xl w-full dark:bg-neutral-950 bg-white dark:bg-opacity-90 bg-opacity-80 border border-neutral-200 dark:border-neutral-700 shadow-lg py-12 px-6 rounded-xl ">
      <Toaster richColors />
      <h1 className="text-3xl font-semibold text-center dark:text-gray-300">
        {type === "signin" ? "Log in" : "Get started with BrainlyAI"}
      </h1>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col gap-4 mt-6 "
      >
        <div className="flex flex-col gap-2">
          <label
            className="font-medium text-gray-700 text-md dark:text-gray-300"
            htmlFor="username"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            {...register("username")}
            placeholder="John Smith"
            className="dark:bg-transparent dark:text-gray-200 placeholder-gray-400 w-full text-gray-900 px-3 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-900 focus:border-indigo-500 dark:focus:border-indigo-900  transition-colors duration-200 "
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="font-medium text-gray-700 text-md dark:text-gray-300"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            placeholder="John@Smith123"
            className="dark:bg-transparent dark:text-gray-200 placeholder-gray-400 w-full text-gray-900 px-3 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 "
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="w-full mt-4 ">
          <Button
            text={type === "signin" ? "Log in" : "Sign Up"}
            variant="primary"
            type="submit"
            className="w-1/2 mx-auto "
          />
        </div>
      </form>
    </main>
  );
}
