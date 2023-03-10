import { BoardMember } from "@/components/BoardMember";
import { Title } from "@/components/Text";
import Head from "next/head";
import styles from "@/styles/about.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="NRJH Orchestra Booster Club" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>About Page</Title>
      <p>Here are out booster club chairs for the 2023 academic year!</p>
      <div
        // style={{
        //   display: "grid",
        //   gap: 20,
        //   gridTemplateColumns: "repeat(4, 1fr [col-start])",
        // }}
        className={styles.boardGrid}
      >
        <BoardMember name="Kristy Key" position="President" />
        <BoardMember name="Alejandra Zavala" position="Vice President" />
        <BoardMember
          name="Marine Hernandez"
          position="Secretary"
          fileName="/Marine.png"
        >
          Music is Marine&apos;s first love! You can always find her listening
          or dancing to it! She is the proud Mama of an 8th grade Violist and an
          incoming 6th grade violinist. As a former marketing and public
          relations professional, Marine can&apos;t stay away from event
          planning. And as a local business owner, fundraising has become part
          of her daily life. This is her third year using her skills to serve as
          board member for the NRJH Orchestra Booster Club and plans to stick
          around for 3 more!
        </BoardMember>
        <BoardMember
          name="Lisa Hasch"
          position="Treasurer"
          fileName="/Lisa.png"
        >
          Lisa Hasch is the proud mom of a violinist. She enjoys giving back to
          the community and supporting the Nolan Ryan Junior High Orchestra is
          one of her favorite ways to serve! As Treasurer for the Longhorn
          Strings Booster Team, Lisa loves music and believes a life well-lived
          includes all forms of art, science, and physical education. Lisa has
          been a business professional for more than 15 years and leverages her
          skills and experience to enhance the orchestra experience any way she
          can. Lisa enjoys serving the Booster Team!
        </BoardMember>
      </div>
    </>
  );
};

export default About;
