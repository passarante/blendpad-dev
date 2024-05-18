"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Blocks,
  Grip,
  Heart,
  ListFilter,
  Rows4,
  Search,
  WalletMinimal,
} from "lucide-react";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  Sheet,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ChainFilter from "./filter/ChainFilter";
import TierFilter from "./filter/TierFilter";
import OptionFilter from "./filter/OptionFilter";
import { Input } from "@/components/ui/input";
import PresaleList from "./PresaleList";
import PresaleGrid from "./PresaleGrid";

export default function Presales() {
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  return (
    <div className="w-full">
      <Tabs defaultValue="all" className="w-full p-2">
        <div className="flex w-full items-center justify-between">
          <div className="flex space-x-1   text-gray-700 items-center">
            <div
              onClick={() => setLayout("grid")}
              className={cn(
                "w-8 h-8 rounded-md bg-gray-900 hover:bg-gray-700 hover:text-green-500 flex items-center justify-center cursor-pointer duration-200 transition-all",
                layout === "grid" ? "text-green-500" : ""
              )}
            >
              <Grip />
            </div>
            <div
              onClick={() => setLayout("list")}
              className={cn(
                "w-8 h-8 rounded-md bg-gray-900 hover:bg-gray-700 hover:text-green-500 flex items-center justify-center cursor-pointer duration-200 transition-all",
                layout === "list" ? "text-green-500" : ""
              )}
            >
              <Rows4 />
            </div>
            <div className="ml-4 relative">
              <Search className="absolute top-2 left-6" />
              <Input
                className="ml-4 pl-10  w-[250px] ring-0 focus:outline-none focus:border-transparent focus:ring-0"
                placeholder="Search..."
              />
            </div>
          </div>
          <div>
            <TabsList className="bg-black space-x-2">
              <TabsTrigger
                value="all"
                className="data-[state=active]:border-b border-white"
              >
                <Blocks className="mr-2" />
                All Presales
              </TabsTrigger>
              <TabsTrigger
                value="myContributions"
                className="data-[state=active]:border-b border-white"
              >
                <WalletMinimal className="mr-2" /> My Contributions
              </TabsTrigger>
              <TabsTrigger
                value="favorites"
                className="data-[state=active]:border-b border-white"
              >
                <Heart className="mr-2" />
                Favorites
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="secondary">
                  Filters
                  <ListFilter className="ml-2" />
                </Button>
              </SheetTrigger>
              <SheetContent className="backdrop-blur-sm bg-gray-700/20">
                <SheetHeader>
                  <SheetDescription>
                    <ChainFilter />
                    <div className="border-b border-gray-700 my-2" />
                    <TierFilter />
                    <div className="border-b border-gray-700 my-2" />
                    <OptionFilter
                      title="Badges"
                      type="checkbox"
                      unCheckAllBtn
                      data={["No Badge", "KYC", "Audit", "Vetted"]}
                    />
                    <div className="border-b border-gray-700 my-2" />
                    <OptionFilter
                      title="Sort"
                      type="radio"
                      data={[
                        "Default",
                        "Newest",
                        "Start Time",
                        "End Time",
                        "Rank",
                      ]}
                    />
                    <div className="border-b border-gray-700 my-2" />
                    <OptionFilter
                      title="Status"
                      type="checkbox"
                      data={[
                        "Upcoming",
                        "Sale Live",
                        "Sale Ended",
                        "Cancelled",
                      ]}
                    />
                    <div className="border-b border-gray-700 my-2" />
                    <OptionFilter
                      title="Sale Type"
                      type="checkbox"
                      data={["Normal Launch", "Fair Launch"]}
                    />
                    <div className="border-b border-gray-700 my-4" />
                    <OptionFilter
                      title="Listing Type"
                      type="checkbox"
                      data={["Auto Listing", "Manual Listing"]}
                    />
                    <div className="flex items-center justify-between mt-4 space-x-4">
                      <Button size={"sm"} variant={"dark"} className="w-full">
                        Reset
                      </Button>
                      <Button size={"sm"} variant={"dark"} className="w-full">
                        Apply
                      </Button>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <TabsContent value="all" className="w-full">
          {layout === "grid" ? <PresaleGrid /> : <PresaleList />}
        </TabsContent>
        <TabsContent value="myContributions">My Contributions</TabsContent>
        <TabsContent value="favorites">Favorites</TabsContent>
      </Tabs>
    </div>
  );
}
