import NavBar from "@/components/NavBar";
import NoSSR from "@/components/NoSSR";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import Image from "next/image";

export const lexend = localFont({
  src: "../fonts/Lexend/Lexend-VariableFont_wght.ttf",
});

export const dev = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${lexend.style.fontFamily};
          }
        `}
      </style>
      <NavBar />
      <div
        style={{
          textAlign: "center",
          // width: "100vw",
          // height: `calc( 100vh - 110px )`,
          backgroundColor: dev ? "blue" : "",
          // paddingTop: 40,
          // padding: 20,
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            margin: 200,
            marginTop: 100,
          }}
        >
          <div
            style={{
              maxWidth: `calc(100vw - ${40}px)`,
              backgroundColor: dev ? "green" : "",
              width: "100%",
              textAlign: "left",
              display: "inline-block",
            }}
          >
            <Component {...pageProps} />
          </div>
        </div>
        <div
          style={{
            backgroundColor: dev ? "yellow" : "",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            // marginTop: 185,
            height: 500,
          }}
        >
          <Image
            alt="Orchestra"
            src="/orch.png"
            width="1920"
            height="324"
            style={{
              width: "100vw",
              height: `${100 * (324 / 1920)}vw`,
            }}
          />
        </div>
      </div>
    </>
  );
}
