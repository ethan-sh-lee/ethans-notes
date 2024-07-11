import "@/styles/globals.css";
import Navbar from "@/components/nav/navbar";
import BlogThemeProvider from "@/components/blog-theme-provider";
import { Noto_Sans_KR } from "next/font/google";
import { Footer } from "@/components/footer";
import "@/styles/prism-vsc-dark-plus.css";
import "@/styles/rehype-code-titles.css";
import "@/styles/rehype-mermaidjs.css";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Ethan's notes",
  description: "code, tech, engineering blog",
};

const font = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--noto_sans_kr",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={cn(
          "px-3 pt-2 min-h-screen bg-background font-sans antialiased",
          font.variable
        )}
      >
        <BlogThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </BlogThemeProvider>
      </body>
    </html>
  );
}
