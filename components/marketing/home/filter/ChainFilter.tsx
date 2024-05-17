"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

export default function ChainFilter() {
  const [selected, setSelected] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23,
  ]);

  const chains = [
    "001-eth.png",
    "002-bsc.png",
    "003-sol.png",
    "004-arbi.png",
    "005-base.png",
    "006-opbnb.png",
    "007-alv.png",
    "008-bone.png",
    "009-pwr.png",
    "010-abey.png",
    "011-brock.png",
    "012-bone.png",
    "013-lila.png",
    "014-cyba.png",
    "015-core.png",
    "016-vic.png",
    "017-pls.png",
    "018-dogechain.png",
    "019-cro.png",
    "020-tlos.png",
    "021-mtr.png",
    "022-ame.png",
    "023-ozo.png",
  ];

  const handleClick = (index: number) => {
    const isExists = selected.find((item) => item === index);
    if (isExists) {
      setSelected(selected.filter((item) => item !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <span>Chain</span>
        <Button variant="dark" size="sm" onClick={() => setSelected([])}>
          Uncheck All
        </Button>
      </div>
      <div className="grid grid-cols-6 gap-2 mt-4">
        {chains.map((chain, index) => (
          <Image
            onClick={() => handleClick(index + 1)}
            key={index}
            src={`/images/chains/${chain}`}
            width={24}
            height={24}
            alt={`${chain}`}
            className={cn(
              "cursor-pointer hover:scale-[1.3] duration-200 transition-all",
              !selected.includes(index + 1) && "opacity-30"
            )}
          />
        ))}
      </div>
    </div>
  );
}
