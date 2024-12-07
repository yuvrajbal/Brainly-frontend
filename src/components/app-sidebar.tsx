import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Youtube,
  FileText,
  Link2,
  Hash,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Tweets",
    url: "#",
    icon: Home,
  },
  {
    title: "Videos",
    url: "#",
    icon: Youtube,
  },
  {
    title: "Documents",
    url: "#",
    icon: FileText,
  },
  {
    title: "Links",
    url: "#",
    icon: Link2,
  },
  {
    title: "Tags",
    url: "#",
    icon: Hash,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex justify-center items-center gap-4 ">
              <img src={"/brain-icon.png"} alt="" className="size-10" />
              <div className="text-lg font-semibold text-black">Brainly</div>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
