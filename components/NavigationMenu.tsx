"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Brain, ChartColumnBig, GraduationCap, House, PenSquare, RotateCcw } from "lucide-react";

const items = [
  { href: "/", label: "Home", icon: House },
  { href: "/lessons", label: "Lessons", icon: BookOpen },
  { href: "/practice", label: "Practice", icon: PenSquare },
  { href: "/quiz", label: "Quiz", icon: Brain },
  { href: "/mock-exam", label: "Mock Exam", icon: GraduationCap },
  { href: "/review", label: "Review", icon: RotateCcw },
  { href: "/progress", label: "Progress", icon: ChartColumnBig },
];

export function NavigationMenu() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-30 border-b border-white/50 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-3 sm:px-6">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-black transition ${active ? "bg-slate-900 text-white shadow-lg" : "bg-white/90 text-slate-600 hover:bg-blue-50"}`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}