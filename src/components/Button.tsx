import { Icon, LucideIcon } from "lucide-react";

type ButtonProps = {
  icon?: LucideIcon;
  text?: string;
  variant: "primary" | "secondary";
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
    primary: "bg-indigo-600 text-white",
    secondary: "bg-indigo-100 text-blue-900",
  };

  return (
    <button
      type={type}
      className={`px-4 py-2 flex items-center justify-center rounded-md gap-2 ${
        variantStyles[variant]
      }
    ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={18} />}
      {text && <span className="font-semibold">{text}</span>}
    </button>
  );
}
