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
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Copy } from "lucide-react";
export default function WalletConnect() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center w-full justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/wallet-connect/wallet.webp"
            width={40}
            height={40}
            alt="MetaMask"
            className="rounded-xl mx-2"
          />
          <span className="text-gray-200 text-base">Wallet Connect</span>
        </div>
        <div>
          <Button
            size={"tag"}
            variant={"outline"}
            className="text-sm text-blue-400 p-1"
          >
            QR CODE
          </Button>
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

          <DialogDescription>
            <div className="w-full flex flex-col space-y-4 items-center justify-center mt-2">
              <Image
                src="/images/wallet-connect/walletconnect-qr.png"
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
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
