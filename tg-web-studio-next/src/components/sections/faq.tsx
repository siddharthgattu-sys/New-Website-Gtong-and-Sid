"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "It depends on the size and features you need. After a quick discovery call, we'll put together a clear, upfront quote with no hidden fees — designed to fit a small business budget.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most projects take a few weeks from kickoff to launch, depending on scope and how quickly we receive content and feedback from you.",
  },
  {
    question: "Do you offer support after the site goes live?",
    answer:
      "Yes. We're available for updates, fixes, and small changes after launch — just reach out and we'll take care of it.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can give your current site a modern, faster, mobile-friendly makeover while keeping the content and branding you want to preserve.",
  },
  {
    question: "What if I don't have photos or content ready?",
    answer:
      "No problem. We can help write copy, source placeholder imagery, and guide you on what photos would make the biggest impact.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes — we can split your project into milestone-based payments so costs are manageable as we go.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-24 bg-brand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Questions you might have
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Don&apos;t see your question here? Reach out and we&apos;ll get back to you quickly.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={question}
                className="overflow-hidden rounded-2xl border border-brand-200 bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-heading font-semibold text-ink sm:px-6 sm:py-5"
                >
                  <span>{question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-brand-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                  style={{ display: "grid" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted sm:px-6 sm:pb-6">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
