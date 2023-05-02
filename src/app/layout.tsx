import "@/styles/globals.css";
import Navbar from "@/app/components/nav/Navbar";
import Provider from "@/app/components/ProviderDarkTheme";
import { Nanum_Gothic_Coding } from "next/font/google";
import { FooterLayout } from "./components/footer";

export const metadata = {
  title: "Ethan's notes",
  description: "code, tech, engineering blog",
};

const font = Nanum_Gothic_Coding({
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
