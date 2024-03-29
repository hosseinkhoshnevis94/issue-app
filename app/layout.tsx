import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NavBar} from "@/app/components";
import AuthProvider from "./auth/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='fantasy'>
      <AuthProvider>
      <body className={inter.className}>
        <NavBar/>
        <main className="p-5">
        {children}
        </main>
        <footer className="foote">
    <div className="container">
        <p>Issue app | All right reserved@2024</p>
    </div>
</footer>
        </body>
      </AuthProvider>
    </html>
  );
}
