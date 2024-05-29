"use client";
import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";
import AppLogo from "./AppLogo";

export default function AppNavigation({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex justify-between p-4 border-b-2 border-neutral-800">
        <AppLogo />

        <Card className="grid place-items-center px-4 pt-0 bg-sky-500 hover:bg-sky-600 ">
          <a href="mailto:ssoydabas41@gmail.com" className="my-auto">
            Contact Me
          </a>
        </Card>
      </div>
      {children}
    </>
  );
}
