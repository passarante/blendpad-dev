import Image from "next/image";
import React from "react";

export default function Logo({ isCollapsed }: { isCollapsed: boolean }) {
  return isCollapsed ? (
    <Image
      width={80}
      height={70}
      src="/images/logo/logo-small-full-web.png"
      alt="logo"
    />
  ) : (
    <Image
      width={200}
      height={100}
      src="/images/logo/logo-full-web.png"
      alt="logo"
    />
  );
}
