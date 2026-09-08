import Reveal from './Reveal'

const About = () => {
  const areas = [
    {
      title: 'WEB SECURITY',
      description:
        'Exploring vulnerabilities in modern web applications.',
    },
    {
      title: 'NETWORK SECURITY',
      description:
        'Learning networks, protocols, and offensive techniques.',
    },
    {
      title: 'LINUX',
      description:
        'Building strong foundations in Linux and the command line.',
    },
    {
      title: 'PENETRATION TESTING',
      description:
        'Hands-on labs, CTFs, and practical security research.',
    },
  ]

  return (
    <Reveal>
    <section
      id="about"
      className="border-t border-white/10 bg-[#080808]"
    >
      <div className="mx-auto max-w-7xl px-8 py-20 sm:py-28 md:py-32">

        {/* Section Heading */}

        <div className="mb-14 flex items-start gap-5 sm:mb-16 sm:gap-6">
          <span className="font-mono text-sm text-sky-400">
            01
          </span>

          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/40 sm:text-xs">
              WHO I AM
            </p>

            <h2 className="mt-4 text-4xl font-medium leading-none tracking-[-0.03em] sm:text-5xl md:text-6xl">
                ABOUT ME
            </h2>
          </div>
        </div>

        {/* Content */}

        <div className="grid gap-16 md:grid-cols-2 md:gap-20">

          {/* Introduction */}

          <div>
            <p className="max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              I'm a Computer Science graduate building my skills
              in cybersecurity with a focus on penetration testing
              and offensive security.
            </p>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
              I learn primarily through hands-on practice, documenting
              what I discover through labs, challenges, projects,
              and security research.
            </p>
          </div>

          {/* Areas */}

          <div className="border-t border-white/10">

            {areas.map((area, index) => (
              <div
                key={area.title}
                className="flex gap-5 border-b border-white/10 py-6 sm:gap-6"
              >
                <span className="pt-1 font-mono text-[10px] text-white/25 sm:text-xs">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="text-[11px] tracking-[0.15em] text-white sm:text-sm">
                    {area.title}
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-6 text-white/40 sm:text-sm">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
    </Reveal>
  )
}

export default About