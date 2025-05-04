import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";

const chineseFont = localFont({
  src: "./fonts/NotoSansTC-Light.ttf",
});

export const metadata: Metadata = {
  title: "普魯醬",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={`${chineseFont.className}`}>{children}</body>
    </html>
  );
}
