import ReactPlayer from "react-player";
import Skeleton from "@mui/material/Skeleton";
import { useState } from "react";
type videoProps = {
  url: string;
};
export default function VideoNote({ url }: videoProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="rounded-xl overflow-hidden relative group ">
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={200}
          animation="pulse"
          className="dark:bg-neutral-600"
        />
      )}
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        onReady={() => setIsLoading(false)}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </div>
  );
}
