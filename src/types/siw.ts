export type JourneyStep = 'Orient' | 'Explain' | 'Fit' | 'Prove' | 'Act'

export type IndustryKey = 'telecom' | 'wind' | 'marine' | 'industrial'
export type MechanismKey = 'water-icing' | 'contamination' | 'uv-weathering' | 'abrasion'
export type SubstrateKey = 'polymer-composite' | 'metal' | 'glass' | 'painted-surface'
export type EnvironmentKey = 'cold-wet' | 'marine-salt' | 'desert-dust' | 'general-outdoor'

export interface SelectOption<T extends string = string> {
  value: T
  label: string
  description?: string
}

export interface WorkspaceState {
  industry: IndustryKey
  asset: string
  mechanism: MechanismKey
  substrate: SubstrateKey
  environment: EnvironmentKey
  constraints: string[]
  candidatePath: string
  proofStatus: string
  nextAction: string
}

export interface PrefillPayload {
  industry: string
  asset: string
  mechanism: string
  substrate: string
  environment: string
  constraints: string[]
  candidatePath: string
  nextAction: string
}
