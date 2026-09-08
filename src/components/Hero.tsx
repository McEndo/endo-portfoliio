import { motion } from 'motion/react'


const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505]">

      {/* Background Circle */}

      <motion.div
  initial={{ opacity: 0, scale: 0.94 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
  className="absolute -right-[280px] top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-white/10 via-white/[0.03] to-transparent sm:-right-40 sm:top-20 sm:h-[650px] sm:w-[650px]"
/>

      {/* Hero Content */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-20 sm:pt-16">

        <div className="max-w-4xl">

          {/* Label */}

          <motion.p
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
  className="mb-5 font-mono text-[9px] tracking-[0.35em] text-sky-400 sm:mb-6 sm:text-[10px]"
>
  HI, I'M 
</motion.p>

          {/* Name */}

          <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
  className="text-[clamp(3.8rem,16vw,9rem)] font-medium leading-[0.82] tracking-[-0.07em] sm:text-[clamp(4rem,10vw,9rem)]"
>
  MICHAEL
</motion.h1>

          {/* Focus */}

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
  className="mt-7 flex max-w-xl flex-wrap items-center gap-x-3 gap-y-3 text-[11px] tracking-[0.16em] text-white/70 sm:mt-8 sm:gap-4 sm:text-lg sm:tracking-[0.2em]"
>
            <span>PENETRATION TESTING</span>

            <span className="text-sky-400">
              /
            </span>

            <span>OFFENSIVE SECURITY</span>
          </motion.div>

          {/* Description */}

          <motion.p
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
  className="mt-7 max-w-lg text-sm leading-7 text-white/50 sm:mt-8 sm:text-base"
>
  I break things to understand how they work
  and help build more secure systems.
</motion.p>

          {/* Actions */}

          <motion.div
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
  className="mt-10 flex flex-wrap items-center gap-7 sm:mt-12 sm:gap-8"
>

            <a
              href="#field-notes"
              className="border border-white/40 px-6 py-3.5 text-[9px] tracking-[0.2em] transition hover:border-white hover:bg-white hover:text-black sm:px-7 sm:py-4 sm:text-[10px]"
            >
              FIELD NOTES
              <span className="ml-5 sm:ml-6">
                →
              </span>
            </a>

            <a
              href="#about"
              className="border-b border-sky-400 pb-2 text-[9px] tracking-[0.2em] text-white/70 transition hover:text-white sm:text-[10px]"
            >
              ABOUT ME
            </a>

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="text-[9px] tracking-[0.3em] text-white/30">
          SCROLL
        </span>

        <div className="h-12 w-px bg-white/20" />
      </div>

    </section>
  )
}

export default Hero