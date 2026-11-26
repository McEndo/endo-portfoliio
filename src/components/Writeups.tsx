import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import { motion } from 'motion/react'
import { fieldNoteUrl, parseFieldNotes, type FieldNote } from '../lib/fieldNotes'


const Writeups = () => {
  const [notes, setNotes] = useState<FieldNote[]>([])

  useEffect(() => {
    const controller = new AbortController()

    // If the feed is unavailable, the section falls back to its Explore link.
    fetch('/field-notes.json', { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : []))
      .then((data: unknown) => setNotes(parseFieldNotes(data)))
      .catch(() => {})

    return () => controller.abort()
  }, [])

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
              <p className="text-[10px] tracking-[0.3em] text-white/50 sm:text-xs">
                TECHNICAL DOCUMENTATION
              </p>

              <h2 className="mt-4 text-4xl font-medium leading-none tracking-[-0.03em] sm:text-5xl md:text-6xl">
                FIELD NOTES
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 sm:mt-8 sm:text-base">
                Technical writeups, lab notes, and security research
                documented from hands-on work.
              </p>
            </div>
          </div>

          {/* Link */}

          <a
            href="https://notes.mcendo.dev/"
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

        {/* Latest Notes */}

        {notes.length > 0 && (
          <ol className="mt-14 border-t border-white/10 sm:mt-16">
            {notes.map((note, index) => (
              <li key={note.slug} className="border-b border-white/10">
                <a
                  href={fieldNoteUrl(note.slug)}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-2 gap-y-2 py-6 sm:py-7 md:grid-cols-[80px_1fr_110px_110px_32px] md:items-center md:gap-x-4"
                >
                  <span aria-hidden="true" className="pt-1 font-mono text-xs text-white/25 md:pt-0 sm:text-sm">
                    0{index + 1}
                  </span>

                  <span className="text-sm font-medium leading-6 tracking-[0.08em] text-white sm:text-base">
                    {note.title}
                  </span>

                  <span className="col-start-2 row-start-2 flex gap-4 font-mono text-[9px] tracking-[0.15em] text-white/50 md:contents">
                    <span>{note.type.toUpperCase()}</span>
                    <time dateTime={note.date}>{note.date}</time>
                  </span>

                  <span
                    aria-hidden="true"
                    className="col-start-3 row-start-1 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white md:col-start-auto md:row-start-auto md:text-right"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ol>
        )}

      </div>
    </section>
    </Reveal>
  )
}

export default Writeups