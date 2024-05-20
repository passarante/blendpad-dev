import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TableCell, TableRow } from "@/components/ui/table";
import { PresaleType } from "@/types";
import { Globe } from "lucide-react";
import Image from "next/image";
import React from "react";
import { RiTelegramFill, RiTwitterFill } from "react-icons/ri";

export default function PresaleListRow({ presale }: { presale: PresaleType }) {
  return (
    <TableRow className="cursor-pointer hover:-translate-y-[2px] rounded-md duration-200 transition-all">
      <TableCell className="font-medium truncate flex items-center space-x-2">
        <div className="relative">
          <Image
            src={`/images/presales/${presale.logo}`}
            width={60}
            height={60}
            alt="logo"
            className="rounded-full"
          />
          <Image
            src={`/images/presales/${presale.typeImage}`}
            width={16}
            height={16}
            alt="logo"
            className="absolute -right-1 -bottom-2"
          />
        </div>
        <span>{presale.title}</span>
      </TableCell>
      <TableCell>
        <div className="flex items-center space-x-2">
          <Image
            src={`/images/presales/${presale.networkLogo}`}
            width={30}
            height={30}
            alt="logo"
            className="rounded-full"
          />
          <span className="uppercase">{presale.network}</span>
        </div>
      </TableCell>
      <TableCell>
        <div>
          <span>{presale.type}</span>
          <p className="flex items-center space-x-1 mt-2">
            {presale.tags.map((tag) => (
              <Button variant="outline" size={"tag"} key={tag}>
                {tag}
              </Button>
            ))}
          </p>
        </div>
      </TableCell>
      <TableCell>
        <div className="uppercase flex items-center space-x-2">
          {presale.type == "Sale Live" ? (
            <div className="w-4 h-4 bg-green-500 rounded-full" />
          ) : (
            <div className="w-4 h-4 bg-green-500 rounded-full" />
          )}
          <span>{presale.type}</span>
        </div>
      </TableCell>
      <TableCell>
        <Progress
          value={presale.progress}
          className="h-2 bg-green-900/90 data-[state=indeterminate]:text-red-500"
        />
      </TableCell>
      <TableCell>
        <div className="flex items-center space-x-1">
          <Globe className="w-4 h-4 text-gray-500" />
          <RiTelegramFill className="w-4 h-4 text-gray-500" />
          <RiTwitterFill className="w-4 h-4 text-gray-500" />
        </div>
      </TableCell>
    </TableRow>
  );
}
