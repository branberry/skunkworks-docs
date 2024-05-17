import type { Metadata } from "next";
import { RootStyleRegistry } from "@/components/global/root-style-registry";
import { GlobalLayoutStyles } from "@/components/global/global-style-layout";
import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlas",
  description: "Something cool about Atlas",
};

export default function AtlasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <div>
          <RootStyleRegistry>
             <GlobalLayoutStyles>
               <main className="main-grid">
                <div className="header">
                  <div />
                </div>
                <div className="side-nav">
                  <div />
                </div>
                <div className="contents">
                {children}
                </div>
               </main>
             </GlobalLayoutStyles>
         </RootStyleRegistry>
         </div>
      </body>
    </html>
  );
}
