type linkProps = {
  id: string;
  imageUrl?: string;
  title: string;
  description: string;
  url: string;
};
const defaultImageUrl =
  "https://images.unsplash.com/photo-1732454827988-95972d793f1b?q=80&w=1618&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export default function LinkNote({ imageUrl, title, url }: linkProps) {
  const parsedUrl = new URL(url);
  const hostname = parsedUrl.hostname;

  return (
    <div className="flex flex-col gap-6 group relative bg-gray-200 dark:bg-zinc-900 pb-4 rounded-xl ">
      <div className="bg-gray-200 dark:bg-gray-800 absolute top-0 right-0 text-gray-600 flex items-center gap-1 text-xs font-medium px-2 rounded-3xl py-1 mt-2 mr-2">
        <a
          href={url}
          target="_blank"
          className="flex items-center gap-1 dark:text-gray-400  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          Page
        </a>
      </div>

      <img
        src={imageUrl || defaultImageUrl}
        className="w-full h-28 object-cover rounded-t-xl  shadow-inner"
      />
      <div className="px-4 flex flex-col gap-2">
        <h1 className="text-lg font-semibold dark:text-gray-300">{title}</h1>

        <div className="flex justify-between items-center mt-2">
          <a className="text-gray-500 text-sm " href={url} target="_blank">
            {hostname}
          </a>
        </div>
      </div>
    </div>
  );
}
