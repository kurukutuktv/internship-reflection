// app/layout.tsx
import React from "react";
import Link from "next/link";
import "daisyui/dist/full.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Reflection Paper - Randy B. Familara</title>
      </head>
      <body className="bg-gray-100 text-gray-800">
        <div className="navbar bg-primary text-primary-content">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              Randy Familara{" "}
            </Link>
          </div>
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
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
