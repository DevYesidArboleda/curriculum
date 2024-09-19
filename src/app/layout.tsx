import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider } from "../../contexts/LanguageContext";
import Sidebar from "@/components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CV de Yesid Banguera",
  description: "Currículum Vitae de Yesid Banguera Arboleda, Desarrollador Web Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#101010]`}
      >
        <AnimatedBackground />
        <LanguageProvider>
          <div className="min-h-screen bg-transparent">
            <div className="lg:flex">
              {/* Sidebar for desktop */}
              <div className="hidden lg:block lg:w-3/10 p-4">
                <Sidebar />
              </div>
              {/* Main content */}
              <div className="lg:w-7/10 w-full">
                <div className="p-4">
                  {/* Navigation and Language Toggle */}
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
                    <Navigation />
                    <LanguageToggle />
                  </div>
                  {/* Sidebar for mobile */}
                  <div className="lg:hidden mb-6">
                    <Sidebar />
                  </div>
                  <main className="py-6">
                    {children}
                  </main>
                </div>
              </div>
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}