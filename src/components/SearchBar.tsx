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
  const [showRelated, setShowRelated] = useState<boolean>(false);
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
    <div className="max-w-5xl min-h-screen mx-auto flex flex-col  ">
      <form
        onSubmit={handleSearch}
        className="flex rounded-3xl shadow-sm p-2 dark:bg-zinc-700 bg-white border border-neutral-200"
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
          placeholder="Ask your memories"
          className="p-2 resize-none flex-grow outline-none bg-transparent text-gray-900 dark:text-gray-100 font-semibold dark:placeholder:text-gray-100 placeholder:text-gray-500"
          rows={3}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="self-end rounded-full p-3 bg-black dark:bg-zinc-800 dark:hover:bg-zinc-800 disabled:opacity-50 hover:bg-zinc-800 transition-colors"
        >
          {isLoading ? (
            <Loader2 className="size-4 stroke-white animate-spin" />
          ) : (
            <SearchIcon className="size-4 stroke-white" />
          )}
        </button>
      </form>
      <div className="my-6">
        {/* User Query Message */}
        {/* {query && !error && searched && (
          <div className="flex justify-end">
            <div className="bg-gray-100 rounded-xl p-3 max-w-[80%]">
              <p className="text-gray-900">{query}</p>
            </div>
          </div>
        )} */}

        {/* Loading State */}
        {isLoading && (
          <div className="flex">
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl p-3 max-w-[80%]">
              <p className="text-gray-500 dark:text-gray-200">
                Searching through your memories...
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="flex">
            <div className="bg-red-100 text-red-700 rounded-xl p-3 max-w-[80%]">
              {error}
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:gap-6">
          {/* Search Result */}
          {searchResult && (
            <div className="md:w-2/3">
              <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-4">
                <ReactMarkdown
                  className="text-gray-900 dark:text-gray-200 font-semibold"
                  components={{
                    a: ({ node, ...props }) => (
                      <a {...props} target="_blank" rel="noopener noreferrer" />
                    ),
                  }}
                >
                  {searchResult}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {searchContent && searchContent.length > 0 && (
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
                  {searchContent.map((memory) => (
                    <Note2
                      key={memory.title}
                      type={memory.type}
                      title={memory.title}
                      description={memory.description}
                      url={memory.link || ""}
                      imageUrl={memory.imageUrl}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div
        className="text-white   bottom-20 flex gap-2 font-semibold hover:text-gray-500"
        onClick={scrollToBottom}
      >
        <ChevronsDown />
        Scroll to View your Memories
      </div>
    </div>
  );
};

export default VectorSearch;
