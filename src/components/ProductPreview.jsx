import { useState, useEffect, useRef } from 'react'
import ReadinessGauge from './ReadinessGauge.jsx'
import { useCountUp } from '../hooks/useCountUp'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

function SkillBarItem({ skill, index, inView }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    // Synchronize animation with hero entrance (wait ~300ms for dashboard to settle)
    const t = setTimeout(() => setMounted(true), 300)
    return () => clearTimeout(t)
  }, [])
  const targetValue = !mounted || !inView ? 0 : skill.value
  const animatedValue = useCountUp(targetValue, 1200)

  return (
    <div 
      className="skillbar" 
      style={{ '--delay': index }}
    >
      <div className="skillbar__row">
        <span className="skillbar__name">{skill.name}</span>
        <span className="skillbar__value">{animatedValue}%</span>
      </div>
      <div className="skillbar__track">
        <div className="skillbar__fill" style={{ width: `${targetValue}%` }} />
      </div>
      {skill.value < 60 && (
        <div className="skillbar__hover-gap">Priority gap</div>
      )}
    </div>
  )
}

export default function ProductPreview({ role, interactive = false }) {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.2 })

  return (
    <div ref={ref} className={`preview ${interactive ? 'preview--interactive' : ''}`}>
      <div className="preview__chrome">
        <span className="preview__dot" />
        <span className="preview__dot" />
        <span className="preview__dot" />
        <span className="preview__chrome-label">SkillForge AI — Dashboard (sample data)</span>
      </div>

      <div className="preview__body" key={role.id}>
        <div className="preview__top">
          <ReadinessGauge value={!inView ? 0 : role.readiness} />
          <div className="preview__target">
            <span className="preview__target-label">Target role</span>
            <span className="preview__target-value">{role.label}</span>
            {interactive && (
              <span className="preview__status preview__status--ready">
                <span className="preview__status-dot"></span>
                AI analysis ready
              </span>
            )}
          </div>
        </div>

        <div className="preview__skills">
          {role.skills.map((skill, index) => (
            <SkillBarItem 
              key={skill.name} 
              skill={skill} 
              index={index} 
              inView={inView}
            />
          ))}
        </div>

        <div className="preview__reco">
          <span className="preview__reco-label">AI recommendation</span>
          <div className="preview__reco-content">
            <>
              <p className="preview__reco-text">{role.recommendation}</p>
              <ul className="preview__steps">
                {role.nextSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </>
          </div>
        </div>
      </div>
    </div>
  )
}
