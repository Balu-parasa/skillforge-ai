import { useState, useEffect } from 'react'
import ReadinessGauge from './ReadinessGauge.jsx'

export default function ProductPreview({ role, interactive = false }) {
  const [analyzing, setAnalyzing] = useState(false)

  useEffect(() => {
    if (interactive) {
      setAnalyzing(true)
      const timer = setTimeout(() => {
        setAnalyzing(false)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [role.id, interactive])

  return (
    <div className={`preview ${interactive ? 'preview--interactive' : ''}`}>
      <div className="preview__chrome">
        <span className="preview__dot" />
        <span className="preview__dot" />
        <span className="preview__dot" />
        <span className="preview__chrome-label">SkillForge AI ?" Dashboard (sample data)</span>
      </div>

      <div className="preview__body" key={role.id}>
        <div className="preview__top">
          <ReadinessGauge value={role.readiness} />
          <div className="preview__target">
            <span className="preview__target-label">Target role</span>
            <span className="preview__target-value">{role.label}</span>
            {interactive && (
              <span className={`preview__status ${analyzing ? 'preview__status--analyzing' : 'preview__status--ready'}`}>
                <span className="preview__status-dot"></span>
                {analyzing ? 'Analyzing career path...' : 'AI analysis ready'}
              </span>
            )}
          </div>
        </div>

        <div className="preview__skills">
          {role.skills.map((skill, index) => (
            <div 
              className={`skillbar ${analyzing ? 'skillbar--analyzing' : ''}`} 
              key={skill.name}
              style={{ '--delay': index }}
            >
              <div className="skillbar__row">
                <span className="skillbar__name">{skill.name}</span>
                <span className="skillbar__value">{skill.value}%</span>
              </div>
              <div className="skillbar__track">
                <div className="skillbar__fill" style={{ width: analyzing ? '0%' : `${skill.value}%` }} />
              </div>
              {skill.value < 60 && (
                <div className="skillbar__hover-gap">Priority gap</div>
              )}
            </div>
          ))}
        </div>

        <div className={`preview__reco ${analyzing ? 'preview__reco--analyzing' : ''}`}>
          <span className="preview__reco-label">AI recommendation</span>
          <div className="preview__reco-content">
            {analyzing ? (
              <p className="preview__reco-text">Analyzing your skill gaps...</p>
            ) : (
              <>
                <p className="preview__reco-text">{role.recommendation}</p>
                <ul className="preview__steps">
                  {role.nextSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
