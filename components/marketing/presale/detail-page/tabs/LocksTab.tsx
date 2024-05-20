import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LocksTabType } from "@/types";
import { Lock } from "lucide-react";
import React from "react";

export default function LocksTab({ locksTab }: { locksTab: LocksTabType }) {
  return (
    <TabsContent value="locks">
      <Card className="border-none">
        <CardContent className="space-y-2">
          <Tabs defaultValue="tokenLocks" className="w-full">
            <TabsList className="flex w-full  bg-gray-900/10 justify-center">
              <TabsTrigger
                className="data-[state=active]:border-b rounded-none border-white flex items-center"
                value="tokenLocks"
              >
                Token Locks
              </TabsTrigger>

              <TabsTrigger
                className="data-[state=active]:border-b rounded-none border-white flex items-center"
                value="liquidityLocks"
              >
                Liquidity Locks
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tokenLocks">
              <Card className="border-none">
                <CardContent className="space-y-2 flex items-center justify-center">
                  <h4 className="text-lg">No Tokens Locked</h4>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="liquidityLocks">
              <Card className="border-none">
                <CardContent className="space-y-2 flex items-center justify-center">
                  <h4 className="text-lg">No LP Tokens Locked</h4>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex space-x-2 items-center">
            <Lock className="w-5 h-5" />
            <span>Total Tokens Locked</span>
          </div>
          <span>
            {locksTab.liquidityLocks + locksTab.tokenLocks}{" "}
            {locksTab.tokenSymbol} (0.000%)
          </span>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
