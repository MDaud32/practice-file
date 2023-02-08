import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoonFill, BsSun } from "react-icons/bs";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="flex justify-between items-center w-full border-b-2 pb-2 sm:px-4 px-2">
      <Link href="/" className="flex items-center space-x-3">
        <Image
          alt="header text"
          src="/writingIcon.png"
          className="sm:w-12 sm:h-12 w-8 h-8 mt-3"
          width={32}
          height={32}
        />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          twitterBio.com
        </h1>
      </Link>
      <div>
        <div className="flex justify-center border-2 rounded-full border-gray-600 dark:border-gray-200">
          {currentTheme === "dark" ? (
            <button
              className="p-2 text-xl cursor-pointer"
              onClick={() => setTheme("light")}>
              <BsMoonFill />
            </button>
          ) : (
            <button
              className="p-2 text-xl cursor-pointer"
              onClick={() => setTheme("dark")}>
              <BsSun />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
