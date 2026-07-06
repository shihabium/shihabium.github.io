"use client";

import { toast } from "sonner";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        toast.success("Message sent successfully 🚀", {
        description: "Thank you for contacting me. I'll get back to you soon.",
        duration: 4000,
        });
        form.current?.reset();
      })
      .catch(() => {
        toast.error("Message failed ❌", {
        description: "Something went wrong. Please try again.",
        duration: 4000,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#050816] py-32 text-white"
    >
      <div className="mx-auto max-w-5xl px-8">

        <div className="mb-16 text-center">

          <p className="tracking-[6px] uppercase text-violet-400">
            CONTACT
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Let's Work Together
          </h2>

        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 outline-none"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 outline-none"
          />

          <textarea
            name="message"
            required
            rows={7}
            placeholder="Write your message..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-10 py-4 font-bold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </section>
  );
}