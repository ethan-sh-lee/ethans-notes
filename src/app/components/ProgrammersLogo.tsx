"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import React from "react";
import darkLogo from "../../../public/image/programmers-logo-dark.png";
import lightLogo from "../../../public/image/programmers-logo-light.png";
import Image from "next/image";

const ProgrammersLogo = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
        <Image
          src={lightLogo}
          alt="Logo of the Programmers"
          width={150}
          height={150}
        />
      ) : (
        <Image
          src={darkLogo}
          alt="Logo of the Programmers"
          width={150}
          height={150}
        />
      )}
    </>
  );
};

export default ProgrammersLogo;
