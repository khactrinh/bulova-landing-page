import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Bulova 97C105 - Đồng Hồ Đàn Ông Lịch Lãm',
  description: 'Sở hữu đồng hồ Bulova 97C105 chính hãng với giá chỉ 4.900.000 VNĐ. Thiết kế sang trọng, chống nước 50m, ship COD toàn quốc!',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Bulova 97C105 - Đồng Hồ Đàn Ông Lịch Lãm',
    description: 'Sở hữu đồng hồ Bulova 97C105 chính hãng với giá chỉ 4.900.000 VNĐ. Thiết kế sang trọng, chống nước 50m, ship COD toàn quốc!',
    images: '/images/image1.jpg',
    type: 'website',
    url: 'https://bulova-landing-page-git-main-khactrinhs-projects.vercel.app',
  },
  icons: '/favicon.ico',
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
        {children}
      </body>
    </html>
  );
}
