import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Greenserve — Better operations, lighter footprint",
  description:
    "A calmer way to coordinate sustainable service across every location. Plan work, follow progress, and keep your impact visible.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
