import { UploadButton } from "@uploadthing/react";
import {
  CirclePlus,
  File,
  FileIcon,
  Link,
  Merge,
  NotebookIcon,
  NotebookPenIcon,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import type { FileRouter } from "uploadthing/types";
import axios from "axios";
import Button from "./Button";
import { toast } from "sonner";
import { getDocumentUploadStatus } from "@/services/userService";
type OurFileRouter = {
  pdfUploader: FileRouter["pdfUploader"];
};
export default function AddContent({
  onClose,
  refreshNotes,
}: {
  onClose: () => void;
  refreshNotes: () => void;
}) {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [textNote, setTextNote] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [type, setType] = useState("link");
  const [canUpload, setCanUpload] = useState(true);
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
      bgColor: "bg-blue-50 dark:bg-blue-950",
      borderColor: "border-blue-200 dark:border-blue-900",
    },
    {
      icon: <NotebookPenIcon className="size-4 stroke-green-500" />,
      label: "Note",
      value: "note",
      bgColor: "bg-green-50 dark:bg-emerald-950",
      borderColor: "border-green-200 dark:border-emerald-900",
    },
    {
      icon: <File className="size-4 stroke-yellow-500" />,
      label: "Document",
      value: "document",
      bgColor: "bg-yellow-50 dark:bg-yellow-950",
      borderColor: "border-yellow-200 dark:border-yellow-900",
    },
    {
      icon: <Merge className="size-4 stroke-purple-500" />,
      label: "Integrations",
      value: "integration",
      bgColor: "bg-purple-50 dark:bg-purple-950",
      borderColor: "border-purple-200 dark:border-purple-900",
    },
  ];
  const [selectedIndex, setSelectedindex] = useState(0);

  useEffect(() => {
    const getStatus = async () => {
      const uploadStatus = await getDocumentUploadStatus();
      setCanUpload(uploadStatus);
    };
    getStatus();
  }, []);
  const renderDynamicInput = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <div className="mt-4 rounded-md border border-blue-100 dark:border-stone-700 p-4 shadow-md dark:bg-stone-900">
            <div className="flex gap-2 items-center">
              <Link className="size-4 stroke-blue-500" />
              <label
                htmlFor="url"
                className="text-sm font-medium dark:text-gray-200"
              >
                Website or Tweet URL
              </label>
            </div>
            <input
              type="url"
              name="url"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              className="mt-4 w-full px-2 py-1 border rounded-md focus:outline-blue-500 dark:border-neutral-700  dark:bg-neutral-900 dark:focus:outline-neutral-700 dark:text-gray-200 dark:placeholder:text-gray-500"
              placeholder="https://google.com"
            />
          </div>
        );
      case 1:
        return (
          <div className="mt-4 rounded-md border border-green-100 dark:border-stone-700 p-4 shadow-md dark:bg-stone-900">
            <div className="flex gap-2 items-center">
              <NotebookIcon className="size-4 stroke-green-500" />
              <label
                htmlFor="note"
                className="text-sm font-medium dark:text-gray-200"
              >
                Note
              </label>
            </div>
            <textarea
              name="note"
              value={textNote}
              onChange={(e) => setTextNote(e.target.value)}
              placeholder="Add your note"
              rows={3}
              className="mt-4 w-full p-4 border rounded-md focus:outline-zinc-900 font-semibold dark:bg-neutral-900 dark:text-gray-200 dark:border-neutral-700  "
            />
          </div>
        );
      case 2:
        return (
          <div className="mt-4 rounded-md border border-yellow-100 dark:border-stone-700 p-4 shadow-md dark:bg-stone-900">
            {canUpload ? (
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
            ) : (
              <div className="dark:text-gray-400 text-gray-600">
                Upgrade to Pro to upload unlimited documents
              </div>
            )}

            {fileName && (
              <div className="mt-4 flex gap-2 items-center py-1 px-2 border rounded-md dark:text-gray-300">
                <FileIcon className="size-4" />
                {fileName}
              </div>
            )}
          </div>
        );
      case 3:
        return (
          <div className="mt-4 rounded-md border border-purple-100 dark:bg-stone-900 dark:border-stone-700 p-4 shadow-md">
            <h1 className="text-sm font-semibold dark:text-gray-300 ">
              We are working X and Notion integrations
            </h1>
          </div>
        );
    }
  };
  const isButtonDisabled = () => {
    switch (type) {
      case "link":
        return !websiteUrl.trim();
      case "note":
        return !textNote.trim();
      case "document":
        return !fileUrl.trim();
      case "integration":
        return true;
      default:
        return true;
    }
  };

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
          // setResponseCode(response.status);

          onClose();
          setTextNote("");
          setFileUrl("");
          setWebsiteUrl("");
          refreshNotes();
          return response.data;
        },
        {
          loading: "Creating memory...",
          success: "Memory created successfully",
          error: (err) => {
            // Dynamically include the error response code if available
            const statusCode = err.response?.status || "unknown";
            if (statusCode === 429) {
              return `Limit reached, Upgrade to Pro`;
            } else {
              return `Failed to create memory (status: ${statusCode})`;
            }
          },
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
      className="px-2 pt-6 pb-2 border rounded-lg bg-gray-50 dark:bg-neutral-800 dark:border-none"
      ref={addContentRef}
    >
      <h1 className="flex gap-3 items-center font-semibold mb-6 dark:text-gray-200">
        <CirclePlus className="size-4 stroke-2" />
        Add Memory
      </h1>
      <div className="group grid grid-cols-4 border p-2 rounded-md bg-gray-50 dark:bg-stone-900 dark:border-neutral-700">
        {items.map((item, index) => (
          <div
            className={`p-3 rounded-md text-sm font-medium cursor-pointer ${
              selectedIndex === index
                ? `${item.bgColor}`
                : "hover:bg-gray-100 dark:bg-inherit"
            }
              ${selectedIndex === index ? `border ${item.borderColor}` : ""}`}
            key={item.label}
            onClick={() => handleTypeChange(item.value, index)}
          >
            {item.icon}
            <div className="mt-2 dark:text-gray-300">{item.label}</div>
          </div>
        ))}
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
          <Button
            text="Add Memory"
            variant="primary"
            type="submit"
            disabled={isButtonDisabled()}
          />
        </div>
      </form>
    </main>
  );
}
