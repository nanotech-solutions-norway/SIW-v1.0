import type {
  EnvironmentKey,
  IndustryKey,
  MechanismKey,
  SelectOption,
  SubstrateKey,
} from '../types/siw'

export const industryOptions: SelectOption<IndustryKey>[] = [
  { value: 'telecom', label: 'Telecom', description: 'Antennas, radomes, microwave links' },
  { value: 'wind', label: 'Wind', description: 'Blades, nacelles, exposed composite surfaces' },
  { value: 'marine', label: 'Marine / Offshore', description: 'Salt, fouling, severe exposure' },
  { value: 'industrial', label: 'Industrial', description: 'Plants, utilities, process assets' },
]

export const mechanismOptions: SelectOption<MechanismKey>[] = [
  { value: 'water-icing', label: 'Water film / icing' },
  { value: 'contamination', label: 'Contamination / fouling' },
  { value: 'uv-weathering', label: 'UV / weathering' },
  { value: 'abrasion', label: 'Abrasion / particle impact' },
]

export const substrateOptions: SelectOption<SubstrateKey>[] = [
  { value: 'polymer-composite', label: 'Polymer / composite' },
  { value: 'metal', label: 'Metal' },
  { value: 'glass', label: 'Glass' },
  { value: 'painted-surface', label: 'Painted surface' },
]

export const environmentOptions: SelectOption<EnvironmentKey>[] = [
  { value: 'cold-wet', label: 'Cold / wet exposure' },
  { value: 'marine-salt', label: 'Marine / salt exposure' },
  { value: 'desert-dust', label: 'Desert / dust exposure' },
  { value: 'general-outdoor', label: 'General outdoor exposure' },
]

export const assetOptionsByIndustry: Record<IndustryKey, SelectOption[]> = {
  telecom: [
    { value: 'radome', label: 'Radome' },
    { value: 'antenna-surface', label: 'Antenna surface' },
    { value: 'tower-component', label: 'Tower component' },
  ],
  wind: [
    { value: 'blade-leading-edge', label: 'Blade leading edge' },
    { value: 'blade-surface', label: 'Blade surface' },
    { value: 'nacelle-panel', label: 'Nacelle panel' },
  ],
  marine: [
    { value: 'topside-equipment', label: 'Topside equipment' },
    { value: 'sensor-window', label: 'Sensor / instrument window' },
    { value: 'external-cladding', label: 'External cladding' },
  ],
  industrial: [
    { value: 'filter-housing', label: 'Filter housing' },
    { value: 'duct-surface', label: 'Duct surface' },
    { value: 'process-window', label: 'Process window / cover' },
  ],
}

export const constraintOptions: SelectOption[] = [
  { value: 'rf-transparency', label: 'RF transparency critical' },
  { value: 'low-downtime', label: 'Downtime must be minimized' },
  { value: 'harsh-weather', label: 'High weather severity' },
  { value: 'easy-cleaning', label: 'Low cleaning burden required' },
  { value: 'field-application', label: 'Field application required' },
]
