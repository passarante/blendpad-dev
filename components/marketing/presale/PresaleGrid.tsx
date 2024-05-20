import React from "react";
import PresaleGridCard from "./PresaleGridCard";
import { PresaleType } from "@/types";
import { presales } from "@/constants/presales";

export default function PresaleGrid() {
  return (
    <div className="w-full grid grid-cols-4 mt-12 gap-4">
      {presales.map((presale) => (
        <div key={presale.id}>
          <PresaleGridCard presale={presale} />
        </div>
      ))}
    </div>
  );
}
