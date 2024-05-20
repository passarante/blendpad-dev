import { Card, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { TeamTabType } from "@/types";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { RiTwitterXFill } from "react-icons/ri";

export default function TeamsTab({ teamTab }: { teamTab: TeamTabType }) {
  console.log(teamTab);
  return (
    <TabsContent value="teams">
      <Card className="border-none">
        <CardContent className="space-y-2 mt-16">
          <div className="grid grid-cols-3">
            {teamTab.members.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center bg-gray-700 rounded-lg p-6 relative"
              >
                <Image
                  src={`/images/presales/${member.avatar}`}
                  width={70}
                  height={70}
                  alt={member.name}
                  className="absolute -top-10"
                />
                <Link
                  href="#"
                  className="flex flex-col items-center justify-center mt-4"
                >
                  <span className="font-bold">{member.title}</span>
                  <span className="text-green-500">{member.name}</span>
                </Link>
                <Link href={member.twitter!}>
                  <RiTwitterXFill
                    size={24}
                    className="hover:scale-125 transition-all duration-200"
                  />
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
