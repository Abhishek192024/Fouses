import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fouses | Digital Growth Agency",
  description:
    "Fouses builds fast, responsive, and beautifully designed digital experiences for ambitious brands."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
