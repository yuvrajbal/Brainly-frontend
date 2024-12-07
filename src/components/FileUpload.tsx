import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
import type { FileRouter } from "uploadthing/types";

type OurFileRouter = {
  pdfUploader: FileRouter["pdfUploader"];
};
export const Uploaddropzone = generateUploadDropzone<OurFileRouter>();
export const Uploadbutton = generateUploadButton();
