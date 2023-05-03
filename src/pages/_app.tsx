import NavBar from "@/components/NavBar";
import NoSSR from "@/components/NoSSR";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import Image from "next/image";
import { useEffect, useState } from "react";
import "setimmediate";

export const lexend = localFont({
  src: "../fonts/Lexend/Lexend-VariableFont_wght.ttf",
});

export const dev = false;

export default function App({ Component, pageProps }: AppProps) {
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMobile(window.innerWidth <= 768);
      window.addEventListener("resize", () =>
        setMobile(window.innerWidth <= 768)
      );
    }
  }, []);

  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${lexend.style.fontFamily};
          }
          #__next {
            min-height: 100svh;
            background-color: ${dev ? "aqua" : "none"};
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
      <NavBar mobile={mobile} />
      <div
        style={{
          textAlign: "center",
          backgroundColor: dev ? "blue" : "none",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            marginLeft: mobile ? 0 : 100,
            marginRight: mobile ? 0 : 100,
            marginTop: mobile ? 30 : 80,
          }}
        >
          <div
            style={{
              maxWidth: `calc(100vw - ${40}px)`,
              backgroundColor: dev ? "green" : "none",
              width: "100%",
              textAlign: "left",
              display: "inline-block",
            }}
          >
            <Component {...pageProps} />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: dev ? "yellow" : "none",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column-reverse",
          overflow: "hidden",
          // height: "100%",
          // marginTop: "auto",
        }}
      >
        <Image
          priority
          alt="Orchestra"
          src="/orch.png"
          width="1920"
          height="324"
          style={{
            width: "100vw",
            height: `${100 * (324 / 1920)}vw`,
          }}
        />
        <br />
      </div>
    </>
  );
}
