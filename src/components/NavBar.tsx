import { lexend } from "@/pages/_app";
import { DARK_GRAY, DARK_RED } from "./constants";
import { MobileNavBar } from "./MobileNavBar";
import { DesktopNavBar } from "./DesktopNavBar";

const NavBar = (props: { device: string }) => {
  return (
    <>
      {props.device === "mobile" ? (
        <MobileNavBar />
      ) : props.device === "desktop" ? (
        <DesktopNavBar />
      ) : (
        <div style={{ position: "sticky", top: 0 }}>
          <meta name="theme-color" content={DARK_GRAY} />
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
              paddingTop: 50,
            }}
          />
          <div
            style={{
              width: "100%",
              height: 10,
              backgroundColor: DARK_RED,
              boxShadow: "0px 2px 5px black",
            }}
          />
        </div>
      )}
    </>
  );
};

export default NavBar;
