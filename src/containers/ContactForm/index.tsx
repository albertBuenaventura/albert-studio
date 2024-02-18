import React from "react";
import { ContactFormCard, ContactFormCardProps } from "./ContactFormCard";

export type ContactFormProps = ContactFormCardProps;

export function ContactForm({
  onFormSubmit,
  subtitle,
  hideAreaInterestedInField,
  hideMessageField,
  ctaText,
  title,
  hideConsent,
  buttonClassName,
}: ContactFormProps) {
  return (
    <div
      id="contact-form"
      className="flex items-center scroll-mt-[70px] justify-center p-8 mlg:p-16 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500"
    >
      <ContactFormCard
        onFormSubmit={onFormSubmit}
        subtitle={subtitle}
        title={title}
        ctaText={ctaText}
        hideMessageField={hideMessageField}
        hideAreaInterestedInField={hideAreaInterestedInField}
        hideConsent={hideConsent}
        buttonClassName={buttonClassName}
      />
    </div>
  );
}
