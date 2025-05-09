import "./global.css";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import { AOS, ThemeProvider } from "./components/global";
import { Instrument_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";

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

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tekcify.com"),
  icons: {
    icon: "/icon.png",
  },
  title: "Tekcify - Centralized Dashboard",
  description:
    "A centralized dashboard for managing Tekcify products including Binx AI, CAMPUX, and PDFx",
  applicationName: "Tekcify Dashboard",
  authors: [{ name: "Tekcify", url: "https://tekcify.com" }],
  keywords: ["Tekcify", "Binx AI", "CAMPUX", "PDFx", "Dashboard", "SaaS"],
  creator: "Tekcify",
  publisher: "Tekcify",
  generator: "Next.js",
  referrer: "origin",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://tekcify.com",
    title: "Tekcify - Centralized Dashboard",
    siteName: "Tekcify",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tekcify Dashboard",
      },
    ],
  },
  twitter: {
    site: "@tekcify",
    creator: "@tekcify",
    title: "Tekcify - Centralized Dashboard for All Products",
    description:
      "Manage Binx AI, CAMPUX, PDFx and more from a single dashboard",
    card: "summary_large_image",
    images: ["/twitter-image.png"],
  },
  appleWebApp: {
    capable: true,
    title: "Tekcify Dashboard",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract: "A centralized dashboard for all Tekcify products and services",
  category: "SaaS",
  classification: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${instrumentSans.className} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="tekcify-theme">
          <Toaster richColors />
          <AOS />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
