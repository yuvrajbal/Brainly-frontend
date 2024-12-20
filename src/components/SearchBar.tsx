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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState<boolean>(false);
  const [searchContent, setSearchContent] = useState<Memory[]>([]);
  const [showRelated, setShowRelated] = useState<boolean>(false);
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearched(true);
    setSearchResult(null);
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
    <div className="max-w-5xl mx-auto flex flex-col p-2">
      <form
        onSubmit={handleSearch}
        className="flex rounded-3xl shadow-sm bg-gray-100 p-2"
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
          className="p-2 resize-none flex-grow outline-none text-gray-700 bg-transparent  "
          rows={3}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="self-end rounded-full p-2 bg-black disabled:opacity-50 hover:bg-zinc-800 transition-colors"
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
            <div className="bg-gray-100 rounded-xl p-3 max-w-[80%]">
              <p className="text-gray-500">
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
              <div className="bg-gray-100 rounded-xl p-3 ">
                <ReactMarkdown
                  className="text-gray-900"
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
                className="text-lg font-semibold text-gray-500 flex gap-2 items-center"
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
                  className={`transition-all duration-200 ease-in-out overflow-hidden ${
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
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VectorSearch;
