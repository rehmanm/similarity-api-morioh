import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import {cn} from "@/lib/utils";
import "@/styles/globals.css";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("bg-white text-slate-900 antialiased", inter.className)}>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers>
          <Navbar />
          {children}
          {/* @ts-expect-error Server Component */}
        </Providers>
        <div className="h-40 md:hidden"></div>
      </body>
    </html>
  );
}
