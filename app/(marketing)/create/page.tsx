import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@mui/material";
import SaleTab from "@/components/marketing/create/tabs/SaleTab";
import LockTab from "@/components/marketing/create/tabs/LockTab";
import TokenTab from "@/components/marketing/create/tabs/TokenTab";
import OtcTab from "@/components/marketing/create/tabs/OtcTab";
import StakingTab from "@/components/marketing/create/tabs/StakingTab";

export default function CreatePage() {
  return (
    <div className="mt-32 w-full flex p-4 items-center justify-center">
      <Tabs
        defaultValue="sale"
        className="w-full flex flex-col items-center justify-center"
      >
        <TabsList className="grid w-3/6 grid-cols-5 bg-black/90">
          <TabsTrigger
            value="sale"
            className=" data-[state=active]:border-b-2  border-white  text-xl"
          >
            Sale
          </TabsTrigger>
          <TabsTrigger
            value="lock"
            className=" data-[state=active]:border-b-2  border-white  text-xl"
          >
            Lock
          </TabsTrigger>
          <TabsTrigger
            value="token"
            className=" data-[state=active]:border-b-2  border-white  text-xl"
          >
            Token
          </TabsTrigger>
          <TabsTrigger
            value="staking"
            className=" data-[state=active]:border-b-2  border-white  text-xl"
          >
            Staking
          </TabsTrigger>
          <TabsTrigger
            value="otc"
            className=" data-[state=active]:border-b-2  border-white  text-xl"
          >
            OTC Sale
          </TabsTrigger>
        </TabsList>
        <div>
          <SaleTab />
          <LockTab />
          <TokenTab />
          <StakingTab />
          <OtcTab />
        </div>
      </Tabs>
    </div>
  );
}
