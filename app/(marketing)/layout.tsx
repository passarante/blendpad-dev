"use client";
import Navbar from "@/components/marketing/ui/Navbar";
import Sidebar from "@/components/marketing/ui/Sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React from "react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="flex flex-row">
      <div
        className={cn(`h-screen w-[250px] border-r border-gray-900`, {
          "w-[100px]": isCollapsed,
        })}
      >
        <div
          className={cn("absolute top-[20px] left-[230px] z-50", {
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
    </div>
  );
}
