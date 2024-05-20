import { Card, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SaleTabType } from "@/types";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { Copy } from "lucide-react";
import React from "react";

export default function SaleTab({
  saleTab,
  currency,
}: {
  saleTab: SaleTabType;
  currency: string;
}) {
  return (
    <TabsContent value="sale" className="mt-4">
      <Card className="border-none mt-2">
        <CardContent className="space-y-2 ">
          <ul>
            <li className="flex items-center justify-between border-b border-gray-600 pb-4">
              <span>Presale Address</span>
              <div className="flex items-center text-green-400 ">
                {saleTab.presaleAddress}

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Copy
                        size={20}
                        className="ml-4 text-gray-600 cursor-pointer"
                      />
                    </TooltipTrigger>
                    <TooltipContent>Copy</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </li>
            <li className="flex items-center justify-between border-b border-gray-600 py-4">
              <span>Token Name</span>
              <div className="flex items-center ">{saleTab.name}</div>
            </li>
            <li className="flex items-center justify-between border-b border-gray-600 py-4">
              <span>Token Symbol</span>
              <div className="flex items-center ">{saleTab.tokenSymbol}</div>
            </li>
            <li className="flex items-center justify-between border-b border-gray-600 py-4">
              <span>Total Supply</span>
              <div className="flex items-center ">
                {saleTab.totalSupply.toLocaleString("en-US")}
              </div>
            </li>
            <li className="flex items-center justify-between border-b border-gray-600 py-4">
              <span>Tokens For Presale</span>
              <div className="flex items-center ">
                {saleTab.tokensForPresale.toLocaleString("en-US")}
              </div>
            </li>
            {saleTab.tokensForLiquidity && (
              <li className="flex items-center justify-between border-b border-gray-600 py-4">
                <span>Tokens For Liquidity</span>
                <div className="flex items-center ">
                  {saleTab.tokensForLiquidity.toLocaleString("en-US")}
                </div>
              </li>
            )}
            <li className="flex items-center justify-between border-b border-gray-600 py-4">
              <span>Soft Cap</span>
              <div className="flex items-center ">
                {saleTab.softcap.toLocaleString("en-US")} {currency}
              </div>
            </li>
            <li className="flex items-center justify-between border-b border-gray-600 py-4">
              <span>Hard Cap</span>
              <div className="flex items-center ">
                {saleTab.hardcap.toLocaleString("en-US")} {currency}
              </div>
            </li>
            <li className="flex items-center justify-between border-b border-gray-600 py-4">
              <span>Presale Start Time</span>
              <div className="flex items-center ">
                {saleTab.presaleStartTime}
              </div>
            </li>
            <li className="flex items-center justify-between border-b border-gray-600 py-4">
              <span>Presale End Time</span>
              <div className="flex items-center ">{saleTab.presaleEndTime}</div>
            </li>
            <li className="flex items-center justify-between border-b border-gray-600 py-4">
              <span>Liquidity</span>
              <div className="flex items-center ">
                {saleTab.liquidityPercent}%
              </div>
            </li>
            {saleTab.liquidityUnlockTime && (
              <li className="flex items-center justify-between border-b border-gray-600 py-4">
                <span>Liquidity Unlock Time</span>
                <div className="flex items-center ">
                  {saleTab.liquidityUnlockTime}
                </div>
              </li>
            )}
          </ul>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
