import { emailer } from "@/components/emailer";
import type { NextApiRequest, NextApiResponse } from "next";
import "dotenv";

type Data = {
  data: any;
};

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { body } = req;

  const emailRes = await emailer.sendEmail({
    from: `"${body.name} (Booster Website)" <${process.env.FORM_SENDER_EMAIL}>`,
    to: process.env.FORM_RECEIVER_EMAIL,
    subject: "Request to Join",
    text: `Someone has requested to join the booster club! \nName: ${body.name} \nEmail: ${body.email} \nPhone Number: ${body.phone} \nStudent's Name: ${body.student} \nStudent's Grade: ${body.grade} \nStudent's Instrument: ${body.instrument}`, // plain text body
    html: `<div><h3>Someone has requested to join the booster club!</h3>
    <div><b>Name: </b>${body.name}</div>
    <div><b>Email: </b>${body.email}</div>
    <div><b>Phone Number: </b>${body.phone}</div>
    <div><b>Student's Name: </b>${body.student}</div>
    <div><b>Student's Grade: </b>${body.grade}</div>
    <div><b>Student's Instrument: </b>${body.instrument}</div></div>`,
  });

  res.status(200).json({ data: emailRes });
};

export default handler;
