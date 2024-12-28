import { useEffect, useState } from "react";

import { ChevronDown } from "lucide-react";
import MasonryLayout from "./MasonryLayout";
import { Toaster } from "sonner";

export interface Memory {
  _id: string;
  title: string;
  description: string;
  type: string;
  link?: string;
  imageUrl?: string;
}
interface AllNotesProps {
  memories: Memory[];
  handledelete: (id: string) => void;
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AllNotes({
  memories,
  handledelete,
  modalState,
  setModalState,
}: AllNotesProps) {
  // const [memories, setMemories] = useState<Memory[]>([]);
  const [filteredmemories, setFilteredMemories] = useState<Memory[]>(memories);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All Memories");
  useEffect(() => {
    setFilteredMemories(memories); // Update filtered memories when the prop changes
    setActiveCategory("All Memories");
  }, [memories]);

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
    <main
      className="min-h-screen pt-20 max-w-[2000px] lg:px-12 mx-auto   "
      id="memories"
    >
      <Toaster richColors />
      <nav className="flex flex-col px-6  ">
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
      <div className="my-10 pl-6  ">
        <MasonryLayout
          filteredmemories={filteredmemories}
          handledelete={handledelete}
          modalState={modalState}
          setModalState={setModalState}
        />
      </div>

      {activeCategory === "Spaces" && (
        <div className="font-semibold text-2xl text-center text-gray-400">
          Spaces coming soon...
        </div>
      )}
    </main>
  );
}
