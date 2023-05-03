import { lexend } from "@/pages/_app";
import { DARK_GRAY, DARK_RED } from "./constants";
import Image from "next/image";
import { NavButton } from "./NavButton";

export const DesktopNavBar = () => {
  return (
    <div style={{ position: "sticky", top: 0 }}>
      <div
        style={{
          backgroundColor: DARK_GRAY,
          color: "white",
          padding: 10,
          paddingRight: 0,
          flexDirection: "row",
          display: "flex",
          fontFamily: lexend.style.fontFamily,
        }}
      >
        <Image
          alt="BoosterLogo"
          src="/logo.png"
          width={200}
          height={200}
          style={{ width: 40, height: 40, textShadow: "5px 5px 5px black" }}
        />
        <span
          style={{
            paddingLeft: 20,
            fontWeight: 400,
            alignSelf: "center",
          }}
        >
          Longhorn Strings - NRJH Orhcestra Boosters
        </span>
        <div style={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
          <div style={{ flexGrow: 1, alignSelf: "center" }} />
          {NavButton("Home")}
          {NavButton("About")}
          {NavButton("Donate")}
          {NavButton("Join")}
          {NavButton("FAQ")}
        </div>
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
