"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CertModal from "@/components/CertModal";
import { useRouter } from "next/navigation";

const projects = [
  {
    title: "Lauren Parker Studios",
    type: "Personal Brand / Freelance",
    description:
      "Personal brand site built to present freelance work, services, and development style in one polished place.",
    tech: ["Next.js", "React", "Tailwind", "Vercel"],
    image: "/studios.jpg",
    live: "https://laurenparkerstudio.com",
    caseStudy: {
      problem:
        "I needed a polished home for my freelance work that felt professional, personal, and easy to send to clients.",
      solution:
        "I built a responsive brand site with structured sections, service positioning, and project showcases.",
      result:
        "Designed and built over ~1 week with 5+ structured sections, fully responsive layout, and a single shareable link for client outreach.",
    },
  },

  {
    title: "Gateway Rock Design",
    type: "Client Website / Case Study",
    description:
      "Luxury interior design website built to clearly present services and convert interest into client inquiries.",
    tech: ["Next.js", "React", "Tailwind", "Vercel"],
    image: "/gatewaypic.jpg",
    live: "https://gateway-rock-design.vercel.app/",
    caseStudy: {
      problem:
        "The client needed a high-end website that made their services feel clear, structured, and easy to understand.",
      solution:
        "I developed a responsive site with a refined layout, service-focused sections, and a streamlined inquiry flow.",
      result:
        "Built and deployed in ~2–3 weeks with fully responsive pages, improved service clarity, and a structure designed to support client conversion.",
    },
  },

  {
    title: "Golden Life Adult Care",
    type: "Client Website / Case Study",
    description:
      "Warm, service-focused website built to communicate trust, care, and client engagement.",
    tech: ["React", "Tailwind", "Vercel"],
    image: "/goldenlifepic.jpg",
    live: "https://golden-life-adult-care.vercel.app/",
    caseStudy: {
      problem:
        "The client needed a warm, trustworthy website that explained care services without feeling cold or clinical.",
      solution:
        "I created a welcoming layout with clear navigation, structured service sections, and responsive design.",
      result:
        "Completed in ~2 weeks with a multi-section responsive layout focused on clarity, usability, and improved service communication.",
    },
  },

  {
    title: "PMP Inc",
    type: "Client Website / Case Study",
    description:
      "Modern business website focused on structured services, responsive pages, and clear user flow.",
    tech: ["Next.js", "React", "Tailwind", "Vercel"],
    image: "/pmpincpic.jpg",
    live: "https://pmpincprofessionals.com/en",
    github: "https://github.com/laurenabigailparker/pmp-inc-website",
    caseStudy: {
      problem:
        "The business needed a more organized website that clearly presented services and improved navigation.",
      solution:
        "I built a structured layout with responsive pages, service sections, and form handling for inquiries.",
      result:
        "Currently finalizing a multi-page build (~2–3 week development timeline) focused on improving usability, structure, and client communication.",
    },
  },

  {
    title: "Smart Budget Planner",
    type: "Full Stack Application / Case Study",
    description:
      "Interactive budgeting application designed to handle user input, calculations, and real-time updates.",
    tech: ["React", "Next.js", "State Management", "Application Logic"],
    image: "/budgetpic.jpg",
    live: "https://expense-tracker-5e2rdqtwg-laurenabigailparkers-projects.vercel.app/",
    github: "https://github.com/laurenabigailparker/expense-tracker",
    caseStudy: {
      problem:
        "I wanted to build something that demonstrated real functionality beyond static design.",
      solution:
        "I developed a budgeting app with dynamic inputs, categorized expenses, and real-time calculations using state management.",
      result:
        "Built over ~1–2 weeks, demonstrating dynamic state management, real-time calculations, and interactive user input handling.",
    },
  },
];

const skillGroups = [
  {
    title: "Client Websites",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Application Logic",
    skills: [
      "API Routes",
      "Form Handling",
      "State Management",
      "Data Handling",
      "Application Logic",
      "SQL",
    ],
  },
  {
    title: "Delivery & Deployment",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Domain Setup",
      "Deployment",
      "Client Handoff",
    ],
  },
];

const certifications = [
  {
    title: "JavaScript Professional Developer — COITB",
    image: "/javascriptcert.jpg",
  },
  {
    title: "React.js Framework Developer — COITB",
    image: "/reactcert.jpg",
  },
  {
    title: "HTML/CSS Web Designer — COITB",
    image: "/htmlcsscert.jpg",
  },
  {
    title: "SQL Developer — COITB",
    image: null,
  },
];

export default function Home() {
  const [openCert, setOpenCert] = useState<{
    title: string;
    image: string | null;
  } | null>(null);

  const router = useRouter();

  // 🌙 DARK MODE STATE
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);

    if (nextMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // 📩 FORM SUBMIT
  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    await fetch("https://formspree.io/f/mwvabobn", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    router.push("/thank-you");
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <nav className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <a
            href="#"
            className="text-xs font-semibold tracking-[0.35em] text-[var(--accent)]"
          >
            LAUREN PARKER
          </a>

          <div className="flex gap-5 text-sm text-[var(--subtext)] md:gap-8">
            <a href="#work" className="hover:text-[var(--accent)]">
              Work
            </a>
            <a href="#about" className="hover:text-[var(--accent)]">
              About
            </a>
            <a href="#skills" className="hover:text-[var(--accent)]">
              Skills
            </a>
            <a href="#contact" className="hover:text-[var(--accent)]">
              Contact
            </a>
            <a
              href="https://github.com/laurenabigailparker"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--accent)]"
            >
              GitHub
            </a>
            <a
  href="https://www.linkedin.com/in/lauren-parker-9a7a10381"
  target="_blank"
  rel="noreferrer"
  className="hover:text-[var(--accent)]"
>
  LinkedIn
</a>

<button
  onClick={toggleTheme}
  className="rounded-full border border-[var(--border)] px-4 py-1 text-sm hover:border-[var(--accent)] hover:text-[var(--accent)]"
>
  {darkMode ? "Light" : "Dark"}
</button>
          </div>
        </div>
      </nav>

    <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 md:px-12">
  <div className="grid w-full items-center gap-12 md:grid-cols-2">

    {/* LEFT SIDE (TEXT) */}
    <div>
      <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
        Full Stack Developer
      </p>

      <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
        I design and build modern websites that are structured, functional, and built for real clients.
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--subtext)]">
        From clean UI to real-world functionality, I create responsive applications that don’t just look good — they work the way they should.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="#work"
          className="rounded-full bg-[var(--accent)] px-7 py-3 font-medium text-white hover:bg-[var(--accent-dark)]"
        >
          View Work
        </a>

        <a
          href="#contact"
          className="rounded-full border border-[var(--border)] bg-white/70 px-7 py-3 font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Contact Me
        </a>
      </div>

      <p className="mt-5 text-sm text-[var(--subtext)]">
        Built and deployed multiple client websites • Available for new projects
      </p>
    </div>

   
    <div className="relative h-[400px] w-full overflow-hidden rounded-3xl md:h-[520px]">
      <img
        src="/me.jpg"
        alt="Lauren Parker"
        className="h-full w-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
    </div>

  </div> 
</section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
            Selected Work
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            Client work + portfolio projects
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--subtext)]">
            Each project includes the problem, solution, and result so you can
            see how I think through design, development, and real-world
            functionality.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-[0_18px_50px_rgba(30,27,24,0.08)]"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                  {project.type}
                </p>

                <h3 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--subtext)]">
                  {project.description}
                </p>

                <div className="mt-5 space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 text-sm leading-6 text-[var(--subtext)]">
                  <p>
                    <span className="font-semibold text-[var(--text)]">
                      Problem:
                    </span>{" "}
                    {project.caseStudy.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text)]">
                      Solution:
                    </span>{" "}
                    {project.caseStudy.solution}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text)]">
                      Result:
                    </span>{" "}
                    {project.caseStudy.result}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs text-[var(--text)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]"
                  >
                    View Project →
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-[var(--subtext)] hover:text-[var(--accent)]"
                    >
                      Code →
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="border-y border-[var(--border)] bg-[var(--section)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-12">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="flex justify-center md:justify-start">
              <div className="relative h-[360px] w-[300px] overflow-hidden rounded-3xl border border-[var(--border)] shadow-[0_30px_80px_rgba(30,27,24,0.12)]">
                <Image
                  src="/herosec.jpg"
                  alt="Lauren Parker"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
                About Me
              </p>

              <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight">
                I build clean, functional experiences that actually work.
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-[var(--subtext)]">
                <p>
                 I’m a Full Stack Developer with a background in military logistics, bringing structure, problem-solving, and attention to detail into every build.
                </p>

                <p>
                 I’ve worked on real client websites and applications, focusing on creating experiences that are clear, functional, and easy for users to navigate. I care about how things look, but more importantly, how they work.
                </p>

                <p>
                 I’m comfortable working across both frontend and backend concepts — from building responsive interfaces to handling form logic, API routes, and deployment. My goal is always the same: build something that functions reliably and makes sense to the user.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
  <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
    Process
  </p>

  <h2 className="mt-3 text-4xl font-semibold tracking-tight">
    How I think through projects.
  </h2>

  <p className="mt-5 max-w-2xl text-lg text-[var(--subtext)]">
    I focus on building structured, functional experiences that actually solve problems — not just designs that look good. With a background in logistics and operations, I naturally think in systems, clarity, and efficiency.
  </p>

  <div className="mt-10 grid gap-6 md:grid-cols-3">
    <div className="rounded-2xl border p-6">
      <h3 className="font-semibold">1. Understand</h3>
      <p className="mt-2 text-sm text-[var(--subtext)]">
       I start by understanding the client’s goals, users, and what the site actually needs to accomplish — not just what it should look like.
      </p>
    </div>

    <div className="rounded-2xl border p-6">
      <h3 className="font-semibold">2. Build</h3>
      <p className="mt-2 text-sm text-[var(--subtext)]">
       I develop clean, responsive interfaces with structured layouts, clear user flow, and real functionality — not just static pages.
      </p>
    </div>

    <div className="rounded-2xl border p-6">
      <h3 className="font-semibold">3. Refine</h3>
      <p className="mt-2 text-sm text-[var(--subtext)]">
       I test, improve usability, and refine the experience to ensure everything is intuitive, performs well, and supports real-world use.
      </p>
    </div>
  </div>
</section>

<section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
  <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
    Testimonial
  </p>

  <h2 className="mt-3 text-4xl font-semibold tracking-tight">
    What it’s like to work with me.
  </h2>

  <div className="mt-10 rounded-3xl border border-[var(--border)] bg-white p-10 shadow-[0_18px_50px_rgba(30,27,24,0.06)]">
    <p className="text-lg leading-8 text-[var(--text)]">
      “Lauren made the entire process easy to understand and delivered a site that actually represents our business. The structure, design, and overall flow feel professional and intentional.”
    </p>

    <p className="mt-6 text-sm text-[var(--subtext)]">
      — D. Patterson, Founder of PMP Inc.
    </p>
  </div>
</section>

      <section
  id="skills"
  className="mx-auto max-w-7xl px-6 py-24 md:px-12"
>
  <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
    Skills
  </p>

  <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight">
    How I build real projects.
  </h2>

  <p className="mt-4 max-w-2xl text-[var(--subtext)]">
    These are the tools and systems I use to build real client projects — from responsive interfaces to application logic, deployment, and client delivery.
  </p>

  <div className="mt-12 grid gap-6 md:grid-cols-3">
    {skillGroups.map((group) => (
      <div
        key={group.title}
        className="rounded-3xl border border-[var(--border)] bg-white/70 p-6 shadow-[0_12px_35px_rgba(30,27,24,0.05)] transition hover:-translate-y-1"
      >
        <h3 className="mb-5 text-lg font-semibold text-[var(--text)]">
          {group.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-sm text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-[0_18px_50px_rgba(30,27,24,0.06)]">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
            Certifications
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Certifications & Technical Training.
          </h2>

          <p className="mt-3 max-w-2xl text-sm text-[var(--subtext)]">
            Certifications earned through COITB. Click available certificates to
            preview.
          </p>

 <div className="mt-8 grid gap-4 md:grid-cols-2">
  {certifications.map((cert) => (
    <div
      key={cert.title}
      className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 text-[var(--subtext)]"
    >
      <div className="flex items-center justify-between gap-4">
        <span>{cert.title}</span>

        {cert.image ? (
         <button
  type="button"
  onClick={() => setOpenCert(cert)}
  className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]"
>
  View →
</button>
        ) : (
          <span className="text-sm opacity-60">Verified</span>
        )}
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

   <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:px-12">
  <div className="grid items-start gap-12 rounded-3xl border border-[var(--border)] bg-white p-8 shadow-[0_18px_50px_rgba(30,27,24,0.06)] lg:grid-cols-[1fr_420px] lg:p-12">
    {/* left side */}
    <div className="min-w-0">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
        Contact
      </p>

      <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        Let’s build something that’s structured, functional, and built to
        perform.
      </h2>

      <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--subtext)]">
        I’m available for freelance projects, collaborations, and new
        opportunities. Tell me what you’re building — I’ll get back to you
        within 1–2 business days.
      </p>

      <p className="mt-5 text-sm text-[var(--subtext)]">
        Available for new projects · May 2026
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="rounded-full bg-[var(--accent)] px-6 py-3 font-medium text-white hover:bg-[var(--accent-dark)]"
        >
          Start a Project
        </a>

        <a
          href="https://github.com/laurenabigailparker"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-6 py-3 font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/lauren-parker-9a7a10381"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-6 py-3 font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          LinkedIn
        </a>
      </div>
    </div>

    {/* form */}
    <form
      onSubmit={handleContactSubmit}
      className="w-full space-y-4 rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-6"
    >
      <input type="hidden" name="_subject" value="New Portfolio Inquiry" />

      <div>
        <label className="mb-2 block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none focus:border-[var(--accent)]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none focus:border-[var(--accent)]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full resize-none rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none focus:border-[var(--accent)]"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-[var(--accent)] px-7 py-3 font-medium text-white hover:bg-[var(--accent-dark)]"
      >
        Send Message
      </button>

      <p className="text-center text-xs text-[var(--subtext)]">
        I usually respond within 1–2 business days.
      </p>
    </form>
  </div>
</section>
<CertModal
  isOpen={!!openCert}
  onClose={() => setOpenCert(null)}
  image={openCert?.image ?? null}
  title={openCert?.title ?? "Certificate"}
/>
    </main>
  );
}