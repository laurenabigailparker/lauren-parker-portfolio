"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CertModal from "@/components/CertModal";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const projects = [
  {
    title: "Vetess",
    type: "Full Stack Veteran Employment Platform",
    description:
      "Veteran employment platform with Supabase-backed data, admin tooling, job listings, resources, donations, and interactive location features.",
    tech: ["React", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    metrics: ["Full Stack Platform", "Admin Dashboard", "Supabase Backend", "Production Deployment"],
    image: "/vetesspic.jpg",
    live: "https://vetess.vercel.app/",
    github: "https://github.com/laurenabigailparker/vetess",
  },
  {
    title: "Warrior Dad Stories",
    type: "CMS-Driven Client Platform",
    description:
      "Author and veteran storytelling platform with CMS content, blog management, podcast support, newsletter dashboard, and admin controls.",
    tech: ["React", "Vite", "Supabase", "Tailwind CSS", "Framer Motion", "Vercel"],
    metrics: ["CMS Platform", "Newsletter System", "Blog CRUD", "Client Project Lead"],
    image: "/wdpic.jpg",
    live: "https://warrior-dad-stories-clean.vercel.app/",
    github: "https://github.com/laurenabigailparker/warrior-dad-stories",
  },
  {
    title: "InvoiceFlow",
    type: "Full Stack SaaS Dashboard",
    description:
      "Invoicing dashboard with authentication, backend API workflows, MongoDB invoice storage, analytics, and responsive SaaS-style UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Recharts"],
    metrics: ["JWT Auth", "Express API", "MongoDB CRUD", "Analytics UI"],
    image: "/invoiceflowpic.jpg",
    live: "https://invoiceflow-eight-drab.vercel.app/",
    github: "https://github.com/laurenabigailparker/invoiceflow",
  },
  {
    title: "ClientFlow CRM",
    type: "Full Stack CRM Dashboard",
    description:
      "CRM dashboard with Supabase data, live CRUD operations, client tracking, project management, analytics, and responsive admin UI.",
    tech: ["React", "Supabase", "PostgreSQL", "Tailwind CSS", "Recharts", "Vercel"],
    metrics: ["Live Database", "CRM Workflows", "Dashboard UI", "Data Views"],
    image: "/clientflow.jpg",
    live: "https://clientflow-crm-lime.vercel.app",
    github: "https://github.com/laurenabigailparker/clientflow-crm",
  },
  {
    title: "PMP Inc",
    type: "Client Business Website",
    description:
      "Modern business website with structured services, responsive pages, inquiry flow, and professional client-facing design.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    metrics: ["Client Build", "Responsive UI", "Business Pages", "Production Site"],
    image: "/pmpincpic.jpg",
    live: "https://pmpincprofessionals.com/en",
    github: "https://github.com/laurenabigailparker/pmp-inc-website",
  },
  {
    title: "Gateway Rock Design",
    type: "Client Business Website",
    description:
      "Responsive client website built for a design-focused business with polished sections, service presentation, and conversion-focused layout.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    metrics: ["Client Website", "Next.js App", "Responsive Layout", "Service UX"],
    image: "/gatewaypic.jpg",
    live: "#",
    github: "#",
  },
  {
    title: "Golden Life Adult Care",
    type: "Healthcare Business Website",
    description:
      "Professional care-services website with warm branding, responsive design, structured information, and clear contact pathways.",
    tech: ["React", "Tailwind CSS", "Responsive Design", "Vercel"],
    metrics: ["Healthcare Site", "Responsive UI", "Client Branding", "Contact Flow"],
    image: "/goldenlifepic.jpg",
    live: "#",
    github: "#",
  },
  {
    title: "Budget App",
    type: "Personal Finance Application",
    description:
      "Budgeting and expense tracking application built to manage personal finances with organized categories and clean dashboard UI.",
    tech: ["React", "JavaScript", "Tailwind CSS", "State Management"],
    metrics: ["Finance App", "State Logic", "Dashboard UI", "User Workflows"],
    image: "/budgetpic.jpg",
    live: "#",
    github: "#",
  },
  {
    title: "SkyCast",
    type: "Frontend API Application",
    description:
      "Weather dashboard using live API data, async fetching, loading states, error handling, responsive UI, and dynamic rendering.",
    tech: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
    metrics: ["Live API", "TypeScript", "Async Fetching", "Error States"],
    image: "/weatherapppic.jpg",
    live: "https://skycast-weather-dashboard.vercel.app/",
    github: "https://github.com/laurenabigailparker/skycast-weather-dashboard",
  },
  {
    title: "Studio Site",
    type: "Creative Business Website",
    description:
      "Visual client-style website focused on branding, imagery, responsive layouts, and polished presentation.",
    tech: ["React", "Tailwind CSS", "Responsive Design", "Vercel"],
    metrics: ["Creative Site", "Visual Design", "Responsive UI", "Brand Layout"],
    image: "/studios.jpg",
    live: "#",
    github: "#",
  },
];

const featuredBuilds = [
  {
    title: "Vetess",
    label: "Full Stack Case Study",
    problem:
      "Veterans needed a centralized employment platform with jobs, resources, donations, success stories, and admin-managed content.",
    solution:
      "Built the platform with React, Supabase, PostgreSQL, Tailwind, admin dashboards, CRUD workflows, responsive pages, and production deployment.",
    result:
      "Delivered a scalable full-stack application with real data, admin controls, dynamic content, and recruiter-visible system architecture.",
    highlights: [
      "Designed Supabase-backed data structure",
      "Built admin dashboard modules",
      "Implemented dynamic job/resource content",
      "Deployed production app with Vercel",
    ],
  },
  {
    title: "Warrior Dad Stories",
    label: "Client CMS Platform",
    problem:
      "Client needed a CMS-driven platform for blogs, podcasts, books, events, newsletter subscribers, media, and future storefront functionality.",
    solution:
      "Led the React/Supabase build with CMS-managed sections, blog CRUD, newsletter dashboard, admin tools, and scalable content architecture.",
    result:
      "Created a client-facing platform that allows content to be managed without code while keeping the frontend polished and production-ready.",
    highlights: [
      "Built CMS-driven admin workflows",
      "Created blog and newsletter management",
      "Structured content for podcasts/events/books",
      "Led client-facing development process",
    ],
  },
];

const technicalHighlights = [
  "Built Supabase CMS/admin dashboards",
  "Designed PostgreSQL-backed CRUD workflows",
  "Integrated REST APIs and third-party services",
  "Deployed production apps on Vercel",
  "Built responsive React/Next.js interfaces",
  "Led client-facing development projects",
  "Created dashboard analytics and data views",
  "Used Git/GitHub for version control",
  "Active Secret Clearance + USAF background",
];

const skillGroups = [
  {
    title: "Frontend Engineering",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Responsive UI",
      "Component Architecture",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "Node.js",
      "Express",
      "Supabase",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "JWT Authentication",
      "CRUD Workflows",
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Database Design",
      "Admin Dashboards",
      "API Integration",
      "Client Delivery",
      "Debugging",
    ],
  },
];

const certifications = [
  { title: "JavaScript Professional Developer — COITB", image: "/javascriptcert.jpg" },
  { title: "React.js Framework Developer — COITB", image: "/reactcert.jpg" },
  { title: "HTML/CSS Web Designer — COITB", image: "/htmlcsscert.jpg" },
  { title: "SQL Developer — COITB", image: null },
];

const stats = [
  "3+ Years Development",
  "10+ Projects Shipped",
  "Active Secret Clearance",
  "USAF Veteran",
  "React • Next.js • Supabase",
];

const timeline = [
  ["2022", "Started learning HTML, CSS, JavaScript, and responsive web development."],
  ["2023", "Built React projects and learned Git, components, and frontend workflows."],
  ["2024", "Expanded into APIs, databases, backend development, and deployment."],
  ["2025", "Delivered client websites and full-stack business applications."],
  ["2026", "Led Vetess and Warrior Dad Stories development projects."],
  ["Now", "Building production-ready React, Next.js, Supabase, and Node.js applications."],
];

const developerStats = [
  ["10+", "Projects Built"],
  ["3+", "Years Development"],
  ["React", "Primary Framework"],
  ["Secret", "Active Clearance"],
];

export default function Home() {
  const [openCert, setOpenCert] = useState<{ title: string; image: string | null } | null>(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await fetch("https://formspree.io/f/mwvabobn", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    e.currentTarget.reset();
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.15),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(124,58,237,0.13),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.10),transparent_32%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.24),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.22),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(34,211,238,0.14),transparent_32%)]" />

      <nav className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-12">
          <a
            href="#"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-xs font-semibold tracking-[0.35em] text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400"
          >
            LAUREN PARKER
          </a>

          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--subtext)] md:gap-7">
            {[
              ["Work", "#work"],
              ["Architecture", "#architecture"],
              ["Skills", "#skills"],
              ["Contact", "#contact"],
            ].map(([item, href]) => (
              <a key={item} href={href} className="transition hover:text-[var(--accent)]">
                {item}
              </a>
            ))}

            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              suppressHydrationWarning
              className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-1 text-sm text-[var(--text)] backdrop-blur-xl transition hover:scale-105 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </nav>

      <section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 overflow-hidden px-6 pt-48 md:px-12 md:pt-32 lg:grid-cols-[1fr_0.9fr]">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[180px] dark:bg-blue-400/10" />

        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} className="mb-6 flex flex-wrap gap-2">
            {stats.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-xs font-medium text-[var(--subtext)] shadow-lg backdrop-blur-xl"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
            Full Stack Developer
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-5 max-w-4xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-4xl font-semibold leading-tight tracking-tight text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 sm:text-5xl md:text-6xl"
          >
            Full Stack Developer specializing in React, Next.js, Supabase, and modern web applications.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-[var(--subtext)]">
            I build production-ready dashboards, CMS platforms, business applications, and client solutions from database design through deployment.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3 font-medium text-white shadow-lg transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(37,99,235,0.35)] dark:from-blue-500 dark:to-purple-500"
            >
              View Engineering Work
            </a>
            <a
              href="/ParkerLaurenMasterResume.pdf"
              download
              className="rounded-full border border-[var(--border)] bg-[var(--card)] px-7 py-3 font-medium text-[var(--text)] shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="relative mx-auto h-[420px] w-full max-w-[390px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] shadow-[0_30px_90px_rgba(0,0,0,0.18)] backdrop-blur-xl dark:shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
          >
            <Image src="/me.jpg" alt="Lauren Parker" fill priority className="object-cover object-top transition duration-700 hover:scale-110" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-3xl border border-cyan-400/20 bg-[#020617] p-6 font-mono text-sm text-cyan-300 shadow-[0_0_60px_rgba(96,165,250,0.25)]"
          >
            <p className="text-blue-400">$ whoami</p>
            <p className="mt-3">Lauren Parker</p>
            <p>Full Stack Developer</p>
            <p>USAF Veteran • Active Secret Clearance</p>

            <p className="mt-5 text-purple-400">$ stack</p>
            <p className="mt-2">React | Next.js | TypeScript | Supabase | Node.js | MongoDB</p>

            <p className="mt-5 text-cyan-400">$ signal</p>
            <p className="mt-2">Builds real apps. Ships to production. Understands systems.</p>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="architecture"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="relative border-y border-[var(--border)] bg-[var(--section)]/80 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
            Engineering Snapshot
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)]">
            Not just websites — full application systems.
          </motion.h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Frontend", "Responsive React and Next.js interfaces with reusable components, clean layouts, and mobile-first UX."],
              ["Backend/Data", "Supabase, PostgreSQL, MongoDB, Express APIs, authentication flows, CRUD operations, and admin dashboards."],
              ["Deployment", "GitHub version control, production Vercel deployments, debugging, client delivery, and iteration."],
            ].map(([title, text]) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-lg backdrop-blur-xl transition hover:shadow-[0_0_45px_rgba(96,165,250,0.22)]"
              >
                <h3 className="text-xl font-semibold text-[var(--text)]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--subtext)]">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
            Featured Engineering Builds
          </motion.p>

          <motion.h2 variants={fadeUp} className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)]">
            The projects recruiters should look at first.
          </motion.h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {featuredBuilds.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-xl backdrop-blur-xl transition hover:shadow-[0_0_55px_rgba(139,92,246,0.24)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">{item.label}</p>
                <h3 className="mt-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-semibold text-transparent dark:from-blue-400 dark:to-purple-400">
                  {item.title}
                </h3>

                <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--subtext)]">
                  <p>
                    <span className="font-semibold text-[var(--text)]">Problem: </span>
                    {item.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text)]">Solution: </span>
                    {item.solution}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text)]">Result: </span>
                    {item.result}
                  </p>
                </div>

                <div className="mt-6 grid gap-3">
                  {item.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-3 text-sm text-[var(--subtext)]"
                    >
                      ✓ {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--section)]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
              Technical Highlights
            </motion.p>

            <motion.h2 variants={fadeUp} className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)]">
              What I bring to a development team.
            </motion.h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {technicalHighlights.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-sm font-medium text-[var(--text)] shadow-lg backdrop-blur-xl transition hover:border-[var(--accent)] hover:shadow-[0_0_35px_rgba(96,165,250,0.20)]"
                >
                  ✓ {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
            Selected Work
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)]">
            Full-stack and client project portfolio.
          </motion.h2>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              whileHover={{ y: -10, scale: 1.02, rotateX: 2 }}
              className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-[0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur-xl transition hover:shadow-[0_0_45px_rgba(96,165,250,0.25)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.25)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">{project.type}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text)]">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--subtext)]">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.metrics.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/15 to-purple-500/15 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs text-[var(--subtext)] transition group-hover:border-[var(--accent)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[var(--accent)] hover:text-cyan-500">
                      Live Project →
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[var(--subtext)] hover:text-[var(--accent)]">
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.section
        id="skills"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="border-y border-[var(--border)] bg-[var(--section)]/80 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
            Technical Skills
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-[var(--text)]">
            Tools I use to build real applications.
          </motion.h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
                className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-lg backdrop-blur-xl transition hover:shadow-[0_0_40px_rgba(139,92,246,0.22)]"
              >
                <h3 className="mb-5 text-lg font-semibold text-[var(--text)]">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-sm text-[var(--subtext)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
            Developer Timeline
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)]">
            Progression from projects to production systems.
          </motion.h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {timeline.map(([year, text]) => (
              <motion.div
                key={year}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
                className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-lg backdrop-blur-xl transition hover:shadow-[0_0_35px_rgba(96,165,250,0.20)]"
              >
                <p className="text-sm font-semibold text-[var(--accent)]">{year}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--subtext)]">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-xl backdrop-blur-xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">Certifications</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)]">Certifications & Technical Training.</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {certifications.map((cert) => (
              <motion.div
                key={cert.title}
                whileHover={{ scale: 1.02, y: -4 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 text-[var(--subtext)] shadow transition hover:border-[var(--accent)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span>{cert.title}</span>
                  {cert.image ? (
                    <button type="button" onClick={() => setOpenCert(cert)} className="text-sm font-semibold text-[var(--accent)]">
                      View →
                    </button>
                  ) : (
                    <span className="text-sm opacity-60">Verified</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-cyan-400/20 bg-[#020617] p-8 font-mono shadow-[0_0_60px_rgba(34,211,238,0.15)]"
        >
          <p className="text-cyan-400">$ development_stats</p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {developerStats.map(([value, label]) => (
              <motion.div key={label} whileHover={{ y: -6, scale: 1.03 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-bold text-white">{value}</p>
                <p className="mt-2 text-sm text-slate-400">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid items-start gap-12 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-2xl backdrop-blur-xl lg:grid-cols-[1fr_420px] lg:p-12"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">Contact</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-[var(--text)] md:text-5xl">
              Interested in a developer who can build, ship, and explain the system?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--subtext)]">
              I’m open to full stack, frontend, federal contractor, and client development opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/ParkerLaurenMasterResume.pdf"
                download
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white shadow-lg transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(96,165,250,0.35)] dark:from-blue-500 dark:to-purple-500"
              >
                Resume
              </a>
              <a
                href="https://github.com/laurenabigailparker"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-6 py-3 font-medium text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/lauren-parker-9a7a10381"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-6 py-3 font-medium text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="w-full space-y-5 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-lg backdrop-blur-xl">
            <input type="hidden" name="_subject" value="New Portfolio Inquiry" />

            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--subtext)] focus:scale-[1.01] focus:border-[var(--accent)]"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--subtext)] focus:scale-[1.01] focus:border-[var(--accent)]"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about the role or project..."
              className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--subtext)] focus:scale-[1.01] focus:border-[var(--accent)]"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3 font-medium text-white shadow-lg transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(96,165,250,0.35)] dark:from-blue-500 dark:to-purple-500"
            >
              Send Message
            </button>
          </form>
        </motion.div>
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
