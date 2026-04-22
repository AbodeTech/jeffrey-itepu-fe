import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '268500775754690');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=268500775754690&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="min-h-full flex min-w-0 flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
