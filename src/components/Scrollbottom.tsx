import { ChevronsDown } from "lucide-react";

export default function ScrollBottom() {
  const scrollToBottom = () => {
    const target = document.getElementById("memories");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="cursor-pointer self-center text-gray-500 flex gap-2 font-semibold hover:text-gray-200"
      onClick={scrollToBottom}
    >
      <ChevronsDown />
      Scroll to View your Memories
    </div>
  );
}
