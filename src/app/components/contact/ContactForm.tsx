// src/app/components/contact/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    const mailto = new URL(`mailto:jacob@example.com`);
    mailto.searchParams.set("subject", `Website contact from ${name}`);
    mailto.searchParams.set("body", `Name: ${name}\nEmail: ${email}\n\n${message}`);

    try {
      window.location.href = mailto.toString();
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-neutral-700">Name</label>
          <input id="name" name="name" required
                 className="mt-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none focus:border-neutral-400"
                 placeholder="Jane Doe" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-neutral-700">Email</label>
          <input id="email" name="email" type="email" required
                 className="mt-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none focus:border-neutral-400"
                 placeholder="jane@email.com" />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-sm font-medium text-neutral-700">Message</label>
        <textarea id="message" name="message" rows={6} required
                  className="mt-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none focus:border-neutral-400"
                  placeholder="What’s up?" />
      </div>

      <div className="flex items-center gap-3">
        <button type="submit" disabled={status === "sending"}
                className="rounded-2xl bg-black px-5 py-3 text-white transition hover:opacity-90 disabled:opacity-50">
          {status === "sending" ? "Sending…" : "Send"}
        </button>
        {status === "sent" && <span className="text-sm text-green-600">Opened your mail app—feel free to send!</span>}
        {status === "error" && <span className="text-sm text-red-600">Couldn’t open mail app. Try again.</span>}
      </div>
    </form>
  );
}