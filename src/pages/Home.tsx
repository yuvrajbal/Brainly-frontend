import AddContent from "@/components/AddContent";
import AllNotes from "@/components/AllNotes";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="pt-20">
      <SearchBar />
      <AllNotes />

      {/* <AddContent /> */}
    </main>
  );
}
