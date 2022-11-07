export type Semantic =
  'positive' |
  'negative' |
  'critical' |
  'informative'

export const Semantics: {
  POSITIVE: Semantic,
  NEGATIVE: Semantic,
  CRITICAL: Semantic,
  INFORMATIVE: Semantic
} = {
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
  CRITICAL: 'critical',
  INFORMATIVE: 'informative'
}