"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  Images,
  Mail,
  Settings,
} from "lucide-react";

const items = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
  name: "Website Content",
  href: "/admin/content/hero",
  icon: FileText,
  },
  {
    name: "Projects",
    href: "/admin/projects",
    icon: FolderKanban,
  },
  {
    name: "Blogs",
    href: "/admin/blogs",
    icon: FileText,
  },
  {
    name: "Gallery",
    href: "/admin/gallery",
    icon: Images,
  },
  {
    name: "Messages",
    href: "/admin/messages",
    icon: Mail,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-white/10 bg-[#070b18] lg:block">

      <div className="border-b border-white/10 p-8">

        <h1 className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-3xl font-black text-transparent">
          SHIHAB CMS
        </h1>

      </div>

      <nav className="space-y-2 p-6">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-4 rounded-2xl px-5 py-4 text-white/70 transition hover:bg-violet-500/10 hover:text-white"
            >
              <Icon size={22} />
              {item.name}
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}