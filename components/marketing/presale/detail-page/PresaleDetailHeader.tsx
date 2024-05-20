import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell, Heart, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function PresaleDetailHeader() {
  return (
    <div className="col-span-2 flex items-center justify-between ">
      <div className="flex space-x-2 text-gray-300 font-bold font-sm">
        <Link href="/presale/all" className="flex">
          <ArrowLeft />
          <span>Back</span>
        </Link>
      </div>
      <div className="flex items-center justify-between text-gray-600 space-x-1">
        <Button variant={"ghost"} size={"sm"}>
          <Bell />
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          <Heart />
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          <Plus />
        </Button>
      </div>
    </div>
  );
}
