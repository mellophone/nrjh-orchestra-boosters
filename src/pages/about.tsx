import { BoardMember, BoardMemberExtended } from "@/components/BoardMember";
import { Title } from "@/components/Text";
import Head from "next/head";
import styles from "@/styles/about.module.css";
import { Row } from "@/components/Row";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="NRJH Orchestra Booster Club" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>About Us</Title>
      <p>
        Here are our booster club chairs! You can contact us at{" "}
        <a href="mailto:longhornstrings@gmail.com">
          longhornstrings77584@gmail.com
        </a>
      </p>
      {/* <div className={styles.boardGrid} style={{ display: "none" }}>
        <BoardMember
          name="Kristy Key"
          position="President"
          fileName="/Kristy.png"
        >
          Kristy Key is an Art teacher and a fan of all good music. She spends
          her time transporting her favorite cello player (Lena Wills, 6th,
          Sinfonietta) to and from various activities between cello, piano,
          cheer, and lots of church activities. A resident of League City, her
          daughter is a transfer student for the NRJH Orchestra Program and
          fully dedicated to the success of this excellent program.
        </BoardMember>
        <BoardMember name="Alejandra Zavala" position="Vice President" />
        <BoardMember
          name="Marine David"
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
      </div> */}

      <div className={styles.boardGrid}>
        <BoardMemberExtended
          name="Kristy Key"
          position="President"
          fileName="/Kristy.png"
        >
          Kristy Key is an Art teacher and a fan of all good music. She spends
          her time transporting her favorite cello player (Lena Wills, 6th,
          Sinfonietta) to and from various activities between cello, piano,
          cheer, and lots of church activities. A resident of League City, her
          daughter is a transfer student for the NRJH Orchestra Program and
          fully dedicated to the success of this excellent program.
        </BoardMemberExtended>
        <BoardMemberExtended
          name="Alejandra Zavala"
          position="Vice President"
        />
        <BoardMemberExtended
          name="Marine David"
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
        </BoardMemberExtended>
        <BoardMemberExtended
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
        </BoardMemberExtended>
      </div>
    </>
  );
};

export default About;
