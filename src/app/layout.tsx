import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Tarakihi",
  description: "An AI Translator App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} flex h-screen flex-col items-center justify-between`}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
        <footer className="footer footer-center text-base-content p-4">
          <aside>
            <p>Copyright © {currentYear} - All right reserved by OhMyApps</p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
