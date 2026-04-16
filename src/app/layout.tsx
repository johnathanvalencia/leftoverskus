import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { RequestAccessProvider } from "@/components/request-access-modal";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pathllm.ai"),
  title: {
    default: "PathLLM — Governed Video Production at Commerce Scale",
    template: "%s | PathLLM",
  },
  description:
    "The enterprise production platform for agencies and brands that need compliant, brand-governed video faster than any team can produce it.",
  openGraph: {
    siteName: "PathLLM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <RequestAccessProvider>{children}</RequestAccessProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
