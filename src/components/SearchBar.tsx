import React, { useState, FormEvent } from "react";
import axios from "axios";
import { Loader2, Search, SearchCheckIcon, SearchIcon } from "lucide-react";

interface SearchResult {
  answer: string;
  message: string;
}

const VectorSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState<boolean>(false);
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearched(true);
    // Reset previous states
    setSearchResult(null);
    setError(null);

    // Validate query
    if (!query.trim()) {
      setError("Please enter a search query");
      return;
    }

    // Start loading
    setIsLoading(true);

    try {
      const response = await axios.post<SearchResult>(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/vector-search`,
        { query },
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust token retrieval as needed
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDNhNWU1YWFkZTI1YTIwNmNhNDNiNCIsImlhdCI6MTczMjQ4NjYyOX0.OcmW4ZDH-adyZfiBvpom3cVjcdsRWkH-w5M2wNbhXL8",
          },
        }
      );

      // Set the AI-generated answer
      setSearchResult(response.data.answer);
    } catch (err) {
      // Handle errors
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message || "An error occurred during search"
        );
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      // Stop loading
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col p-2">
      <form
        onSubmit={handleSearch}
        className="flex rounded-3xl shadow-sm bg-gray-100 p-2"
      >
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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

        {/* Search Result */}
        {searchResult && (
          <div className="flex">
            <div className="bg-gray-100 rounded-xl p-3">
              <p className="text-gray-900">{searchResult}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VectorSearch;
