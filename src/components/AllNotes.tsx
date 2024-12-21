import axios from "axios";
import Note from "./NoteCard";
import Note2 from "./NoteCard2";
import { useEffect, useState } from "react";
import { deleteContent } from "@/services/contentService";
import FilterMemories from "./FilterMemories";
import {
  ChevronDown,
  Divide,
  MoveDown,
  PlugIcon,
  PlusIcon,
} from "lucide-react";
import MasonryLayout from "./MasonryLayout";
import { toast, Toaster } from "sonner";
import { duration } from "@mui/material";

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
      toast.success("Deleted Memory", {
        duration: 2000,
      });
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
        className={`${
          activeCategory === title
            ? "bg-gray-100 text-gray-950 dark:bg-zinc-900 dark:text-gray-200"
            : "text-gray-600 dark:text-gray-400"
        } px-4 rounded-md py-2 font-medium text-gray-600  cursor-pointer text-center hover:bg-gray-100 hover:text-gray-950 dark:hover:bg-zinc-900 dark:hover:text-gray-200 `}
        onClick={() => handleFilterClick(title)}
      >
        {title}
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Toaster richColors />
      <nav className="flex flex-col ">
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
          dark:bg-transparent sm:bg-transparent  rounded-lg
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
      <div className="my-8">
        <MasonryLayout
          filteredmemories={filteredmemories}
          handledelete={handledelete}
        />
      </div>

      {activeCategory === "Spaces" && (
        <div className="font-semibold text-2xl text-center">
          Spaces coming soon...
        </div>
      )}
    </main>
  );
}
