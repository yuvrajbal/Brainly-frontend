import axios from "axios";
import Note from "./NoteCard";
import Note2 from "./NoteCard2";
import { useEffect, useState } from "react";

interface Memory {
  _id: string;
  title: string;
  description: string;
  type: string;
  link?: string;
}

export default function AllNotes() {
  const [memories, setMemories] = useState<Memory[]>([]);
  // fetch from db then pass
  const fetchNotes = async () => {
    try {
      const response = await axios.get<{ content: Memory[] }>(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/content`,
        {
          headers: {
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDNhNWU1YWFkZTI1YTIwNmNhNDNiNCIsImlhdCI6MTczMjQ4NjYyOX0.OcmW4ZDH-adyZfiBvpom3cVjcdsRWkH-w5M2wNbhXL8",
          },
        }
      );
      console.log(response.data);
      setMemories(response.data.content);
    } catch (err) {
      console.log("Error while fetching memories", err);
    }
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  useEffect(() => {
    console.log(memories);
  });
  const handledelete = () => {
    alert("deleted");
  };
  return (
    <div className="grid grid-cols-1 gap-6  sm:grid-cols-2 sm:gap-4 lg:grid-cols-3  mx-auto">
      {memories.map((memory) => (
        <Note2
          key={memory._id}
          type={memory.type}
          title={memory.title}
          description={memory.description}
          url={memory.link || ""}
          handledelete={handledelete}
        />
      ))}

      {/* <Note2
        type="tweet"
        handledelete={handledelete}
        tweetId="1860662852593361286"
      />
      <Note2
        type="link"
        title="Productivity Blog"
        description="In this track, we&#x27;ll be learning about SQL databases, and how they&#x27;re different from In this track, databases, and how they&#x27;re different from"
        url="projects.100xdevs.com"
        tags={["books", "productivity"]}
        handledelete={handledelete}
      />
      <Note2
        type="video"
        url="https://www.youtube.com/watch?v=-iZohmcuvJM"
        handledelete={handledelete}
      />
      <Note2
        type="tweet"
        tweetId="1859444165068689520"
        handledelete={handledelete}
      />
      <Note2
        type="note"
        description="work on brainly fe and backend , it is a tough projecta on brainly fe and backend , it is a tough project work on brainly fe and backend , it is a tough project work on brainly fe and backend , it is a tough project"
        handledelete={handledelete}
      />
      <Note2
        type="document"
        title="resumeYuvrajBalresumeYuvrajBalresumeYuvrajBalresumeYuvrajBalresumeYuvrajBal.pdf"
        handledelete={handledelete}
      />
      <Note2
        type="tweet"
        tweetId="1858465770755276869"
        handledelete={handledelete}
      /> */}
      {/* 
      <div className=" row-span-2 bg-gray-100 p-4 rounded-lg shadow-md">
        <p>Tweet Content</p>
      </div>

      <div className=" bg-gray-100 p-4 rounded-lg shadow-md">
        <p>YouTube Video</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p>Productivity Tip</p>
      </div>

      <div className=" bg-gray-100 p-4 rounded-lg shadow-md">
        <p>YouTube Video</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p>Productivity Tip</p>
      </div>

      <div className=" row-span-2 bg-gray-100 p-4 rounded-lg shadow-md">
        <p>Tweet Content</p>
      </div>
      <div className=" bg-gray-100 p-4 rounded-lg shadow-md">
        <p>YouTube Video</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p>Productivity Tip</p>
      </div>
      <div className=" bg-gray-100 p-4 rounded-lg shadow-md">
        <p>YouTube Video</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p>Productivity Tip</p>
      </div>
      <div className=" bg-gray-100 p-4 rounded-lg shadow-md">
        <p>YouTube Video</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p>Productivity Tip</p>
      </div> */}
    </div>
  );
}
