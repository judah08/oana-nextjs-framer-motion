import type { Metadata } from "next";
import { Rubik, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const rubik_init = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const outfit_init = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Oana Health: Get PCOS Treatment Online",
  description:
    "Oana is a premium PCOS telehealth service. Get matched with our doctors and access the latest clinically backed PCOS treatments online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik_init.variable} ${outfit_init.variable} max-w-[1192px] mx-auto`}
      >
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
