import { UploadButton, UploadDropzone } from "@uploadthing/react";
import {
  CirclePlus,
  Divide,
  File,
  FileIcon,
  icons,
  Link,
  Merge,
  NotebookIcon,
  NotebookPenIcon,
  Trophy,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import type { FileRouter } from "uploadthing/types";
import axios from "axios";
import Button from "./Button";
import { toast } from "sonner";
type OurFileRouter = {
  pdfUploader: FileRouter["pdfUploader"];
};
export default function AddContent({ onClose }: { onClose: () => void }) {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [textNote, setTextNote] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [type, setType] = useState("link");
  const renderDynamicInput = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <div className="mt-4 rounded-md border border-blue-100 p-4 shadow-md">
            <div className="flex gap-2 items-center">
              <Link className="size-4 stroke-blue-500" />
              <label htmlFor="url" className="text-sm font-medium">
                Website or Tweet URL
              </label>
            </div>
            <input
              type="url"
              name="url"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              className="mt-4 w-full px-2 py-1 border rounded-md focus:outline-blue-500"
              placeholder="https://google.com"
            />
          </div>
        );
      case 1:
        return (
          <div className="mt-4 rounded-md border border-green-100 p-4 shadow-md">
            <div className="flex gap-2 items-center">
              <NotebookIcon className="size-4 stroke-green-500" />
              <label htmlFor="note" className="text-sm font-medium">
                Note
              </label>
            </div>
            <textarea
              name="note"
              value={textNote}
              onChange={(e) => setTextNote(e.target.value)}
              placeholder="Add your note"
              rows={3}
              className="mt-4 w-full p-4 border rounded-md focus:outline-zinc-900 font-semibold"
            />
          </div>
        );
      case 2:
        return (
          <div className="mt-4 rounded-md border border-yellow-100 p-4 shadow-md">
            {/* {`${import.meta.env.VITE_BACKEND_URL}`} */}
            <UploadButton<OurFileRouter, "pdfUploader">
              url={`${import.meta.env.VITE_BACKEND_URL}/api/uploadthing`}
              endpoint="pdfUploader"
              className="ut-allowed-content:mt-2"
              onClientUploadComplete={(res) => {
                setFileUrl(res[0].url);
                setFileName(res[0].name);

                // alert("upload completed");
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
              // onBeforeUploadBegin={(files) => {
              //   // uploading toast
              //   console.log("started uploading", file);
              // }}
              onUploadBegin={(name) => {
                // Do something once upload begins
                console.log("Uploading: ", name);
              }}
              // onDrop={(acceptedFiles) => {
              //   // Do something with the accepted files

              //   console.log("Accepted files: ", acceptedFiles);
              //   // alert("file dropped");
              // }}
            />
            {fileName && (
              <div className="mt-4 flex gap-2 items-center py-1 px-2 border rounded-md">
                <FileIcon className="size-4" />
                {fileName}
              </div>
            )}
          </div>
        );
      case 3:
        return (
          <div className="mt-4 rounded-md border border-purple-100 p-4 shadow-md">
            <h1 className="text-sm font-semibold ">
              We are working X and Notion integrations
            </h1>
          </div>
        );
    }
  };
  const items = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-4 stroke-blue-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
      label: "Website",
      value: "link",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <NotebookPenIcon className="size-4 stroke-green-500" />,
      label: "Note",
      value: "note",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <File className="size-4 stroke-yellow-500" />,
      label: "Document",
      value: "document",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      icon: <Merge className="size-4 stroke-purple-500" />,
      label: "Integrations",
      value: "integration",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ];
  const [selectedIndex, setSelectedindex] = useState(0);

  const handleAddMemory = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      // link(url) , type , filename(document), description(note)
      toast.promise(
        async () => {
          const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/v1/content`,
            {
              type,
              link: websiteUrl || fileUrl,
              fileName,
              description: textNote,
            },
            {
              headers: {
                authorization: `${localStorage.getItem("token")}`,
              },
            }
          );
          onClose();
          setTextNote("");
          setFileUrl("");
          setWebsiteUrl("");

          return response.data;
        },
        {
          loading: "Creating memory...",
          success: "Memory created successfully",
          error: "Failed to create memory",
          duration: 3000,
        }
      );
    } catch (err) {
      console.log("error sending req", err);
      toast.error("Unable to create memory", {
        duration: 3000,
      });
    }
  };
  const handleTypeChange = (value: string, index: number) => {
    setSelectedindex(index);
    setType(value);
  };
  const addContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        addContentRef.current &&
        !addContentRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <main
      className="px-2 pt-6 pb-2 border rounded-lg bg-white"
      ref={addContentRef}
    >
      <h1 className="flex gap-3 items-center font-semibold mb-6">
        <CirclePlus className="size-4 stroke-2" />
        Add Memory
      </h1>
      <div className="group grid grid-cols-4 border p-2 rounded-md bg-gray-50">
        {items.map((item, index) => (
          <div
            className={`p-3 rounded-md text-sm font-medium cursor-pointer ${
              selectedIndex === index ? `${item.bgColor}` : "hover:bg-gray-100"
            }
              ${selectedIndex === index ? `border ${item.borderColor}` : ""}`}
            key={item.label}
            onClick={() => handleTypeChange(item.value, index)}
          >
            {item.icon}
            <div className="mt-2">{item.label}</div>
          </div>
        ))}
        {/* <div className="p-2 rounded-md border text-sm font-medium hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <div className="mt-2">Website</div>
        </div>
        <div className="p-2 rounded-md border text-sm font-medium">
          <NotebookPenIcon className="size-4" />
          <div className="mt-2">Note</div>
        </div>
        <div className="p-2 rounded-md border text-sm font-medium">
          <File className="size-4" />
          <div className="mt-2">Document</div>
        </div>
        <div className="p-2 rounded-md border text-sm font-medium">
          <Merge className="size-4" />
          <div className="mt-2">Integrations</div>
        </div> */}
      </div>
      <form onSubmit={handleAddMemory}>
        {selectedIndex !== null && renderDynamicInput()}
        <div className="flex justify-between mt-8">
          <Button
            text="Cancel"
            variant="secondary"
            type="button"
            onClick={onClose}
          />
          <Button text="Add Memory" variant="primary" type="submit" />
        </div>
      </form>
    </main>
  );
}
