import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#product', label: 'Product' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#features', label: 'Features' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav__row">
        <a href="#top" className="nav__brand">
          <span className="nav__mark" aria-hidden="true" />
          SkillForge <span className="nav__brand-ai">AI</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#cta" className="nav__cta">
          Get started
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="nav__mobile" aria-label="Mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#cta" className="nav__mobile-cta" onClick={() => setOpen(false)}>
            Get started
          </a>
        </nav>
      )}
    </header>
  )
}
