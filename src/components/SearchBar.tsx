import React, { useState, FormEvent } from "react";
import axios from "axios";
import { Search, SearchCheckIcon, SearchIcon } from "lucide-react";

interface SearchResult {
  answer: string;
  message: string;
}

const VectorSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
    <div className="max-w-2xl mx-auto p-4">
      <form
        onSubmit={handleSearch}
        className="flex items-center border rounded-lg overflow-hidden shadow-sm"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your memories..."
          className="flex-grow p-3 outline-none text-gray-700"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-3 rounded-md m-2 hover:bg-blue-600 disabled:opacity-50 transition-colors"
        >
          {isLoading ? "Searching..." : <SearchIcon className="size-5" />}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {isLoading && (
        <div className="mt-4 text-center text-gray-500">
          Searching through your memories...
        </div>
      )}

      {searchResult && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Result:</h3>
          <p className="text-gray-700">{searchResult}</p>
        </div>
      )}
    </div>
  );
};

export default VectorSearch;
