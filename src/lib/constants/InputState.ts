export type InputState =
  'success' |
  'error' |
  'warning' |
  'information'

export const InputStates: {
  SUCCESS: InputState,
  ERROR: InputState,
  WARNING: InputState,
  INFORMATION: InputState
} = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFORMATION: 'information',
}