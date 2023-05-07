import "@/styles/globals.css";
import Navbar from "@/components/nav/Navbar";
import Provider from "@/components/ProviderDarkTheme";
import { Noto_Sans_KR } from "next/font/google";
import { FooterLayout } from "../components/footer";
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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={font.className} lang="ko" suppressHydrationWarning>
      <body className="px-3 pt-2 dark:bg-black dark:text-white">
        <Provider>
          <Navbar />
          {children}
          <FooterLayout />
        </Provider>
      </body>
    </html>
  );
}
