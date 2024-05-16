import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SidebarLink } from "@/types";
import Link from "next/link";

import React from "react";

type SidebarMenuSectionProps = {
  title: string;
  links: SidebarLink[];
};

export default function SidebarMenuSection({
  links,
  title,
}: SidebarMenuSectionProps) {
  console.log(links);
  return (
    <>
      <p className="uppercase text-gray-300 text-[12px] cursor-pointer hover:text-white duration-300 transiiton-all">
        {title}
      </p>
      <div className="p-2 flex flex-col w-full">
        {links.map((link, index) => (
          <Link
            href="#"
            key={index}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),

              "justify-start mb-2  w-full"
            )}
          >
            <link.icon className="mr-2 h-6 w-6" />
            {link.title}
          </Link>
        ))}
      </div>
    </>
  );
}
