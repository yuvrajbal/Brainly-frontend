import React, { useEffect, useState } from "react";
import { Masonry } from "@mui/lab";
import Box from "@mui/material/Box";
import Note2 from "./NoteCard2";
import { PlusIcon } from "lucide-react";
import { getContentUploadStatus } from "@/services/userService";
import { toast } from "sonner";

type MasonryProps = {
  _id: string;
  title: string;
  description: string;
  type: string;
  link?: string;
  imageUrl?: string;
};
interface MasonryLayoutProps {
  filteredmemories: MasonryProps[];
  handledelete: (id: string) => void;
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}
const MasonryLayout: React.FC<MasonryLayoutProps> = ({
  filteredmemories,
  handledelete,
  modalState,
  setModalState,
}) => {
  const [contentStatus, setContentStatus] = useState<boolean>(false);

  useEffect(() => {
    const getStatus = async () => {
      const contentStatus = await getContentUploadStatus();
      setContentStatus(contentStatus);
    };
    getStatus();
  }, []);
  const handleOpenAddContent = () => {
    if (contentStatus) {
      setModalState(!modalState);
    } else {
      toast.error("Max memory count reached");
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={3}>
        <div
          className="bg-white dark:bg-black border-2  border-dashed flex flex-col  p-6 sm:p-8 rounded-xl hover:cursor-pointer transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-lg hover:border-gray-500 dark:border-gray-600 dark:hover:border-gray-400"
          onClick={handleOpenAddContent}
        >
          <PlusIcon className="size-12 p-0 m-0 dark:text-gray-100" />
          <div className="text-2xl font-semibold mt-2 dark:text-gray-100">
            Add to your second brain.
          </div>
          <div className="text-gray-600 dark:text-gray-400 font-medium mt-4">
            Add a link, a note, a document,tweet, etc.
          </div>
        </div>
        {filteredmemories.map((memory) => (
          <Box key={memory._id} sx={{ borderRadius: 0, overflow: "hidden" }}>
            <div className="group relative">
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
                className={`rounded-full absolute bottom-0 right-0 size-6 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 bg-gray-300 dark:bg-gray-900 mb-2 mr-2`}
                onClick={() => handledelete(memory._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="dark:text-gray-300 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
            </div>
          </Box>
        ))}
      </Masonry>
    </Box>
  );
};

export default MasonryLayout;
