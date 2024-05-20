import { Card, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { AboutTabType } from "@/types";
import React from "react";
import YouTube from "react-youtube";

export default function AboutTab({ aboutTab }: { aboutTab: AboutTabType }) {
  return (
    <TabsContent value="about">
      <Card className="border-none">
        <CardContent className="space-y-2">
          {aboutTab.content}

          <div className="mt-4">
            <YouTube
              videoId={aboutTab.ytVideo.split("/")[3]}
              onReady={(event) => event.target.pauseVideo()}
              loading="lazy"
              opts={{
                height: "390",
                width: "100%",
                playerVars: { autoplay: 1 },
              }}
            />
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
