import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blendpad",
  description: "Application for launchpad and staking and much more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={montserrat.className}>
        <div className="bg-black/40 w-full scrollbar-thin  scrollbar-thumb-rounded-full scrollbar-track-rounded-full  scrollbar-thumb-green-600 scrollbar-track-black h-screen overflow-y-scroll">
          {children}
        </div>
      </body>
    </html>
  );
}
