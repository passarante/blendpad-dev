import { cn } from "@/lib/utils";
import React from "react";

export default function Navbar({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <nav
      className={cn(
        "bg-black border-b border-gray-900 h-20 fixed w-[calc(100vw-300px)] items-center justify-between px-4",
        { "w-[calc(100vw-100px)]": isCollapsed }
      )}
    >
      Navbar
    </nav>
  );
}
