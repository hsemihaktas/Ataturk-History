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
  title: "Atatürk Kronolojisi | Atatürk Chronology",
  description: "Gazi Mustafa Kemal Atatürk'ün hayatı, ilke ve inkılapları, Cumhuriyet tarihi interaktif haritası. Explore the life of Mustafa Kemal Ataturk and the history of Turkish Republic through an interactive map and timeline.",
  keywords: ["Atatürk", "Mustafa Kemal", "Cumhuriyet", "Kurtuluş Savaşı", "Tarih Haritası", "Kronoloji", "History Map", "Interactive Timeline", "Turkish History", "Gallipoli"],
  authors: [{ name: "Atatürk Archives" }],
  creator: "Semih Aktaş",
  publisher: "Semih Aktaş",
  openGraph: {
    title: "Atatürk Kronolojisi | Atatürk Chronology",
    description: "Gazi Mustafa Kemal Atatürk'ün hayatı ve Cumhuriyet tarihi interaktif haritası.",
    url: "https://ataturk-chronology.vercel.app", // Placeholder, good to have
    siteName: "Atatürk Kronolojisi",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atatürk Kronolojisi | Atatürk Chronology",
    description: "Gazi Mustafa Kemal Atatürk'ün hayatı ve Cumhuriyet tarihi interaktif haritası.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
