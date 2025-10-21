import type { Metadata } from "next";
import ContactForm from "@/app/components/contact/ContactForm";
import Navbar from "@/app/components/nav/Navbar";

export const metadata: Metadata = {
  title: "Contact | Jacob Mooradian",
  description: "Get in touch with Jacob.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-4 text-neutral-700">
          Want to collaborate or say hi? Use the form below or email me directly.
        </p>
        <ContactForm />
        <p className="mt-8 text-sm text-neutral-600">
          Prefer email?{" "}
          <a className="underline" href="mailto:jacob@example.com">
            jacob@example.com
          </a>
        </p>
      </main>
    </>
  );
}