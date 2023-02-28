import { lexend } from "@/pages/_app";
import { DARK_GRAY, DARK_RED } from "./constants";
import Image from "next/image";

export const MobileNavBar = () => {
  return (
    <div style={{ position: "sticky", top: 0 }}>
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
          paddingRight: 0,
          fontFamily: lexend.style.fontFamily,
          fontWeight: 300,
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Image
          alt="BoosterLogo"
          src="/logo.png"
          width={200}
          height={200}
          style={{ width: 50, height: 50, alignSelf: "center" }}
        />
        {/* <span style={{ fontWeight: 500, alignSelf: "center" }}>
              NRJH Orhcestra Boosters
            </span> */}
        <div style={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
          <div style={{ flexGrow: 1, alignSelf: "center" }} />
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
