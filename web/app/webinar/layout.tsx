import { Bricolage_Grotesque, Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

export default function WebinarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${figtree.variable} ${bricolage.variable} webinar-page antialiased`}>
      {children}
    </div>
  );
}
