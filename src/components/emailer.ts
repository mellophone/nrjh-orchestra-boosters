import * as nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";
import "dotenv";

export class Emailer {
  public sendEmail = async (mailOptions: MailOptions) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.FORM_SENDER_EMAIL,
        pass: process.env.FORM_SENDER_APP_PASSWORD,
      },
    });
    const emailRes = await transporter.sendMail(mailOptions);
    return emailRes;
  };
}

export const emailer = new Emailer();
