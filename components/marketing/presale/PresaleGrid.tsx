import React from "react";
import PresaleGridCard from "./PresaleGridCard";
import { PresaleType } from "@/types";
import { presales } from "@/constants/presales";

export default function PresaleGrid() {
  const data = [...presales, ...presales, ...presales];
  return (
    <div className="w-full grid grid-cols-4 mt-12 gap-4">
      {data.map((presale) => (
        <div key={presale.id * Math.floor(Math.random() * 10000)}>
          <PresaleGridCard presale={presale} />
        </div>
      ))}
    </div>
  );
}
