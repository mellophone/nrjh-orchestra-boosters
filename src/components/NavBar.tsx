import { lexend } from "@/pages/_app";
import { DARK_GRAY, DARK_RED } from "./constants";
import Image from "next/image";
import styles from "@/styles/NavBar.module.css";
import { NavButton } from "./NavButton";
import { useEffect, useState } from "react";
import { MobileNavBar } from "./MobileNavBar";
import { DesktopNavBar } from "./DesktopNavBar";

const NavBar = (props: { mobile: boolean }) => {
  // const [mobile, setMobile] = useState<boolean>(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setMobile(window.innerWidth <= 768);
  //     window.addEventListener("resize", () =>
  //       setMobile(window.innerWidth <= 768)
  //     );
  //   }
  // }, []);

  return <>{props.mobile ? <MobileNavBar /> : <DesktopNavBar />}</>;
};
export default NavBar;
