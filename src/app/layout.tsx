// app/layout.tsx
import React from "react";
import Link from "next/link";
import "daisyui/dist/full.css";
// import { CssBaseline } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <CssBaseline /> */}
      <html lang="en">
        <head>
          <title>Reflection Paper - Randy B. Familara</title>
        </head>
        <body className="bg-gray-100 text-gray-800">
          <div className="navbar bg-base-transparent">
            <div className="navbar-start bg-transparent text-white">
              <div className="flex-1">
                <Link href="/" className="btn text-xl text-base-300 bg-accent hover:bg-accent">
                  Randy Familara{" "}
                </Link>
              </div>
            </div>

            <div className="navbar-end">
              <div className="flex-none">
                <Link href="/" className="btn btn-ghost">
                  Home
                </Link>
                <Link href="/my-profile" className="btn btn-ghost">
                  Profile
                </Link>
                <Link href="/my-journal" className="btn btn-ghost">
                  OJT Journal
                </Link>
                <Link href="/my-reflection" className="btn btn-ghost">
                  Reflection
                </Link>
              </div>
            </div>
          </div>
          <main className="p-6">{children}</main>
        </body>
      </html>
    </>
  );
}
