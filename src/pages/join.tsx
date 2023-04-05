import { Button, Input } from "@/components/Input";
import { Row } from "@/components/Row";
import { Title } from "@/components/Text";
import Head from "next/head";

const Join = () => {
  return (
    <>
      <Head>
        <title>Join</title>
        <meta name="description" content="NRJH Orchestra Booster Club" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Join</Title>
      <p>
        If you&apos;re interested in joining the booster club, please fill out
        this form below!
      </p>
      <Row>
        <Input placeholder="Name" />
        <Input placeholder="Student's Name" />
      </Row>
      <Row>
        <Input placeholder="Email" />
        <Input placeholder="Student's Grade Level" />
      </Row>
      <Row>
        <Input placeholder="Phone Number" />
        <Input placeholder="Student's Instrument" />
      </Row>
      <div style={{ textAlign: "right" }}>
        <Button />
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Join;
