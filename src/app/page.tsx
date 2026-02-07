"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, []);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Parkinson's Disease Detection",
      type: "Research paper",
      link: "https://doi.org/10.61440/JCRCS.2025.v3.60",
      image: "/parkinson.jpg",
    },
    {
      title: "Chronic Kidney Disease Detection",
      type: "Research paper",
      link: "https://doi.org/10.61440/JCRCS.2025.v3.59",
      image: "/kidney.jpg",
    },
    {
      title: "Tourism Website",
      type: "Web project",
      link: "https://emergingravi.github.io/Tourism_site/",
      image: "/tourism.jpg",
    },
    {
      title: "Savour Bite",
      type: "College project",
      link: "https://github.com/emergingravi/Savor_bite_a_resturant_website",
      image: "/resturant.jpg",
    },
    {
      title: "Prodigy Infotech Projects",
      type: "Web practice",
      link: "https://github.com/emergingravi/PRODIGY_WD_01",
      image: "/prodigy.jpg",
    },
    {
      title: "Fire Alert Response System",
      type: "Hardware project",
      link: "https://github.com/emergingravi/Fire_alert_response_system",
      image: "/fire.jpg",
    },
    {
      title: "Judicial App Development",
      type: "Software project",
      link: "https://judicialportal.netlify.app/",
      image: "/judicial.jpg",
    },
    {
      title: "Clothing App Development",
      type: "Client project",
      link: "https://evarabridalstudio.vercel.app/",
      image: "/clothing.jpg",
    },
  ];

  const focusAreas = [
    {
      title: "UI/UX Design",
      description:
        "Human-first flows, clean visual systems, and prototypes that are ready to hand off to engineering.",
    },
    {
      title: "Web Development",
      description:
        "Responsive, fast web apps with modern stacks and careful attention to micro-interactions.",
    },
    {
      title: "AI + ML",
      description:
        "Applied machine learning research for health-tech problems with clear outcomes.",
    },
  ];

  const skills = [
    "UI/UX Design",
    "Web Design",
    "Web Development",
    "Frontend Development",
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
    "CSS",
    "Figma",
    "AI",
    "Machine Learning",
  ];

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ravi Shankar Sah",
    url: "https://ssravi.com.np",
    jobTitle: ["UI/UX Designer", "Web Developer", "Researcher"],
    image: "https://ssravi.com.np/pp.jpg",
    email: "mailto:ravi.prince.7374@gmail.com",
    telephone: "+977-9812174843",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=100059997380813",
      "https://www.instagram.com/ravisah028/",
      "https://github.com/emergingravi",
      "https://www.linkedin.com/in/ravi-shankar-sah-14b447265",
    ],
    knowsAbout: skills,
  };

  return (
    <div className="text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <header
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 reveal"
        data-reveal
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0b111b] text-[#5cf2ff] shadow-[0_0_18px_rgba(92,242,255,0.45)]">
            RS
          </div>
          <div className="leading-tight">
            <p className="text-sm uppercase tracking-[0.25em] text-[#9fb3cc]">
              Portfolio
            </p>
            <p className="text-base font-medium">Ravi Shankar Sah</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#9fb3cc] md:flex">
          <a className="transition hover:text-[#e6f0ff]" href="#about">
            About
          </a>
          <a className="transition hover:text-[#e6f0ff]" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-[#e6f0ff]" href="#services">
            Services
          </a>
          <a className="transition hover:text-[#e6f0ff]" href="#contact">
            Contact
          </a>
        </nav>
        <a
          href="/cv.pdf"
          className="rounded-full border border-[#5cf2ff]/30 bg-[#0b111b] px-4 py-2 text-sm font-semibold text-[#e6f0ff] shadow-[0_0_20px_rgba(92,242,255,0.25)] transition hover:-translate-y-0.5 hover:border-[#5cf2ff] hover:text-[#5cf2ff]"
        >
          Download CV
        </a>
      </header>

      <main>
        <section
          className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 pb-24 pt-10 md:grid-cols-[1.1fr_0.9fr] md:items-center reveal"
          data-reveal
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#5cf2ff]">
              Web Designer · Developer · Researcher
            </p>
            <h1 className="font-[var(--font-display)] text-4xl leading-tight text-[#e6f0ff] sm:text-5xl md:text-6xl">
              Designing digital products that feel effortless and human.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#9fb3cc]">
              I&apos;m Ravi Shankar Sah, a UI/UX designer, web developer, and
              AI/ML enthusiast from Nepal. I craft interfaces, build web apps,
              and research healthcare problems with machine learning.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-[#5cf2ff] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#081018] transition hover:-translate-y-0.5 hover:bg-[#7b5cff] hover:text-white"
              >
                View work
              </a>
              <a
                href="/cv.pdf"
                className="rounded-full border border-[#5cf2ff]/30 bg-[#0b111b] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#e6f0ff] transition hover:-translate-y-0.5 hover:border-[#7b5cff] hover:text-[#7b5cff]"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden sharp glass glow-card floaty">
              <Image
                src="/pp.jpg"
                alt="Ravi Shankar Sah portrait"
                width={800}
                height={900}
                className="h-[320px] w-full object-cover md:h-[360px]"
                priority
              />
            </div>
            <div className="sharp glass glow-card p-6 floaty-slow">
              <p className="text-xs uppercase tracking-[0.25em] text-[#9fb3cc]">
                Quick profile
              </p>
              <div className="mt-4 space-y-3 text-sm text-[#e6f0ff]">
                <p>Location: Nepal</p>
                <p>Focus: UI/UX, Web, AI/ML</p>
                <p>Current: BSc. CSIT</p>
              </div>
            </div>
            <div className="sharp glass glow-card p-6 text-[#e6f0ff] floaty">
              <p className="text-xs uppercase tracking-[0.25em] text-[#9fb3cc]">
                Highlights
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-2xl font-semibold">8+</p>
                  <p className="text-[#9fb3cc]">Projects shipped</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">2</p>
                  <p className="text-[#9fb3cc]">Research papers</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">3</p>
                  <p className="text-[#9fb3cc]">Focus areas</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">5+</p>
                  <p className="text-[#9fb3cc]">Web experiments</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto w-full max-w-6xl px-6 pb-20 reveal"
          data-reveal
        >
          <div className="grid gap-8 sharp glass glow-card p-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5cf2ff]">
                About
              </p>
              <h2 className="mt-4 font-[var(--font-display)] text-3xl text-[#e6f0ff]">
                Design that blends clarity, craft, and curiosity.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#9fb3cc]">
                I design with a research mindset, prototype fast, and build
                solutions that scale. My work spans product interfaces, web
                development, and applied ML research in healthcare.
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5cf2ff]">
                  Experience
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[#e6f0ff]">
                  {projects.map((project) => (
                    <li key={`${project.title}-exp`} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#5cf2ff]" />
                      <span>{project.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid gap-4 text-sm text-[#e6f0ff]">
              <div className="sharp glass p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[#9fb3cc]">
                  Education
                </p>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="font-medium">Bachelor in CSIT</p>
                    <p className="text-xs text-[#9fb3cc]">
                      Samriddhi College | Tribhuwan University
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">2078 +2 in Science</p>
                    <p className="text-xs text-[#9fb3cc]">
                      Capital College and Research Center (CCRC) | NEB
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">2076 SEE</p>
                    <p className="text-xs text-[#9fb3cc]">
                      Monastic HSEB School, Janakpurdham | NE
                    </p>
                  </div>
                </div>
              </div>
              <div className="sharp glass p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[#9fb3cc]">
                  Focus
                </p>
                <p className="mt-2">UI/UX · Web Development · AI/ML</p>
              </div>
              <div className="sharp glass p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[#9fb3cc]">
                  Skills
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-[#1f1a14]">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#5cf2ff]/30 bg-[#0b111b] px-3 py-1 text-[#e6f0ff]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto w-full max-w-6xl px-6 pb-20 reveal"
          data-reveal
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5cf2ff]">
                Projects
              </p>
              <h2 className="mt-4 font-[var(--font-display)] text-3xl text-[#e6f0ff]">
                Selected work and research
              </h2>
            </div>
            <a
              href="https://github.com/emergingravi"
              className="text-sm font-semibold uppercase tracking-wide text-[#5cf2ff]"
            >
              See more
            </a>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.link}
                className="group overflow-hidden sharp glass glow-card transition hover:-translate-y-2 reveal"
                data-reveal
                data-delay={(index % 4) + 1}
              >
                <div className="px-6 pt-6">
                  <div className="relative mx-auto h-56 w-[86%] overflow-hidden rounded-xl bg-[#0b111b] shadow-[0_0_24px_rgba(92,242,255,0.18)]">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.06]"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#9fb3cc]">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-[#e6f0ff]">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm font-semibold text-[#5cf2ff]">
                    Explore
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          id="services"
          className="mx-auto w-full max-w-6xl px-6 pb-24 reveal"
          data-reveal
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5cf2ff]">
            Services
          </p>
          <h2 className="mt-4 font-[var(--font-display)] text-3xl text-[#e6f0ff]">
            What I can help you build
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {focusAreas.map((service, index) => (
              <div
                key={service.title}
                className="sharp glass glow-card p-6 reveal"
                data-reveal
                data-delay={(index % 3) + 1}
              >
                <h3 className="text-lg font-semibold text-[#e6f0ff]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#9fb3cc]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto w-full max-w-6xl px-6 pb-24 reveal"
          data-reveal
        >
          <div className="sharp glass glow-card px-8 py-10 text-[#e6f0ff]">
            <div className="md:flex md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#9fb3cc]">
                  Contact
                </p>
                <h2 className="mt-4 font-[var(--font-display)] text-3xl">
                  Let&apos;s build something meaningful.
                </h2>
                <p className="mt-3 text-sm text-[#9fb3cc]">
                  Email me or connect on social.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 text-sm font-semibold md:mt-0 md:items-end">
                <a href="mailto:ravi.prince.7374@gmail.com">
                  ravi.prince.7374@gmail.com
                </a>
                <a href="tel:+9779812174843">+977-9812174843</a>
                <div className="flex gap-4 text-sm text-[#9fb3cc]">
                  <a href="https://www.facebook.com/profile.php?id=100059997380813">
                    Facebook
                  </a>
                  <a href="https://www.instagram.com/ravisah028/">Instagram</a>
                  <a href="https://github.com/emergingravi">GitHub</a>
                  <a href="https://www.linkedin.com/in/ravi-shankar-sah-14b447265">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-start gap-4 border-t border-white/10 pt-6">
              <button
                type="button"
                onClick={() => setIsFormOpen((prev) => !prev)}
                className="rounded-full bg-[#5cf2ff] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#081018] transition hover:-translate-y-0.5 hover:bg-[#7b5cff] hover:text-white"
              >
                Let&apos;s talk
              </button>
              {isFormOpen && (
                <form
                  ref={formRef}
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (!formRef.current) return;
                    setFormStatus("sending");
                    emailjs
                      .sendForm(
                        "service_kpvj5ad",
                        "template_9ejoaek",
                        formRef.current,
                        "caPVS_0yACWtXDH9Y"
                      )
                      .then(() => {
                        setFormStatus("success");
                        formRef.current?.reset();
                      })
                      .catch(() => setFormStatus("error"));
                  }}
                  className="w-full max-w-xl space-y-4 sharp glass p-6 text-sm text-[#e6f0ff]"
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-[0.25em] text-[#9fb3cc]">
                        Name
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="rounded-xl border border-[#5cf2ff]/20 bg-transparent px-4 py-2 text-sm text-[#e6f0ff] placeholder:text-[#9fb3cc] focus:outline-none focus:ring-2 focus:ring-[#5cf2ff]/40"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-[0.25em] text-[#9fb3cc]">
                        Email
                      </span>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        className="rounded-xl border border-[#5cf2ff]/20 bg-transparent px-4 py-2 text-sm text-[#e6f0ff] placeholder:text-[#9fb3cc] focus:outline-none focus:ring-2 focus:ring-[#5cf2ff]/40"
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#9fb3cc]">
                      Message
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project..."
                      required
                      className="rounded-xl border border-[#5cf2ff]/20 bg-transparent px-4 py-2 text-sm text-[#e6f0ff] placeholder:text-[#9fb3cc] focus:outline-none focus:ring-2 focus:ring-[#5cf2ff]/40"
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="rounded-full border border-[#5cf2ff]/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#e6f0ff] transition hover:-translate-y-0.5 hover:bg-[#5cf2ff] hover:text-[#081018] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {formStatus === "sending" ? "Sending..." : "Send message"}
                  </button>
                  {formStatus === "success" && (
                    <p className="text-xs uppercase tracking-[0.25em] text-[#9fb3cc]">
                      Message sent successfully.
                    </p>
                  )}
                  {formStatus === "error" && (
                    <p className="text-xs uppercase tracking-[0.25em] text-[#9fb3cc]">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
