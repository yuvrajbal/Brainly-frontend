import { LucideProps } from "lucide-react";

type ButtonProps = {
  icon?: React.ElementType<LucideProps>;
  text?: string;
  variant: "primary" | "secondary" | "pro";
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};
export default function Button({
  icon: Icon,
  text,
  type = "button",
  variant,
  className,
  onClick,
  disabled = false,
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-indigo-600 text-white hover:text-gray-300 dark:bg-stone-950 dark:shadow-md dark:border dark:border-neutral-800 dark:text-gray-300 dark:hover:text-gray-400",
    secondary:
      "bg-indigo-100  text-blue-800 hover:text-gray-500 dark:bg-stone-900 dark:text-gray-300 dark:hover:text-gray-400",
    pro: "bg-gradient-to-r from-indigo-600 to-blue-500 text-white hover:from-indigo-700 hover:to-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-900 animate-pulse",
  };

  return (
    <button
      type={type}
      className={`px-2 sm:px-4 py-1 sm:py-2 flex items-center justify-center rounded-md gap-2 ${
        variantStyles[variant]
      }
    ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={18} />}
      {text && (
        <span className="tracking-wide text-xs sm:text-base">
          {text}
          {variant === "pro" && (
            <span className="ml-1 text-yellow-300">✨</span>
          )}
        </span>
      )}
    </button>
  );
}
