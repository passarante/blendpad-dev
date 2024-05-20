import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SidebarLink } from "@/types";
import Link from "next/link";

import React from "react";

type SidebarMenuSectionProps = {
  title: string;
  links: SidebarLink[];
  isCollapsed: boolean;
};

export default function SidebarMenuSection({
  links,
  title,
  isCollapsed,
}: SidebarMenuSectionProps) {
  return (
    <>
      {!isCollapsed && (
        <p className="uppercase text-gray-300 text-[12px] cursor-pointer hover:text-white duration-300 transition-all">
          {title}
        </p>
      )}
      <div className="flex flex-col w-[120px]">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={cn(
              "justify-start flex mb-2 w-[200px] hover:bg-gray-700 hover:rounded-lg p-4 ",
              isCollapsed && " flex flex-col w-[80px] text-[12px]"
            )}
          >
            <link.icon
              className={cn("mr-2 h-6 w-6", isCollapsed && "h-4 w-4")}
            />
            {link.title}
          </Link>
        ))}
      </div>
    </>
  );
}
