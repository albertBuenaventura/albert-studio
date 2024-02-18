import { sendEmail } from "@/email/email";
import InquiryNotification from "@/email/template/InquiryNotification";
import { render } from "@react-email/render";
import fetch from "node-fetch";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;

  const { captcha, email, message, name } = body;

  if (method === "POST") {
    if (!captcha) {
      return res.status(422).json({
        message: "Unproccesable request, please provide the required fields",
      });
    }

    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          },
          method: "POST",
        }
      );
      const captchaValidation = await response.json();
      if (captchaValidation.success) {
        await sendEmail({
          to: JSON.parse(process.env.NEXT_PUBLIC_EMAIL_RECIPIENTS as string),
          subject: "AlbertStudios.dev Inquiry",
          html: render(
            InquiryNotification({
              name,
              message,
              email,
            })
          ),
        });
        return res.status(200).send("OK");
      }

      return res.status(422).json({
        message: "Unproccesable request, Invalid captcha code",
        ...captchaValidation,
      });
    } catch (error) {
      console.error(error);
      return res.status(422).json({ message: "Something went wrong" });
    }
  }
  return res.status(404).send("Not found");
}
