import { dev, lexend } from "@/pages/_app";
import { DARK_GRAY, DARK_RED } from "./constants";
import Image from "next/image";
import { useState } from "react";
import { MobileNavButton } from "./NavButton";

export const MobileNavBar = () => {
  const [menuState, setMenuState] = useState<boolean>(false);

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 5 }}>
      <meta name="theme-color" content={DARK_GRAY} />
      <style jsx global>{`
        html,
        body {
          background-color: "black";
        }
      `}</style>
      <div
        style={{
          backgroundColor: DARK_GRAY,
          color: "white",
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
          fontFamily: lexend.style.fontFamily,
          fontWeight: 300,
          flexDirection: "column",
          display: "flex",
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              backgroundColor: dev ? "blue" : "",
            }}
          >
            <Image
              loading="eager"
              alt="BoosterLogo"
              src="/logo.png"
              width={200}
              height={200}
              style={{ width: 50, height: 50, alignSelf: "center" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: dev ? "red" : "",
            }}
          >
            <div style={{ flexGrow: 1 }} />
            <div
              style={{
                backgroundColor: dev ? "magenta" : "",
                alignItems: "center",
                fontWeight: 400,
                paddingTop: 5,
              }}
            >
              Longhorn Strings
            </div>
            <div style={{ flexGrow: 1 }} />
          </div>
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row-reverse",
              backgroundColor: dev ? "green" : "",
            }}
          >
            <Image
              loading="eager"
              onClick={() => {
                setMenuState(!menuState);
              }}
              alt="MenuBars"
              src="/menu.png"
              width={200}
              height={200}
              style={{ width: 50, height: 50, alignSelf: "center" }}
            />
          </div>
        </div>
        <div
          style={{
            display: menuState ? "flex" : "none",
            flexDirection: "column",
            backgroundColor: dev ? "darkblue" : "",
          }}
        >
          <br />
          {MobileNavButton("Home")}
          <br />
          {MobileNavButton("About")}
          <br />
          {MobileNavButton("Calendar")}
          <br />
          {MobileNavButton("Donate")}
          <br />
          {MobileNavButton("Join")}
          <br />
          {MobileNavButton("FAQ")}
          <br />
          {MobileNavButton("Donors")}
          <br />
        </div>
        {/* <div style={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
          <div style={{ flexGrow: 1, alignSelf: "center" }} />
        </div> */}
      </div>
      <div
        style={{
          width: "100%",
          height: 10,
          backgroundColor: DARK_RED,
          boxShadow: "0px 2px 5px black",
        }}
      />
    </div>
  );
};
