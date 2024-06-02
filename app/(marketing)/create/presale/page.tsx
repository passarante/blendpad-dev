"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { SelectValue } from "@radix-ui/react-select";
import { Check, ChevronLeft, Info } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function CreatePresalePage() {
  const [step, setStep] = useState(1);
  const [listingType, setListingType] = useState<"auto" | "manual">("auto");
  const [saleType, setSaleType] = useState<"tba" | "custom" | "stealth" | "">(
    ""
  );
  const [tokenAddress, setTokenAddress] = useState("");

  const [baseToken, setBaseToken] = useState("eth");

  const [tokenType, setStokenType] = useState("standart");

  const [router, setRouter] = useState("uniswap");
  return (
    <div className="mt-20 p-6">
      <Link href="/create" className="flex space-x-2 items-center">
        <ChevronLeft />
        <span className="text-sm">Back</span>
      </Link>
      <div className="grid  grid-cols-4 gap-10 mt-12">
        <div
          className={cn(
            "flex flex-col p-4 items-center justify-center relative",
            step == 1 ? "text-white" : "text-gray-500"
          )}
        >
          <div className="absolute h-[1px] bg-gray-700 w-[330%] -top-5 left-1/2" />
          <span
            className={cn(
              "rounded-full w-6 h-6 flex items-center justify-center absolute -top-8 text-white text-sm font-bold",
              step == 1 ? "bg-green-500" : "bg-gray-500"
            )}
          >
            1
          </span>
          <h3 className="font-bol dtext-md">Listing Type</h3>
          <span className="text-sm text-center">
            Enter Your Token Address or Select Alternative Option
          </span>
        </div>
        <div
          className={cn(
            "flex flex-col p-4 items-center justify-center relative",
            step == 2 ? "text-white" : "text-gray-500"
          )}
        >
          <span
            className={cn(
              "rounded-full w-6 h-6 flex items-center justify-center absolute -top-8 text-white text-sm font-bold",
              step == 2 ? "bg-green-500" : "bg-gray-500"
            )}
          >
            2
          </span>
          <h3 className="font-bold text-md">Sale Tokenomics</h3>
          <span className="text-sm text-center">
            Set Sale Listing Details{" "}
            <span className="text-green-500">Docs</span>
          </span>
        </div>
        <div
          className={cn(
            "flex flex-col p-4 items-center justify-center relative",
            step == 3 ? "text-white" : "text-gray-500"
          )}
        >
          <span
            className={cn(
              "rounded-full w-6 h-6 flex items-center justify-center absolute -top-8 text-white text-sm font-bold",
              step == 3 ? "bg-green-500" : "bg-gray-500"
            )}
          >
            3
          </span>
          <h3 className="font-bold text-md">Additional Sale Options</h3>
          <span className="text-sm text-center">
            Add Optional Features to Your Sale
          </span>
        </div>
        <div
          className={cn(
            "flex flex-col p-4 items-center justify-center relative  ",
            step == 4 ? "text-white" : "text-gray-500"
          )}
        >
          <span
            className={cn(
              "rounded-full w-6 h-6 flex items-center justify-center absolute -top-8 text-white text-sm font-bold",
              step == 4 ? "bg-green-500" : "bg-gray-500"
            )}
          >
            4
          </span>
          <h3 className="font-bold text-md">Submit Your Sale</h3>
          <span className="text-sm text-center">
            Once Done Your Sale Gets Listed
          </span>
        </div>
      </div>
      <div className="w-full flex gap-10">
        <div className="w-3/5">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between w-full">
                <Label>Token Address</Label>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant={"outline"}>Create Token</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[800px]">
                    <DialogHeader>
                      <DialogTitle>Create Token</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-3 gap-8 py-4 items-center">
                      <Select value={tokenType} onValueChange={setStokenType}>
                        <SelectTrigger className="w-[180px]">
                          {tokenType == "standart" && (
                            <span>Standart Token</span>
                          )}
                          {tokenType == "simple" && <span>Simple Token</span>}
                          {tokenType == "reflection" && (
                            <span>Reflection Token</span>
                          )}
                          {tokenType == "dividend" && (
                            <span>Dividend Token</span>
                          )}
                          {tokenType == "ultimate" && (
                            <span>Ultimate Token</span>
                          )}
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="simple">Simple Token</SelectItem>
                            <SelectItem value="standart">
                              Standart Token
                            </SelectItem>
                            <SelectItem value="reflection">
                              Reflection Token
                            </SelectItem>
                            <SelectItem value="dividend">
                              Dividend Token
                            </SelectItem>
                            <SelectItem value="ultimate">
                              Ultimate Token
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Input value="EYH" />
                      <Input value="RYH" />
                      <div>
                        <Label>Token Decimal</Label>
                        <Input value={18} className="mt-2" />
                      </div>
                      <div>
                        <Label>Total Supply</Label>
                        <Input value={100} className="mt-2" />
                      </div>
                      <div>
                        <Checkbox className="mt-10 mr-2" />
                        <Label className="-mt-4">Add Max Wallet</Label>
                      </div>
                      <div>
                        <Label>Marketing Wallet</Label>
                        <Input
                          value={"0xb1cfb727a502c8b7f35b8f22d100a12"}
                          className="mt-2"
                        />
                      </div>
                      <div className="flex flex-col gap-4">
                        <Label>Base Token</Label>
                        <Select value={baseToken} onValueChange={setBaseToken}>
                          <SelectTrigger className="w-[180px]">
                            {baseToken == "eth" && <span>ETH</span>}
                            {baseToken == "usdc" && <span>USDC</span>}
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="eth">ETH</SelectItem>
                              <SelectItem value="usdc">USDC</SelectItem>
                              <SelectItem value="custom">Custom</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col gap-4">
                        <Label>Router</Label>
                        <Select value={router} onValueChange={setRouter}>
                          <SelectTrigger className="w-[180px]">
                            {router == "uniswap" && <span>Uniswap</span>}
                            {router == "pancakeswap" && (
                              <span>PancakeSwap</span>
                            )}
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="uniswap">UniSwap</SelectItem>
                              <SelectItem value="pancakeswap">
                                PancakeSwap
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="col-span-3 flex  items-center gap-4 border border-green-600 rounded-lg p-[12px]">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <Check size={16} color="black" />
                        </div>
                        <span>Max total fee is 20%</span>
                      </div>
                      <div>
                        <Label>Sell Liquidity Fee (%)</Label>
                        <Input value={0} className="mt-2" />
                      </div>
                      <div>
                        <Label>Buy Liquidity Fee (%)</Label>
                        <Input value={0} className="mt-2" />
                      </div>
                      <div>
                        <Label>Sell Marketing Fee (%)</Label>
                        <Input value={0} className="mt-2" />
                      </div>
                      <div>
                        <Label>Buy Marketing Fee (%)</Label>
                        <Input value={0} className="mt-2" />
                      </div>
                      <div>
                        <Checkbox className="mt-10 mr-2" />
                        <Label className="-mt-4">Implement Antibot</Label>
                      </div>
                      <div className="col-span-3 flex flex-col gap-4 items-center justify-center">
                        <h4>Fee 0.2ETH</h4>
                        <Button variant={"outline"} className="bg-teal-600">
                          Create Token
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="w-full">
                <Input
                  className="h-12 mt-4"
                  placeholder="Ex: 0x78Aae7e000Bf6FC98a6b717d5eC8Ef2bcd04F428"
                />
              </div>
              <hr className="mt-4" />
              <div className="mt-4">
                <Label>Sale Liquidity Listing</Label>
                <div className="mt-2 flex items-center space-x-12">
                  <div className="relative">
                    <Button
                      variant={"outline"}
                      size={"sm"}
                      className={cn(
                        listingType == "auto" ? "border border-gray-100" : ""
                      )}
                      onClick={() => setListingType("auto")}
                    >
                      Auto
                    </Button>
                    <div className="absolute top-2 -right-6 z-50">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info size={16} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              Automatically adds and locks liquidity on selected
                              DEX. Default and recommended choice.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  <div className="relative">
                    <Button
                      variant={"outline"}
                      size={"sm"}
                      className={cn(
                        listingType == "manual" ? "border border-gray-100" : ""
                      )}
                      onClick={() => setListingType("manual")}
                    >
                      Manual
                    </Button>
                    <div className="absolute top-2 -right-6 z-50">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info size={16} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              Manually list the token on exchange. Recommended
                              for seed, private or partial sales.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-4" />
              <div className="mt-4">
                <Label>Optional Features</Label>
                <div className="mt-2 flex items-center space-x-12">
                  <div className="relative">
                    <Button
                      variant={"outline"}
                      size={"sm"}
                      className={cn(
                        saleType == "tba" ? "border border-gray-100" : ""
                      )}
                      onClick={() => setSaleType("tba")}
                    >
                      TBA SALE
                    </Button>
                    <div className="absolute top-2 -right-6 z-50">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info size={16} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              List a Sale without a date and token contract. Add
                              them at anytime.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  <div className="relative">
                    <Button
                      variant={"outline"}
                      size={"sm"}
                      className={cn(
                        saleType == "custom" ? "border border-gray-100" : ""
                      )}
                      onClick={() => setSaleType("custom")}
                    >
                      CUSTOM SALE
                    </Button>
                    <div className="absolute top-2 -right-6 z-50">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info size={16} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              Raise funds without a token. Sale date and token
                              distribution can be added anytime. Recommended for
                              projects with token in development or for
                              alternative raises.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  <div className="relative">
                    <Button
                      variant={"outline"}
                      size={"sm"}
                      className={cn(
                        saleType == "stealth" ? "border border-gray-100" : ""
                      )}
                      onClick={() => setSaleType("stealth")}
                    >
                      STEALTH LAUNCH
                    </Button>
                    <div className="absolute top-2 -right-6 z-50">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info size={16} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              Raise funds without a token. Sale date and token
                              distribution can be added anytime. Recommended for
                              projects with token in development or for
                              alternative raises.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-2/5">
          <Card>
            <CardContent className="p-4">
              <h4 className="my-4 font-bold text-md">Token Information</h4>
              <ul className="text-gray-400">
                <li className="flex w-full items-center justify-between">
                  <span>Token Address</span>
                  <span></span>
                </li>
                <li className="flex w-full items-center justify-between">
                  <span>Token Name</span>
                  <span className="uppercase">
                    {saleType && (
                      <>
                        {saleType} <span>Token</span>
                      </>
                    )}
                  </span>
                </li>
                <li className="flex w-full items-center justify-between">
                  <span>Token Symbol</span>
                  {saleType && <span className="uppercase">$</span>}
                </li>
                <li className="flex w-full items-center justify-between">
                  <span>Total Supply</span>
                  {saleType && <span className="uppercase"></span>}
                </li>
              </ul>
              <Button className="w-full my-4 bg-teal-600 text-white hover:opacity-80 hover:bg-teal-600">
                Next
              </Button>

              <div className="w-full flex items-center  justify-center mt-4">
                <iframe
                  width="480"
                  height="270"
                  src="https://www.youtube.com/embed/Sljoo8AxvbM"
                  title="Creating An Auto Presale | Evo Tutorial | GemPad"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      v
    </div>
  );
}
