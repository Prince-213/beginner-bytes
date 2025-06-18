"use server";

import prisma from "../db/prisma";
import { getBaseUrl } from "../utils";

export async function createAttendee({
  name,
  email,
  phoneNumber,
  occupation,
}: {
  name: string;
  email: string;
  phoneNumber: string;
  occupation: string;
}) {
  try {
    const data = await prisma.attendee.create({
      data: {
        name,
        email,
        phoneNumber,
        occupation,
      },
    });

    try {
      const response = await fetch(`${getBaseUrl()}/api/sendInvite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          id: data.id,
        }),
      });

      if (response.ok) {
        console.log("Email sent successfully!");

        return {
          message: "success",
        };
      } else {
        const errorDetails = await response.json();
        console.error("Error sending email:", errorDetails.message);
        return {
          message: "wrong",
        };
      }
    } catch (error) {
      console.error("There was a problem sending the email:", error);
      return {
        message: "wrong",
      };
    }
  } catch (error) {
    console.log(error);
  }
}

export async function createNewsee({ email }: { email: string }) {
  try {
    await prisma.newsLetter.create({
      data: {
        email: email,
      },
    });

    try {
      const response = await fetch(`${getBaseUrl()}/api/send-news-welcome`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (response.ok) {
        console.log("Email sent successfully!");

        return {
          message: "success",
        };
      } else {
        const errorDetails = await response.json();
        console.error("Error sending email:", errorDetails.message);
        return {
          message: "wrong",
        };
      }
    } catch (error) {
      console.error("There was a problem sending the email:", error);
      return {
        message: "wrong",
      };
    }
  } catch (error) {
    console.log(error);
  }
}
