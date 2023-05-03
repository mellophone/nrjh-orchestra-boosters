import { Question } from "@/components/Question";
import { Row } from "@/components/Row";
import { Title } from "@/components/Text";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/FAQ.module.css";

const FAQ = () => {
  return (
    <>
      <Head>
        <title>FAQ</title>
        <meta name="description" content="NRJH Orchestra Booster Club" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>FAQ</Title>
      <p>
        Here are some frequently asked questions to help people understand who
        we are and what we do!
      </p>
      <Row>
        <div style={{ flex: 1 }}>
          <Question question="What is a Booster Club?">
            Longhorn Strings is a non-profit, volunteer, parent-led group who
            are voted into the Booster Board whose sole purpose is to support
            the NRJH Orchestra Program through financial support, volunteer
            support, community awareness, and engagement activities for students
            and families that enrich the orchestra experience.
          </Question>
          <Question question="What does the Booster Club do?">
            Booster Clubs are under the authority of the school district Booster
            By-Laws, the school principal, the UIL Guidelines, the Orchestra
            director(s), and the Booster Board members.
            <br />
            <br />
            Boosters create community awareness, volunteer to assist and help
            the orchestra director(s) in special events, and raise financial
            support to enhance the extracurricular experience for students and
            families.
          </Question>
          <Question question="What does the Booster Club NOT do?">
            Booster Clubs provide financial support for academic use only. They
            do not furnish basic classroom supplies, money, extraneous items
            unrelated to the classroom, or gifts, etc. Boosters only support
            academics and opportunities to engage.
            <br />
            <br />
            Boosters cannot supervise school employees including the orchestra
            director(s). Boosters cannot influence curriculum, methodology, or
            pedagogy in the classroom, grading, orchestra level placement, etc.
            <br />
            <br />
            Boosters cannot cross nor influence classroom boundaries, rules,
            culture, schedules normally set by the teacher and or principal. All
            Booster activities must be approved by the school principal.
          </Question>
          <Question question="What events does the Booster Club help with?">
            Longhorn Booster Club have helped with:
            <br />
            <br />
            - Marek Strings Boot Camp for incoming 6th graders
            <br />
            - Rose Sale Fundraisers
            <br />
            - Poinsettia Sale Fundraisers
            <br />
            - Spirit Nights
            <br />
            - Summer Parties
            <br />
            - Paid for Clinicians and Tutors for UIL/ Solo Contests
            <br />
            - Paid for Pianists
            <br />
            - Paid for Judges
            <br />- Secured Food Sponsorship for UIL/ Judges/ HS Student
            volunteers
          </Question>
          <Question question="What is required of members?">
            Sign up <br />
            Payment of Membership Fee <br />
            Board Meeting Attendance (optional) <br />
            Volunteer Opportunities throughout the school year (optional)
          </Question>
          <Question question="Do I have to join if my student is in the orchestra?">
            No, you do not. However, your help is always appreciated! You are
            even welcome to participate in events without being a member.
          </Question>
          <Question question="I want to help, but don't have any time. What can I do?">
            Becoming a member is a great step. We benefit from your membership
            fees which go directly to support the Orchestra Program. Your
            volunteerism at events is greatly appreciated but not required.
            <br />
            <br />
            Consider making a <Link href="/donate">financial donation</Link>.
            Your donations keep the Booster going. Without them, the orchestra
            would not enjoy all the things we provide the program with.
          </Question>
          <Question question="Does the Booster Club do anything over the summer?">
            No. This is a time for families to reconnect, children to practice
            their beloved instruments, and rest!
            <br />
            <br />
            Please join us for the Beginning of the Year Mixer occurring a week
            before school starts! Date, time, and location announced in summer.
            Watch for our email!
          </Question>
        </div>
        <Image
          alt="logo"
          src="/logo.png"
          width="515"
          height="515"
          className={styles.hideMobile}
          style={{ width: "25vw", height: "25vw" }}
        />
      </Row>
    </>
  );
};

export default FAQ;
