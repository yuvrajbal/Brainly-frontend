import ReactPlayer from "react-player";
type videoProps = {
  url: string;
};
export default function VideoNote({ url }: videoProps) {
  return (
    <div className="rounded-xl overflow-hidden relative group ">
      <ReactPlayer url={url} width={""} />
    </div>
  );
}
