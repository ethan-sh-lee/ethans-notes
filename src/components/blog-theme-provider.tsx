"use client";

import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

const BlogThemeProviders = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" {...props}>
      {children}
    </ThemeProvider>
  );
};

export default BlogThemeProviders;
