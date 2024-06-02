"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import { Check, ChevronLeft } from "lucide-react";
import Link from "next/link";

import React, { Suspense } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { useSearchParams } from "next/navigation";

export default function CreateLockPage() {
  const type = useSearchParams().get("type") as string;

  return (
    <Suspense>
      <div className="mt-20 p-6">
        <Link href="/create" className="flex space-x-2 items-center">
          <ChevronLeft />
          <span className="text-sm">Back</span>
        </Link>

        <div className="mt-10 grid grid-cols-6 gap-10 w-full  ">
          <div className="col-span-4">
            <Card>
              <CardContent>
                <Tabs defaultValue={type!} className="w-full mt-2">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="normal">Normal Locks</TabsTrigger>
                    <TabsTrigger value="vesting">Vesting Locks</TabsTrigger>
                  </TabsList>
                  <TabsContent value="normal">
                    <div className="mt-10">
                      <h4 className="text-lg border-b border-gray-700 w-full mb-4">
                        Create Your Locks for Free
                      </h4>
                      <div className="col-span-3 flex  items-center gap-4 border border-green-600 rounded-lg p-[12px]">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <Check size={16} color="black" />
                        </div>
                        <span>
                          SECURE BlendPad Locks are Auidited By:{" "}
                          <span className="text-green-500">Cyberscope</span>
                        </span>
                      </div>
                      <div className="flex flex-col gap-4 mt-4">
                        <div className="flex items-center space-x-4">
                          <span>Token Type</span>
                          <Label htmlFor="airplane-mode">V2 DEX</Label>
                          <Switch id="airplane-mode" />
                          <Label htmlFor="airplane-mode">V3 DEX</Label>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-4">
                          <div>
                            <Label>Token or LP Token Address</Label>
                            <Input />
                          </div>
                          <div>
                            <Label>Amount</Label>
                            <Input />
                          </div>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-4">
                          <div>
                            <Label>Lock Owner Wallet Address</Label>
                            <Input
                              value={
                                "0x17915d0032710B8064A026348BE36d0DDcC8863C"
                              }
                            />
                          </div>
                          <div>
                            <Label>Date</Label>
                            <Input type="datetime-local" />
                          </div>
                        </div>
                        <div className="w-full">
                          <Label>Lock Name</Label>
                          <Input />
                        </div>
                      </div>
                      <div className="mt-10 flex gap-4 flex-col">
                        <h4 className="border-b border-gray-600 text-lg">
                          Project Information
                        </h4>
                        <div className="w-full mt-4">
                          <Label>Title</Label>
                          <Input />
                        </div>
                        <div className="w-full grid grid-cols-2 gap-4">
                          <div>
                            <Label>Upload Your Logo </Label>
                            <Input type="file" />
                          </div>
                          <div>
                            <Label>Logo Url</Label>
                            <Input />
                          </div>
                          <div>
                            <Label>Website </Label>
                            <Input placeholder="Ex. https://..." />
                          </div>
                          <div>
                            <Label>Twitter</Label>
                            <Input placeholder="Ex. https://twitter.com/..." />
                          </div>
                          <div>
                            <Label>Telegram </Label>
                            <Input placeholder="Ex. https://t.me/..." />
                          </div>
                          <div>
                            <Label>Discord</Label>
                            <Input placeholder="Ex. https://discord.gg/..." />
                          </div>
                          <div className="col-span-2">
                            <Textarea placeholder="Description" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="vesting">
                    <div className="mt-10">
                      <h4 className="text-lg border-b border-gray-700 w-full mb-4">
                        Create Your Locks for Free
                      </h4>
                      <div className="col-span-3 flex  items-center gap-4 border border-green-600 rounded-lg p-[12px]">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <Check size={16} color="black" />
                        </div>
                        <span>
                          SECURE BlendPad Locks are Auidited By:{" "}
                          <span className="text-green-500">Cyberscope</span>
                        </span>
                      </div>
                      <div className="flex flex-col gap-4 mt-4">
                        <div className="w-full grid grid-cols-2 gap-4">
                          <div className="col-span-2">
                            <Label>Token or LP Token Address</Label>
                            <Input />
                          </div>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-4">
                          <div className="col-span-2">
                            <Textarea placeholder="Wallet Address(es) to set Vesting Lock for" />
                          </div>
                          <div className="col-span-2 grid grid-cols-3 gap-4">
                            <div>
                              <Input type="datetime-local" />
                            </div>
                            <div>
                              <Input placeholder="First Lock Release %" />
                            </div>
                            <div className="flex items-center justify-center relative">
                              <Slider
                                defaultValue={[0]}
                                max={100}
                                step={25}
                                className={cn("w-[100%]")}
                              />
                              <div className="absolute left-1/4 top-8 text-sm">
                                25%
                              </div>
                              <div className="absolute left-2/4 top-8 text-sm">
                                50%
                              </div>
                              <div className="absolute left-3/4 top-8 text-sm">
                                75%
                              </div>
                              <div className="absolute right-0 top-8 text-sm">
                                100%
                              </div>
                            </div>
                          </div>
                          <div>
                            <Input placeholder="Vesting Time Period in Days" />
                          </div>
                          <div>
                            <Input placeholder="Tokens Released per Vesting Period in%" />
                          </div>
                        </div>
                        <div className="w-full">
                          <Label>Lock Name</Label>
                          <Input />
                        </div>
                      </div>
                      <div className="mt-10 flex gap-4 flex-col">
                        <h4 className="border-b border-gray-600 text-lg">
                          Project Information
                        </h4>
                        <div className="w-full mt-4">
                          <Label>Title</Label>
                          <Input />
                        </div>
                        <div className="w-full grid grid-cols-2 gap-4">
                          <div>
                            <Label>Upload Your Logo </Label>
                            <Input type="file" />
                          </div>
                          <div>
                            <Label>Logo Url</Label>
                            <Input />
                          </div>
                          <div>
                            <Label>Website </Label>
                            <Input placeholder="Ex. https://..." />
                          </div>
                          <div>
                            <Label>Twitter</Label>
                            <Input placeholder="Ex. https://twitter.com/..." />
                          </div>
                          <div>
                            <Label>Telegram </Label>
                            <Input placeholder="Ex. https://t.me/..." />
                          </div>
                          <div>
                            <Label>Discord</Label>
                            <Input placeholder="Ex. https://discord.gg/..." />
                          </div>
                          <div className="col-span-2">
                            <Textarea placeholder="Description" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg border-b border-gray-600">
                  Token Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  <li className="border-b border-gray-600 py-2">Name</li>
                  <li className="border-b border-gray-600 py-2">Symbol</li>
                  <li className="border-b border-gray-600 py-2">
                    Total Supply
                  </li>
                  <li className="border-b border-gray-600 py-2">Decimals</li>
                  <li className="border-b border-gray-600 py-2">Balance</li>
                  <li className="border-b border-gray-600 py-2">Website</li>
                  <li className="border-b border-gray-600 py-2">Twitter</li>
                  <li className="border-b border-gray-600 py-2">Telegram</li>
                  <li className="border-b border-gray-600 py-2">Discord</li>
                </ul>
                <div className="w-full flex items-center justify-center mt-2">
                  <Button className="bg-green-600 text-white">
                    Create Lock
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
