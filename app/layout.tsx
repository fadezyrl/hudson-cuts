import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { LocaleProvider } from "@/context/LocaleContext";
import { LocaleShell } from "@/components/layout/LocaleShell/LocaleShell";
import { en } from "@/data/dictionaries/en";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocaleProvider>
          <LocaleShell>{children}</LocaleShell>
        </LocaleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
