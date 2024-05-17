"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Blocks,
  Grip,
  Heart,
  ListCollapse,
  ListFilter,
  Rows4,
  WalletMinimal,
} from "lucide-react";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ChainFilter from "./filter/ChainFilter";

export default function Presales() {
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  return (
    <div className="w-full">
      <Tabs defaultValue="all" className="w-full p-2">
        <div className="flex w-full items-center justify-between">
          <div className="flex space-x-1   text-gray-700">
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
          </div>
          <div>
            <TabsList>
              <TabsTrigger value="all">
                <Blocks className="mr-2" />
                All Presales
              </TabsTrigger>
              <TabsTrigger value="myContributions">
                <WalletMinimal className="mr-2" /> My Contributions
              </TabsTrigger>
              <TabsTrigger value="favorites">
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
              <SheetContent>
                <SheetHeader>
                  <SheetDescription>
                    <ChainFilter />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <TabsContent value="all">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="myContributions">My Contributions</TabsContent>
        <TabsContent value="favorites">Favorites</TabsContent>
      </Tabs>
    </div>
  );
}
