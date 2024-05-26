import { Button } from "@/components/ui/button";
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
import { cn } from "@/lib/utils";
import { Card } from "@mui/material";
import {} from "@radix-ui/react-dialog";
import {
  ArrowRight,
  ChevronLeft,
  Computer,
  MoreHorizontal,
  QrCode,
  RefreshCw,
  RotateCcw,
  X,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegStopCircle } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { RiCashFill } from "react-icons/ri";

export default function Coinbase() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center space-x-2">
          <Image
            src="/images/wallet-connect/coinbase.webp"
            width={40}
            height={40}
            alt="coinbase"
            className="rounded-xl mx-2"
          />
          <span className="text-gray-200 text-base">Coinbase</span>
        </div>
      </DialogTrigger>
      <DialogContent className="min-w-[800px] border-none p-4">
        <Card className=" bg-white">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between mt-4">
              <div className="flex w-full items-center justify-center text-center space-x-2">
                <div className="text-center text-black">
                  Scan to connect with one of our mobile apps
                </div>
              </div>
              <DialogClose>
                <div className="text-black mr-2 p-2 pb-4">
                  <X />
                </div>
              </DialogClose>
            </DialogTitle>
            <DialogDescription className="flex flex-col w-full space-y-4 items-center justify-center mt-4 pb-4">
              <div className="w-full grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col space-y-4 mt-4 relative">
                  <div
                    className={cn(
                      "w-4/4 flex items-center space-x-2 p-4 rounded-2xl text-black cursor-pointer transition-all duration-500",
                      selectedIndex === 0 && " text-blue-600 bg-blue-100"
                    )}
                    onClick={() => setSelectedIndex(0)}
                  >
                    <FaRegStopCircle />
                    <div>
                      <p className="font-bold">Coinbase Wallet app</p>
                      <p className="text-normal">
                        Connect with your self-custody wallet
                      </p>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "w-4/4 flex items-center space-x-2 p-4 rounded-2xl text-black cursor-pointer transition-all duration-500",
                      selectedIndex === 1 && " text-blue-600 bg-blue-100"
                    )}
                    onClick={() => setSelectedIndex(1)}
                  >
                    <FaRegStopCircle />
                    <div>
                      <p className="font-bold">Coinbase app</p>
                      <p className="text-normal">
                        Connect with your Coinbase account
                      </p>
                    </div>
                  </div>

                  {selectedIndex == 1 && (
                    <div className="absolute bottom-10 bg-gray-100 text-black/90 p-4 rounded-lg">
                      <p>
                        Don&apos; see a <span className="font-bold">Scan</span>{" "}
                        option? Update your Coinbase
                      </p>
                      <p>app to latest version and try again.</p>
                    </div>
                  )}
                </div>
                <div className="w-full flex flex-col space-y-4 text-black">
                  <Image
                    src={
                      selectedIndex === 0
                        ? "/images/wallet-connect/coinbase-qr.png"
                        : "/images/wallet-connect/coinbase-app-qr.png"
                    }
                    width={350}
                    height={350}
                    alt="coinbase"
                  />
                  <p className="text-base">1. Open the Coinbase Wallet app</p>
                  <p className="text-base flex">
                    2. Tap
                    {selectedIndex == 1 && (
                      <>
                        <span className="mx-1">More</span>{" "}
                        <span className="mx-1 bg-blue-600 p-1 rounded-full text-white">
                          <MoreHorizontal className="w-4 h-4" />
                        </span>
                        <span>then</span>
                      </>
                    )}
                    <span className="font-bold ml-2">Scan</span>
                    <span className="ml-2 bg-blue-600 p-1 rounded-full text-white">
                      <QrCode className="w-4 h-4" />
                    </span>
                  </p>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </Card>
        <Card className=" bg-white ">
          <div className="w-full grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col space-y-4 mt-4 relative">
              <div
                className={
                  "w-4/4 flex items-center space-x-2 p-4 rounded-2xl text-black cursor-pointer transition-all duration-500"
                }
              >
                <div>
                  <p className="font-bold">Or try the</p>
                  <p className="font-bold">Coinbase Wallet</p>
                  <p className="font-bold">browser</p>
                  <p className="font-bold">extension</p>
                  <p className="flex items-center text-blue-600 font-bold text-sm">
                    Install <ArrowRight className="ml-2 w-4 h-4" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center space-y-4 text-black">
              <p className=" flex items-center space-x-2 text-sm">
                <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <MdComputer className="w-4 h-4" />
                </span>
                <div>
                  <p>Connect with dapps with just one click on</p>
                  <p>your desktop browser</p>
                </div>
              </p>
              <p className=" flex items-center space-x-2 text-sm">
                <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <RiCashFill className="w-4 h-4" />
                </span>
                <div>
                  <p>Add an additional layer of security by using</p>
                  <p>a supported Ledger hardware wallet</p>
                </div>
              </p>
            </div>
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
