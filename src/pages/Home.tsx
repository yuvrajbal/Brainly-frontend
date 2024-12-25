import AddContent from "@/components/AddContent";
import AllNotes from "@/components/AllNotes";
import Greeting from "@/components/Greeting";
import ScrollBottom from "@/components/Scrollbottom";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="py-24">
      <div className="pt-8 max-w-5xl mx-auto min-h-screen flex flex-col justify-between   ">
        <div>
          <Greeting />
          <SearchBar />
        </div>
        <div className="self-center mb-32 ">
          <ScrollBottom />
        </div>
      </div>

      <AllNotes />
      {/* <AddContent /> */}
    </main>
  );
}
