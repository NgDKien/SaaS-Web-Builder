import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DM_Sans } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
// import ModalProvider from '@/providers/modal-provider'
// import { Toaster } from '@/components/ui/toaster'
// import { Toaster as SonnarToaster } from '@/components/ui/sonner'
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "@/components/ui/toaster";
import ModalProvider from "@/providers/modal-provider";
// import { Toaster as SonnarToaster } from '@/components/ui/sonner'

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Plura",
  description: "All in one Agency Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={font.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <NextSSRPlugin
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          <ModalProvider>
            {children}
            <Toaster />
            {/* <SonnarToaster position="bottom-left" /> */}
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
