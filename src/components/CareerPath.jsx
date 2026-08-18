import { useState } from 'react'
import ProductPreview from './ProductPreview.jsx'
import { ROLES } from '../data/roles.js'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function CareerPath() {
  const [activeId, setActiveId] = useState(ROLES[0].id)
  const active = ROLES.find((r) => r.id === activeId)
  const [ref, inView] = useIntersectionObserver()

  return (
    <div className="path-wrap" id="product">
    <section className={`path reveal ${inView ? 'in-view' : ''}`} ref={ref}>
      <div className="path__inner">
        <div className="path__controls">
          <div className="path__head">
            <p className="eyebrow">Your career path, made clearer</p>
            <h2 className="section-title">Choose where you want to go.</h2>
            <p className="section-sub">
              Switch targets and watch the readiness score, skill gaps, and plan update.
            </p>
          </div>

          <div className="path__tabs" role="tablist" aria-label="Target role">
            {ROLES.map((role) => (
              <button
                key={role.id}
                role="tab"
                aria-selected={role.id === activeId}
                className={`tab ${role.id === activeId ? 'tab--active' : ''}`}
                onClick={() => setActiveId(role.id)}
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>

        <div className="path__dashboard">
          <ProductPreview role={active} interactive />
        </div>
      </div>
    </section>
    </div>
  )
}
