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
import { Input } from "@/components/ui/input";
import { walletlist } from "@/constants/wallet-list";
import {} from "@radix-ui/react-dialog";
import { ChevronLeft, Grip, RotateCcw, Search } from "lucide-react";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

export default function AllWallets() {
  const [filteredWalletList, setFilteredWalletList] = useState(walletlist);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setFilteredWalletList(
      walletlist.filter((wallet) =>
        wallet.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex w-full items-center justify-between space-x-2">
          <div className="flex items-center  space-x-2">
            <div className="w-10 h-10 bg-gray-900 border flex items-center justify-center mx-2 rounded-lg">
              <Grip className="w-8 h-8 rounded-xl " />
            </div>
            <span className="text-gray-200 text-base">All Wallets</span>
          </div>
          <div className="bg-gray-800 w-12 p-1 flex items-center justify-center  rounded">
            <span>410+</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-between mt-4">
            <div className="flex justify-between w-full mb-2">
              <DialogClose asChild>
                <ChevronLeft className="cursor-pointer" />
              </DialogClose>
              <div className="flex  w-full items-center justify-center text-center space-x-2">
                <div className="text-center">All Wallets</div>
              </div>
            </div>
            <div className=" bg-gray-900 rounded-xl relative">
              <Search className="w-4 h-4 absolute left-2 top-[11px] " />
              <Input
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search wallet"
                className="pl-8 rounded-2xl bg-gray-900/40 border-none focus:border-none focus:ring-0 w-[340px]"
                type="text"
              />
            </div>
          </DialogTitle>
          <DialogDescription className="flex flex-col w-full space-y-4 items-center justify-center mt-4">
            <div className=" w-full mt-4 overflow-y-scroll h-96 overflow-x-hidden scrollbar-thin  scrollbar-thumb-rounded-full scrollbar-track-rounded-full  scrollbar-thumb-green-600 scrollbar-track-black">
              <div className="w-full grid grid-cols-4 gap-2 mt-12">
                {filteredWalletList.map((wallet, index) => (
                  <div
                    key={index}
                    className="rounded-2xl p-2 cursor-pointer hover:bg-gray-900 transition-all duration-500 ease-in-out flex items-center flex-col"
                  >
                    <Image
                      src={wallet.image}
                      width={56}
                      height={56}
                      alt="wallet"
                      className="rounded-2xl"
                    />
                    <p className="text-[12px] mt-2 truncate">
                      {wallet.name.length > 10
                        ? wallet.name.slice(0, 10) + "..."
                        : wallet.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex w-full items-center justify-center"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
