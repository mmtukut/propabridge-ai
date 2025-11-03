import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: "Propabridge | Find Your Home in Minutes, Not Weeks | Nigeria's #1 Property Marketplace",
  description: "AI-powered property search in Nigeria. 500+ verified listings. Zero fraud. Zero fees. Find apartments for rent in Lagos, Abuja, Port Harcourt. Start your search in 30 seconds.",
  keywords: "property for rent Nigeria, apartments Lagos, houses Abuja, verified property listings, fraud-free property search",
  openGraph: {
    title: "Propabridge | Find Your Perfect Home in Minutes",
    description: "Nigeria's most trusted property marketplace. 500+ verified listings. AI-powered search. Zero fraud. Zero fees.",
    url: "https://propabridge.ng", // Replace with actual domain
    type: "website",
    images: [
      {
        url: "https://picsum.photos/seed/propabridge-og/1200/630", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Propabridge - Find your home in Nigeria.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propabridge | Find Your Home in Minutes",
    description: "AI-powered property search. 500+ verified listings. Zero fraud. Zero fees.",
    images: ["https://picsum.photos/seed/propabridge-twitter/1200/600"], // Replace with actual Twitter card image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-gray-700">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
