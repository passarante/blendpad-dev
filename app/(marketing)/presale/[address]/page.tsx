/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { presales } from "@/constants/presales";

import {
  ArrowLeft,
  Bell,
  Copy,
  Globe,
  Globe2,
  Heart,
  Info,
  Lock,
  PieChart as PieChartIcon,
  Plus,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { RiTelegramLine, RiTwitterXFill } from "react-icons/ri";
import { MdMenuBook } from "react-icons/md";
import YouTube from "react-youtube";
import { AboutTabType, SaleTabType, TokenomicsTabType } from "@/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PieChart } from "@mui/x-charts/PieChart";
import PresaleDetailHeader from "@/components/marketing/presale/detail-page/PresaleDetailHeader";
import PresaleDetailLeft from "@/components/marketing/presale/detail-page/PresaleDetailLeft";
import PresaleDetailRight from "@/components/marketing/presale/detail-page/PresaleDetailRight";

export default function PresaleDetailPage() {
  const { address: tokenAddress } = useParams();

  const presale = presales.find((p) => p.address === tokenAddress);

  if (!presale) return null;

  return (
    <div className="mt-20 p-6">
      <div className="grid grid-cols-3 gap-2">
        <PresaleDetailLeft presale={presale} />
        <PresaleDetailRight presale={presale} />
      </div>
    </div>
  );
}
