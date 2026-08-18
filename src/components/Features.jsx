import { Target, Route, Hammer, TrendingUp } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const FEATURES = [
  {
    icon: Target,
    title: 'Skill gap analysis',
    body: 'Understand exactly which skills to focus on next, measured against your target role.',
    visual: (
      <div className="feature-visual">
        <div className="feature-visual__row">
          <span>System Design</span>
          <span className="feature-visual__value">51%</span>
        </div>
        <div className="feature-visual__bar"><div className="feature-visual__fill" style={{width: '51%'}}></div></div>
        <div className="feature-visual__tag">Priority gap</div>
      </div>
    )
  },
  {
    icon: Route,
    title: 'Personalized roadmaps',
    body: 'Turn your target role into a sequence of actionable, ordered learning steps.',
    visual: (
      <div className="feature-visual feature-visual--list">
        <div><span className="feature-visual__num">01</span> Learn</div>
        <div className="feature-visual__line"></div>
        <div><span className="feature-visual__num">02</span> Build</div>
        <div className="feature-visual__line"></div>
        <div><span className="feature-visual__num">03</span> Ship</div>
      </div>
    )
  },
  {
    icon: Hammer,
    title: 'Project guidance',
    body: 'Build the specific projects that strengthen your portfolio for the roles you want.',
    visual: (
      <div className="feature-visual">
        <div className="feature-visual__label">Next project:</div>
        <div className="feature-visual__title">API Architecture</div>
        <div className="feature-visual__skills">REST ? Redis ? System Design</div>
      </div>
    )
  },
  {
    icon: TrendingUp,
    title: 'Progress tracking',
    body: 'Watch your readiness score move as you close each gap, one skill at a time.',
    visual: (
      <div className="feature-visual feature-visual--center">
        <div className="feature-visual__big">78%</div>
        <div className="feature-visual__label">Career readiness</div>
      </div>
    )
  },
]

export default function Features() {
  const [ref, inView] = useIntersectionObserver()

  return (
    <section className={`features reveal ${inView ? 'in-view' : ''}`} id="features" ref={ref}>
      <p className="eyebrow">Features</p>
      <h2 className="section-title">Everything points to your next step.</h2>

      <div className="features__grid">
        {FEATURES.map(({ icon: Icon, title, body, visual }, index) => (
          <div className="feature-card" key={title} style={{'--delay': index}}>
            <Icon size={20} strokeWidth={2} className="feature-card__icon" aria-hidden="true" />
            <h3 className="feature-card__title">{title}</h3>
            <p className="feature-card__body">{body}</p>
            {visual}
          </div>
        ))}
      </div>
    </section>
  )
}
