import NavBar from "@/components/NavBar";
import NoSSR from "@/components/NoSSR";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

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
          width: "100vw",
          backgroundColor: dev ? "blue" : "",
          paddingTop: 40,
        }}
      >
        <div
          style={{
            backgroundColor: dev ? "green" : "",
            maxWidth: `calc(100vw - ${40}px)`,
            width: 1600,
            textAlign: "left",
            display: "inline-block",
            margin: 20,
          }}
        >
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
