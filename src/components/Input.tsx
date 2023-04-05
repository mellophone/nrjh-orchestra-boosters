import { lexend } from "@/pages/_app";
import { DARK_RED } from "./constants";

export const Input = (props: { placeholder?: string }) => {
  return (
    <input
      placeholder={props.placeholder || ""}
      style={{
        border: "solid",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: DARK_RED,
        outline: "none",
        height: 40,
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 10,
        width: "100%",
        fontFamily: lexend.style.fontFamily,
        marginBottom: 10,
      }}
    ></input>
  );
};

export const Button = (props: { onClick?: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        border: "solid",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: DARK_RED,
        color: "white",
        height: 40,
        fontSize: 16,
        paddingLeft: 30,
        paddingRight: 30,
        fontFamily: lexend.style.fontFamily,
        marginBottom: 10,
      }}
    >
      Submit
    </button>
  );
};
