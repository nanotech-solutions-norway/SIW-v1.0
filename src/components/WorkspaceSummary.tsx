import type { WorkspaceState } from '../types/siw'

interface WorkspaceSummaryProps {
  state: WorkspaceState
}

export function WorkspaceSummary({ state }: WorkspaceSummaryProps) {
  return (
    <article className="panel-card">
      <div className="panel-head">
        <h2>Persistent Workspace</h2>
        <span className="panel-tag">MVP core</span>
      </div>
      <dl className="workspace-grid">
        <div>
          <dt>Industry</dt>
          <dd>{state.industry}</dd>
        </div>
        <div>
          <dt>Asset</dt>
          <dd>{state.asset}</dd>
        </div>
        <div>
          <dt>Mechanism</dt>
          <dd>{state.mechanism}</dd>
        </div>
        <div>
          <dt>Substrate</dt>
          <dd>{state.substrate}</dd>
        </div>
        <div>
          <dt>Environment</dt>
          <dd>{state.environment}</dd>
        </div>
        <div>
          <dt>Candidate path</dt>
          <dd>{state.candidatePath}</dd>
        </div>
        <div>
          <dt>Proof state</dt>
          <dd>{state.proofStatus}</dd>
        </div>
        <div>
          <dt>Next action</dt>
          <dd>{state.nextAction}</dd>
        </div>
      </dl>
    </article>
  )
}
