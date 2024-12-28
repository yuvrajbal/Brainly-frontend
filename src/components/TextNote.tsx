import { NotebookPen } from "lucide-react";

type textProps = {
  description: string;
};

export default function TextNote({ description }: textProps) {
  return (
    <div className="rounded-2xl border border-gray-300 dark:border-gray-600 bg-green-50 dark:bg-teal-950 px-6 py-10 group relative ">
      <div className=" bg-gray-200 dark:bg-gray-800 absolute top-0 right-0 text-gray-600 dark:text-gray-400 flex items-center gap-1 text-xs  px-2 rounded-3xl py-1 mt-2 mr-2">
        <NotebookPen size={12} className="" />
        Note
      </div>
      <div className="dark:text-gray-300 font-medium max-h-[calc(6*1.5rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent ">
        {description}
      </div>
    </div>
  );
}
