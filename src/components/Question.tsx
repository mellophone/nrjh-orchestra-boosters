import { useState } from "react";
import { DARK_RED } from "./constants";
import styles from "@/styles/FAQ.module.css";
import { dev } from "@/pages/_app";

export const Question = (props: { question: string; children: any }) => {
  const [extended, setExtended] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setExtended(true)}
      onMouseLeave={() => setExtended(false)}
      style={{
        backgroundColor: dev ? "mediumseagreen" : "",
        paddingBottom: 15,
      }}
    >
      <div className={styles.question}>
        <div style={{ fontWeight: 500 }}>{`Q: ${props.question}`}</div>
        {extended ? (
          <div style={{ fontWeight: 400, color: DARK_RED }}>
            <br />
            A: {props.children}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
