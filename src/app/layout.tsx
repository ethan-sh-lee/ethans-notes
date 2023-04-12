import "../styles/globals.css";
import Navbar from "./components/nav/Navbar";
import Provider from "./components/ProviderDarkTheme";
import { Nanum_Gothic_Coding } from "next/font/google";

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
    <html lang="ko" className={font.className} suppressHydrationWarning>
      <body className="px-3 pt-2">
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
