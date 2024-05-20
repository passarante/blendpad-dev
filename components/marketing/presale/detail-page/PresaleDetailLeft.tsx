/* eslint-disable @next/next/no-img-element */
import React from "react";
import PresaleDetailHeader from "./PresaleDetailHeader";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Globe } from "lucide-react";
import { RiTelegramLine, RiTwitterXFill } from "react-icons/ri";
import { PresaleType } from "@/types";
import PresaleDetailTabs from "./PresaleDetailTabs";

export default function PresaleDetailLeft({
  presale,
}: {
  presale: PresaleType;
}) {
  return (
    <div className="col-span-2 w-full flex flex-col">
      <PresaleDetailHeader />
      <div className="mt-6">
        <Card>
          <div className="relative w-full h-52  ">
            <div className="absolute w-full -top-6 flex justify-center">
              <img
                src={`/images/presales/${presale.typeImage}`}
                className=" w-10 h-12  "
                alt="type"
              />
            </div>
            {presale.banner.includes("mp4") ? (
              <video
                autoPlay={true}
                loop
                src={`/images/presales/${presale.banner}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <img
                src={`/images/presales/${presale.banner}`}
                className=" rounded-t-lg w-full"
                alt="presale"
              />
            )}
            <Image
              src={`/images/presales/${presale.logo}`}
              className="rounded-full absolute bottom-4 left-9 "
              alt="logo"
              width={72}
              height={72}
            />
          </div>
          <CardContent>
            <div className="mt-2 flex w-full items-center justify-between">
              <span className="uppercase text-xl font-bold ml-28">
                {presale?.title}
                <p className="flex items-center text-gray-400 space-x-1">
                  <Globe className="w-4 h-4" />
                  <RiTelegramLine className="w-4 h-4" />
                  <RiTwitterXFill className="w-4 h-4" />
                </p>
              </span>
              <span className="flex space-x-2 font-bold items-center">
                {presale.status.toLowerCase() === "finalized" ||
                presale.status.toLowerCase() === "launched" ? (
                  <div className="w-4 h-4 rounded-full bg-indigo-600" />
                ) : (
                  <div className="w-4 h-4 rounded-full bg-green-600 animate-pulse " />
                )}

                <span className="uppercase text-xl">{presale.status}</span>
              </span>
            </div>
            <PresaleDetailTabs presale={presale} />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
}
