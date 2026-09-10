import Reveal from './Reveal'
import { motion } from 'motion/react'


const Writeups = () => {
  return (
    <Reveal>
    <section
      id="field-notes"
      className="border-t border-white/10 bg-[#080808]"
    >
      <div className="mx-auto max-w-7xl px-8 py-20 sm:py-28 md:py-32">

        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between md:gap-16">

          {/* Heading */}

          <div className="flex items-start gap-5 sm:gap-6">
            <span className="font-mono text-sm text-sky-400">
              04
            </span>

            <div>
              <p className="text-[10px] tracking-[0.3em] text-white/40 sm:text-xs">
                TECHNICAL DOCUMENTATION
              </p>

              <h2 className="mt-4 text-4xl font-medium leading-none tracking-[-0.03em] sm:text-5xl md:text-6xl">
                FIELD NOTES
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/40 sm:mt-8 sm:text-base">
                Technical writeups, lab notes, and security research
                documented from hands-on work.
              </p>
            </div>
          </div>

          {/* Link */}

          <a
            href="https://endo-field-notes.netlify.app/"
            className="group self-start border border-white/30 px-6 py-3.5 text-[9px] tracking-[0.2em] text-white/70 transition hover:border-white hover:bg-white hover:text-black sm:px-7 sm:py-4 sm:text-[10px] md:self-auto"
          >
            EXPLORE FIELD NOTES
           <motion.span
  className="ml-5 inline-block transition-transform duration-300 group-hover:translate-x-1 sm:ml-6"
>
  →
</motion.span>
          </a>

        </div>

      </div>
    </section>
    </Reveal>
  )
}

export default Writeups