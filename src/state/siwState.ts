import type { PrefillPayload, WorkspaceState } from '../types/siw'

export const initialWorkspaceState: WorkspaceState = {
  industry: 'telecom',
  asset: 'radome',
  mechanism: 'water-icing',
  substrate: 'polymer-composite',
  environment: 'cold-wet',
  constraints: ['rf-transparency', 'low-downtime'],
  candidatePath: 'Hydrophobic transparency-preserving protective coating path',
  proofStatus: 'Shortlisted proof assets available for telecom / cold-wet scenario',
  nextAction: 'Request technical discussion',
}

export function deriveCandidatePath(state: WorkspaceState): string {
  if (state.industry === 'telecom' && state.mechanism === 'water-icing') {
    return 'Hydrophobic transparency-preserving protective coating path'
  }

  if (state.industry === 'wind' && state.mechanism === 'abrasion') {
    return 'Abrasion-resistant leading-edge protection path'
  }

  if (state.environment === 'marine-salt') {
    return 'Marine durability and contamination-control coating path'
  }

  if (state.mechanism === 'contamination') {
    return 'Low-adhesion, easy-clean contamination-control coating path'
  }

  return 'General outdoor protective coating evaluation path'
}

export function deriveProofStatus(state: WorkspaceState): string {
  if (state.constraints.includes('rf-transparency')) {
    return 'Prioritize RF transparency proof, weather exposure evidence, and implementation limits'
  }

  if (state.mechanism === 'abrasion') {
    return 'Prioritize durability, abrasion, and maintenance-interval evidence'
  }

  return 'Prioritize mechanism-specific lab, field, and limitation evidence'
}

export function deriveNextAction(state: WorkspaceState): string {
  if (state.constraints.includes('field-application')) {
    return 'Request implementation discussion'
  }

  if (state.constraints.includes('rf-transparency')) {
    return 'Request technical discussion'
  }

  return 'Request documentation pack'
}

export function buildPrefillPayload(state: WorkspaceState): PrefillPayload {
  return {
    industry: state.industry,
    asset: state.asset,
    mechanism: state.mechanism,
    substrate: state.substrate,
    environment: state.environment,
    constraints: state.constraints,
    candidatePath: state.candidatePath,
    nextAction: state.nextAction,
  }
}
