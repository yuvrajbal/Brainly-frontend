import AddContent from "@/components/AddContent";
import AllNotes, { Memory } from "@/components/AllNotes";
import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
import ScrollBottom from "@/components/Scrollbottom";
import SearchBar from "@/components/SearchBar";
import UserModal from "@/components/UserModal";
import { deleteContent } from "@/services/contentService";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [userModalOpen, setUserModalOpen] = useState<boolean>(false);
  const [memories, setMemories] = useState<Memory[]>([]);
  const navigate = useNavigate();
  const handleCloseAddContent = () => {
    setModalOpen(false);
  };
  const handleCloseUserModal = () => {
    setUserModalOpen(false);
  };
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
      console.log("fetched all notes");
      setMemories(response.data.content);
    } catch (err) {
      console.log("Error while fetching memories", err);
    }
  };
  useEffect(() => {
    fetchNotes();
  }, []);

  const handledelete = async (id: string) => {
    try {
      await deleteContent(id);
      const updatedMemories = memories.filter((memory) => memory._id !== id);
      setMemories(updatedMemories);

      toast.success("Deleted Memory", {
        duration: 2000,
      });
    } catch (err) {
      console.error("error while deleting note", err);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth/signin");
    }
  });

  return (
    <main className="py-24">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_85%,black)]"></div>

      <div className="pt-2 max-w-7xl mx-auto min-h-screen flex flex-col justify-between   ">
        <Header
          setModalState={setModalOpen}
          modalState={modalOpen}
          userModalState={userModalOpen}
          setUserModalState={setUserModalOpen}
        />
        {userModalOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
            <div className="relative w-full max-w-[2000px] mx-auto">
              <div className="absolute top-4 right-4 max-w-md max-h-[90vh] overflow-auto">
                <UserModal onClose={handleCloseUserModal} />
              </div>
            </div>
          </div>
        )}
        <div className="px-4 sm:px-8 ">
          <Greeting />
          <SearchBar />
        </div>
        <div className="self-center mb-32 ">
          <ScrollBottom />
        </div>
      </div>

      <AllNotes
        memories={memories}
        handledelete={handledelete}
        modalState={modalOpen}
        setModalState={setModalOpen}
      />
      {modalOpen && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black  bg-opacity-50">
          <div className="relative w-full max-w-md max-h-[90vh] overflow-auto ">
            <AddContent
              onClose={handleCloseAddContent}
              refreshNotes={fetchNotes}
            />
          </div>
        </div>
      )}
    </main>
  );
}
