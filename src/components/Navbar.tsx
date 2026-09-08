import { useEffect, useState } from 'react'

const Navbar = () => {
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 10) {
        setVisible(true)
      } else if (currentScrollY < lastScrollY) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setVisible(false)
        setMenuOpen(false)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* Navigation */}

      <header className="fixed left-0 top-0 z-50 w-full">
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-8 py-7 transition-transform duration-300 ${
            visible ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* Logo */}

          <a
            href="#"
            onClick={closeMenu}
            className="relative z-50 text-xl font-semibold tracking-[-0.03em]"
          >
            ENDO<span className="text-sky-400">.</span>
          </a>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-10 text-[10px] tracking-[0.2em] text-white/50 md:flex">
            <a
              href="#about"
              className="transition hover:text-white"
            >
              ABOUT
            </a>

            <a
              href="#projects"
              className="transition hover:text-white"
            >
              PROJECTS
            </a>

            <a
              href="#credentials"
              className="transition hover:text-white"
            >
              CREDENTIALS
            </a>

            <a
              href="#field-notes"
              className="transition hover:text-white"
            >
              FIELD NOTES
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="font-mono text-[10px] tracking-[0.2em] text-white/50 transition hover:text-white md:hidden"
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-40 bg-[#050505] transition-opacity duration-300 md:hidden ${
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">

          <div className="flex flex-col gap-8">

            <a
              href="#about"
              onClick={closeMenu}
              className="text-4xl font-medium tracking-[-0.04em] text-white transition"
            >
              ABOUT
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-4xl font-medium tracking-[-0.04em] text-white transition"
            >
              PROJECTS
            </a>

            <a
              href="#credentials"
              onClick={closeMenu}
              className="text-4xl font-medium tracking-[-0.04em] text-white transition"
            >
              CREDENTIALS
            </a>

            <a
              href="#field-notes"
              onClick={closeMenu}
              className="text-4xl font-medium tracking-[-0.04em] text-white transition"
            >
              FIELD NOTES
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-4xl font-medium tracking-[-0.04em] text-white transition"
            >
              CONTACT
            </a>

          </div>

          <div className="absolute bottom-10 left-8">
            <p className="font-mono text-[9px] tracking-[0.2em] text-white/20">
              ENDO. / CYBERSECURITY
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar