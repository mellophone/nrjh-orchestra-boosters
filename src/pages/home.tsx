import { Row } from "@/components/Row";
import { Title } from "@/components/Text";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="NRJH Orchestra Booster Club" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Home Page</Title>
      <Row>
        <div>
          <p>
            <b>Our Vision Statement:</b> To support and assist the NRJH
            Orchestra Program with the resources necessary to give every student
            a chance at musical success and excellence. The two Booster Club
            arms that support the orchestra program are financial contributions
            that directly benefit students and volunteer hours from our board
            and members.
          </p>
          <p>
            We believe the Orchestra Program offers a unique opportunity for our
            students including a rich platform for growth in the fine arts and
            performance. It is our goal to strengthen the program by offering a
            foundation of dedicated volunteers and seeking opportunities for
            partnerships within the community that share our vision.
          </p>
        </div>

        <Image
          alt="Image"
          src="/BoardMembers.png"
          width="1218"
          height="656"
          style={{
            height: 400,
            width: 742.682928,
            borderRadius: 10,
          }}
        />
      </Row>
    </>
  );
};

export default Home;
