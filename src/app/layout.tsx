import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./component/footer";
import Header from "./component/header";
import SideBar from "./component/sideBar";
import Layout2 from "./component/layout2";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My-Shop",
  description: "Generated Ecommerce Website by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout2>
        <Header/>
        {children}
        <SideBar/>
        <Footer/>
         <Toaster position="bottom-right" toastOptions={{
          style:{
            background:"#000000",
            color: "#ffffff",
          }
         }}/>
        </Layout2>
       
      </body>
    </html>
  );
}
