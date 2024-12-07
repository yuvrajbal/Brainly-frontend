type TagProps = {
  title: string;
};
export default function Tag({ title }: TagProps) {
  return (
    <span className="px-2 py-1 rounded-md text-blue-900 bg-indigo-100 text-sm">
      #{title}
    </span>
  );
}
