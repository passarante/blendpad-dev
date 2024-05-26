"use client";
import Navbar from "@/components/marketing/ui/Navbar";
import Sidebar from "@/components/marketing/ui/Sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpNarrowWide, ChevronRight, ChevronUp } from "lucide-react";
import React, { useEffect } from "react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [showGotoTab, setGotoTab] = React.useState(true);
  const isBrowser = () => typeof window !== "undefined";

  const gotoTop = () => {
    if (!isBrowser()) return;
    console.log(window);
    const body = document.querySelector("body");
    if (body) {
      body.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="flex flex-row relative">
      <div
        className={cn(`h-screen w-[250px] border-r border-gray-900`, {
          "w-[100px]": isCollapsed,
        })}
      >
        <div
          className={cn("absolute top-[20px] left-[218px] z-[500]", {
            "left-[80px]": isCollapsed,
          })}
        >
          <Button
            variant="secondary"
            className={cn("rounded-full p-2 z-[50] cursor-pointer")}
            onClick={toggleSidebar}
          >
            <ChevronRight />
          </Button>
        </div>
        <Sidebar isCollapsed={isCollapsed} />
      </div>
      <div className="h-screen w-[calc(100vw-250px)]">
        <Navbar isCollapsed={isCollapsed} />
        {children}
      </div>
      {showGotoTab && (
        <div className="fixed cursor-pointer bg-white text-black flex items-center justify-center w-10 h-10  rounded-full z-50 right-8 bottom-8">
          <ChevronUp onClick={gotoTop} />
        </div>
      )}
    </div>
  );
}
