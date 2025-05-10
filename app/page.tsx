"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { Splash } from "./components/global";

export default function Home() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      redirect("/home");
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return <Splash />;
}
