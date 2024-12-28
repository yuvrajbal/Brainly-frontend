import { NotebookPen } from "lucide-react";

type textProps = {
  description: string;
  handledelete: () => void;
};

export default function TextNote({ description, handledelete }: textProps) {
  return (
    <div className="rounded-2xl border border-gray-300 dark:border-gray-600 bg-green-50 dark:bg-teal-950 px-6 py-10 group relative ">
      <div className=" bg-gray-200 dark:bg-gray-800 absolute top-0 right-0 text-gray-600 dark:text-gray-400 flex items-center gap-1 text-xs  px-2 rounded-3xl py-1 mt-2 mr-2">
        <NotebookPen size={12} className="" />
        Note
      </div>
      <div className="dark:text-gray-300 font-medium max-h-[calc(6*1.5rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent ">
        {description}
      </div>
      {/* <div
        className="rounded-full absolute bottom-0 right-0 size-5 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 bg-gray-300 mb-2 mr-2"
        onClick={handledelete}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className=""
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </div> */}
    </div>
  );
}
