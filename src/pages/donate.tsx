import { Row } from "@/components/Row";
import { Title } from "@/components/Text";
import Head from "next/head";
import Image from "next/image";

const Donate = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="NRJH Orchestra Booster Club" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Donate</Title>
      <Row>
        <div style={{ flex: 1 }}>
          <p>
            Interested in partnering with us financially or making a donation?
          </p>
          <p>Please contribute using our PayPal!</p>
          <ol>
            <li>
              Go to the <a href="http://paypal.com/">PayPal</a> website.
            </li>
            <li>Login to your account and click &quot;Send&quot;.</li>
            <li>
              Search <u>longhornstrings77584@gmail.com</u> in the search bar.
            </li>
            <li>Donate any amount of your choosing!</li>
          </ol>
        </div>
        <Row>
          <Image
            alt="Logo"
            src="/Logo.png"
            width="380"
            height="380"
            style={{ width: "20vw", height: "20vw" }}
          />
          <Image
            alt="PayPal Logo"
            src="/PayPal.png"
            width="400"
            height="400"
            style={{ width: "20vw", height: "20vw" }}
          />
        </Row>
      </Row>
    </>
  );
};

export default Donate;
