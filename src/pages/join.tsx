import { Button, Input } from "@/components/Input";
import { Row } from "@/components/Row";
import { Title } from "@/components/Text";
import Head from "next/head";
import styles from "@/styles/join.module.css";
import nodemailer from "nodemailer";
import { emailer } from "@/components/emailer";
import { useState } from "react";
import { DARK_RED } from "@/components/constants";

export type form = {
  name: string;
  student: string;
  email: string;
  grade: string;
  phone: string;
  instrument: string;
};

export type formIndex =
  | "name"
  | "student"
  | "email"
  | "grade"
  | "phone"
  | "instrument";

const Join = () => {
  const formState = useState<form>({} as form);
  const [formInfo, setFormInfo] = formState;
  const [formError, setFormError] = useState<string>("");
  const [submitState, setSubmitState] = useState<string>("ready");

  const sendEmail = async () => {
    let errorFields = [];
    if (!formInfo.name) {
      errorFields.push("Name");
    }
    if (!formInfo.email) {
      errorFields.push("Email");
    }
    if (!formInfo.phone) {
      errorFields.push("Phone Number");
    }
    if (!formInfo.student) {
      errorFields.push("Student's Name");
    }
    if (!formInfo.grade) {
      errorFields.push("Student's Grade Level");
    }
    if (!formInfo.instrument) {
      errorFields.push("Student's Instrument");
    }

    if (errorFields.length > 0) {
      setFormError(`Please enter the following: ${errorFields.join(", ")}`);
      return;
    } else {
      setFormError("");
    }
    setSubmitState("sending");
    const endpoint = "/api/join";
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInfo),
    };

    const response = await fetch(endpoint, options);
    const emailRes = await response.json();
    if (!!String(emailRes.data.rejected)) {
      alert("There was an error submitting this form!");
      setSubmitState("ready");
    }
    setSubmitState("sent");
  };

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
        <div style={{ flexDirection: "column", display: "flex" }}>
          <Input placeholder="Name" formState={formState} formIndex="name" />
          <Input placeholder="Email" formState={formState} formIndex="email" />
          <Input
            placeholder="Phone Number"
            formState={formState}
            formIndex="phone"
          />
        </div>
        <div style={{ flexDirection: "column", display: "flex" }}>
          <Input
            placeholder="Student's Name"
            formState={formState}
            formIndex="student"
          />
          <Input
            placeholder="Student's Grade Level"
            formState={formState}
            formIndex="grade"
          />
          <Input
            placeholder="Student's Instrument"
            formState={formState}
            formIndex="instrument"
            onEnter={sendEmail}
          />
        </div>
      </div>
      <div style={{ color: DARK_RED }}>{formError}</div>
      <div style={{ textAlign: "right" }}>
        <Button onClick={sendEmail} state={submitState} />
      </div>
    </>
  );
};

export default Join;
