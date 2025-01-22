import "./globals.css";

import { Oswald, Raleway, Rozha_One } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import clsx from "clsx";

import { repositoryName } from "@/prismicio";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-primary",
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-secondary",
});
const rozhaOne = Rozha_One({
  subsets: ["latin"],
  variable: "--font-tertiary",
  weight: "400",
});

/**
 * @param {{ children: React.ReactNode }}
 */
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(oswald.variable, raleway.variable, rozhaOne.variable)}
    >
      <body className="overflow-x-hidden antialiased">
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
