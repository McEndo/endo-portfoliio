import Reveal from './Reveal'

const projects = [
  {
    number: '01',
    title: 'CUSTOM LINUX DISTRO',
    description:
        'An educational Linux distribution designed for Nigerian students, with learning tools and support for low-spec hardware.',
    type: 'SOFTWARE / LINUX',
  },
  {
    number: '02',
    title: 'SECURITY TOOLS',
    description:
      'A collection of scripts and small security tools built to automate repetitive tasks and explore practical cybersecurity techniques.',
    type: 'CYBERSECURITY',
  },
]

const Projects = () => {
  return (
    <Reveal>
    <section
      id="projects"
      className="border-t border-white/10 bg-[#080808]"
    >
      <div className="mx-auto max-w-7xl px-8 py-20 sm:py-28 md:py-32">

        {/* Section Heading */}

        <div className="mb-12 flex items-end justify-between sm:mb-14">

          <div className="flex items-start gap-5 sm:gap-6">
            <span className="font-mono text-sm text-sky-400">
              02
            </span>

            <div>
              <p className="text-[10px] tracking-[0.3em] text-white/40 sm:text-xs">
                SELECTED WORK
              </p>

              <h2 className="mt-4 text-4xl font-medium leading-none tracking-[-0.03em] sm:text-5xl md:text-6xl">
                PROJECTS
              </h2>
            </div>
          </div>

        </div>

        {/* Projects */}

        <div className="border-t border-white/10">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group grid gap-5 border-b border-white/10 py-8 transition-all duration-300 hover:translate-x-1 hover:bg-white/[0.02] sm:gap-6 sm:py-10 md:grid-cols-[80px_1fr_1.3fr_120px] md:items-center"
            >

              {/* Number */}

              <span className="font-mono text-xs text-white/25 sm:text-sm">
                {project.number}
              </span>

              {/* Title */}

              <h3 className="text-sm font-medium tracking-[0.08em] text-white sm:text-base">
                {project.title}
              </h3>

              {/* Description */}

              <p className="max-w-xl text-xs leading-6 text-white/40 sm:text-sm">
                {project.description}
              </p>

              {/* Type */}

              <span className="font-mono text-[9px] tracking-[0.15em] text-white/25 md:text-right">
                {project.type}
              </span>

            </article>
          ))}

        </div>

      </div>
    </section>
    </Reveal>
  )
}

export default Projects