import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChevronDown, ChevronsDown, Loader2, SearchIcon } from "lucide-react";
import { Memory } from "./AllNotes";
import Note2 from "./NoteCard2";
import SearchSkeleton from "./SearchSkeleton";
import SearchResult from "./SearchResult";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SearchResult {
  answer: string;
  message: string;
  content: Memory[];
}
// interface SearchResultComponentProps {
//   memories: Memory[];
// }

// const SearchResultComponent: React.FC<SearchResultComponentProps> = ({
//   memory,
// }) => {
//   const [isVisible, setIsVisible] = useState<boolean>(false);
//   return (
//     <div>
//       <h3
//         className="mb-2 font-semibold text-gray-500 hover:text-gray-400 dark:text-gray-400 flex gap-2 items-center dark:hover:text-gray-500 hover:cursor-pointer "
//         onClick={() => setIsVisible(!isVisible)}
//       >
//         <div
//           className={`transform transition-transform duration-200 ${
//             isVisible ? "rotate-180" : ""
//           } `}
//         >
//           <ChevronsDown className="size-4" />
//         </div>
//         Show related Content
//       </h3>
//       {isVisible && (
//         <Note2
//           key={memory.title}
//           type={memory.type}
//           title={memory.title}
//           description={memory.description}
//           url={memory.link || ""}
//           imageUrl={memory.imageUrl}
//           id={memory._id}
//         />
//       )}
//     </div>
//   );
// };

// const SearchResultMasonry: React.FC<SearchResultComponentProps> = ({
//   memories,
// }) => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//       }}
//     >
//       <Box
//         sx={{
//           transform: "scale(1)", // Scales down to 30%
//           transformOrigin: "top left", // Keeps scaling from top-left corner
//         }}
//       >
//         <Masonry columns={{ xs: 1, sm: 2, lg: 1 }} spacing={2}>
//           {memories.map((memory) => (
//             <Box key={memory._id} sx={{ borderRadius: 0, overflow: "hidden" }}>
//               <div className="relative  ">
//                 <Note2
//                   id={memory._id}
//                   key={memory._id}
//                   type={memory.type}
//                   title={memory.title}
//                   description={memory.description}
//                   url={memory.link || ""}
//                   handledelete={() => {}}
//                   imageUrl={memory.imageUrl}
//                 />
//               </div>
//             </Box>
//           ))}
//         </Masonry>
//       </Box>
//     </Box>
//   );
// };

const VectorSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string | null>(null);
  // const [displayedResult, setDisplayedResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  // const [searched, setSearched] = useState<boolean>(false);
  const [searchContent, setSearchContent] = useState<Memory[]>([]);
  const [showRelated, setShowRelated] = useState<boolean>(true);
  const [responseTime, setResponseTime] = useState<Date | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all-memories");
  const categories = [
    { id: "all-memories", label: "All memories" },
    { id: "link", label: "Web Pages" },
    { id: "video", label: "Videos" },
    { id: "tweet", label: "Tweets" },
    { id: "document", label: "Documents" },
    { id: "note", label: "Notes" },
  ];
  function DropdownMenuCheckboxes() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center justify-center gap-2 px-4 py-2  dark:bg-gray-200  border rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2  ">
          <span className="text-sm font-medium  text-gray-700">
            {categories.find((cat) => cat.id === selectedCategory)?.label}
          </span>
          <ChevronDown size={16} className="text-gray-500" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          <DropdownMenuRadioGroup
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            {categories.map((category) => (
              <DropdownMenuRadioItem
                key={category.id}
                value={category.id}
                className="cursor-pointer text-base"
              >
                {category.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  const handleSearch = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    // setSearched(true);
    setSearchResult(null);
    setSearchContent([]);
    // setDisplayedResult(null);
    setError(null);

    if (!query.trim()) {
      setError("Please enter a search query");
      return;
    }
    setIsLoading(true);

    try {
      const response = await axios.post<SearchResult>(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/vector-search`,
        { query, type: selectedCategory },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      setSearchContent(response.data.content);
      setSearchResult(response.data.answer);
      setResponseTime(new Date());
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message || "An error occurred during search"
        );
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };
  let token: string | null = "";

  useEffect(() => {
    token = localStorage.getItem("token");
    if (token) {
      console.log(token);
    }
  }, []);

  return (
    <div className=" flex flex-col lg:flex-row lg:gap-8 gap-4 ">
      <div className="w-full ">
        <form
          onSubmit={handleSearch}
          className="flex flex-col group relative rounded-3xl shadow-md p-4 
        bg-white bg-opacity-60 dark:bg-neutral-900  dark:bg-opacity-90
        border border-neutral-200 dark:border-gray-700
        focus-within:border-blue-500 dark:focus-within:border-blue-400
        focus-within:ring-2 focus-within:ring-blue-500/20 dark:focus-within:ring-blue-400/20
        transition-all duration-200 "
        >
          <textarea
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (error) setError("");
              if (searchResult) setSearchResult("");
              if (searchContent) setSearchContent([]);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSearch(e);
              }
            }}
            placeholder="Ask your memories..."
            className="p-0 resize-none flex-grow outline-none bg-transparent
          text-gray-900 dark:text-gray-100 
          font-semibold text-2xl
          placeholder:text-gray-500 dark:placeholder:text-gray-400
          transition-colors duration-200
          focus:ring-0"
            rows={4}
          />
          <div className="flex gap-4 justify-end">
            <DropdownMenuCheckboxes />
            <button
              type="submit"
              disabled={isLoading}
              className="self-center rounded-full p-3 bg-neutral-800 dark:bg-neutral-900 border dark:border-neutral-700  dark:hover:bg-neutral-950  disabled:opacity-50 hover:bg-neutral-700 transition-colors"
            >
              {isLoading ? (
                <Loader2 className="size-4 stroke-white dark:stroke-neutral-400 stroke-2 animate-spin" />
              ) : (
                <SearchIcon className="size-4 stroke-white dark:stroke-neutral-400 stroke-2 " />
              )}
            </button>
          </div>
        </form>
        <div className="my-6">
          {isLoading && <SearchSkeleton />}

          {/* Error Message */}
          {error && (
            <div className="flex">
              <div className="bg-red-100 dark:bg-red-950 dark:text-red-200 text-red-700 rounded-3xl px-4 py-2 max-w-[80%]">
                {error}
              </div>
            </div>
          )}

          <div className="flex flex-col md:flex-row md:gap-6">
            {/* Search Result */}
            {searchResult && responseTime && (
              <SearchResult
                searchResult={searchResult}
                timestamp={responseTime}
              />
            )}
          </div>
        </div>
      </div>

      {searchContent && searchContent.length > 0 && (
        <div className="w-full lg:w-1/3 mb-2">
          <h1
            className="text-base font-semibold text-gray-500 hover:text-gray-400 dark:text-gray-400 flex gap-2 items-center dark:hover:text-gray-500 hover:cursor-pointer "
            onClick={() => setShowRelated(!showRelated)}
          >
            Show related content
            <div
              className={`transform transition-transform duration-200 ${
                showRelated ? "rotate-180" : ""
              } `}
            >
              <ChevronsDown className="size-4" />
            </div>
          </h1>
          {showRelated && (
            <div
              className={`transition-all duration-200 ease-in-out overflow-hidden mt-4 ${
                showRelated ? "h-auto opacity-100" : "h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-4">
                {searchContent.slice(0, 1).map((memory) => (
                  <Note2
                    key={memory.title}
                    type={memory.type}
                    title={memory.title}
                    description={memory.description}
                    url={memory.link || ""}
                    imageUrl={memory.imageUrl}
                    id={memory._id}
                  />
                ))}
              </div>
            </div>
          )}
          {/* <div className="flex flex-col gap-4">
            {searchContent.map((memory) => (
              <SearchResultComponent memory={memory} />
            ))}
          </div>
          {/* <SearchResultMasonry memories={searchContent} /> */}
        </div>
      )}
      {/* {searchContent.length === 0 && <HeroCard />} */}
    </div>
  );
};

export default VectorSearch;
