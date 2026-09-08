import Reveal from './Reveal'

const Credentials = () => {
  return (
    <Reveal>
    <section
      id="credentials"
      className="border-t border-white/10 bg-[#050505]"
    >
      <div className="mx-auto max-w-7xl px-8 py-20 sm:py-28 md:py-32">

        {/* Section Heading */}

        <div className="mb-14 flex items-start gap-5 sm:mb-16 sm:gap-6">
          <span className="font-mono text-sm text-sky-400">
            03
          </span>

          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/40 sm:text-xs">
              EXPERIENCE & LEARNING
            </p>

            <h2 className="mt-4 text-4xl font-medium leading-none tracking-[-0.03em] sm:text-5xl md:text-6xl">
              CREDENTIALS
            </h2>
          </div>
        </div>

        <div className="border-t border-white/10">

          {/* Professional Certifications */}

          <div className="grid gap-8 border-b border-white/10 py-8 sm:py-10 md:grid-cols-[1fr_2fr]">

            <div>
              <p className="font-mono text-[9px] tracking-[0.2em] text-sky-400 sm:text-[10px]">
                PROFESSIONAL
              </p>

              <h3 className="mt-3 text-[11px] tracking-[0.15em] text-white sm:text-sm">
                CERTIFICATIONS
              </h3>
            </div>

            <div>
              <p className="text-sm leading-7 text-white/40">
                No professional certifications yet.
              </p>

              <p className="mt-2 font-mono text-[9px] tracking-[0.1em] text-white/20 sm:text-[10px]">
                BUILDING THE FOUNDATION FIRST.
              </p>
            </div>

          </div>

          {/* TryHackMe Learning Paths */}

          <div className="grid gap-8 py-8 sm:py-10 md:grid-cols-[1fr_2fr]">

            <div>
              <p className="font-mono text-[9px] tracking-[0.2em] text-sky-400 sm:text-[10px]">
                TRYHACKME
              </p>

              <h3 className="mt-3 text-[11px] tracking-[0.15em] text-white sm:text-sm">
                LEARNING PATHS
              </h3>
            </div>

            <div className="divide-y divide-white/10 border-t border-white/10">

              {/* Jr Penetration Tester */}

              <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">

                <div>
                  <p className="text-sm text-white">
                    Jr Penetration Tester
                  </p>

                  <p className="mt-2 max-w-xl text-xs leading-6 text-white/30">
                    Enumeration, exploitation, penetration testing
                    methodology, and industry-standard tooling.
                  </p>
                </div>

                <span className="font-mono text-[9px] text-white/25 sm:shrink-0 sm:text-[10px]">
                  2025
                </span>

              </div>

              {/* Web Application Pentesting */}

              <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">

                <div>
                  <p className="text-sm text-white">
                    Web Application Pentesting
                  </p>

                  <p className="mt-2 max-w-xl text-xs leading-6 text-white/30">
                    OWASP Top 10, SQL injection, XSS, authentication
                    bypass, and web application security.
                  </p>
                </div>

                <span className="font-mono text-[9px] text-white/25 sm:shrink-0 sm:text-[10px]">
                  2025
                </span>

              </div>

              {/* Cyber Security 101 */}

              <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">

                <div>
                  <p className="text-sm text-white">
                    Cyber Security 101
                  </p>

                  <p className="mt-2 max-w-xl text-xs leading-6 text-white/30">
                    Linux, Windows, networking, cryptography,
                    and vulnerability assessment fundamentals.
                  </p>
                </div>

                <span className="font-mono text-[9px] text-white/25 sm:shrink-0 sm:text-[10px]">
                  2024
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
    </Reveal>
  )
}

export default Credentials