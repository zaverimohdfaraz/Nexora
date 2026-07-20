import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Nexora Solutions — email, phone, office address, and a contact form to start your project.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <FAQ />
    </>
  );
}
