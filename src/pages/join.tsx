import { Button, Input } from "@/components/Input";
import { Row } from "@/components/Row";
import { Title } from "@/components/Text";
import Head from "next/head";
import styles from "@/styles/join.module.css";

const Join = () => {
  return (
    <>
      <Head>
        <title>Join</title>
        <meta name="description" content="NRJH Orchestra Booster Club" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Join The Club</Title>
      <p>
        If you&apos;re interested in joining the booster club, please fill out
        this form below!
      </p>
      <div className={styles.grid}>
        <Input placeholder="Name" />
        <Input placeholder="Student's Name" />
        <Input placeholder="Email" />
        <Input placeholder="Student's Grade Level" />
        <Input placeholder="Phone Number" />
        <Input placeholder="Student's Instrument" />
      </div>
      <div style={{ textAlign: "right" }}>
        <Button />
      </div>
      <br />
      <br />
      <br />

      <div style={{ height: "90px" }} className={styles.showMobile} />
    </>
  );
};

export default Join;
