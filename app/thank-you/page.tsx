import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-6">
      <section className="max-w-2xl rounded-3xl border border-[var(--border)] bg-white p-10 text-center shadow-[0_18px_50px_rgba(30,27,24,0.06)] md:p-14">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
          Message Sent
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--text)]">
          Thank you — I’ll be in touch soon.
        </h1>

        <p className="mt-5 text-lg leading-8 text-[var(--subtext)]">
          I received your message and will get back to you within 1–2 business
          days.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-[var(--accent)] px-7 py-3 font-medium text-white hover:bg-[var(--accent-dark)]"
          >
            Back to Home
          </Link>

          <Link
            href="/#work"
            className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-7 py-3 font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            View Work
          </Link>
        </div>
      </section>
    </main>
  );
}