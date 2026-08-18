import { ArrowRight } from 'lucide-react'
import ProductPreview from './ProductPreview.jsx'
import { ROLES } from '../data/roles.js'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function Hero() {
  const [ref, inView] = useIntersectionObserver()

  return (
    <section className={`hero reveal ${inView ? 'in-view' : ''}`} ref={ref}>
      <div className="hero__copy">
        <p className="eyebrow">Acdyon Internship Assessment</p>
        <h1 className="hero__title">
          Know exactly what to learn next.
        </h1>
        <p className="hero__sub">
          Stop guessing what skills you need. SkillForge AI analyzes your current readiness and gives you a practical, step-by-step roadmap to land your target role.
        </p>

        <div className="hero__actions">
          <a href="#cta" className="btn btn--primary">
            Build my roadmap
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a href="#product" className="btn btn--ghost">
            See how it works
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <ProductPreview role={ROLES[0]} interactive={true} />
      </div>
    </section>
  )
}
