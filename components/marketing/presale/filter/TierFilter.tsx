"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

export default function TierFilter() {
  const tiers = [
    { title: "Common", image: "0.svg" },
    { title: "Gold", image: "1.svg" },
    { title: "Emerald", image: "2.svg" },
    { title: "Diamond", image: "3.svg" },
    { title: "Alpha", image: "4.svg" },
  ];
  const [selected, setSelected] = useState([0, 1, 2, 3, 4]);

  const handleClick = (index: number) => {
    const isExists = selected.find((item) => item === index);
    if (isExists) {
      setSelected(selected.filter((item) => item !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <span>Chain</span>
        <Button variant="dark" size="sm" onClick={() => setSelected([])}>
          Uncheck All
        </Button>
      </div>
      <div className="flex items-center space-x-8 mt-2">
        <TooltipProvider>
          {tiers.map((tier, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Image
                  src={`/images/tiers/${tier.image}`}
                  width={16}
                  height={16}
                  alt={`${tier}`}
                  className={cn(
                    "cursor-pointer hover:scale-[1.3] duration-200 transition-all",
                    !selected.includes(index) && "opacity-30"
                  )}
                  onClick={() => handleClick(index)}
                />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-600">
                <p>{tier.title}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
}
