"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BellDotIcon,
  Bitcoin,
  Circle,
  CircleDashed,
  CircleX,
  MegaphoneIcon,
  Snowflake,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ isCollapsed }: { isCollapsed: boolean }) {
  const [text, setText] = useState("Get a FREE audit on CORE Chain");
  const slogans = [
    {
      icon: <Snowflake />,
      text: "Get a FREE audit on CORE Chain",
      link: "#",
    },
    {
      icon: <Snowflake />,
      text: "Create SOL Sale on NEW Radyum V5 - No OpenBook FEES!",
      link: "#",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (text === slogans[0].text) {
        setText(slogans[1].text);
      } else {
        setText(slogans[0].text);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [slogans, text]);

  return (
    <nav
      className={cn(
        "bg-black border-b border-gray-900 h-20 flex fixed w-[calc(100vw-300px)] items-center justify-between px-8",
        { "w-[calc(100vw-100px)]": isCollapsed }
      )}
    >
      <div className="w-full flex  items-center justify-between">
        <div className="flex space-x-2">
          {text == slogans[0].text ? (
            <span className="flex items-center">
              <span className="w-4 h-4 animate-pulse bg-green-500 rounded-full"></span>
            </span>
          ) : (
            <span>
              <MegaphoneIcon className="w-8 h-8 animate-bounce text-gray-400" />
            </span>
          )}
          <p>
            {text.split(" ").map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </p>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <Button variant={"outline"} className="space-x-2">
            <Snowflake />
            <span>SolSale</span>
          </Button>
          <Button className="flex items-center " variant={"ghost"}>
            <Bitcoin />
            <span>0</span>
          </Button>
          <Button variant={"link"}>
            <BellDotIcon />
          </Button>
          <Button>Connect Wallet</Button>
        </div>
      </div>
    </nav>
  );
}
