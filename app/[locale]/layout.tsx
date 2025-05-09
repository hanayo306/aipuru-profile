import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/next";

const chineseFont = localFont({
  src: "./fonts/NotoSansTC-Light.ttf",
});

export const metadata: Metadata = {
  title: "普魯醬",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${chineseFont.className} bg-gradient-to-r from-violet-900 to-blue-900`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
