'use client'

// import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import { useRouter } from "next/navigation";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
//   const router = useRouter();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fff]`}>
        {children}
      </body>
    </html> 
  );
}
