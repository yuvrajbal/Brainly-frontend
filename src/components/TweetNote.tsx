import { Tweet } from "react-tweet";
type tweetProps = {
  url: string;
};
export default function TweetNote({ url }: tweetProps) {
  return (
    <div className="light dark:dark ">
      <Tweet id={url} />
    </div>
  );
}
