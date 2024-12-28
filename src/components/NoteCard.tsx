// import { Tweet } from "react-tweet";
// import { contentTypes, contentType } from "./contentTypes";
// import ReactPlayer from "react-player";
// import Tag from "./Tag";
// type NoteProps = {
//   type: contentType;
//   title?: string;
//   description?: string;
//   imageUrl?: string;
//   videoUrl?: string;
//   tweetId?: string;
//   tags?: string[];
//   className?: string;
// };

// const defaultImageUrl =
//   "https://images.unsplash.com/photo-1732454827988-95972d793f1b?q=80&w=1618&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// export default function Note({
//   type,
//   title,
//   description,
//   imageUrl,
//   videoUrl,
//   tweetId,
//   tags,
//   className,
// }: NoteProps) {
//   return (
//     <div
//       className={`light px-3 py-4 rounded-2xl bg-white border-2 flex flex-col justify-between ${
//         className || ""
//       }`}
//     >
//       {/* title row */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           {type === "tweet" && (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               x="0px"
//               y="0px"
//               width="40"
//               height="40"
//               viewBox="0 0 48 48"
//               className="size-8"
//             >
//               <path
//                 fill="#212121"
//                 fill-rule="evenodd"
//                 d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
//                 clip-rule="evenodd"
//               ></path>
//               <path
//                 fill="#fff"
//                 d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
//               ></path>
//               <polygon
//                 fill="#fff"
//                 points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
//               ></polygon>
//               <polygon
//                 fill="#fff"
//                 points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
//               ></polygon>
//             </svg>
//           )}
//           {type === "video" && (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               x="0px"
//               y="0px"
//               viewBox="0 0 48 48"
//               className="size-8"
//             >
//               <path
//                 fill="#FF3D00"
//                 d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
//               ></path>
//               <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
//             </svg>
//           )}
//           {type === "link" && (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               className="size-6"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
//               />
//             </svg>
//           )}
//           {type === "text" && (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               className="size-6"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
//               />
//             </svg>
//           )}

//           <div className="font-semibold text-xl">
//             {type === "tweet" && <span>Tweet</span>}
//             {type === "video" && <span>{title}</span>}
//             {type === "link" && <span>{title}</span>}
//             {type === "text" && <span>{title}</span>}
//           </div>
//         </div>
//         <div className="flex gap-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="size-6"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
//             />
//           </svg>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="size-6"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//             />
//           </svg>
//         </div>
//       </div>

//       {/* content */}
//       {type === "tweet" && (
//         <div className="">
//           <Tweet id={tweetId as string} />
//         </div>
//       )}
//       {type === "video" && (
//         <div className="my-6 rounded-xl overflow-hidden ">
//           <ReactPlayer url={videoUrl} width={""} />
//         </div>
//       )}
//       {(type === "link" || type === "text") && (
//         <div className="flex flex-col gap-4 items-start my-6">
//           <img
//             src={imageUrl || defaultImageUrl}
//             alt="document"
//             className="rounded-xl object-cover "
//           />
//           <div className="text-xl leading-6 tracking-tight font-semibold ">
//             {description}
//           </div>
//         </div>
//       )}
//       {/* tags */}
//       <div>
//         {tags && (
//           <div className="flex gap-2">
//             {tags.map((tag) => (
//               <Tag title={tag} />
//             ))}
//           </div>
//         )}
//         <div className="text-base text-gray-600 mt-4">Added on 11/28/2024</div>
//       </div>
//     </div>
//   );
// }
