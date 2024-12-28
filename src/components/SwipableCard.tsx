// import React, { useState } from "react";
// import { useSwipeable } from "react-swipeable";
// import Note2 from "./NoteCard2"; // Adjust the import path
// import { Memory } from "./AllNotes";

// type SwipableStackProps = {
//   memories: Memory[];
//   onSwipeLeft?: (memory: Memory) => void;
//   onSwipeRight?: (memory: Memory) => void;
// };

// const SwipableStack: React.FC<SwipableStackProps> = ({
//   memories,
//   onSwipeLeft,
//   onSwipeRight,
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlers = useSwipeable({
//     onSwipedLeft: () => handleSwipe("left"),
//     onSwipedRight: () => handleSwipe("right"),
//     preventScrollOnSwipe: true,
//     trackMouse: true,
//   });

//   const handleSwipe = (direction: "left" | "right") => {
//     const currentMemory = memories[currentIndex];
//     if (!currentMemory) return;

//     if (direction === "left") {
//       onSwipeLeft?.(currentMemory);
//     } else if (direction === "right") {
//       onSwipeRight?.(currentMemory);
//     }

//     // Move to the next card
//     setCurrentIndex((prevIndex) => prevIndex + 1);
//   };

//   const currentMemory = memories[currentIndex];

//   return (
//     <div className="relative w-full h-full">
//       {memories.slice(currentIndex, currentIndex + 2).map((memory, index) => (
//         <div
//           {...handlers}
//           key={memory._id}
//           className={`absolute w-full transition-transform duration-300 ${
//             index === 0 ? "z-10" : "z-0"
//           }`}
//           style={{
//             top: `${index * 10}px`, // Slight offset for stacked effect
//           }}
//         >
//           <Note2
//             type={memory.type}
//             title={memory.title}
//             description={memory.description}
//             url={memory.link || ""}
//             imageUrl={memory.imageUrl}
//             id={memory._id}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SwipableStack;
