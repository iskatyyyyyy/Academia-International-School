"use client";

import Image from "next/image";
import { useState } from "react";
import { UNSPLASH } from "../lib/unsplash";

const FIELD =
  "w-full rounded-xl border border-white/70 bg-white/60 px-4 py-2.5 text-sm text-forest placeholder:text-forest/70 focus:bg-white/80 focus:outline-none focus:ring-2 focus:ring-forest";

const STEPS = [
  { number: 1, label: "Parent Info" },
  { number: 2, label: "Student Details" },
  { number: 3, label: "Previous Records" },
] as const;

type FormData = {
  parentName: string;
  email: string;
  phone: string;
  relationship: string;
  studentName: string;
  dob: string;
  gradeApplying: string;
  qatarId: string;
  previousSchool: string;
  medicalNotes: string;
};

const EMPTY: FormData = {
  parentName: "",
  email: "",
  phone: "",
  relationship: "Father",
  studentName: "",
  dob: "",
  gradeApplying: "Kindergarten 1 (KG1)",
  qatarId: "",
  previousSchool: "",
  medicalNotes: "",
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

export function AdmissionsForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(EMPTY);
  const [reference, setReference] = useState("");

  const update =
    (name: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setData((prev) => ({ ...prev, [name]: e.target.value }));

  const submitted = reference !== "";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step < STEPS.length) {
      setStep(step + 1);
      return;
    }
    // Minted once on submit. The export called Math.random() during render, so
    // its reference number changed on every re-render.
    setReference(`#AIS-2025-${Math.floor(1000 + Math.random() * 9000)}`);
  }

  function reset() {
    setReference("");
    setStep(1);
    setData(EMPTY);
  }

  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
      <div className="space-y-8 rounded-3xl border border-white/50 bg-white/40 p-8 shadow-xl backdrop-blur-md lg:col-span-8 md:p-12">
        <ol className="flex items-center justify-between border-b border-forest/10 pb-8">
          {STEPS.map((s) => {
            const isCompleted = step > s.number;
            const isCurrent = step === s.number;
            return (
              <li
                key={s.number}
                className="relative flex flex-1 flex-col items-center"
              >
                <button
                  type="button"
                  onClick={() => !submitted && setStep(s.number)}
                  disabled={submitted}
                  aria-current={isCurrent ? "step" : undefined}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all ${
                    isCurrent
                      ? "bg-forest text-white shadow-md ring-4 ring-forest/15"
                      : isCompleted
                        ? "bg-forest/10 text-forest"
                        : "border border-white/60 bg-white/50 text-forest/70"
                  }`}
                >
                  {isCompleted ? <CheckIcon className="h-4 w-4" /> : s.number}
                  <span className="sr-only">
                    Step {s.number}: {s.label}
                  </span>
                </button>
                <span
                  className={`mt-2 text-xs font-semibold ${
                    isCurrent ? "text-forest" : "text-forest/70"
                  }`}
                >
                  {s.label}
                </span>
              </li>
            );
          })}
        </ol>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="animate-fade-in space-y-5 motion-reduce:animate-none">
                <div className="border-b border-forest/10 pb-3">
                  <h3 className="font-serif text-xl font-bold text-forest">
                    Step 1: Guardian &amp; Parent Information
                  </h3>
                  <p className="text-xs text-forest/70">
                    Provide official contact details for admissions
                    correspondence.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="adm-parentName"
                      className="text-xs font-semibold text-forest"
                    >
                      Guardian Full Name *
                    </label>
                    <input
                      id="adm-parentName"
                      type="text"
                      required
                      value={data.parentName}
                      onChange={update("parentName")}
                      placeholder="e.g. Nasser Al-Kuwari"
                      className={FIELD}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="adm-email"
                      className="text-xs font-semibold text-forest"
                    >
                      Email Address *
                    </label>
                    <input
                      id="adm-email"
                      type="email"
                      required
                      value={data.email}
                      onChange={update("email")}
                      placeholder="parent@example.com"
                      className={FIELD}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="adm-phone"
                      className="text-xs font-semibold text-forest"
                    >
                      Qatar Mobile Phone *
                    </label>
                    <input
                      id="adm-phone"
                      type="tel"
                      required
                      value={data.phone}
                      onChange={update("phone")}
                      placeholder="+974 5500 0000"
                      className={FIELD}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="adm-relationship"
                      className="text-xs font-semibold text-forest"
                    >
                      Relationship to Student
                    </label>
                    <select
                      id="adm-relationship"
                      value={data.relationship}
                      onChange={update("relationship")}
                      className={FIELD}
                    >
                      <option>Father</option>
                      <option>Mother</option>
                      <option>Legal Guardian</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in space-y-5 motion-reduce:animate-none">
                <div className="border-b border-forest/10 pb-3">
                  <h3 className="font-serif text-xl font-bold text-forest">
                    Step 2: Prospective Student Details
                  </h3>
                  <p className="text-xs text-forest/70">
                    Provide official identity and entry grade details.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="adm-studentName"
                      className="text-xs font-semibold text-forest"
                    >
                      Student First &amp; Last Name *
                    </label>
                    <input
                      id="adm-studentName"
                      type="text"
                      required
                      value={data.studentName}
                      onChange={update("studentName")}
                      placeholder="e.g. Layla Al-Kuwari"
                      className={FIELD}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="adm-dob"
                      className="text-xs font-semibold text-forest"
                    >
                      Date of Birth *
                    </label>
                    <input
                      id="adm-dob"
                      type="date"
                      required
                      value={data.dob}
                      onChange={update("dob")}
                      className={FIELD}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="adm-grade"
                      className="text-xs font-semibold text-forest"
                    >
                      Target Grade Level *
                    </label>
                    <select
                      id="adm-grade"
                      value={data.gradeApplying}
                      onChange={update("gradeApplying")}
                      className={FIELD}
                    >
                      <option>Kindergarten 1 (KG1)</option>
                      <option>Kindergarten 2 (KG2)</option>
                      <option>Grade 1</option>
                      <option>Grade 2</option>
                      <option>Grade 3</option>
                      <option>Grade 4</option>
                      <option>Grade 5</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="adm-qatarId"
                      className="text-xs font-semibold text-forest"
                    >
                      Qatar ID (QID) Number
                    </label>
                    <input
                      id="adm-qatarId"
                      type="text"
                      value={data.qatarId}
                      onChange={update("qatarId")}
                      placeholder="11-digit QID"
                      className={FIELD}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in space-y-5 motion-reduce:animate-none">
                <div className="border-b border-forest/10 pb-3">
                  <h3 className="font-serif text-xl font-bold text-forest">
                    Step 3: Previous Scholastic Records &amp; Medical Notes
                  </h3>
                  <p className="text-xs text-forest/70">
                    Attach prior nursery/school information and medical support
                    notes.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="adm-previousSchool"
                    className="text-xs font-semibold text-forest"
                  >
                    Current or Previous School / Nursery Name
                  </label>
                  <input
                    id="adm-previousSchool"
                    type="text"
                    value={data.previousSchool}
                    onChange={update("previousSchool")}
                    placeholder="e.g. Doha Montessori or N/A for KG1"
                    className={FIELD}
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="adm-medicalNotes"
                    className="text-xs font-semibold text-forest"
                  >
                    Special Educational Needs, Allergies, or Dietary Notes
                  </label>
                  <textarea
                    id="adm-medicalNotes"
                    rows={3}
                    value={data.medicalNotes}
                    onChange={update("medicalNotes")}
                    placeholder="Please note any allergies (e.g., peanuts), asthma, or specific learning accommodations required."
                    className={FIELD}
                  />
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/40 p-4">
                  <input
                    type="checkbox"
                    required
                    id="adm-consent"
                    className="mt-1 accent-forest"
                  />
                  <label
                    htmlFor="adm-consent"
                    className="text-xs leading-normal text-forest/70"
                  >
                    I certify that all details submitted are truthful. I
                    understand that an application fee of QAR 500 will be
                    collected during the in-person assessment.
                  </label>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between border-t border-forest/10 pt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="rounded-full border border-forest/25 px-6 py-2.5 text-xs font-semibold text-forest transition hover:bg-forest/10"
                >
                  Back
                </button>
              ) : (
                <div />
              )}
              <button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-forest px-8 py-3 text-xs font-semibold text-white shadow-md transition hover:bg-forest-hover"
              >
                <span>
                  {step === STEPS.length
                    ? "Submit Application"
                    : "Proceed to Next Step"}
                </span>
                <ArrowIcon />
              </button>
            </div>
          </form>
        ) : (
          <div className="animate-fade-in space-y-5 py-10 text-center motion-reduce:animate-none">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-forest">
              <CheckIcon className="h-7 w-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-forest">
              Application Received!
            </h3>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-forest/70">
              Thank you,{" "}
              <span className="font-semibold">{data.parentName}</span>. We have
              created application file{" "}
              <span className="font-bold text-forest">{reference}</span> for{" "}
              <span className="font-semibold">{data.studentName}</span>.
            </p>
            <p className="text-xs text-forest/70">
              Our admissions team will review your submission and contact you
              within 2 working days.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={reset}
                className="rounded-full border border-forest/25 px-6 py-2 text-xs font-semibold text-forest transition hover:bg-forest/10"
              >
                Submit Another Child Application
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="sticky top-28 space-y-6 lg:col-span-4">
        <div className="space-y-6 rounded-3xl border border-white/50 bg-white/40 p-7 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0">
              <Image
                src={UNSPLASH.advisor}
                alt="Fatima Al-Sulaiti, Admissions Counselor"
                fill
                sizes="64px"
                className="rounded-full border-2 border-white object-cover"
              />
              <span
                title="Online Now"
                className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-emerald-500"
              />
            </div>
            <div>
              <span className="rounded-full border border-forest/15 bg-white/50 px-2 py-0.5 text-[10px] font-bold tracking-wider text-forest uppercase">
                Admissions Lead
              </span>
              <h4 className="mt-1 font-serif text-lg font-bold text-forest">
                Fatima Al-Sulaiti
              </h4>
              <p className="text-xs text-forest/70">
                Primary Admissions Counselor
              </p>
            </div>
          </div>
          <p className="rounded-2xl border border-white/60 bg-white/40 p-3.5 text-xs leading-relaxed text-forest/70 italic">
            Choosing your child&apos;s primary school is a deeply personal
            journey. I&apos;m here to answer any questions regarding class
            availability, sibling discounts, and student readiness.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=97430603366&text=Hello%20Academia%20International%20School%2C%20I%20would%20like%20to%20inquire%20about%20Grade%20School%20Admissions"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-forest px-4 py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-forest-hover"
          >
            <svg
              className="h-4 w-4 fill-emerald-400 transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z" />
            </svg>
            <span>WhatsApp Fast-Help Desk</span>
          </a>
          <dl className="space-y-2 border-t border-forest/10 pt-4 text-xs text-forest/70">
            <div className="flex items-center justify-between">
              <dt className="text-forest/70">Direct Office Line:</dt>
              <dd className="font-semibold text-forest">+974 3060 3366</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-forest/70">Working Hours:</dt>
              <dd className="font-semibold text-forest">
                Sun - Thu: 7:30 AM - 2:30 PM
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-forest/70">Campus Tours:</dt>
              <dd className="font-semibold text-forest">
                Tuesdays 9:00 AM
              </dd>
            </div>
          </dl>
        </div>

        <div className="space-y-3 rounded-3xl border border-white/50 bg-white/40 p-6 shadow-xl backdrop-blur-md">
          <h5 className="font-serif text-base font-bold text-forest">
            Tuition Breakdown (Annual)
          </h5>
          <dl className="space-y-2 text-xs">
            <div className="flex justify-between border-b border-forest/10 py-1">
              <dt className="text-forest/70">Kindergarten (KG 1 - 2)</dt>
              <dd className="font-bold text-forest">QAR 34,500</dd>
            </div>
            <div className="flex justify-between border-b border-forest/10 py-1">
              <dt className="text-forest/70">Lower Primary (Grades 1 - 3)</dt>
              <dd className="font-bold text-forest">QAR 39,200</dd>
            </div>
            <div className="flex justify-between py-1">
              <dt className="text-forest/70">Upper Primary (Grades 4 - 5)</dt>
              <dd className="font-bold text-forest">QAR 43,000</dd>
            </div>
          </dl>
          <p className="text-[11px] text-forest/70 italic">
            *Payable across 3 school terms. Approved by Qatar Ministry of
            Education.
          </p>
        </div>
      </div>
    </div>
  );
}
