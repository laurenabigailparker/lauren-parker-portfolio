import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
          Message Sent
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Thank you — I’ll be in touch soon.
        </h1>

        <p className="mt-5 text-lg text-[var(--subtext)]">
          I received your message and will get back to you within 1–2 business days.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-[var(--accent)] px-7 py-3 font-medium text-white hover:bg-[var(--accent-dark)]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}