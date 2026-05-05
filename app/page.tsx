"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CertModal from "@/components/CertModal";

const projects = [
  {
    title: "Lauren Parker Studios",
    type: "Personal Brand / Freelance",
    description:
      "My personal brand where I design and build clean, functional websites for real clients.",
    tech: ["Next.js", "React", "Tailwind", "Vercel"],
    image: "/studios.jpg",
    live: "https://laurenparkerstudio.com",
    caseStudy: {
      problem:
        "I needed a polished home for my freelance work that felt professional, personal, and easy to send to clients.",
      solution:
        "I built a clean brand site that presents my work, services, and development style in one place.",
      result:
        "The site gives my freelance work a stronger identity and makes it easier to share what I build.",
    },
  },
  {
    title: "Gateway Rock Design",
    type: "Client Website / Case Study",
    description:
      "Luxury interior design website built to clearly present services and convert interest into real client inquiries.",
    tech: ["Next.js", "React", "Tailwind", "Vercel", "Freeform"],
    image: "/gatewaypic.jpg",
    live: "https://gateway-rock-design.vercel.app/",
    caseStudy: {
      problem:
        "The client needed a high-end website that made their services feel clear, structured, and easy for potential clients to understand.",
      solution:
        "I built a responsive site with a refined layout, service-focused sections, and a streamlined inquiry flow to guide users through the experience.",
      result:
        "The site improves how the business presents its services and makes it easier for potential clients to understand offerings and take action.",
    },
  },
  {
    title: "Golden Life Adult Care",
    type: "Client Website / Case Study",
    description:
      "Website built to communicate trust, services, and client engagement.",
    tech: ["React", "Tailwind", "Vercel"],
    image: "/goldenlifepic.jpg",
    live: "https://golden-life-adult-care.vercel.app/",
    caseStudy: {
      problem:
        "The client needed a warm, trustworthy website that explained care services without feeling cold or clinical.",
      solution:
        "I created a structured, welcoming layout with service-focused sections, soft visuals, and clear navigation.",
      result:
        "The site helps the business communicate professionalism, care, and trust to potential families.",
    },
  },
  {
    title: "PMP Inc",
    type: "Client Website / Case Study",
    description:
      "Modern business website focused on structured services and clean UI.",
    tech: ["Next.js", "React", "Tailwind", "Vercel", "Freeform"],
    image: "/pmpincpic.jpg",
    live: "https://pmpincprofessionals.com/en",
    github: "https://github.com/laurenabigailparker/pmp-inc-website",
    caseStudy: {
      problem:
        "The business needed a more organized website that clearly presented services and felt easier for users to navigate.",
      solution:
        "I’m building a modern layout with structured service sections, responsive pages, and form handling for inquiries.",
      result:
        "The project is in progress, but the build is focused on improving clarity, usability, and client communication.",
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
        "I wanted to build something that went beyond static design and demonstrated real functionality, including user input, data handling, and dynamic calculations.",
      solution:
        "I developed a budgeting application where users can track income, add expenses, categorize spending, and see real-time updates to their totals using state management.",
      result:
        "The project demonstrates interactive UI, real-time data updates, and practical application logic, showing my ability to build functional, user-driven applications.",
    },
  },
];

const skillGroups = [
  {
    title: "Frontend",
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
    title: "Backend & Logic",
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
    title: "Tools & Deployment",
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
          </div>
        </div>
      </nav>

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 text-sm uppercase tracking-[0.35em] text-[var(--accent)]"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl"
        >
         I design and build modern websites that are structured, functional, and built for real clients.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-[var(--subtext)]"
        >
         From clean UI to real-world functionality, I create responsive applications that don’t just look good — they work the way they should.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="rounded-full bg-[var(--accent)] px-7 py-3 font-medium text-white shadow-sm hover:bg-[var(--accent-dark)]"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-[var(--border)] bg-white/70 px-7 py-3 font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Contact Me
          </a>
        </motion.div>

        <p className="mt-5 text-sm text-[var(--subtext)]">
          Built and deployed multiple client websites • Currently taking on new
          projects
        </p>
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
                  src="/me.jpg"
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

      <section
        id="skills"
        className="mx-auto max-w-7xl px-6 py-24 md:px-12"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
          Technical Skills
        </p>

        <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight">
          What I actually use to build.
        </h2>

        <p className="mt-4 max-w-2xl text-[var(--subtext)]">
          These are the tools and concepts I’ve been using across client
          websites, portfolio builds, deployments, forms, and application logic.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-[var(--border)] bg-white/70 p-6 shadow-[0_12px_35px_rgba(30,27,24,0.05)]"
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
            Verified technical training.
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
        <div className="rounded-3xl border border-[var(--border)] bg-white p-10 shadow-[0_18px_50px_rgba(30,27,24,0.06)] md:p-14">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            Let’s build something that’s structured, functional, and built to perform.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--subtext)]">
            I’m open to freelance projects, collaborations, and new
            opportunities. If you have a project or role in mind, feel free to
            reach out.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:laurenabigailparker@gmail.com"
              className="rounded-full bg-[var(--accent)] px-7 py-3 font-medium text-white hover:bg-[var(--accent-dark)]"
            >
              Email Me
            </a>

            <a
              href="https://github.com/laurenabigailparker"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-7 py-3 font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              GitHub
            </a>
          </div>
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