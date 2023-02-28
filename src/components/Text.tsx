import { lexend } from "@/pages/_app";
import { DARK_GRAY, DARK_RED, LIGHT_GRAY } from "./constants";

export const Title = (props: { children: string }) => {
  return (
    <div
      style={{
        color: DARK_RED,
        fontFamily: lexend.style.fontFamily,
        fontWeight: 600,
        fontSize: 30,
        textShadow: `0px 2px 2px ${LIGHT_GRAY}`,
      }}
    >
      {props.children}
    </div>
  );
};
