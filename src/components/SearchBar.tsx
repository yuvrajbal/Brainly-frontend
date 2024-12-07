import { AlertTriangle, Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const handleSearch = async () => {
    alert(`searched for ${search}`);
    // debounce and show results , on clicking show all results in recommended
  };
  return (
    <form
      className="flex gap-2 justify-center items-center max-w-md mx-auto"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="What would you like to find"
        className="border px-2 py-2 rounded-md focus:outline-none w-full "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 bg-indigo-100 text-blue-900 rounded-md hover:bg-indigo-200  focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <Search />
      </button>
    </form>
  );
}
