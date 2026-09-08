const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[#050505]"
    >
      <div className="mx-auto max-w-7xl px-8 py-20">

        <div className="grid gap-16 md:grid-cols-2 md:items-end">

          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-sky-400">
              GET IN TOUCH
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-tight md:text-6xl">
              LET'S TALK.
            </h2>

            <a
              href="mailto:ehondormichael14@gmail.com"
              className="mt-8 inline-block border-b border-white/30 pb-2 text-sm text-white/60 transition-colors duration-300 hover:border-white hover:text-white"
            >
              ehondormichael14@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">

            <a
              href="https://github.com/McEndo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.2em] text-white/40 transition hover:text-white"
            >
              GITHUB
            </a>

            <a
              href="https://www.linkedin.com/in/michael-ehondor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.2em] text-white/40 transition hover:text-white"
            >
              LINKEDIN
            </a>

            <a
              href="https://tryhackme.com/p/McEnd0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.2em] text-white/40 transition hover:text-white"
            >
              TRYHACKME
            </a>

          </div>

        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">

          <span className="text-2xl font-semibold tracking-[-0.03em]">
            ENDO<span className="text-sky-400">.</span>
          </span>

          <p className="font-mono text-[10px] tracking-[0.1em] text-white/20">
            © 2026 ENDO. ALL RIGHTS RESERVED.
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer