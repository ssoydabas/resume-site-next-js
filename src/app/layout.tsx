import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import ProgressBarProviders from "@/providers/progressBarProvider";
import { Toaster } from "@/components/ui/toaster";
import AppNavigation from "./_components/AppNavigation";
import Script from "next/script";
import { env } from "@/envs";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Sertan Soydabaş",
  description: "The official resume of mine",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark",
          fontSans.variable
        )}
      >
        <ProgressBarProviders>
          <AppNavigation>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${env.GOOGLE_ANALYTICS_ID}`}
              strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-xxxxxxxxxx');
        `}
            </Script>

            {children}
          </AppNavigation>
          <Toaster />
        </ProgressBarProviders>
      </body>
    </html>
  );
}
