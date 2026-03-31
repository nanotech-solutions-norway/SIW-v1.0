import { assetOptionsByIndustry, constraintOptions, environmentOptions, industryOptions, mechanismOptions, substrateOptions } from '../../data/taxonomy'
import { buildPrefillPayload, deriveCandidatePath, deriveNextAction, deriveProofStatus } from '../../state/siwState'
import type { WorkspaceState } from '../../types/siw'

interface OutcomeSelectorProps {
  state: WorkspaceState
  onChange: (nextState: WorkspaceState) => void
}

export function OutcomeSelector({ state, onChange }: OutcomeSelectorProps) {
  const assetOptions = assetOptionsByIndustry[state.industry]
  const prefillPayload = buildPrefillPayload(state)

  function updateState(partial: Partial<WorkspaceState>) {
    const nextState = {
      ...state,
      ...partial,
    }

    const enrichedState: WorkspaceState = {
      ...nextState,
      candidatePath: deriveCandidatePath(nextState),
      proofStatus: deriveProofStatus(nextState),
      nextAction: deriveNextAction(nextState),
    }

    onChange(enrichedState)
  }

  function toggleConstraint(constraint: string) {
    const nextConstraints = state.constraints.includes(constraint)
      ? state.constraints.filter((item) => item !== constraint)
      : [...state.constraints, constraint]

    updateState({ constraints: nextConstraints })
  }

  return (
    <article className="panel-card">
      <div className="panel-head">
        <h2>Outcome Selector</h2>
        <span className="panel-tag">Orient</span>
      </div>

      <p className="note-text">
        Capture the buyer scenario early so the interface can carry context, explain fit logic, and route to the
        correct next action.
      </p>

      <div className="form-grid">
        <label>
          <span>Industry</span>
          <select
            value={state.industry}
            onChange={(event) => {
              const industry = event.target.value as WorkspaceState['industry']
              const defaultAsset = assetOptionsByIndustry[industry][0]?.value ?? ''
              updateState({ industry, asset: defaultAsset })
            }}
          >
            {industryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Asset</span>
          <select value={state.asset} onChange={(event) => updateState({ asset: event.target.value })}>
            {assetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Mechanism</span>
          <select
            value={state.mechanism}
            onChange={(event) => updateState({ mechanism: event.target.value as WorkspaceState['mechanism'] })}
          >
            {mechanismOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Substrate</span>
          <select
            value={state.substrate}
            onChange={(event) => updateState({ substrate: event.target.value as WorkspaceState['substrate'] })}
          >
            {substrateOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Environment</span>
          <select
            value={state.environment}
            onChange={(event) => updateState({ environment: event.target.value as WorkspaceState['environment'] })}
          >
            {environmentOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="constraint-group">
        <p className="constraint-title">Operating constraints</p>
        <div className="checkbox-grid">
          {constraintOptions.map((option) => (
            <label key={option.value} className="checkbox-card">
              <input
                type="checkbox"
                checked={state.constraints.includes(option.value)}
                onChange={() => toggleConstraint(option.value)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="recommendation-card">
        <div>
          <p className="recommendation-label">Derived recommendation path</p>
          <h3>{state.candidatePath}</h3>
          <p className="note-text">{state.proofStatus}</p>
        </div>
        <div className="cta-row">
          <button type="button">{state.nextAction}</button>
          <button type="button" className="button-secondary">Request sample</button>
        </div>
      </div>

      <details className="payload-panel">
        <summary>Scenario payload preview</summary>
        <pre>{JSON.stringify(prefillPayload, null, 2)}</pre>
      </details>
    </article>
  )
}
