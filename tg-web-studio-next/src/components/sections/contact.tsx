"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Mail, Clock } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const newErrors: Record<string, boolean> = {};

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name) newErrors.name = true;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = true;
    if (!message) newErrors.message = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("sending");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fieldClass = (hasError?: boolean) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400 ${
      hasError ? "border-red-400" : "border-brand-200"
    }`;

  return (
    <section id="contact" className="scroll-mt-24 bg-navy-900 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="eyebrow-light">Let&apos;s work together</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Request a quote or schedule a free discovery call
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-100/70 sm:text-lg">
            Tell us a bit about your business and what you&apos;re looking for. We&apos;ll reply
            within 1–2 business days to set up a free discovery call.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-brand-100/80">
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-brand-400" />
              <span>hello@tgwebstudio.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-brand-400" />
              <span>Replies within 1–2 business days</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-brand-500" />
              <h3 className="mt-4 font-heading text-xl font-bold text-ink">
                Thanks — your message is in!
              </h3>
              <p className="mt-2 text-sm text-ink-muted">
                We&apos;ll get back to you within 1–2 business days to schedule your free
                discovery call.
              </p>
            </div>
          ) : (
            <form
              ref={formRef}
              action="https://formspree.io/f/xgobpqzr"
              method="POST"
              noValidate
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {status === "error" && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  Something went wrong sending your message. Please try again or email us
                  directly at{" "}
                  <a href="mailto:hello@tgwebstudio.com" className="font-semibold underline">
                    hello@tgwebstudio.com
                  </a>
                  .
                </p>
              )}

              <input type="hidden" name="_subject" value="New inquiry from TG Web Studio website" />
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
                    Name
                  </label>
                  <input id="name" name="name" type="text" autoComplete="name" className={fieldClass(errors.name)} />
                  {errors.name && (
                    <span className="mt-1 block text-xs text-red-600">Please enter your name.</span>
                  )}
                </div>
                <div>
                  <label htmlFor="business" className="mb-1.5 block text-sm font-semibold text-ink">
                    Business name
                  </label>
                  <input id="business" name="business" type="text" autoComplete="organization" className={fieldClass()} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
                    Email
                  </label>
                  <input id="email" name="email" type="email" autoComplete="email" className={fieldClass(errors.email)} />
                  {errors.email && (
                    <span className="mt-1 block text-xs text-red-600">Please enter a valid email address.</span>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink">
                    Phone (optional)
                  </label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass()} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="businessType" className="mb-1.5 block text-sm font-semibold text-ink">
                    Business type
                  </label>
                  <select id="businessType" name="businessType" className={fieldClass()}>
                    <option value="">Select one</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="contractor">Contractor</option>
                    <option value="dental">Dental practice</option>
                    <option value="realestate">Real estate</option>
                    <option value="startup">Startup</option>
                    <option value="other">Small business / Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="requestType" className="mb-1.5 block text-sm font-semibold text-ink">
                    I&apos;m interested in
                  </label>
                  <select id="requestType" name="requestType" defaultValue="quote" className={fieldClass()}>
                    <option value="quote">Requesting a quote</option>
                    <option value="discovery">Scheduling a discovery call</option>
                    <option value="both">Both</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="What kind of website are you looking for? New site, redesign, etc."
                  className={fieldClass(errors.message)}
                />
                {errors.message && (
                  <span className="mt-1 block text-xs text-red-600">
                    Please tell us a little about your project.
                  </span>
                )}
              </div>

              <button type="submit" disabled={status === "sending"} className="btn-cta w-full !py-4 disabled:opacity-60">
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
