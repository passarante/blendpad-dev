import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PresaleType } from "@/types";
import { Tooltip } from "@radix-ui/react-tooltip";
import { Check, Copy, Info } from "lucide-react";

import Image from "next/image";
import React from "react";

export default function PresaleDetailRight({
  presale,
}: {
  presale: PresaleType;
}) {
  return (
    <div>
      <div className="w-full px-2 ">
        <Button variant={"outline"} className="w-full">
          <span>Connect Network To</span>
          <Image
            src={`/images/presales/${presale?.networkLogo}`}
            width={16}
            height={16}
            alt="network"
            className="mx-2"
          />
          <span className="capitalize">{presale.network}</span>
        </Button>
      </div>
      <div className="px-2 mt-4">
        <Card className="p-2 text-sm">
          <CardContent>
            <div className="w-full flex flex-col justify-center">
              <span className="capitalize text-lg">{presale.status}</span>
              <Progress value={presale.progress} className="mt-2" />
            </div>
            <div className="mt-2">
              <ul>
                <li className="flex w-full items-center justify-between border-b border-gray-600 py-4">
                  <span>Minimum Buy</span>
                  <div className="flex items-center ">
                    {presale.stats[0].maxiumumBuy}
                  </div>
                </li>
                <li className="flex w-full items-center justify-between border-b border-gray-600 py-4">
                  <span>Maximum Buy</span>
                  <div className="flex items-center ">
                    {presale.maxBuy.toLocaleString("en-US")} {presale.currency}
                  </div>
                </li>
                <li className="flex w-full items-center justify-between border-b border-gray-600 py-4">
                  <span>Presale Rate</span>
                  <div className="flex items-center ">
                    {presale.stats[0].presaleRate}
                  </div>
                </li>
                <li className="flex w-full items-center justify-between border-b border-gray-600 py-4">
                  <span>Listing Rate</span>
                  <div className="flex items-center ">
                    {presale.stats[0].listingRate}
                  </div>
                </li>
                <li className="flex w-full items-center justify-between border-b border-gray-600 py-4">
                  <span>Total Contributors</span>
                  <div className="flex items-center ">
                    {presale.stats[0].totalContributors}
                  </div>
                </li>
                <li className="flex w-full items-center justify-between border-b border-gray-600 py-4">
                  <span>AVG Contribution</span>
                  <div className="flex items-center ">
                    {presale.stats[0].avgContribution.toLocaleString("en-US")}{" "}
                    {presale.currency}
                  </div>
                </li>
                <li className="flex w-full items-center justify-between border-b border-gray-600 py-4">
                  <div className="flex flex-col">
                    <span>My Contribution</span>
                    <span>My Reserved Tokens</span>
                  </div>
                  <div className="flex items-center flex-col ">
                    <span>
                      {presale.stats[0].myContribution.toLocaleString("en-US")}{" "}
                      {presale.currency}
                    </span>
                    <span>
                      {presale.stats[0].myReservedTokens.toLocaleString(
                        "en-US"
                      )}{" "}
                      {presale.currency}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {presale.launched && (
        <div className="px-2 mt-4">
          <Card className="p-2 text-sm">
            <CardContent>
              <div className="w-full flex  justify-center ">
                <span className="capitalize text-lg">{presale.status}</span>
              </div>
              <div>
                <ul>
                  <li className="flex w-full items-center justify-between border-b border-gray-600 py-4">
                    <span className="w-2/3">Token Address</span>
                    <div className="w-1/3  flex items-center">
                      <span>
                        {presale.stats[0].tokenAddress.substring(0, 10) + "..."}
                      </span>
                      <div>
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
                    </div>
                  </li>
                  <li className="flex w-full items-center justify-between border-b border-gray-600 py-4">
                    <span className="w-2/3">Listing Dex</span>
                    <span className="w-1/3 flex items-center space-x-2">
                      <Image
                        src={`/images/presales/${presale.launched.listingDexImage}`}
                        width={24}
                        height={24}
                        alt="dex"
                        className="rounded-full"
                      />{" "}
                      <span className="text-green-500">
                        {presale.launched.listingDex}
                      </span>
                    </span>
                  </li>
                  <li className="flex w-full items-center justify-between border-b border-gray-600 py-4">
                    <span className="w-2/3">Chart</span>
                    <span className="w-1/3 flex items-center space-x-2">
                      <Image
                        src={`/images/presales/${presale.launched.chartImage}`}
                        width={24}
                        height={24}
                        alt="dex"
                        className="rounded-full"
                      />{" "}
                      <span className="text-green-500">
                        {presale.launched.chart}
                      </span>
                    </span>
                  </li>
                  <li className="flex w-full items-center justify-between border-b border-gray-600 py-4">
                    <span className="w-2/3 flex ">
                      <Info size={12} className="text-gray-500 mr-2" />
                      Mintable
                    </span>
                    <span className="w-1/3 flex items-center justify-end space-x-2 mr-4 text-green-500">
                      <span>{presale.launched.mintable ? "Yes" : "No"}</span>
                      <Check size={20} />
                    </span>
                  </li>
                  <li className="flex w-full items-center justify-between border-b border-gray-600 py-4">
                    <span className="w-2/3 flex ">
                      <Info size={12} className="text-gray-500 mr-2" />
                      Freezable
                    </span>
                    <span className="w-1/3 flex items-center justify-end space-x-2 mr-4 text-green-500">
                      <span>{presale.launched.freezable ? "Yes" : "No"}</span>
                      <Check size={20} />
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
