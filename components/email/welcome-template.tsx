import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { render } from "@react-email/render";
import { getBaseUrl as baseUrl } from "@/lib/utils";

export const WelcomeTemplate = () => (
  <Html>
    <Head />
    <Preview>Welcome to our community!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logo}>
          <Img width={120} src={`${baseUrl}/CODAFRI.png`} alt="Company Logo" />
        </Section>

        <Section style={header}>
          <Row>
            <Column style={headerContent}>
              <Heading style={headerContentTitle}>Welcome aboard!</Heading>
              <Text style={headerContentSubtitle}>
                Thanks for subscribing to our newsletter
              </Text>
            </Column>
            <Column style={headerImageContainer}>
              <Img
                style={headerImage}
                width={280}
                src={`${baseUrl}/code.jpg`}
                alt="Welcome illustration"
              />
            </Column>
          </Row>
        </Section>

        <Section style={content}>
          <Heading as="h2" style={title}>
            You&apos;re now part of our community
          </Heading>

          <Text style={paragraph}>
            We&apos;re thrilled to have you with us! Get ready for:
          </Text>

          <ul style={list}>
            <li style={listItem}>
              <Text style={paragraph}>Exclusive content and updates</Text>
            </li>
            <li style={listItem}>
              <Text style={paragraph}>Early access to new features</Text>
            </li>
            <li style={listItem}>
              <Text style={paragraph}>Helpful tips and resources</Text>
            </li>
            <li style={listItem}>
              <Text style={paragraph}>Special offers just for subscribers</Text>
            </li>
          </ul>

          <Hr style={divider} />

          <Section style={buttonContainer}>
            <Link style={button} href="https://beginnerbytes.com.ng">
              Explore Our Content
            </Link>
          </Section>

          <Text style={paragraph}>
            If you ever change your mind, you can unsubscribe at any time using
            the link at the bottom of this email.
          </Text>
        </Section>
      </Container>

      <Section style={footer}>
        <Text style={footerText}>
          {"You're"} receiving this email because you signed up for updates from
          us.
        </Text>

        <Link href="/unsubscribe" style={footerLink}>
          Unsubscribe
        </Link>
        <Link href="/preferences" style={footerLink}>
          Update preferences
        </Link>
        <Link href="/contact" style={footerLink}>
          Contact us
        </Link>
        <Link href="/privacy" style={footerLink}>
          Privacy Policy
        </Link>

        <Hr style={footerDivider} />

        <Img
          width={80}
          src={`${baseUrl}/CODAFRI.png`}
          alt="Small company logo"
        />
        <Text style={footerAddress}>
          <strong>CODAFRI</strong> Enugu State Nigeria
        </Text>
      </Section>
    </Body>
  </Html>
);

export default WelcomeTemplate;

export const welcomEmailHTML = async () => await render(<WelcomeTemplate />);

//  Styles (mostly unchanged from original)
const main = {
  backgroundColor: "#f3f3f5",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const headerContent = { padding: "20px 30px 15px" };

const headerContentTitle = {
  color: "#fff",
  fontSize: "27px",
  fontWeight: "bold",
  lineHeight: "27px",
};

const headerContentSubtitle = {
  color: "#fff",
  fontSize: "17px",
};

const headerImageContainer = {
  padding: "30px 10px",
};

const headerImage = {
  maxWidth: "100%",
};

const title = {
  margin: "0 0 15px",
  fontWeight: "bold",
  fontSize: "21px",
  lineHeight: "21px",
  color: "#0c0d0e",
};

const paragraph = {
  fontSize: "15px",
  lineHeight: "21px",
  color: "#3c3f44",
  margin: "0 0 10px 0",
};

const divider = {
  margin: "30px 0",
};

const container = {
  width: "680px",
  maxWidth: "100%",
  margin: "0 auto",
  backgroundColor: "#ffffff",
};

const footer = {
  width: "680px",
  maxWidth: "100%",
  margin: "32px auto 0 auto",
  padding: "0 30px",
};

const content = {
  padding: "30px 30px 40px 30px",
};

const logo = {
  display: "flex",
  background: "#f3f3f5",
  padding: "20px 30px",
};

const header = {
  borderRadius: "5px 5px 0 0",
  display: "flex",
  flexDireciont: "column",
  backgroundColor: "#2b2d6e",
};
const buttonContainer = {
  margin: "24px 0",
  display: "block",
};

const button = {
  backgroundColor: "#0095ff",
  border: "1px solid #0077cc",
  fontSize: "17px",
  lineHeight: "17px",
  padding: "13px 17px",
  borderRadius: "4px",
  color: "#fff",
  display: "inline-block",
};

const footerDivider = {
  ...divider,
  borderColor: "#d6d8db",
};

const footerText = {
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
  margin: "0",
};

const footerLink = {
  display: "inline-block",
  color: "#9199a1",
  textDecoration: "underline",
  fontSize: "12px",
  marginRight: "10px",
  marginBottom: "0",
  marginTop: "8px",
};

const footerAddress = {
  margin: "4px 0",
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
};

// New styles for list
const list = {
  paddingLeft: "20px",
  margin: "15px 0",
};

const listItem = {
  marginBottom: "10px",
};
