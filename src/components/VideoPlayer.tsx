import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Play, Volume2 } from "lucide-react";

interface VideoNoteProps {
  url: string;
}

const VideoPlayer: React.FC<VideoNoteProps> = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden relative group bg-gray-100 dark:bg-neutral-900">
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 z-10 animate-pulse">
          <div className="absolute inset-0 bg-gray-200 dark:bg-neutral-800">
            {/* Fake video controls */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/10 dark:bg-white/5 backdrop-blur">
              <div className="flex items-center h-full px-4 space-x-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-neutral-700"></div>
                <div className="flex-grow h-1 rounded-full bg-gray-300 dark:bg-neutral-700"></div>
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-neutral-700"></div>
              </div>
            </div>

            {/* Center play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-neutral-700"></div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay (shows before video is ready) */}
      {!isReady && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20">
          <div className="w-16 h-16 rounded-full bg-black/30 flex items-center justify-center backdrop-blur-sm">
            <Play className="w-8 h-8 text-white" />
          </div>
        </div>
      )}

      {/* Actual Video Player */}
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        onReady={() => {
          setIsReady(true);
          setIsLoading(false);
        }}
        onBuffer={() => setIsLoading(true)}
        onBufferEnd={() => setIsLoading(false)}
        config={{
          file: {
            attributes: {
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },
            },
          },
        }}
      />

      {/* Hover Controls */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center h-full px-4 space-x-4">
          <Play className="w-5 h-5 text-white" />
          <div className="flex-grow h-1 rounded-full bg-white/30">
            <div className="w-1/3 h-full rounded-full bg-white"></div>
          </div>
          <Volume2 className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
