import Reveal from './Reveal'

const projects = [
  {
    number: '01',
    title: 'CUSTOM LINUX DISTRO',
    description:
        'An educational Linux distribution designed for Nigerian students, with learning tools and support for low-spec hardware.',
    type: 'SOFTWARE / LINUX',
    tools: [],
  },
  {
    number: '02',
    title: 'SECURITY TOOLS',
    description:
      'Purpose-built security tools developed through hands-on security research and testing.',
    type: 'CYBERSECURITY',
    tools: [
      {
        label: 'TOOL 01',
        name: 'ENDOSCAN',
        version: 'v1.0.0',
        description:
          'A lightweight concurrent TCP Connect port scanner for authorized environments, built in Python with bounded concurrency, configurable execution, validated input, and automated tests.',
        metadata: ['TCP CONNECT', 'PYTHON', 'STANDARD LIBRARY', 'TESTED'],
        repository: 'https://github.com/McEndo/endoscan',
      },
    ],
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
              className="group border-b border-white/10 py-8 transition-all duration-300 hover:translate-x-1 hover:bg-white/[0.02] sm:py-10"
            >

              <div className="grid gap-5 sm:gap-6 md:grid-cols-[80px_1fr_1.3fr_120px] md:items-center">

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

              </div>

              {project.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="mt-8 border-t border-white/10 pt-8 md:ml-[80px] md:mt-10 md:pt-10"
                >
                  <div className="grid gap-8 md:grid-cols-[1fr_1.3fr_120px] md:items-start">

                    <div>
                      <p className="font-mono text-[9px] tracking-[0.2em] text-sky-400 sm:text-[10px]">
                        {tool.label}
                      </p>

                      <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h4 className="text-base font-medium tracking-[0.08em] text-white">
                          {tool.name}
                        </h4>

                        <span className="font-mono text-[9px] tracking-[0.12em] text-white/30">
                          {tool.version}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="max-w-xl text-xs leading-6 text-white/50 sm:text-sm sm:leading-7">
                        {tool.description}
                      </p>

                      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[9px] tracking-[0.08em] text-white/30 sm:text-[10px]">
                        {tool.metadata.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={tool.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${tool.name} on GitHub`}
                      className="group/link inline-flex w-fit items-center border-b border-white/20 pb-2 font-mono text-[9px] tracking-[0.15em] text-white/50 transition-colors duration-300 hover:border-sky-400 hover:text-white md:justify-self-end"
                    >
                      GITHUB
                      <span className="ml-3 transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                    </a>

                  </div>
                </div>
              ))}

            </article>
          ))}

        </div>

      </div>
    </section>
    </Reveal>
  )
}

export default Projects
