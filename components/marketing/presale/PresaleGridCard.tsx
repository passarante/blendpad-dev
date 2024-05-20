/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { PresaleType } from "@/types";
import {
  Bell,
  Globe,
  Globe2,
  Heart,
  Infinity,
  MessageCircleMore,
  Plus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

export default function PresaleGridCard({ presale }: { presale: PresaleType }) {
  const [hover, setHover] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (hover) {
      videoRef?.current?.play();
    } else {
      videoRef?.current?.pause();
    }
  }, [hover]);

  return (
    <Link href={`/presale/${presale.address}?network=${presale.network}`}>
      <Card
        className="hover:translate-y-[-30px] transition-all duration-300 rounded-lg cursor-pointer min-h-96 mb-8"
        onMouseEnter={(e: React.MouseEvent) => setHover(true)}
        onMouseLeave={(e: React.MouseEvent) => setHover(false)}
      >
        <div className="relative w-full h-20 ">
          <div className="absolute w-full -top-6 flex justify-center">
            <img
              src={`/images/presales/${presale.typeImage}`}
              className=" w-10 h-12  "
              alt="type"
            />
          </div>
          {presale.banner.includes("mp4") ? (
            <video
              ref={videoRef}
              loop
              src={`/images/presales/${presale.banner}`}
              style={{ width: "100%", height: "80px" }}
            />
          ) : (
            <img
              src={`/images/presales/${presale.banner}`}
              className=" rounded-t-lg "
              alt="presale"
            />
          )}
        </div>
        <div className="flex items-center justify-between px-2">
          <div className="flex space-x-2 items-center">
            {presale.status.toLowerCase() === "finalized" ||
            presale.status.toLowerCase() === "launched" ? (
              <div className="w-2 h-2 rounded-full bg-indigo-600" />
            ) : (
              <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse " />
            )}

            <span className="uppercase text-xs">{presale.status}</span>
          </div>
          <div className="space-x-1">
            {presale.tags.map((tag, index) => (
              <Button
                key={index}
                size="tag"
                className="bg-gray-700 text-green-500 text-sm hover:bg-gray-700 hover:border hover:border-green-200 duration-200 transition-all"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <CardContent>
          <div className="flex items-center  mt-4 space-x-4">
            <div className="relative w-16">
              <Image
                src={`/images/presales/${presale.networkLogo}`}
                alt="logo"
                width={30}
                height={30}
                className={`rounded-full absolute -top-2 -left-2`}
              />
              <Image
                src={`/images/presales/${presale.logo}`}
                alt="logo"
                width={50}
                height={50}
                className={`rounded-full`}
              />
            </div>
            <div className="w-full ">
              <div className="text-base ">{presale.title}</div>
              <div className="font-bold text-xs capitalize">
                {presale.type}
                <p className="text-gray-400">
                  Max Buy: {presale.maxBuy.toLocaleString("en-US")}{" "}
                  {presale.currency}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mt-4 text-xs mb-1">
              <span>Progress</span>
              <span>Hardcap</span>
            </div>
            <div className="flex items-center w-full flex-col">
              <Progress value={presale.progress} className="h-2" />
              <div className="flex items-center justify-between w-full text-xs mt-1">
                <small>
                  {presale.raised.toLocaleString("en-US")} {presale.currency}
                </small>
                <small>{presale.progress}%</small>
                <small>
                  {presale.target.toLocaleString("en-US")} {presale.currency}
                </small>
              </div>
            </div>
            <div className="flex w-full items-center justify-between text-xs mt-2">
              <div>
                <div className="flex items-center space-x-2 border-b border-gray-600 pb-1">
                  <span>Softcap</span>
                  <span className="text-green-500">
                    {presale.softcap.toLocaleString("en-US")} {presale.currency}
                  </span>
                </div>
                <div className="flex w-full justify-around">
                  <span>Rate</span>{" "}
                  <span className="text-green-500">{presale.rate}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 border-b border-gray-600 pb-1">
                  <span>Hardcap</span>
                  <span className="text-green-500">
                    {presale.hardcap == "0" ? (
                      <Infinity />
                    ) : (
                      <span>
                        {presale.hardcap} {presale.currency}
                      </span>
                    )}
                  </span>
                </div>
                <div className="flex w-full justify-around">
                  <span>Lock</span>{" "}
                  <span className="text-green-500">{presale.lock}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full justify-between ">
            <div className="flex items-center space-x-1">
              <Globe className=" h-4 w-4 text-gray-400 hover:scale-110 transition-all duration-300" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="16px"
                height="16px"
                fill="white"
                className="text-gray-400 hover:scale-110 transition-all duration-300"
              >
                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
              </svg>
            </div>
            <div>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full w-10 h-10"
              >
                <Plus />
              </Button>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircleMore className="h-4 w-4 text-gray-400 hover:scale-110 transition-all duration-300" />
              <Bell className="h-4 w-4 text-gray-400 hover:scale-110 transition-all duration-300" />
              <Heart className="h-4 w-4 text-gray-400 hover:scale-110 transition-all duration-300" />
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
