import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const delight = localFont({
  src: [{ path: "./fonts/Delight-Regular.otf", weight: "400", style: "normal" }],
  variable: "--font-delight",
  display: "swap",
});

const agrandir = localFont({
  src: [
    { path: "./fonts/Agrandir-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Agrandir-TextBold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-agrandir",
  display: "swap",
});

const photographSignature = localFont({
  src: [{ path: "./fonts/Photograph-Signature.ttf", weight: "400", style: "normal" }],
  variable: "--font-photograph-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeffrey Itepu Portfolio",
  description: "Personal portfolio website for Jeffrey Itepu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${delight.variable} ${agrandir.variable} ${photographSignature.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="min-h-full flex min-w-0 flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
