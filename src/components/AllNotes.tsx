import Note from "./NoteCard";
import Note2 from "./NoteCard2";

export default function AllNotes() {
  // fetch from db then pass
  const fetchNotes = async () => {};
  const handledelete = () => {
    alert("deleted");
  };
  return (
    <div className="grid grid-cols-1 gap-6  sm:grid-cols-2 sm:gap-4 lg:grid-cols-3  mx-auto">
      {/* <Note
        type="tweet"
        tweetId="1859444165068689520"
        title={"Book recomendation"}
        tags={["books", "productivity"]}
        className="row-span-3"
      />
      <Note
        type="video"
        videoUrl="https://www.youtube.com/watch?v=-iZohmcuvJM"
        title={"Project reviews"}
        tags={["books", "productivity"]}
        className="row-span-2"
      />
      <Note
        type="text"
        title="Productivity Tip"
        description="work smart not hard lorem work smart not hard lorem work smart not hard lorem work smart not  not hard lorem"
        tags={["books", "productivity"]}
        className="auto-rows-fr"
      />
      <Note
        type="link"
        title="Productivity Blog"
        description="work smart not hard"
        tags={["books", "productivity"]}
        className=""
      />
      <Note
        type="link"
        title="Productivity Blog"
        description="work smart not hard"
        tags={["books", "productivity"]}
      />
      <Note
        type="link"
        title="Productivity Blog"
        description="work smart not hard"
        tags={["books", "productivity"]}
      />
      <Note
        type="video"
        videoUrl="https://www.youtube.com/watch?v=-iZohmcuvJM"
        title={"Project reviews"}
        tags={["books", "productivity"]}
        className="row-span-2"
      />
      <Note
        type="link"
        title="Productivity Blog"
        description="work smart not hard"
        tags={["books", "productivity"]}
      />
      <Note
        type="link"
        title="Productivity Blog"
        description="work smart not hard"
        tags={["books", "productivity"]}
      />
      <Note
        type="link"
        title="Productivity Blog"
        description="work smart not hard"
        tags={["books", "productivity"]}
      />
      <Note
        type="link"
        title="Productivity Blog"
        description="work smart not hard"
        tags={["books", "productivity"]}
      />
      <Note
        type="video"
        videoUrl="https://www.youtube.com/watch?v=-iZohmcuvJM"
        title={"Project reviews"}
        tags={["books", "productivity"]}
        className="row-span-2"
      /> */}
      <Note2
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
      />
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
