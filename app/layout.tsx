import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marija's Portfolio",
  description: "Modern & Minimal JS Mastery Portfolio",
};

// TODO: adjust load speed...
// TODO: add theme switch https://ui.shadcn.com/docs/dark-mode/next 

// A dashboard had charts and data that caused the UI to freeze. I fixed it by using useMemo, useCallback, and breaking components into smaller ones. I also used loading skeletons to improve the user experience while data was loading.


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="./layer.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
