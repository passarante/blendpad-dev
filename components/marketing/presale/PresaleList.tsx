import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { presales } from "@/constants/presales";
import PresaleListRow from "./PresaleListRow";

export default function PresaleList() {
  const data = [...presales, ...presales, ...presales];
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Blockchain</TableHead>
            <TableHead>Sale Type</TableHead>
            <TableHead>Sale Status</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Links</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((presale) => (
            <PresaleListRow
              key={presale.id * Math.floor(Math.random() * 10000)}
              presale={presale}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
