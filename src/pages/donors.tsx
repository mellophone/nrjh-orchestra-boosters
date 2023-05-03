/* eslint-disable @next/next/no-img-element */
import { Row } from "@/components/Row";
import { Title } from "@/components/Text";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/donors.module.css";

const Donors = () => {
  return (
    <>
      <Head>
        <title>Donors</title>
        <meta name="description" content="NRJH Orchestra Booster Club" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Our Donors</Title>
      <div>{"We'd like to give a special shoutout to our amazing donors!"}</div>
      <br />
      <div className={styles.grid}>
        <img
          alt="Donor Logo"
          src="/donors/DreamDinners.png"
          style={{ width: "100%" }}
        />
        <img
          alt="Donor Logo"
          src="/donors/TexasRoadhouse.png"
          style={{ width: "100%" }}
        />
        <img
          alt="Donor Logo"
          src="/donors/Gringo's.png"
          style={{ width: "100%" }}
        />
        <img
          alt="Donor Logo"
          src="/donors/DonutHeaven.png"
          style={{ width: "100%" }}
        />
        <div style={{ textAlign: "center" }}>
          <img
            alt="Donor Logo"
            src="/donors/JaxGrill.png"
            style={{ width: "80%" }}
          />
        </div>
        <img
          alt="Donor Logo"
          src="/donors/Marco's.png"
          style={{ width: "100%" }}
        />
        <div style={{ textAlign: "center" }}>
          <img
            alt="Donor Logo"
            src="/donors/PizzaParlor.png"
            style={{ width: "60%" }}
          />
        </div>
        <img
          alt="Donor Logo"
          src="/donors/Willie's.png"
          style={{ width: "100%" }}
        />
        <div style={{ textAlign: "center" }}>
          <img
            alt="Donor Logo"
            src="/donors/FlavaWings.png"
            style={{ width: "80%" }}
          />
        </div>
        <img
          alt="Donor Logo"
          src="/donors/Salata.png"
          style={{ width: "100%" }}
        />
        <img
          alt="Donor Logo"
          src="/donors/SamsBoat.png"
          style={{ width: "100%" }}
        />
      </div>
      <br />
    </>
  );
};

export default Donors;
