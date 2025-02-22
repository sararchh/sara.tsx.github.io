import type { Metadata } from "next";
import Head from 'next/head';
import "./globals.css";

import { Lato as LatoFont } from "next/font/google";

import { ConfigApp } from "@/config/app.config";

const lato = LatoFont({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: ConfigApp.nameApp,
  description: ConfigApp.description,
  keywords: ConfigApp.keywords,
  openGraph: {
    siteName: ConfigApp.nameApp,
    title: ConfigApp.nameApp,
    description: ConfigApp.description,
    type: "website",
    url: ConfigApp.appUrl,
    images: [
      {
        url: ConfigApp?.appUrl + "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta httpEquiv="Content-Language" content="pt-br" />
        <meta name="google" content="notranslate" />
      </Head>
      <body className={`${lato.variable} antialiased`}>{children}</body>
    </html>
  );
}
