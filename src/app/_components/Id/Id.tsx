"use client";
import useWindowSize from "@/hooks/useWindowSize";
import { screens } from "tailwindcss/defaultTheme";
import MobileIdCard from "./MobileIdCard";
import IdCard from "./IdCard";

export default function Id() {
  const { width } = useWindowSize();
  const screenWidth = +screens.lg.slice(0, -2);

  if (width && width < screenWidth) {
    return <MobileIdCard width={width} />;
  }

  return <IdCard />;
}
