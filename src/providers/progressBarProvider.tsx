"use client";

import { AppProgressBar } from "next-nprogress-bar";
import { ReactNode } from "react";

const ProgressBarProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <AppProgressBar
        height="4px"
        color="hsl(var(--primary))"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBarProviders;
