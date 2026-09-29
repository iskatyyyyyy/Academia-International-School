"use client";

import { useState } from "react";

const FIELD =
  "w-full rounded-xl border border-white/70 bg-white/60 px-4 py-2.5 text-sm text-forest placeholder:text-forest/70 focus:bg-white/80 focus:outline-none focus:ring-2 focus:ring-forest";

type ContactData = {
  name: string;
  email: string;
  department: string;
  subject: string;
  message: string;
};

const EMPTY: ContactData = {
  name: "",
  email: "",
  department: "General Inquiries",
  subject: "",
  message: "",
};

function ArrowIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function ContactForm() {
  const [data, setData] = useState<ContactData>(EMPTY);
  const [sent, setSent] = useState(false);

  const update =
    (name: keyof ContactData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => setData((prev) => ({ ...prev, [name]: e.target.value }));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setData(EMPTY);
  }

  return (
    <div className="rounded-3xl border border-white/50 bg-white/40 p-7 shadow-xl backdrop-blur-md md:p-10">
      {!sent ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-1.5">
              <label
                htmlFor="contact-name"
                className="text-xs font-semibold text-forest"
              >
                Your Full Name *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={data.name}
                onChange={update("name")}
                placeholder="e.g. Sheikha Al-Thani"
                className={FIELD}
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="contact-email"
                className="text-xs font-semibold text-forest"
              >
                Email Address *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={data.email}
                onChange={update("email")}
                placeholder="name@domain.qa"
                className={FIELD}
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="contact-department"
                className="text-xs font-semibold text-forest"
              >
                Department to Reach
              </label>
              <select
                id="contact-department"
                value={data.department}
                onChange={update("department")}
                className={FIELD}
              >
                <option>General Inquiries</option>
                <option>Admissions &amp; Enrollment</option>
                <option>Academic Coordination</option>
                <option>Finance &amp; Tuition</option>
                <option>Book a Campus Tour</option>
              </select>
            </div>
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="contact-subject"
              className="text-xs font-semibold text-forest"
            >
              Subject *
            </label>
            <input
              id="contact-subject"
              type="text"
              required
              value={data.subject}
              onChange={update("subject")}
              placeholder="e.g. Enrollment inquiry for Grade 2 transfer student"
              className={FIELD}
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="contact-message"
              className="text-xs font-semibold text-forest"
            >
              Message / Inquiries *
            </label>
            <textarea
              id="contact-message"
              rows={4}
              required
              value={data.message}
              onChange={update("message")}
              placeholder="Please let us know how we can best assist your family..."
              className={FIELD}
            />
          </div>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-forest/70">
              Your personal information is handled strictly under AIS Qatar data
              protection regulations.
            </p>
            <button
              type="submit"
              className="flex shrink-0 items-center gap-2 self-end rounded-full bg-forest px-8 py-3 text-xs font-semibold text-white shadow-md transition hover:bg-forest-hover"
            >
              <span>Submit Message</span>
              <ArrowIcon />
            </button>
          </div>
        </form>
      ) : (
        <div className="animate-fade-in space-y-3 rounded-2xl border border-forest/15 bg-forest/5 p-8 text-center motion-reduce:animate-none">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white">
            <CheckIcon className="h-6 w-6" />
          </div>
          <h4 className="font-serif text-xl font-bold text-forest">
            Message Dispatched Successfully
          </h4>
          <p className="mx-auto max-w-md text-xs text-forest/70">
            Thank you for reaching out. An administrator will reply to your
            registered email address shortly.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="rounded-full border border-forest/25 px-5 py-2 text-xs font-semibold text-forest transition hover:bg-forest/10"
          >
            Send Another Inquiry
          </button>
        </div>
      )}
    </div>
  );
}
