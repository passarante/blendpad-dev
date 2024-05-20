import { Card, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { TokenomicsTabType } from "@/types";
import { PieChart } from "@mui/x-charts/PieChart";
import React from "react";

export default function TokenomicsTab({
  tokenomicsTab,
}: {
  tokenomicsTab: TokenomicsTabType;
}) {
  const data = [];

  console.log(tokenomicsTab);

  if (tokenomicsTab.presale) {
    data.push({
      id: 1,
      label: "Presale: " + tokenomicsTab.presale! + "%",
      value: tokenomicsTab.presale!,
    });
  }

  if (tokenomicsTab.liquidity) {
    data.push({
      id: 2,
      label: "Liquidity: " + tokenomicsTab.liquidity! + "%",
      value: tokenomicsTab.liquidity!,
    });
  }

  if (tokenomicsTab.locked) {
    data.push({
      id: 3,
      label: "Locked: " + tokenomicsTab.locked! + "%",
      value: tokenomicsTab.locked!,
    });
  }

  if (tokenomicsTab.unlocked) {
    data.push({
      id: 4,
      label: "Unlocked: " + tokenomicsTab.unlocked! + "%",
      value: tokenomicsTab.unlocked!,
    });
  }
  if (tokenomicsTab.burnt) {
    data.push({
      id: 5,
      label: "Burnt: " + tokenomicsTab.burnt! + "%",
      value: tokenomicsTab.burnt!,
    });
  }

  return (
    <TabsContent value="tokenomics">
      <Card className="border-none">
        <CardContent className="space-y-2 flex flex-col items-center justify-center">
          <div className="mt-4 border-b border-gray-300 pb-4">
            <PieChart
              series={[
                {
                  paddingAngle: 5,
                  innerRadius: 100,
                  outerRadius: 70,
                  data,
                },
              ]}
              margin={{ right: 200 }}
              width={400}
              height={200}
              slotProps={{
                legend: {
                  direction: "column",
                  position: {
                    vertical: "top",
                    horizontal: "right",
                  },
                  itemMarkWidth: 20,
                  itemMarkHeight: 2,
                  markGap: 5,
                  itemGap: 10,
                  labelStyle: {
                    fontSize: 14,
                    fill: "white",
                  },
                },
              }}
            ></PieChart>
          </div>
          <div className="w-1/2">
            <ul className="w-full">
              <li className="flex w-full items-center justify-between border-b border-gray-600 py-4">
                <span>İnitial Market Cap:</span>
                <div className="flex items-center ">
                  {tokenomicsTab.initialMarketCap.toLocaleString("en-US")} $
                </div>
              </li>
              <li className="flex w-full items-center justify-between border-b border-gray-600 py-4">
                <span>Circulating Market Cap:</span>
                <div className="flex items-center ">
                  {tokenomicsTab.circulatingMarketCap.toLocaleString("en-US")} $
                </div>
              </li>
              <li className="flex w-full items-center justify-between border-b border-gray-600 py-4">
                <span>FDV Market Cap:</span>
                <div className="flex items-center ">
                  {tokenomicsTab.fdvMarketCap.toLocaleString("en-US")} $
                </div>
              </li>
              {tokenomicsTab.score && (
                <li className="flex w-full items-center justify-between border-b border-gray-600 py-4">
                  <span>Tokenomics Score:</span>
                  <div className="flex items-center text-yellow-500 ">
                    {tokenomicsTab.score}
                  </div>
                </li>
              )}
            </ul>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
