import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const menus = [
  { title: "Programming", href: "/programming" },
  { title: "Daily log", href: "/daily-log" },
  { title: "Books", href: "/books" },
  { title: "Notes", href: "/notes" },
  { title: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <div className="py-10 inline-flex">
      <h1 className="pl-4 pr-4 text-3xl font-bold ">
        <Link href={"/"}>Ethan&#39;s Notes</Link>
      </h1>
      <header className="flex justify-center items-center">
        {menus.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="pr-4 pl-4 font-medium"
          >
            {link.title}
          </Link>
        ))}
      </header>
      <ThemeSwitch />
    </div>
  );
}
