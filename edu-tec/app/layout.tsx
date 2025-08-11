import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {Poppins, Montserrat } from "next/font/google";
import "./globals.css";

//Poppins Normal
const poppins = Poppins({
  subsets:["latin"],
  weight:["400","700"], //Regular e Bold
  variable: "--font-poppins"
})

//Montserrat italic

const montserratItalic = Montserrat({
  subsets:["latin"],
  weight:["400"], // Peso padrao (Grossura do texto)
  style:["italic"], // Aqui setamos o italico
  variable:"--font-montserrat-italic"
})
//Fonte Sans
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduTec",
  description: "EducaTec",
  icons:{
    icon:"favicon-v2.ico",
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="app/favicon-v2.ico"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserratItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
