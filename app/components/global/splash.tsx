"use client";

import { Image } from "../ui";
import { useTheme } from "./theme-provider";
import { useState, useEffect } from "react";

export default function Splash() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const logoSrc =
    theme === "dark" ? "/images/brand/dark.png" : "/images/brand/white.png";

  return (
    <div className="w-full h-svh flex relative flex-col gap-5 items-center justify-center bg-gradient-to-r from-purpleHeart to-seance">
      <Image src={logoSrc} alt="Tekcify" width={100} height={100} />
      <h1 className="text-[16px] font-aki font-extrabold block text-white">
        Tekcify
      </h1>
    </div>
  );
}
