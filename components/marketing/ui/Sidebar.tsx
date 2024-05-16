"use client";

import Logo from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { TooltipContent } from "@radix-ui/react-tooltip";
import {
  Archive,
  ArchiveX,
  ArrowLeftRight,
  ArrowLeftRightIcon,
  Blocks,
  DollarSign,
  File,
  Inbox,
  LockKeyhole,
  Send,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import SidebarMenuSection from "./SidebarMenuSection";

export default function Sidebar({ isCollapsed }: { isCollapsed: boolean }) {
  const exploreLinks = [
    {
      title: "Presales",
      icon: Blocks,
      href: "",
    },
    {
      title: "Locks",
      icon: LockKeyhole,
      href: "",
    },
    {
      title: "Staking",
      icon: DollarSign,
      href: "",
    },
    {
      title: "OTC Sales",
      icon: ArrowLeftRightIcon,
      href: "",
    },
  ];

  return (
    <div className="fixed  h-screen z-50 ">
      <div>
        <div
          className={cn("mb-6 border-gray-700 border-b p-6", {
            "p-1.5": isCollapsed,
          })}
        >
          <Logo isCollapsed={isCollapsed} />
        </div>
        <div>
          <TooltipProvider>
            <div
              data-collapsed={isCollapsed}
              className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
            >
              <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
                <SidebarMenuSection title={"Explore"} links={exploreLinks} />

                {/* {links.map((link, index) =>
                  isCollapsed ? (
                    <Tooltip key={index} delayDuration={0}>
                      <TooltipTrigger asChild>
                        <Link
                          href={link.href}
                          className={cn(
                            buttonVariants({
                              variant: link.variant,
                              size: "icon",
                            }),
                            "h-9 w-9",
                            link.variant === "default" &&
                              "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                          )}
                        >
                          <link.icon className="h-4 w-4" />
                          <span className="sr-only">{link.title}</span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent
                        side="right"
                        className="flex items-center gap-4"
                      >
                        {link.title}
                        {link.label && (
                          <span className="ml-auto text-muted-foreground">
                            {link.label}
                          </span>
                        )}
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <Link
                      key={index}
                      href="#"
                      className={cn(
                        buttonVariants({ variant: link.variant, size: "sm" }),
                        link.variant === "default" &&
                          "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                        "justify-start"
                      )}
                    >
                      <link.icon className="mr-2 h-4 w-4" />
                      {link.title}
                      {link.label && (
                        <span
                          className={cn(
                            "ml-auto",
                            link.variant === "default" &&
                              "text-background dark:text-white"
                          )}
                        >
                          {link.label}
                        </span>
                      )}
                    </Link>
                  )
                )} */}
              </nav>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
