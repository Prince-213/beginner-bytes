import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import { render } from "@react-email/render";

interface PapermarkYearInReviewEmailProps {
  name: string;
  id: string;
}

export function InviteSuccessEmail({
  name,
  id,
}: PapermarkYearInReviewEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your registration to BeginnerBytes is Successful</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto w-full max-w-[600px] p-0">
            <Section className="p-8 text-center">
              <Text className="mx-0 mt-4 mb-8 p-0 text-center font-normal text-2xl">
                Welcome aboard {name}!
              </Text>
              <Text className="mx-0 mt-4 mb-8 p-0 text-center font-normal text-2xl">
                <span className="font-bold tracking-tighter">
                  BeginnerBytes
                </span>
              </Text>
              <Text className="font-normal text-sm uppercase tracking-wider">
                2025
              </Text>
              <Heading className="my-4 font-medium text-4xl leading-tight">
                Your are welcome to BeginnerBytes
              </Heading>
              <Text className="mb-8 text-lg leading-8">
                Unleashing Innovation: Join the Global Gathering of Technology
                Leaders and Visionaries.
              </Text>
              <Link
                href="https://www.beginnerbytes.com.ng"
                className="inline-flex items-center rounded-full bg-gray-900 px-12 py-4 text-center font-bold text-sm text-white no-underline"
              >
                View Event
              </Link>
            </Section>

            <Section className="my-6 rounded-2xl bg-[#fb7a00]/10 bg-[radial-gradient(circle_at_bottom_right,#fb7a00_0%,transparent_60%)] p-8 text-center">
              <Heading className="m-0 font-medium text-3xl text-[#a63b00]">
                TICKET ID
              </Heading>
              <Text className="my-4 font-bold text-7xl text-gray-900 leading-none">
                {id}
              </Text>
            </Section>

            <Text className="my-4 font-bold text-base text-gray-900 leading-none">
              We are excited to have you onboard. Pls come with your ticket
              during the event.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default InviteSuccessEmail;

export const inviteEmailHTML = async ({
  id,
  name,
}: {
  name: string;
  id: string;
}) => await render(<InviteSuccessEmail id={id} name={name} />);
