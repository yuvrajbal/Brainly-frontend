import { PlusIcon, Share2 } from "lucide-react";
import Button from "./Button";

export default function NavigationBar() {
  return (
    <nav className="flex">
      {/* <SearchBar /> */}
      <div className="flex gap-4">
        <Button text="Share Brain" variant="secondary" icon={Share2} />
        <Button text="Add Content" variant="primary" icon={PlusIcon} />
      </div>
    </nav>
  );
}
