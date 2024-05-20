import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AboutTabType,
  LocksTabType,
  PresaleType,
  SaleTabType,
  TeamTabType,
  TokenomicsTabType,
} from "@/types";
import { PieChart } from "@mui/x-charts/PieChart";
import { Copy, Info, Lock, PieChartIcon, Users } from "lucide-react";
import React from "react";
import { MdMenuBook } from "react-icons/md";
import YouTube from "react-youtube";
import AboutTab from "./tabs/AboutTab";
import SaleTab from "./tabs/SaleTab";
import TokenomicsTab from "./tabs/TokenomicsTab";
import LocksTab from "./tabs/LocksTab";
import TeamsTab from "./tabs/TeamsTab";

export default function PresaleDetailTabs({
  presale,
}: {
  presale: PresaleType;
}) {
  const aboutTab: AboutTabType | undefined = presale.tabs.find(
    (t) => t.name == "About"
  ) as AboutTabType;
  const saleTab: SaleTabType | undefined = presale?.tabs.find(
    (t) => t.name == "Sale"
  ) as SaleTabType;
  const tokenomicsTab: TokenomicsTabType | undefined = presale?.tabs.find(
    (t) => t.name == "Tokenomics"
  ) as TokenomicsTabType;
  const locksTab: LocksTabType | undefined = presale?.tabs.find(
    (t) => t.name == "Locks"
  ) as LocksTabType;
  const membersTab: TeamTabType | undefined = presale?.tabs.find(
    (t) => t.name == "Team"
  ) as TeamTabType;

  return (
    <div className="mt-4">
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-gray-900/10">
          {aboutTab && (
            <TabsTrigger
              className="data-[state=active]:border-b rounded-none border-white flex items-center"
              value="about"
            >
              <MdMenuBook size={20} className="mr-2" />
              About
            </TabsTrigger>
          )}

          {saleTab && (
            <TabsTrigger
              className="data-[state=active]:border-b rounded-none border-white flex items-center"
              value="sale"
            >
              <Info size={20} className="mr-2" />
              Sale
            </TabsTrigger>
          )}

          {tokenomicsTab && (
            <TabsTrigger
              className="data-[state=active]:border-b rounded-none border-white flex items-center"
              value="tokenomics"
            >
              <PieChartIcon size={20} className="mr-2" />
              Tokenomics
            </TabsTrigger>
          )}

          {locksTab && (
            <TabsTrigger
              className="data-[state=active]:border-b rounded-none border-white flex items-center"
              value="locks"
            >
              <Lock size={20} className="mr-2" />
              Locks
            </TabsTrigger>
          )}
          {membersTab && (
            <TabsTrigger
              className="data-[state=active]:border-b rounded-none border-white flex items-center"
              value="teams"
            >
              <Users size={20} className="mr-2" />
              Teams
            </TabsTrigger>
          )}
        </TabsList>
        {aboutTab && <AboutTab aboutTab={aboutTab} />}
        {saleTab && <SaleTab saleTab={saleTab} currency={presale.currency} />}

        {tokenomicsTab && <TokenomicsTab tokenomicsTab={tokenomicsTab} />}
        {locksTab && <LocksTab locksTab={locksTab} />}
        {membersTab && <TeamsTab teamTab={membersTab} />}
      </Tabs>
    </div>
  );
}
