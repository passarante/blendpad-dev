import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import {
  ChevronLeft,
  DotSquare,
  Grid,
  Grip,
  MoveUpRight,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GetaWallet() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-40 rounded-lg bg-blue-300 space-x-2">
          <div>
            <Wallet />
          </div>
          <div>Get a Wallet</div>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[400px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between mt-4">
            <DialogClose asChild>
              <ChevronLeft className="cursor-pointer" />
            </DialogClose>
            <div className="flex w-full items-center justify-center text-center space-x-2">
              <div className="text-center">Get a wallet</div>
            </div>
          </DialogTitle>
          <DialogDescription>
            <div>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="https://metamask.io"
                    target="_blank"
                    className="flex w-full items-center space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all"
                  >
                    <Image
                      src="/images/wallet-connect/metamask.webp"
                      width={40}
                      height={40}
                      alt="MetaMask"
                      className="rounded-xl mx-2"
                    />
                    <span className="text-gray-200 text-base">MetaMask</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://trustwallet.com/"}
                    target="_blank"
                    className="flex w-full items-center space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all"
                  >
                    <Image
                      src="/images/wallet-connect/trustwallet.webp"
                      width={40}
                      height={40}
                      alt="MetaMask"
                      className="rounded-xl mx-2"
                    />
                    <span className="text-gray-200 text-base">
                      Trust Wallet
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://safe.global"
                    target="_blank"
                    className="flex w-full items-center space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all"
                  >
                    <Image
                      src="/images/wallet-connect/safe.webp"
                      width={40}
                      height={40}
                      alt="MetaMask"
                      className="rounded-xl mx-2"
                    />
                    <span className="text-gray-200 text-base">Safe</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://rainbow.me"
                    target="_blank"
                    className="flex w-full items-center space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all"
                  >
                    <Image
                      src="/images/wallet-connect/rainbow.webp"
                      width={40}
                      height={40}
                      alt="MetaMask"
                      className="rounded-xl mx-2"
                    />
                    <span className="text-gray-200 text-base">Rainbow</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://explorer.walletconnect.com/?type=wallet"
                    target="_blank"
                    className="flex w-full items-center justify-between space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all"
                  >
                    <div className="flex items-center  space-x-2">
                      <div className="w-10 h-10 bg-gray-900 border flex items-center justify-center mx-2 rounded-lg">
                        <Grip className="w-8 h-8 rounded-xl " />
                      </div>
                      <span className="text-gray-200 text-base">
                        Explore All
                      </span>
                    </div>
                    <div>
                      <MoveUpRight size={20} className="mr-4" />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
