import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Inter } from "next/font/google";
import "../presentation/styles/globals.css";
import Providers from "../presentation/providers/providers";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra-petch",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Fernanda Mascheti — Blog",
    template: "%s | Fernanda Mascheti",
  },
  description: "Blog com artigos de front-end, acessibilidade e UX.",
  openGraph: { type: "website", title: "Fernanda Mascheti — Blog", url: "/" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${chakraPetch.variable} ${inter.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <a href="#conteudo" className="sr-only focus:not-sr-only">
          Ir para conteúdo
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
