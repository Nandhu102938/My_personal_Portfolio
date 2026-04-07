import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Moon,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Sun,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { cn } from './lib/cn'

type Item = {
  title: string
  subtitle?: string
  meta?: string
  bullets?: string[]
  href?: string
}

const PROFILE = {
  name: 'NANDHAGOPAL V',
  location: 'Kattupakkam, Chennai',
  email: 'vnandhagopal31@gmail.com',
  phone: '9360557172',
  linkedin: 'https://linkedin.com/in/nandhagopal-v-30665921b',
  github: 'https://github.com/Nandhu102938',
  headline:
    'Full Stack Developer — Spring Boot, React.js, REST APIs, MySQL/Oracle SQL',
  summary:
    'Full Stack Developer with hands-on experience in Java (Spring Boot), React.js, REST API development, and MySQL/Oracle SQL database management. Proficient in building scalable, secure web applications with JWT authentication, role-based access control, and CI/CD pipelines. Strong foundation in OOP, data structures, and Agile development practices.',
}

function Section({
  id,
  title,
  icon,
  children,
  className,
}: {
  id: string
  title: string
  icon?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('scroll-mt-24', className)}>
      <div className="mb-4 flex items-center gap-2">
        <div className="grid size-9 place-items-center rounded-xl bg-black/5 ring-1 ring-black/10 backdrop-blur dark:bg-white/5 dark:ring-white/10">
          {icon ?? <Sparkles className="size-4 text-zinc-800/80 dark:text-white/80" />}
        </div>
        <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-white">
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('glass rounded-2xl p-5', className)}>{children}</div>
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs text-zinc-700 ring-1 ring-black/10 dark:bg-white/5 dark:text-white/80 dark:ring-white/10">
      {children}
    </span>
  )
}

function ItemCard({ item }: { item: Item }) {
  return (
    <Card className="group relative overflow-hidden">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-60 w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
            {item.subtitle ? (
              <p className="mt-1 text-sm text-zinc-600 dark:text-white/70">{item.subtitle}</p>
            ) : null}
          </div>
          {item.href ? (
            <a
              className="inline-flex shrink-0 items-center gap-1 rounded-full bg-black/5 px-3 py-1 text-xs text-zinc-700 ring-1 ring-black/10 transition hover:bg-black/10 dark:bg-white/5 dark:text-white/80 dark:ring-white/10 dark:hover:bg-white/10"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              View <ArrowUpRight className="size-3" />
            </a>
          ) : item.meta ? (
            <Pill>{item.meta}</Pill>
          ) : null}
        </div>

        {item.bullets?.length ? (
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-white/75">
            {item.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-white/40" />
                <span className="text-balance">{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Card>
  )
}

function TopNav() {
  const links = useMemo(
    () => [
      { href: '#about', label: 'About' },
      { href: '#skills', label: 'Skills' },
      { href: '#experience', label: 'Experience' },
      { href: '#projects', label: 'Projects' },
      { href: '#education', label: 'Education' },
      { href: '#certifications', label: 'Certifications' },
      { href: '#contact', label: 'Contact' },
    ],
    [],
  )

  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    const shouldUseDark = stored ? stored === 'dark' : Boolean(prefersDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
    setIsDark(shouldUseDark)
  }, [])

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    setIsDark(next)
  }

  return (
    <div className="sticky top-3 z-50 mx-auto w-full max-w-6xl px-4">
      <div className="glass-strong relative overflow-hidden rounded-2xl px-3 py-2">
        <div className="absolute inset-0 noise opacity-30" />
        <div className="relative flex items-center justify-between gap-3">
          <a
            href="#top"
            className="rounded-xl px-3 py-2 text-sm font-semibold tracking-tight text-zinc-900 hover:bg-black/5 dark:text-white/90 dark:hover:bg-white/5"
          >
            {PROFILE.name}
          </a>
          <nav className="hidden flex-1 items-center justify-end gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2 text-sm text-zinc-700 transition hover:bg-black/5 hover:text-zinc-900 dark:text-white/75 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 rounded-xl bg-black/5 px-3 py-2 text-sm text-zinc-800 ring-1 ring-black/10 transition hover:bg-black/10 dark:bg-white/5 dark:text-white/80 dark:ring-white/10 dark:hover:bg-white/10"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
              <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
            </button>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-black/5 px-3 py-2 text-sm text-zinc-800 ring-1 ring-black/10 transition hover:bg-black/10 dark:bg-white/5 dark:text-white/80 dark:ring-white/10 dark:hover:bg-white/10"
            >
              <Code2 className="size-4" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Spotlight() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 120, damping: 25 })
  const sy = useSpring(y, { stiffness: 120, damping: 25 })

  const background = useTransform([sx, sy], (latest) => {
    const lx = latest[0] as number
    const ly = latest[1] as number
    const cx = Math.round(lx)
    const cy = Math.round(ly)
    return `radial-gradient(900px circle at ${cx}px ${cy}px, rgba(168,85,247,0.16), rgba(34,211,238,0.08) 40%, rgba(7,8,20,0) 70%)`
  })

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ background }}
    />
  )
}

export default function App() {
  const skills = useMemo(
    () => [
      { group: 'Programming', items: ['Java', 'JavaScript'] },
      { group: 'Frontend', items: ['React.js', 'HTML5', 'CSS3'] },
      { group: 'Backend', items: ['Spring Boot', 'REST APIs'] },
      { group: 'Database', items: ['MySQL', 'Oracle SQL'] },
      { group: 'Cloud & DevOps', items: ['AWS (EC2, S3)', 'Vercel', 'CI/CD', 'GitHub Actions'] },
      { group: 'Tools', items: ['Git', 'GitHub', 'IntelliJ IDEA', 'Eclipse', 'VS Code'] },
    ],
    [],
  )

  const experience: Item[] = useMemo(
    () => [
      {
        title: 'Python Developer Intern',
        subtitle: 'Vcodez • Dec 2024 – Feb 2025',
        bullets: [
          'Developed and deployed secure web applications using Python Django with REST API integration.',
          'Implemented authentication/authorization using session management and access control.',
          'Wrote clean backend logic following MVC and OOP principles; collaborated via Git and code reviews.',
        ],
      },
    ],
    [],
  )

  const projects: Item[] = useMemo(
    () => [
      {
        title: 'InventoryPro — Enterprise Inventory Management System',
        subtitle:
          'React.js • Spring Boot • MySQL • AWS • GitHub Actions • Vercel',
        bullets: [
          'Designed and developed a full-stack inventory management platform for SMBs.',
          'Built RESTful APIs for product tracking, supplier management, and order processing.',
          'Implemented JWT authentication and RBAC with granular permissions.',
          'Designed and optimized MySQL schema for secure, efficient storage and retrieval.',
          'Deployed frontend on Vercel and configured CI/CD with GitHub Actions.',
        ],
      },
    ],
    [],
  )

  const education: Item[] = useMemo(
    () => [
      {
        title: 'B.Tech — Information Technology',
        subtitle:
          'Sri Sai Ram Institute of Technology, Chennai • 2019 – 2023',
        meta: 'CGPA: 7.79',
      },
      {
        title: 'Higher Secondary (12th Grade)',
        subtitle: 'Bharathidhasan Matric HSS • 2018 – 2019',
        meta: '76.3%',
      },
      {
        title: 'Secondary School (10th Grade)',
        subtitle: 'Bharathidhasan Matric HSS • 2016 – 2017',
        meta: '88.2%',
      },
    ],
    [],
  )

  const certifications: Item[] = useMemo(
    () => [
      { title: 'Java Full Stack Development', subtitle: 'Qspiders, Vadapalani, Chennai' },
      { title: 'AWS Certified Cloud Practitioner', subtitle: 'VINSYS IT Solutions' },
      { title: 'Python Programming', subtitle: 'Simplilearn Platform' },
      { title: 'Cisco — Introduction to Cybersecurity' },
    ],
    [],
  )

  return (
    <div id="top" className="relative">
      <Spotlight />

      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.20),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.18),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.16),transparent_55%)]" />
        <div className="absolute inset-0 noise opacity-25" />
      </div>

      <TopNav />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="glass-strong relative overflow-hidden rounded-3xl p-6 md:p-8"
          >
            <div className="absolute inset-0 opacity-70">
              <div className="pointer-events-none absolute -top-24 left-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
            </div>
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2">
                <Pill>
                  <MapPin className="size-3.5" />
                  {PROFILE.location}
                </Pill>
                <Pill>
                  <ShieldCheck className="size-3.5" />
                  JWT • RBAC • CI/CD
                </Pill>
                <Pill>
                  <BriefcaseBusiness className="size-3.5" />
                  Open to roles
                </Pill>
              </div>

              <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl dark:text-white">
                {PROFILE.name}
              </h1>
              <p className="mt-3 max-w-2xl text-balance text-base leading-relaxed text-zinc-700 md:text-lg dark:text-white/75">
                {PROFILE.headline}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-black/5 px-4 py-2.5 text-sm font-medium text-zinc-900 ring-1 ring-black/10 transition hover:bg-black/10 dark:bg-white/10 dark:text-white dark:ring-white/15 dark:hover:bg-white/15"
                >
                  LinkedIn <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-black/5 px-4 py-2.5 text-sm font-medium text-zinc-900 ring-1 ring-black/10 transition hover:bg-black/10 dark:bg-white/5 dark:text-white/85 dark:ring-white/10 dark:hover:bg-white/10"
                >
                  GitHub <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium text-zinc-900 ring-1 ring-black/10 transition hover:bg-black/5 dark:text-white/85 dark:ring-white/10 dark:hover:bg-white/5"
                >
                  Contact <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
            className="grid gap-4"
          >
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 noise opacity-30" />
              <div className="relative">
                <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Quick contact
                </h2>
                <div className="mt-4 space-y-2 text-sm">
                  <a
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-zinc-700 ring-1 ring-black/10 transition hover:bg-black/5 dark:text-white/80 dark:ring-white/10 dark:hover:bg-white/5"
                    href={`mailto:${PROFILE.email}`}
                  >
                    <Mail className="size-4" /> {PROFILE.email}
                  </a>
                  <a
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-zinc-700 ring-1 ring-black/10 transition hover:bg-black/5 dark:text-white/80 dark:ring-white/10 dark:hover:bg-white/5"
                    href={`tel:${PROFILE.phone}`}
                  >
                    <Phone className="size-4" /> {PROFILE.phone}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                    Core strengths
                  </p>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-white/70">
                    Secure, scalable web apps
                  </p>
                </div>
                <div className="grid size-12 place-items-center rounded-2xl bg-black/5 ring-1 ring-black/10 dark:bg-white/5 dark:ring-white/10">
                  <Sparkles className="size-5 text-zinc-800/80 dark:text-white/80" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  'Spring Boot APIs',
                  'React UI',
                  'MySQL/SQL',
                  'AWS + Vercel',
                  'JWT + RBAC',
                  'GitHub Actions',
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl bg-black/5 px-3 py-2 text-xs text-zinc-700 ring-1 ring-black/10 dark:bg-white/5 dark:text-white/75 dark:ring-white/10"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.20),transparent_55%)]" />
              <div className="relative">
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Now building
                </p>
                <p className="mt-1 text-sm text-zinc-700 dark:text-white/70">
                  High-quality, user-centric full-stack solutions.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-zinc-700 dark:text-white/70">
                  <span className="size-2 rounded-full bg-emerald-400/80" />
                  Available for collaboration
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Section
            id="about"
            title="Professional summary"
            icon={<Sparkles className="size-4 text-zinc-800/80 dark:text-white/80" />}
          >
            <Card>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base dark:text-white/75">
                {PROFILE.summary}
              </p>
            </Card>
          </Section>

          <Section
            id="skills"
            title="Technical skills"
            icon={<Code2 className="size-4 text-zinc-800/80 dark:text-white/80" />}
          >
            <div className="grid gap-4 md:grid-cols-2">
              {skills.map((s) => (
                <Card key={s.group}>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {s.group}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full bg-black/5 px-3 py-1 text-xs text-zinc-700 ring-1 ring-black/10 dark:bg-white/5 dark:text-white/75 dark:ring-white/10"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          <Section
            id="experience"
            title="Work experience"
            icon={<BriefcaseBusiness className="size-4 text-zinc-800/80 dark:text-white/80" />}
          >
            <div className="grid gap-4">
              {experience.map((e) => (
                <ItemCard key={e.title} item={e} />
              ))}
            </div>
          </Section>

          <Section
            id="projects"
            title="Projects"
            icon={<Sparkles className="size-4 text-zinc-800/80 dark:text-white/80" />}
          >
            <div className="grid gap-4">
              {projects.map((p) => (
                <ItemCard key={p.title} item={p} />
              ))}
            </div>
          </Section>

          <Section
            id="education"
            title="Education"
            icon={<GraduationCap className="size-4 text-zinc-800/80 dark:text-white/80" />}
          >
            <div className="grid gap-4">
              {education.map((ed) => (
                <ItemCard key={ed.title} item={ed} />
              ))}
            </div>
          </Section>

          <Section
            id="certifications"
            title="Certifications"
            icon={<ShieldCheck className="size-4 text-zinc-800/80 dark:text-white/80" />}
          >
            <div className="grid gap-4">
              {certifications.map((c) => (
                <ItemCard key={c.title} item={c} />
              ))}
            </div>
          </Section>
        </div>

        <Section
          id="contact"
          title="Contact"
          icon={<Mail className="size-4 text-zinc-800/80 dark:text-white/80" />}
          className="mt-10"
        >
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-70">
              <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
            </div>
            <div className="relative grid gap-3 md:grid-cols-3">
              <a
                className="glass rounded-2xl px-4 py-3 text-sm text-zinc-700 transition hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                href={`mailto:${PROFILE.email}`}
              >
                <div className="flex items-center gap-2">
                  <Mail className="size-4" /> Email
                </div>
                <div className="mt-1 text-zinc-900 dark:text-white">{PROFILE.email}</div>
              </a>
              <a
                className="glass rounded-2xl px-4 py-3 text-sm text-zinc-700 transition hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                href={`tel:${PROFILE.phone}`}
              >
                <div className="flex items-center gap-2">
                  <Phone className="size-4" /> Phone
                </div>
                <div className="mt-1 text-zinc-900 dark:text-white">{PROFILE.phone}</div>
              </a>
              <a
                className="glass rounded-2xl px-4 py-3 text-sm text-zinc-700 transition hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="size-4" /> LinkedIn
                </div>
                <div className="mt-1 text-zinc-900 dark:text-white">Open profile</div>
              </a>
            </div>
          </Card>
        </Section>

        <footer className="mt-10 text-center text-xs text-zinc-600 dark:text-white/50">
          <div className="mx-auto h-px w-full max-w-3xl bg-black/10 dark:bg-white/10" />
          <p className="mt-5">
            Built with React + Tailwind + Framer Motion. Deployed on Vercel.
          </p>
        </footer>
      </main>
    </div>
  )
}
