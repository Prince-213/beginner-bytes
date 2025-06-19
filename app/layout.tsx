import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Link from "next/link";
import { Mail, Ticket } from "lucide-react";
import { Toaster } from "sonner";

const space = localFont({
  src: "../font/Outfit-Variable.ttf",
  display: "swap",
  variable: "--my-font",
});

export const metadata: Metadata = {
  title: {
    default: "Beginner Bytes | Tech Event for Aspiring Developers",
    template: "%s | Beginner Bytes",
  },
  description:
    "Join our tech event for beginners covering web development, mobile apps, AI, and digital marketing. Hands-on workshops and expert guidance.",
  keywords: [
    "tech event",
    "enugu tech event",
    "nigeria tech event",
    "beginner tech event",
    "beginner programming",
    "web development workshop",
    "digital marketing course",
    "AI for beginners",
    "coding bootcamp",
  ],
  authors: [{ name: "Beginner Bytes Team" }],
  creator: "Beginner Bytes",
  publisher: "Beginner Bytes",
  metadataBase: new URL("https://beginnerbytes.com.ng"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beginner Bytes | Tech Event for Aspiring Developers",
    description:
      "A tech event covering programming and digital marketing for beginners",
    url: "https://beginnerbytes.com.ng",
    siteName: "Beginner Bytes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Beginner Bytes Tech Event",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beginner Bytes | Tech Event for Aspiring Developers",
    description:
      "A tech event covering programming and digital marketing for beginners",
    images: ["/twitter-image.jpg"],
    creator: "@beginnerbytes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  /*  verification: {
    google: "your-google-verification-code",
  }, */
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${space.className} antialiased bg-gray-100 relative`}>
        <header className="flex fixed top-0 z-50 w-full items-center justify-between p-4 md:p-6 4">
          <Link
            href="/"
            className="text-sm px-4 py-2 rounded-sm font-semibold bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] text-gray-900 hover:shadow-[0_5px_15px_rgb(0,0,0,0.1)] transition-all"
            aria-label="Beginner Bytes Home"
          >
            Beginner Bytes
          </Link>
          <nav aria-label="Main navigation">
            <div className="flex items-center gap-4">
              <div className="cursor-pointer relative rounded-sm group bg-white w-8 h-8 shadow-[0_3px_10px_rgb(0,0,0,0.1)] flex items-center justify-center hover:shadow-[0_5px_15px_rgb(0,0,0,0.1)] transition-all">
                <Link href="/news" aria-label="Newsletter">
                  <Mail className="w-4 h-4 text-gray-600" />
                </Link>
                <p className="opacity-0 transition-all duration-200 group-hover:opacity-100 ease-in-out -bottom-10 text-sm absolute text-neutral-500 font-medium">
                  Newsletter
                </p>
              </div>
              <div className="cursor-pointer relative rounded-sm group bg-white w-8 h-8 shadow-[0_3px_10px_rgb(0,0,0,0.1)] flex items-center justify-center hover:shadow-[0_5px_15px_rgb(0,0,0,0.1)] transition-all">
                <Link href="/register" aria-label="Register for event">
                  <Ticket className="w-4 h-4 text-gray-600" />
                </Link>
                <p className="opacity-0 transition-all duration-200 group-hover:opacity-100 ease-in-out -bottom-10 text-sm absolute text-neutral-500 font-medium">
                  Register
                </p>
              </div>
            </div>
          </nav>
        </header>

        <Toaster position="top-right" richColors />

        {children}
      </body>
    </html>
  );
}
