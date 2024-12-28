import React, { useState, FormEvent, useEffect } from "react";
import axios from "axios";
import {
  ChevronsDown,
  ChevronsUp,
  Loader2,
  Search,
  SearchCheckIcon,
  SearchIcon,
} from "lucide-react";
import { Memory } from "./AllNotes";
import Note2 from "./NoteCard2";
import Note from "./NoteCard";
import ReactMarkdown from "react-markdown";
import SwipableCard from "./SwipableCard";
import SwipableStack from "./SwipableCard";
import HeroCard from "./HeroCard";
import { dividerClasses } from "@mui/material";
interface SearchResult {
  answer: string;
  message: string;
  content: Memory[];
}

const VectorSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [displayedResult, setDisplayedResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState<boolean>(false);
  const [searchContent, setSearchContent] = useState<Memory[]>([]);
  const [showRelated, setShowRelated] = useState<boolean>(true);
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearched(true);
    setSearchResult(null);
    setSearchContent([]);
    setDisplayedResult(null);
    setError(null);

    if (!query.trim()) {
      setError("Please enter a search query");
      return;
    }
    setIsLoading(true);

    try {
      const response = await axios.post<SearchResult>(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/vector-search`,
        { query },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `${localStorage.getItem("token")}`,
            // authorization:
            //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDNhNWU1YWFkZTI1YTIwNmNhNDNiNCIsImlhdCI6MTczMjQ4NjYyOX0.OcmW4ZDH-adyZfiBvpom3cVjcdsRWkH-w5M2wNbhXL8",
          },
        }
      );
      setSearchContent(response.data.content);
      setSearchResult(response.data.answer);
      let index = 0;
      const interval = setInterval(() => {
        if (index < response.data.answer.length) {
          setDisplayedResult((prev) => prev + response.data.answer[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 10); // Adjust the delay for the dynamic effect
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
  const scrollToBottom = () => {
    const target = document.getElementById("memories");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" flex flex-col lg:flex-row lg:gap-8 gap-4 ">
      <div className="lg:w-2/3">
        <form
          onSubmit={handleSearch}
          className="flex  rounded-3xl shadow-sm p-4 dark:bg-neutral-800 bg-white border border-neutral-900 dark:border-gray-600  "
        >
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSearch(e);
              }
            }}
            placeholder="Ask your memories..."
            className="p-0 resize-none  flex-grow outline-none bg-transparent text-gray-900 dark:text-gray-100 font-semibold  dark:placeholder:text-gray-300 placeholder:text-gray-500"
            rows={4}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="self-end rounded-full p-3 bg-neutral-800 dark:bg-black  dark:hover:bg-zinc-950 disabled:opacity-50 hover:bg-neutral-600 transition-colors"
          >
            {isLoading ? (
              <Loader2 className="size-4 stroke-white animate-spin" />
            ) : (
              <SearchIcon className="size-4 stroke-white dark:stroke-gray-300" />
            )}
          </button>
        </form>
        <div className="my-6">
          {/* Loading State */}
          {isLoading && (
            <div className="flex">
              <div className="bg-gray-100 dark:bg-neutral-800 rounded-3xl p-3 max-w-[80%]">
                <p className="text-gray-500 dark:text-gray-200">
                  Searching through your memories...
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="flex">
              <div className="bg-red-100 dark:bg-red-950 dark:text-red-200 text-red-700 rounded-3xl p-3 max-w-[80%]">
                {error}
              </div>
            </div>
          )}

          <div className="flex flex-col md:flex-row md:gap-6">
            {/* Search Result */}
            {searchResult && (
              <div className="">
                <div className="bg-gray-50 dark:bg-neutral-800 rounded-3xl p-4 dark:border dark:border-gray-600">
                  <ReactMarkdown
                    className="text-gray-900 dark:text-gray-200 font-normal text-lg "
                    components={{
                      a: ({ node, ...props }) => (
                        <a
                          {...props}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      ),
                    }}
                  >
                    {searchResult}
                  </ReactMarkdown>
                </div>
              </div>
            )}

            {/* {searchContent && searchContent.length > 0 && (
            <div className="mt-6 md:w-1/3  md:mt-0 ">
              <h1
                className="text-lg font-semibold text-gray-500 dark:text-gray-400 flex gap-2 items-center"
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
            </div>
          )} */}
          </div>
        </div>
      </div>

      {searchContent && searchContent.length > 0 && (
        <div className="lg:w-1/3 mb-10">
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
                {searchContent.slice(0, 2).map((memory) => (
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
        </div>
      )}
      {searchContent.length === 0 && <HeroCard />}
    </div>
  );
};

export default VectorSearch;
