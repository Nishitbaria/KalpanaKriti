import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from "@/components/shared/modal-provider";
import { Toaster } from "@/components/ui/toaster";
import { CrispProvider } from "@/components/shared/crisp-provider";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/landingpage/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KalpanaKriti",
  description: "AI as a Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <CrispProvider />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
        <ModalProvider />
      </html>
    </ClerkProvider>
  );
}
