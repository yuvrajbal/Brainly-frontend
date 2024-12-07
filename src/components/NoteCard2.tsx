import { Tweet } from "react-tweet";
import { contentTypes, contentType } from "./contentTypes";
import ReactPlayer from "react-player";
import Tag from "./Tag";
import { Divide } from "lucide-react";
import LinkNote from "./LinkNote";
import VideoNote from "./VideoNote";
import TweetNote from "./TweetNote";
import TextNote from "./TextNote";
import DocumentNote from "./DocumentNote";
type NoteProps = {
  type: contentType;
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  tweetId: string;
  tags?: string[];
  className?: string;
  handledelete: () => void;
};

const defaultImageUrl =
  "https://images.unsplash.com/photo-1732454827988-95972d793f1b?q=80&w=1618&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export default function Note2({
  type,
  title,
  description,
  imageUrl,
  url,
  tweetId,
  tags,
  className,
  handledelete,
}: NoteProps) {
  return (
    <div className="p-2">
      {type === "link" && (
        <LinkNote
          url={url}
          title={title}
          description={description}
          imageUrl={imageUrl}
          handledelete={handledelete}
        />
      )}
      {type === "video" && <VideoNote url={url} handledelete={handledelete} />}
      {type === "tweet" && (
        <TweetNote tweetId={tweetId} handledelete={handledelete} />
      )}
      {type === "note" && (
        <TextNote description={description} handledelete={handledelete} />
      )}
      {type === "document" && (
        <DocumentNote filename={title} handledelete={handledelete} />
      )}
    </div>
  );
}
