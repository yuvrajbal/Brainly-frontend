export default function FilterMemories() {
  
  function FilterCategory({ title }: { title: string }) {
    return <div className="px-2 py-1 font-medium text-gray-600">{title}</div>;
  }
  return (
    <nav className="flex">
      <FilterCategory title="All Memories" />
      <FilterCategory title="Web pages" />
      <FilterCategory title="Tweets" />
      <FilterCategory title="Documents" />
      <FilterCategory title="Notes" />
      <FilterCategory title="Spaces" />
    </nav>
  );
}
