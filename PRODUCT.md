# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Prospective parents** are the primary audience. An adult is evaluating a school for a
child, and arrives carrying a high-stakes, low-information decision: they need to judge
whether this specific school is trustworthy and good enough to apply to. They are not
scanning for detail; they are looking for evidence that reassures them, and for the
admissions path to be obvious once they are convinced.

Other audiences have not been confirmed as served by this site. Current enrolled
families, prospective students applying directly, and staff are all plausible
secondary audiences for an international school, but none has been established — see
`## Capabilities and Constraints`.

## Product Purpose

To let prospective parents evaluate this international school and move to a decision:
apply, book a visit, or make an enquiry.

**Open decision — the site has no agreed core job yet.** The user deliberately left
this undecided between the three plausible shapes: win enrollments (persuade and
convert), inform everyone (explain curriculum, admissions, and fees accurately), or
both in that order (attract and reassure, then convert into an application). This is a
first-class open question, not a detail. Site structure must tolerate any of the three
without rework, and no surface should be built that forecloses one.

Success means a prospective parent can reach a confident decision without needing to
call the school to resolve a basic question.

## Positioning

**Unconfirmed.** The school has no agreed differentiating claim, teaching method,
specialism, or competitive position. A neighbouring international school could not be
distinguished from this one on current evidence. This is a material gap: the site's
persuasive force depends on it, and it must come from the school rather than be
inferred. Do not invent a differentiator.

## Operating Context

- The school is the source of all content. Nothing about curriculum, fees, admissions,
  or outcomes is authored by the design or engineering side.
- Real content is confirmed to exist and the user will supply file paths to it during
  the session. Until then, no page should hardcode provisional figures or claims.
- Naming is unsettled: "Academia International School" is a **working title**, not an
  approved public name. Spelling, final name, and the resulting URL are open.
- The site ships English only, so no content pipeline is maintained for translation.

## Capabilities and Constraints

**Confirmed constraints**
- English only. No i18n structure, no locale routing, no translated content variants.
- Photography, program and fee information, and proof points (accreditation, outcomes,
  awards) all exist as real material.
- Existing project: Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + TypeScript.
  The scaffold is otherwise untouched — no CMS, no forms backend, no analytics, no
  auth, and only the default starter page exists at `app/page.tsx`.
- Single site, single language, no user accounts. Every surface is public and
  indexable.

**Explicitly undecided**
- Core job (see `## Product Purpose`) — attract, inform, or convert.
- Final school name and spelling; logo, lockup, and tagline do not exist.
- Positioning / differentiator.
- Whether current families get any served surface here.
- Whether an application or enquiry form is in scope, and what it submits to.
- CMS choice, or whether content is edited in the codebase.

## Brand Commitments

None are binding yet. The name is a working title, there is no confirmed logo, brand
guide, tagline, or existing website to match, and no voice guide has been supplied.
Identity work is therefore open, and nothing in the current scaffold is a brand
reference — the default `create-next-app` page and its Geist/Tailwind/zinc styling are
boilerplate with no commitment attached to them.

## Evidence on Hand

Confirmed to exist, **paths not yet supplied**:
- Real photography — campus, classrooms, staff, students.
- Real programs and fees — curriculum, grade levels, tuition figures, calendar,
  admissions requirements.
- Real proof points — accreditation, rankings, awards, outcomes, enrollment numbers.

**Must not be fabricated:** any figure, quotation, testimonial, student outcome,
accreditation claim, or staff name not present in the supplied material. Placeholders
must read as placeholders.

**Confirmed absent:** no approved marketing copy, no logo or brand assets, no product
photography in the repo (`public/` holds only stock Next.js/Vercel SVGs), no written
voice or tone guide, no case studies or press.

## Product Principles

1. **Evidence over reassurance-language.** Parents are making a high-stakes judgement.
   Real photography, real outcomes, and real fees do the persuading; adjectives do not.
2. **Never invent school facts.** A missing figure is labelled, not estimated. Trust is
   the product, and a fabricated tuition number or outcome destroys it permanently.
3. **Naming is not a decision yet.** Content and structure must survive a name change
   without a rebuild; nothing hardcodes the working title into URLs or copy that would
   have to be unwound.
4. **Parents choose; they do not browse.** Every surface should resolve toward a
   decision (apply, visit, enquire) rather than toward comprehension for its own sake.
5. **Structure for the undecided core job.** Attract-only, inform-only, and
   attract-then-convert surfaces must all remain buildable on what exists today.
