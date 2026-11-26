import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

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

  useEffect(() => {
    if (!menuOpen) return

    const header = headerRef.current
    const menu = menuRef.current
    const pageContent = Array.from(header?.parentElement?.children ?? []).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement && element !== header && element !== menu,
    )

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    pageContent.forEach((element) => {
      element.inert = true
    })
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      pageContent.forEach((element) => {
        element.inert = false
      })
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* Navigation */}

      <header
        ref={headerRef}
        onFocusCapture={() => setVisible(true)}
        className={`fixed left-0 top-0 z-50 w-full transition-[translate] duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-8 py-7"
        >
          {/* Logo */}

          <a
            href="#"
            onClick={closeMenu}
            className="relative z-50 inline-flex items-center gap-2 text-xl font-semibold tracking-[-0.03em] after:absolute after:-inset-y-2 after:inset-x-0"
          >
            <img src="/endo-logo-small.png" alt="" aria-hidden="true" width={28} height={28} className="h-7 w-7 shrink-0 object-contain" />
            <span>ENDO<span className="text-sky-400">.</span></span>
          </a>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-10 text-[10px] tracking-[0.2em] text-white/50 md:flex">
            <a
              href="#about"
              className="relative after:absolute after:-inset-x-2 after:-inset-y-4 transition hover:text-white"
            >
              ABOUT
            </a>

            <a
              href="#projects"
              className="relative after:absolute after:-inset-x-2 after:-inset-y-4 transition hover:text-white"
            >
              PROJECTS
            </a>

            <a
              href="#credentials"
              className="relative after:absolute after:-inset-x-2 after:-inset-y-4 transition hover:text-white"
            >
              CREDENTIALS
            </a>

            <a
              href="#field-notes"
              className="relative after:absolute after:-inset-x-2 after:-inset-y-4 transition hover:text-white"
            >
              FIELD NOTES
            </a>

            <a
              href="#contact"
              className="relative after:absolute after:-inset-x-2 after:-inset-y-4 transition hover:text-white"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Button */}

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="relative after:absolute after:-inset-x-2 after:-inset-y-4 font-mono text-[10px] tracking-[0.2em] text-white/50 transition hover:text-white md:hidden"
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}

      <div
        ref={menuRef}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
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
            <p className="font-mono text-[9px] tracking-[0.2em] text-white/50">
              ENDO. / CYBERSECURITY
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar
