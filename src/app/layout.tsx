import "./globals.css";
import { Inter } from "next/font/google";
import LenisProvider from "./components/LenisProvider";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jacob Mooradian — Portfolio",
  description:
    "Design-forward software engineer exploring product, UX, and systems. Golden Gate hero + case studies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} h-full antialiased bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <LenisProvider />
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}