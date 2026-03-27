"use server";

import React from "react";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const { data, error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "nickgutierrezdev@gmail.com",
    subject: "Message from contact form",
    replyTo: senderEmail as string,
    react: React.createElement(ContactFormEmail, {
      message: message,
      senderEmail: senderEmail,
    }),
  });

  if (error) {
    return { error: error.message };
  }

  return { data };
};
