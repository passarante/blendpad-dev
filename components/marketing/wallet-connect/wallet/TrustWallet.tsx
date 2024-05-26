import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { BsBrowserChrome } from "react-icons/bs";

import { ChevronLeft, ChevronRight, Copy, Smartphone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function TrustWallet() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center w-full justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/wallet-connect/trustwallet.webp"
            width={40}
            height={40}
            alt="MetaMask"
            className="rounded-xl mx-2"
          />
          <span className="text-gray-200 text-base">Trust Wallet</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between mt-4">
            <DialogClose asChild>
              <ChevronLeft className="cursor-pointer" />
            </DialogClose>
            <div className="flex w-full items-center justify-center text-center space-x-2">
              <div className="text-center">Wallet Connect</div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <Tabs
            defaultValue="mobile"
            className="w-full flex items-center flex-col"
          >
            <TabsList className="grid  grid-cols-2 w-[200px]  items-center justify-center bg-black">
              <TabsTrigger value="mobile">
                <Smartphone className="w-3 h-3 mr-1" />
                Mobile
              </TabsTrigger>
              <TabsTrigger value="browser">
                <BsBrowserChrome className="w-4 h-4 mr-1" />
                Browser
              </TabsTrigger>
            </TabsList>
            <TabsContent value="mobile" className="w-full  ">
              <Card className="w-full border-none">
                <CardContent className="space-y-2 w-full ">
                  <div className="w-full flex flex-col space-y-4 items-center justify-center mt-2">
                    <Image
                      src="/images/wallet-connect/trustwallet-qr.png"
                      width={300}
                      height={300}
                      alt="Wallet Connect"
                    />
                    <p>Scan this QR Code with your phone</p>
                    <p className="flex items-center space-x-2">
                      <Copy size={16} />
                      <span>Copy link</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="browser">
              <Card className="w-full border-none">
                <CardContent className="mt-2 flex w-full items-center justify-center flex-col space-y-2">
                  <Image
                    src="/images/wallet-connect/trustwallet.webp"
                    width={100}
                    height={100}
                    alt="MetaMask"
                    className="rounded-xl mx-2"
                  />
                  <p className="text-gray-100 text-base">Not Detected</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogDescription>
        <DialogFooter className="w-full flex items-centern">
          <div className=" w-full p-1 flex items-center justify-between  rounded">
            <span>Don&apos;t have Trust Wallet?</span>
            <Button variant={"outline"} className="text-blue-400" size="sm">
              Get <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
