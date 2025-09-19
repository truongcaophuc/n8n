import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "../components/Toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flowly - n8n Workflow Automation Platform",
  description: "Flowly giúp doanh nghiệp và lập trình viên thiết kế, tự động hóa workflow nhanh chóng với n8n.",
  keywords: ["Flowly", "n8n", "workflow", "automation", "no-code", "low-code"],
   icons: {
    icon: "/flowly-logo-artistic.svg",      // favicon mặc định
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  text-white min-h-screen`}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
