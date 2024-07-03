import "@/styles/globals.css";
import Navbar from "@/components/nav/navbar";
import BlogThemeProvider from "@/components/blog-theme-provider";
import { Noto_Sans_KR } from "next/font/google";
import { Footer } from "@/components/footer";
import "@/styles/prism-vsc-dark-plus.css";
import "@/styles/rehype-code-titles.css";
import "@/styles/rehype-mermaidjs.css";

export const metadata = {
  title: "Ethan's notes",
  description: "code, tech, engineering blog",
};

const font = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={font.className} lang="ko" suppressHydrationWarning>
      <body className="px-3 pt-2 dark:bg-black dark:text-white">
        <BlogThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </BlogThemeProvider>
      </body>
    </html>
  );
}
