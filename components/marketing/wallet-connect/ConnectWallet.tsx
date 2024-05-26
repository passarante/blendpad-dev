import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Grip } from "lucide-react";

import WalletInfo from "./WalletInfo";
import Image from "next/image";
import WalletConnect from "./wallet/WalletConnect";
import MetaMask from "./wallet/MetaMask";
import BrowserWallet from "./wallet/BrowserWallet";
import TrustWallet from "./wallet/TrustWallet";
import Coinbase from "./wallet/Coinbase";
import AllWallets from "./wallet/AllWallets";

export default function ConnectWallet() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Connect Wallet</Button>
      </DialogTrigger>
      <DialogContent className="w-[450px] ">
        <DialogHeader className="">
          <DialogTitle className="flex items-center justify-between mt-4 border-b border-gray-800 pb-4">
            <div>
              <WalletInfo />
            </div>

            <div>Connect Wallet</div>
          </DialogTitle>
          <DialogDescription>
            <ul className="mt-4 space-y-2">
              <li className="flex w-full items-center justify-between space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all">
                <WalletConnect />
              </li>
              <li className="flex w-full items-center justify-between space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all">
                <MetaMask />
              </li>
              <li className="flex w-full items-center justify-between space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all">
                <BrowserWallet />
              </li>
              <li className="flex w-full items-center justify-between space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all">
                <TrustWallet />
              </li>
              <li className="flex w-full items-center justify-between space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all">
                <Coinbase />
              </li>
              <li className="flex w-full items-center justify-between space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all">
                <AllWallets />
              </li>
            </ul>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
