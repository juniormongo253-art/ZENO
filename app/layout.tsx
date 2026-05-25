import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ZENO - Suivi de projets clients",
  description:
    "Application de suivi de l'évolution des projets clients avec gestion des documents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-background text-foreground">
          <Sidebar />
          <main className="lg:ml-64 transition-all duration-300">
            <div className="max-w-7xl mx-auto p-4 lg:p-6">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
