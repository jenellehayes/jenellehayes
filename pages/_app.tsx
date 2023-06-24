import { Karla } from "@next/font/google";
import "../styles/globals.css";
import classnames from "classnames";

const karla = Karla({ subsets: ["latin"], variable: "--font-karla" });

import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      x
      <div className={classnames(karla.variable, "font-sans")}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  );
}
