import { File } from "lucide-react";

type documentProps = {
  id: string;
  filename: string;
  url: string;
};

export default function DocumentNote({ filename, url }: documentProps) {
  return (
    <div className="rounded-2xl group relative border border-gray-300 dark:border-none dark:bg-neutral-900 bg-gray-50 px-6 pb-4">
      <div className="bg-gray-200 dark:bg-gray-800 absolute top-0 right-0 text-gray-600 dark:text-gray-400 flex items-center gap-1 text-xs font-medium px-2 rounded-3xl py-1 mt-2 mr-2">
        <a href={url} target="_blank" className="flex items-center gap-1">
          <File size={12} className="" />
          Document
        </a>
      </div>
      <div className="pt-10 pb-2 font-semibold overflow-hidden text-ellipsis ">
        <a
          href={url}
          target="_blank"
          className="flex gap-1 items-center dark:text-gray-300"
        >
          <File className="size-4" />
          {filename}
        </a>
      </div>
    </div>
  );
}
