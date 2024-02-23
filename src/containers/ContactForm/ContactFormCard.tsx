import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { useMedia } from "react-use-media";
import ReCAPTCHA from "react-google-recaptcha";

import { Textarea } from "@/components/Textarea";
import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";
import Title from "@/components/Page/Title";
import Link from "next/link";

export type ContactFormCardProps = {
  onFormSubmit?: () => void;
  subtitle?: string;
  buttonClassName?: string;
  title?: React.ReactNode;
  ctaText?: string;
};

export function ContactFormCard({
  onFormSubmit,
  subtitle,
  title = "Contact us",
  ctaText = "Submit",
  buttonClassName = "",
}: ContactFormCardProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState<React.ReactNode>();
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const isMobile = useMedia({
    maxWidth: 768,
  });

  useEffect(() => {
    if (subtitle) {
      setNotice(
        <span className="flex text-center text-black">{subtitle}</span>
      );
    }
  }, [subtitle]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!captcha) {
        return;
      }

      setSubmitting(true);
      setNotice(undefined);
      submitContactForm(captcha);
    },
    [captcha, name, email, message]
  );

  const submitContactForm = async (captcha: string) => {
    try {
      const response = await fetch(`${process.env.publicBaseUrl}/api/contact`, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
          captcha,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setEmail("");
        setName("");
        setMessage("");

        setNotice(
          <span className="text-orange-400 dark:text-orange-400">
            Submitted.
          </span>
        );

        onFormSubmit?.();
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      setNotice(
        <span className="text-red-500">
          {(error as Error)?.message || "Something went wrong"}
        </span>
      );
    }

    setSubmitting(false);
  };

  return (
    <div className="mt-10 max-w-[700px] m-auto">
      <Title text={title} className="mb-5 text-center" />
      <div className="mb-5 text-black dark:text-white text-center">
        Thank you for taking the time to reach out, I got you. Leave a message
        and I'll get back to you soonest or you may email me at
        <Link
          className="ml-1 text-orange-600 dark:text-oranger-400"
          href={"mailto:albert@albertstudios.dev"}
        >
          albert@albertstudios.dev
        </Link>
        .
      </div>
      {notice && <div className="mb-5">{notice}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-10 h-full">
        <div className="flex md:space-x-5 w-full h-full">
          <div className="flex-col space-y-6 text-black dark:text-white hidden md:flex">
            <span className="h-9 flex items-end">*Name:</span>
            <span className="h-9 flex items-end">*Email:</span>
            <span className="h-9">Message:</span>
          </div>
          <div className="flex flex-col space-y-6 w-full">
            <TextField
              value={name}
              className="w-full"
              placeholder={isMobile ? "*Name" : "John Doe"}
              onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                setName(ev.target.value)
              }
              required
            />
            <TextField
              value={email}
              className="w-full"
              type="email"
              placeholder={isMobile ? "*Email" : "john.doe@example.com"}
              onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                setEmail(ev.target.value)
              }
              required
            />
            <Textarea
              value={message}
              className="w-full h-full max-h-full"
              onChange={(ev: ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(ev.target.value)
              }
              placeholder={isMobile ? "Message" : ""}
            />
          </div>
        </div>
        <ReCAPTCHA
          sitekey={process.env.recaptchaSiteKey as string}
          onChange={(value) => setCaptcha(value)}
        />
        <Button
          type="submit"
          className={`flex justify-center items-center ${buttonClassName}`}
          disabled={submitting || !captcha}
        >
          {submitting ? (
            <FontAwesomeIcon className="w-6 animate-spin" icon={faSpinner} />
          ) : (
            ctaText
          )}{" "}
        </Button>
      </form>
    </div>
  );
}
