import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import ConvexClientProvider from "@/providers/convex-client-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WhatsAppClone",
  description: "by Harsha Vadluri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
        <ConvexClientProvider>
          {children}
          <Toaster />
        </ConvexClientProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
