import React, { useState } from "react";
import { Brain, User, Lock, CreditCard, X, Menu } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks: NavLink[] = [
    { href: "#profile", label: "Profile", icon: <User size={20} /> },
    { href: "#security", label: "Security", icon: <Lock size={20} /> },
    {
      href: "#subscription",
      label: "Subscription",
      icon: <CreditCard size={20} />,
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-neutral-800 text-white"
        aria-label="Toggle menu"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          w-72 dark:bg-neutral-950 fixed lg:sticky top-0 h-screen z-40
          transition-transform duration-300 ease-in-out
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <a
          className="text-lg font-bold text-white px-6 h-16 border-b border-gray-400 flex gap-2 items-center"
          href="/home"
        >
          <Brain className="text-indigo-500" />
          BrainlyAI
        </a>

        <nav className="flex flex-col mt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-gray-100 p-4 hover:bg-neutral-900 text-md flex items-center gap-3"
              href={link.href}
              onClick={() => setIsSidebarOpen(false)}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 dark:bg-neutral-900 bg-gray-100">
        <div className="px-6 py-12 space-y-6">{children}</div>
      </main>
    </div>
  );
}
