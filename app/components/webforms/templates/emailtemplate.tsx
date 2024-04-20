
interface EmailTemplateProps {
    message: string;
    name: string;
}
import {
  Body,
  Container,
  Column,
  Head,
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

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";
console.log(baseUrl);

export const EmailTemplate = ({message, name}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>You asked, we answered.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Row>
            <Column>
              {/* <Img
                src={`/images/logo.png`}
                width="30"
                height="30"
                alt="Parasol Laboratories Logo"
              /> */}
              <Text style={{ ...paragraph, fontSize: "30px" }}>
                Parasol Laboratories
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={heading}>In response to your inquiry, {name}</Text>
          <Text style={paragraph}>
            {message}
          </Text>
        </Section>
        <Section style={paragraphContent}>
          <Text style={paragraph}>Thank you,</Text>
          <Text style={{ ...paragraph, fontSize: "20px" }}>
            The Parasol Laboratories Team.
          </Text>
        </Section>
        <Section style={{ ...paragraphContent, paddingBottom: 30 }}>
          <Text
            style={{
              ...paragraph,
              fontSize: "12px",
              textAlign: "center",
              margin: 0,
            }}
          >
            © 2023 Parasol Laboratories Incorporated, Biotechnology Research, Kissimmee, Florida
          </Text>    
        </Section>
      </Container>
    </Body>
  </Html>
);
export default EmailTemplate;

const main = {
  backgroundColor: "#dbddde",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const sectionLogo = {
  padding: "0 40px",
};

const headerBlue = {
  marginTop: "-1px",
};

const container = {
  margin: "30px auto",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
};

const containerContact = {
  backgroundColor: "#f0fcff",
  width: "90%",
  borderRadius: "5px",
  overflow: "hidden",
  paddingLeft: "20px",
};

const heading = {
  fontSize: "14px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#004dcf",
};

const paragraphContent = {
  padding: "0 40px",
};

const paragraphList = {
  paddingLeft: 40,
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043",
};

const link = {
  ...paragraph,
  color: "#004dcf",
};

const hr = {
  borderColor: "#e8eaed",
  margin: "20px 0",
};

const footer = {
  maxWidth: "100%",
};