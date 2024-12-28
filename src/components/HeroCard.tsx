import { Brain } from "lucide-react";

export default function HeroCard() {
  return (
    <div className="rounded-3xl max-w-sm dark:bg-black bg-gray-50 shadow-xl border dark:border-neutral-900 border-neutral-200  hidden lg:block p-4  ">
      <div className="dark:text-gray-300 text-gray-700 flex gap-4">
        <Brain className="size-8" />
        <div className="text-lg font-semibold">Welcome to Brainly</div>
      </div>
      <h1 className="text-3xl mt-6 font-semibold dark:text-gray-200 text-gray-900  ">
        Your AI-powered second brain
      </h1>
      <div className="dark:text-gray-400 text-gray-700 font-semibold text-lg mt-4  ">
        Effortlessly capture, organize, and retrieve knowledge. Whether it's
        ideas, notes, or inspiration, Brainly helps you manage your thoughts
        seamlessly, so you can focus on what truly matters.
      </div>
    </div>
  );
}
