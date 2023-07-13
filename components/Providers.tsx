"use client";
import React, {ReactNode} from "react";
import {ThemeProvider} from "next-themes";
import {SessionProvider} from "next-auth/react";

function Providers({children}: {children: ReactNode}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}

export default Providers;
