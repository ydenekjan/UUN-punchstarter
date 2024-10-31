import type { Metadata } from "next";
import "../styles/globals.css";
import React from "react";
import { UserContextProvider } from "@/context/UserContext";

export const metadata: Metadata = {
  title: "PunchStarter | Home",
  description: "The home page of PunchStarter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserContextProvider>
        <body>{children}</body>
      </UserContextProvider>
    </html>
  );
}
