"use client";

import { toast } from "sonner";
import { useRef, useState } from "react";
import FadeUp from "@/components/motion/FadeUp";
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
      className="bg-[#050816] py-28 md:py-32 text-white"
    >
      <div className="mx-auto max-w-4xl px-8">

        <FadeUp>
          <div className="mb-16 text-center">

            <p className="tracking-[6px] uppercase text-violet-400">
              CONTACT
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Let's Build Something Amazing
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
              Have a project in mind or just want to say hello?
              Feel free to send me a message. I'll reply as soon as possible.
            </p>
          </div>
        </FadeUp>

      <FadeUp delay={0.2}> 
        <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-violet-500/30 sm:p-10"
        >

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-white placeholder:text-white/40 outline-none transition duration-300 focus:border-violet-500 focus:bg-white/10"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-white placeholder:text-white/40 outline-none transition duration-300 focus:border-violet-500 focus:bg-white/10"
            />

            <textarea
              name="message"
              required
              rows={7}
              placeholder="Write your message..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-white placeholder:text-white/40 outline-none transition duration-300 focus:border-violet-500 focus:bg-white/10"
            />
            <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-10 py-4 font-bold transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-50"
            >
            {loading ? "Sending Message..." : "Send Message"}
            </button>
            </div>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}