type JourneyStep = 'Orient' | 'Explain' | 'Fit' | 'Prove' | 'Act'

const steps: JourneyStep[] = ['Orient', 'Explain', 'Fit', 'Prove', 'Act']

const workspaceState = {
  industry: 'Telecom',
  asset: 'Radome / antenna surface',
  mechanism: 'Water film, icing, contamination',
  substrate: 'Engineered polymer / composite',
  environment: 'Cold, wet, high-exposure outdoor',
  candidatePath: 'Hydrophobic protective coating system',
  proofStatus: 'Standards and field evidence pending binding',
  nextAction: 'Technical discussion'
}

export default function App() {
  return (
    <main className="siw-shell">
      <header className="hero-card">
        <div>
          <p className="eyebrow">SIW — Surface Intelligence Workspace</p>
          <h1>Decision-support interface for technical coatings selection</h1>
          <p className="lede">
            Governed, explainable, proof-led workflow for B2B buyers moving from problem framing to
            the correct action path.
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
        <article className="panel-card">
          <div className="panel-head">
            <h2>Persistent Workspace</h2>
            <span className="panel-tag">MVP core</span>
          </div>
          <dl className="workspace-grid">
            <div>
              <dt>Industry</dt>
              <dd>{workspaceState.industry}</dd>
            </div>
            <div>
              <dt>Asset</dt>
              <dd>{workspaceState.asset}</dd>
            </div>
            <div>
              <dt>Mechanism</dt>
              <dd>{workspaceState.mechanism}</dd>
            </div>
            <div>
              <dt>Substrate</dt>
              <dd>{workspaceState.substrate}</dd>
            </div>
            <div>
              <dt>Environment</dt>
              <dd>{workspaceState.environment}</dd>
            </div>
            <div>
              <dt>Candidate path</dt>
              <dd>{workspaceState.candidatePath}</dd>
            </div>
            <div>
              <dt>Proof state</dt>
              <dd>{workspaceState.proofStatus}</dd>
            </div>
            <div>
              <dt>Next action</dt>
              <dd>{workspaceState.nextAction}</dd>
            </div>
          </dl>
        </article>

        <article className="panel-card">
          <div className="panel-head">
            <h2>MVP module stack</h2>
            <span className="panel-tag">Phase 1</span>
          </div>
          <ul className="module-list">
            <li>Outcome Selector / Orient</li>
            <li>Explain layer</li>
            <li>Fit engine</li>
            <li>Evidence Drawer / Prove</li>
            <li>Precision Act CTA routing</li>
          </ul>
          <p className="note-text">
            Initial scaffold intentionally prioritizes continuity, explainability, and proof visibility
            ahead of AI-led behaviors.
          </p>
        </article>
      </section>

      <section className="grid three-col">
        <article className="panel-card">
          <div className="panel-head">
            <h2>Orient</h2>
            <span className="panel-tag">Entry logic</span>
          </div>
          <p>
            Capture sector, asset, degradation mechanism, substrate, and operating constraints.
          </p>
        </article>
        <article className="panel-card">
          <div className="panel-head">
            <h2>Fit</h2>
            <span className="panel-tag">Decision logic</span>
          </div>
          <p>
            Match scenario constraints to solution paths using transparent recommendation rules.
          </p>
        </article>
        <article className="panel-card">
          <div className="panel-head">
            <h2>Prove</h2>
            <span className="panel-tag">Trust layer</span>
          </div>
          <p>
            Surface standards, test summaries, field evidence, and limitations in-context.
          </p>
        </article>
      </section>
    </main>
  )
}
