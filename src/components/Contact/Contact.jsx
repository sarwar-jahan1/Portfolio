import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";

// Replace with your own EmailJS credentials: https://www.emailjs.com/
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.subject.trim()) next.subject = "Subject is required.";
    if (!form.message.trim()) next.message = "Message can't be empty.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          heading="Let's work together"
          description="Have a role, project, or idea in mind? I'd love to hear about it."
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <p className="text-ink-soft dark:text-ink-soft-dk">
              I'm currently open to full-time roles and freelance work.
              Reach out directly or use the form — I try to respond within a
              couple of days.
            </p>

            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-ink dark:text-ink-dk">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent dark:bg-accent-soft/10 dark:text-accent-soft">
                  <HiOutlineMail />
                </span>
                sarwarjahans2001@gmail.com
              </li>
              <li className="flex items-center gap-3 text-ink dark:text-ink-dk">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent dark:bg-accent-soft/10 dark:text-accent-soft">
                  <HiOutlinePhone />
                </span>
                +880 1318522001
              </li>
              <li className="flex items-center gap-3 text-ink dark:text-ink-dk">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent dark:bg-accent-soft/10 dark:text-accent-soft">
                  <HiOutlineLocationMarker />
                </span>
                Rajshahi, Bangladesh
              </li>
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 rounded-2xl bg-surface-alt p-6 dark:bg-surface-alt-dk"
          >
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink dark:text-ink-dk">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-ink/10 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-accent dark:border-white/10 dark:bg-surface-dk dark:text-ink-dk"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink dark:text-ink-dk">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-ink/10 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-accent dark:border-white/10 dark:bg-surface-dk dark:text-ink-dk"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="subject" className="mb-1 block text-sm font-medium text-ink dark:text-ink-dk">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-ink/10 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-accent dark:border-white/10 dark:bg-surface-dk dark:text-ink-dk"
                aria-invalid={Boolean(errors.subject)}
              />
              {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink dark:text-ink-dk">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-ink/10 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-accent dark:border-white/10 dark:bg-surface-dk dark:text-ink-dk"
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            <Button type="submit" variant="primary" className="mt-2 w-full" disabled={status === "loading"}>
              {status === "loading" ? "Sending…" : "Send Message"}
            </Button>

            {status === "success" && (
              <p className="text-sm text-green-600 dark:text-green-400">
                Thanks — your message has been sent. I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong sending your message. Please try again or email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
