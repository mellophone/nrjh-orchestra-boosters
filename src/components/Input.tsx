import { lexend } from "@/pages/_app";
import { DARK_RED } from "./constants";
import { form, formIndex } from "@/pages/join";
import { Dispatch, SetStateAction } from "react";

export const Input = (props: {
  placeholder?: string;
  formState: [form, Dispatch<SetStateAction<form>>];
  formIndex: formIndex;
  onEnter?: () => any;
}) => {
  return (
    <input
      onChange={(e) => {
        props.formState[0][props.formIndex] = e.target.value;
        props.formState[1](props.formState[0]);
      }}
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
        fontFamily: lexend.style.fontFamily,
        marginBottom: 10,
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" && props.onEnter) {
          props.onEnter();
        }
      }}
    ></input>
  );
};

export const Button = (props: { onClick?: () => void; state?: string }) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        border: "solid",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: props.state === "ready" ? DARK_RED : "gray",
        color: "white",
        height: 40,
        fontSize: 16,
        paddingLeft: 30,
        paddingRight: 30,
        fontFamily: lexend.style.fontFamily,
        marginBottom: 10,
        cursor: props.state === "ready" ? "pointer" : "default",
      }}
      disabled={props.state !== "ready"}
    >
      {props.state === "ready"
        ? "Submit"
        : props.state === "sending"
        ? "Sending..."
        : "Sent!"}
    </button>
  );
};
