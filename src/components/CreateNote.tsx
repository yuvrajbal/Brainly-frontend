import { X } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

export default function CreateNote() {
  const [url, setUrl] = useState("");
  const [textForm, setTextForm] = useState(false);
  const toggleFormState = () => {
    setTextForm(!textForm);
  };
  const closePopUp = () => {};

  const submitNewContent = () => {};
  return (
    <div className="max-w-md p-2 ">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Add new content</h1>
        <button onClick={closePopUp}>
          <X />
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        {!textForm && (
          <>
            <label className="font-medium text-gray-700 text-sm" htmlFor="url">
              URL
            </label>
            <input
              id="url"
              type="text"
              placeholder="https://x.com/elon/status/1859"
              className="placeholder-gray-400 w-full text-gray-900 px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 "
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </>
        )}
        {textForm && (
          <>
            <label
              className="font-medium text-gray-700 text-sm"
              htmlFor="title"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Career Advice"
              className="placeholder-gray-400 w-full text-gray-900 px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 "
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <label className="font-medium text-gray-700 text-sm" htmlFor="note">
              Notes
            </label>
            <input
              id="note"
              type="text"
              placeholder="Build your connections and skillset"
              className="placeholder-gray-400 w-full text-gray-900 px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 "
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </>
        )}
      </div>
      <div className="flex mt-4 justify-between">
        <Button
          text={textForm ? "Link" : "Note"}
          variant="secondary"
          onClick={toggleFormState}
        />
        <div className="flex gap-2 justify-end ">
          <Button text="Cancel" variant="secondary" onClick={closePopUp} />
          <Button
            text="Add Content"
            variant="primary"
            onClick={submitNewContent}
          />
        </div>
      </div>
    </div>
  );
}
