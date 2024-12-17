import axios from "axios";
import Note from "./NoteCard";
import Note2 from "./NoteCard2";
import { useEffect, useState } from "react";
import { deleteContent } from "@/services/contentService";
import FilterMemories from "./FilterMemories";
import { ChevronDown, Divide, MoveDown } from "lucide-react";

export interface Memory {
  _id: string;
  title: string;
  description: string;
  type: string;
  link?: string;
  imageUrl?: string;
}

export default function AllNotes() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [filteredmemories, setFilteredMemories] = useState<Memory[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All Memories");
  // fetch from db then pass
  const fetchNotes = async () => {
    try {
      const response = await axios.get<{ content: Memory[] }>(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/content`,
        {
          headers: {
            // authorization:
            //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDNhNWU1YWFkZTI1YTIwNmNhNDNiNCIsImlhdCI6MTczMjQ4NjYyOX0.OcmW4ZDH-adyZfiBvpom3cVjcdsRWkH-w5M2wNbhXL8",
            authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      setMemories(response.data.content);
      setFilteredMemories(response.data.content);
    } catch (err) {
      console.log("Error while fetching memories", err);
    }
  };
  useEffect(() => {
    fetchNotes();
  }, []);

  const handledelete = async (id: string) => {
    try {
      const response = await deleteContent(id);
      const updatedMemories = memories.filter((memory) => memory._id !== id);
      setMemories(updatedMemories);
      setFilteredMemories(updatedMemories);
    } catch (err) {
      console.error("error while deleting note", err);
    }
  };
  const handleFilterClick = (category: string) => {
    setActiveCategory(category);
    setIsCollapsed(true);
    if (category === "All Memories") {
      setFilteredMemories(memories);
    } else {
      const filtered = memories.filter((memory) => {
        switch (category) {
          case "Web Pages":
            return memory.type === "link";
          case "Tweets":
            return memory.type === "tweet";
          case "Documents":
            return memory.type === "document";
          case "Notes":
            return memory.type === "note";
          case "Videos":
            return memory.type === "video";
          case "Spaces":
            return false;
          default:
            return true;
        }
      });
      setFilteredMemories(filtered);
    }
  };
  function FilterCategory({ title }: { title: string }) {
    return (
      <div
        className={`px-4 rounded-md py-2 font-medium text-gray-600 cursor-pointer text-center ${
          activeCategory === title
            ? "bg-gray-100 text-gray-950"
            : "text-gray-600"
        } hover:bg-gray-100 hover:text-gray-800 `}
        onClick={() => handleFilterClick(title)}
      >
        {title}
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <nav className="flex flex-col sm:flex-row">
        <div
          className="bg-zinc-900 text-white py-2 flex justify-center gap-1 sm:hidden font-medium items-center rounded-md "
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <div>{activeCategory}</div>

          <ChevronDown
            className={`size-8 transition-transform duration-300 ${
              isCollapsed ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>

        <div
          className={`
          sm:flex sm:flex-row flex-col
          transition-all duration-300 ease-in-out
          ${
            isCollapsed
              ? "max-h-0 opacity-0 overflow-hidden sm:max-h-full sm:opacity-100"
              : "max-h-screen opacity-100"
          }
          sm:max-h-full sm:opacity-100
          dark:bg-zinc-900 sm:bg-transparent shadow-lg rounded-lg
        `}
        >
          <FilterCategory title="All Memories" />
          <FilterCategory title="Web Pages" />
          <FilterCategory title="Videos" />
          <FilterCategory title="Tweets" />
          <FilterCategory title="Documents" />
          <FilterCategory title="Notes" />
          <FilterCategory title="Spaces" />
        </div>
      </nav>
      <div className=" grid grid-cols-1 md:grid-cols-4  gap-4 sm:p-4 mt-4 ">
        {filteredmemories.map((memory, index) => (
          <div key={memory._id} className="group relative ">
            <Note2
              id={memory._id}
              key={memory._id}
              type={memory.type}
              title={memory.title}
              description={memory.description}
              url={memory.link || ""}
              handledelete={() => {}}
              imageUrl={memory.imageUrl}
            />
            <div
              className={`rounded-full absolute bottom-0 right-0 size-6 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 bg-gray-300 mb-2 mr-2`}
              onClick={() => handledelete(memory._id)}
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
            </div>
          </div>
        ))}
      </div>
      {activeCategory === "Spaces" && (
        <div className="font-semibold text-lg text-center">
          Spaces coming soon...
        </div>
      )}
    </main>
  );
}
