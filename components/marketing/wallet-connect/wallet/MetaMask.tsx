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
import {} from "@radix-ui/react-dialog";
import { ChevronLeft, RefreshCw, RotateCcw } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function MetaMask() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center space-x-2">
          <Image
            src="/images/wallet-connect/metamask.webp"
            width={40}
            height={40}
            alt="MetaMask"
            className="rounded-xl mx-2"
          />
          <span className="text-gray-200 text-base">MetaMask</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between mt-4">
            <DialogClose asChild>
              <ChevronLeft className="cursor-pointer" />
            </DialogClose>
            <div className="flex w-full items-center justify-center text-center space-x-2">
              <div className="text-center">MetaMask</div>
            </div>
          </DialogTitle>
          <DialogDescription className="flex flex-col w-full space-y-4 items-center justify-center mt-4">
            <div className="glowing-box-with-button">
              <Image
                src="/images/wallet-connect/metamask.webp"
                width={100}
                height={1}
                alt="MetaMask"
                className="rounded-xl mx-2"
              />
            </div>
            <div className="flex w-full items-center justify-center flex-col">
              <p className="text-gray-100 text-base">Continue in MetaMask</p>
              <p>Accept connection request in the wallet</p>
            </div>
            <Button type="submit" className="text-blue-400" variant={"outline"}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex w-full items-center justify-center"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
