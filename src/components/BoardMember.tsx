import Image from "next/image";
import { DARK_GRAY, DARK_RED, LIGHT_GRAY } from "./constants";
import { dev } from "@/pages/_app";
import { useState } from "react";
import styles from "@/styles/about.module.css";

export const BoardMember = (props: {
  name: string;
  position: string;
  fileName?: `/${string}.${"png" | "jpg"}`;
  children?: string;
}) => {
  const [extended, setExtended] = useState<boolean>(false);

  return (
    <div>
      <div
        onMouseEnter={() => setExtended(true)}
        onMouseLeave={() => setExtended(false)}
        className={styles.boardMember}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              borderRadius: 100,
              width: 100,
              height: 100,
              overflow: "hidden",
              border: "solid",
              borderWidth: 5,
              borderColor: DARK_RED,
              display: "inline",
              marginRight: 15,
              minWidth: 100,
            }}
          >
            <Image
              alt={props.name}
              src={props.fileName || "/logo.png"}
              width="100"
              height="100"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: dev ? "red" : "",
              justifyContent: "center",
            }}
          >
            <div style={{ color: DARK_RED, fontSize: 23 }}>{props.name}</div>
            <div style={{ color: DARK_GRAY, fontSize: 15 }}>
              {props.position}
            </div>
          </div>
        </div>
        {extended && props.children ? (
          <div style={{ fontWeight: 300 }}>
            <br />
            {props.children}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export const BoardMemberExtended = (props: {
  name: string;
  position: string;
  fileName?: `/${string}.${"png" | "jpg"}`;
  children?: string;
}) => {
  return (
    <div className={styles.boardMember}>
      <div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              borderRadius: 100,
              width: 100,
              height: 100,
              overflow: "hidden",
              border: "solid",
              borderWidth: 5,
              borderColor: DARK_RED,
              display: "inline",
              marginRight: 15,
              minWidth: 100,
            }}
          >
            <Image
              alt={props.name}
              src={props.fileName || "/logo.png"}
              width="100"
              height="100"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: dev ? "red" : "",
              justifyContent: "center",
            }}
          >
            <div style={{ color: DARK_RED, fontSize: 23 }}>{props.name}</div>
            <div style={{ color: DARK_GRAY, fontSize: 15 }}>
              {props.position}
            </div>
          </div>
        </div>
        {props.children ? (
          <div style={{ fontWeight: 300 }}>
            <br />
            {props.children}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
