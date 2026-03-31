import { useMemo, useState } from 'react'
import { WorkspaceSummary } from './components/WorkspaceSummary'
import { OutcomeSelector } from './modules/orient/OutcomeSelector'
import { initialWorkspaceState } from './state/siwState'
import type { JourneyStep } from './types/siw'

const steps: JourneyStep[] = ['Orient', 'Explain', 'Fit', 'Prove', 'Act']

export default function App() {
  const [workspaceState, setWorkspaceState] = useState(initialWorkspaceState)

  const explainSummary = useMemo(() => {
    if (workspaceState.mechanism === 'water-icing') {
      return 'Surface water retention and freezing can degrade performance, increase maintenance burden, and compromise availability in exposed assets.'
    }

    if (workspaceState.mechanism === 'abrasion') {
      return 'Particle impact and repeated exposure can remove performance-critical surface function and shorten maintenance intervals.'
    }

    if (workspaceState.mechanism === 'contamination') {
      return 'Contamination changes surface behavior over time and increases cleaning burden, inspection frequency, and performance risk.'
    }

    return 'Long-term outdoor exposure can degrade surface function, appearance, and protection unless the intervention path is matched correctly.'
  }, [workspaceState.mechanism])

  return (
    <main className="siw-shell">
      <header className="hero-card">
        <div>
          <p className="eyebrow">SIW — Surface Intelligence Workspace</p>
          <h1>Cross-page decision support for technical coatings selection</h1>
          <p className="lede">
            Structured, explainable interface for moving buyers from scenario framing to fit, proof,
            and the correct commercial or technical next step.
          </p>
        </div>
        <div className="journey-strip" aria-label="SIW journey">
          {steps.map((step) => (
            <span key={step} className="journey-pill">
              {step}
            </span>
          ))}
        </div>
      </header>

      <section className="grid two-col">
        <WorkspaceSummary state={workspaceState} />
        <article className="panel-card">
          <div className="panel-head">
            <h2>Explain layer</h2>
            <span className="panel-tag">Mechanism clarity</span>
          </div>
          <p className="note-text">{explainSummary}</p>
          <p className="note-text">
            This module should later bind science explanation, intervention principle, prerequisites,
            and limitations to the selected scenario.
          </p>
        </article>
      </section>

      <section className="grid one-col">
        <OutcomeSelector state={workspaceState} onChange={setWorkspaceState} />
      </section>

      <section className="grid three-col">
        <article className="panel-card">
          <div className="panel-head">
            <h2>Fit</h2>
            <span className="panel-tag">Next module</span>
          </div>
          <p className="note-text">
            Expand the rules engine into product-path scoring, exclusions, caution flags, and shortlist comparison.
          </p>
        </article>
        <article className="panel-card">
          <div className="panel-head">
            <h2>Prove</h2>
            <span className="panel-tag">Next module</span>
          </div>
          <p className="note-text">
            Bind standards, case evidence, test summaries, and limitations directly to the active scenario context.
          </p>
        </article>
        <article className="panel-card">
          <div className="panel-head">
            <h2>Act</h2>
            <span className="panel-tag">Next module</span>
          </div>
          <p className="note-text">
            Route users into technical discussion, sample request, documentation pack, or RFQ with prefilled context.
          </p>
        </article>
      </section>
    </main>
  )
}
