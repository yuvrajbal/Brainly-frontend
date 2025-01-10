import React from "react";
import ReactMarkdown from "react-markdown";

interface SearchResultProps {
  searchResult: string;
  timestamp?: Date;
}

interface MarkdownComponentProps {
  node?: any;
  children?: React.ReactNode;
  className?: string;
}

const SearchResult: React.FC<SearchResultProps> = ({
  searchResult,
  timestamp = new Date(),
}) => {
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Custom markdown components with TypeScript
  const markdownComponents: {
    [nodeType: string]: React.FC<MarkdownComponentProps>;
  } = {
    h1: ({ ...props }) => (
      <h1
        className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100"
        {...props}
      />
    ),
    h2: ({ ...props }) => (
      <h2
        className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100"
        {...props}
      />
    ),
    h3: ({ ...props }) => (
      <h3
        className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100"
        {...props}
      />
    ),
    p: ({ ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
    ul: ({ ...props }) => (
      <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />
    ),
    ol: ({ ...props }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />
    ),
    a: ({ ...props }) => (
      <a
        className="text-blue-600 dark:text-blue-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    code: ({ ...props }) => (
      <code
        className="bg-gray-100 dark:bg-neutral-700 rounded px-1.5 py-0.5 text-sm font-mono"
        {...props}
      />
    ),
    blockquote: ({ ...props }) => (
      <blockquote
        className="border-l-4 border-gray-200 dark:border-gray-600 pl-4 italic my-4"
        {...props}
      />
    ),
  };

  return (
    <div className="w-full mx-auto">
      <div className="bg-white dark:bg-neutral-950 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Brainly Response
            </span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {formatTime(timestamp)}
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown
            className="text-gray-800 dark:text-gray-200"
            components={markdownComponents}
          >
            {searchResult}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
