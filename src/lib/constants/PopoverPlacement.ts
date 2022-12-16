export type PopoverBodyPlacement =
  'above' |
  'before' |
  'after'

export type PopoverBodyPosition =
  'center' |
  'middle' |
  'bottom' |
  'right'

export type PopoverArrowPlacement =
  'arrow-left' |
  'arrow-right' |
  'arrow-bottom'

export type PopoverArrowPosition =
  'arrow-x-center' |
  'arrow-x-end' |
  'arrow-y-center' |
  'arrow-y-end'

export interface PopoverPlacement {
  bodyPlacement?: PopoverBodyPlacement
  bodyPosition?: PopoverBodyPosition
  arrowPlacement?: PopoverArrowPlacement
  arrowPosition?: PopoverArrowPosition
}

export const PopoverPlacements: {
  ABOVE_START: PopoverPlacement,
  ABOVE_CENTER: PopoverPlacement,
  ABOVE_END: PopoverPlacement,
  BEFORE_START: PopoverPlacement,
  BEFORE_CENTER: PopoverPlacement,
  BEFORE_END: PopoverPlacement,
  BOTTOM_START: PopoverPlacement,
  BOTTOM_CENTER: PopoverPlacement,
  BOTTOM_END: PopoverPlacement,
  AFTER_START: PopoverPlacement,
  AFTER_CENTER: PopoverPlacement,
  AFTER_END: PopoverPlacement,
} = {
  ABOVE_START: {
    bodyPlacement: 'above',
    bodyPosition: undefined,
    arrowPlacement: 'arrow-bottom',
    arrowPosition: undefined,
  },
  ABOVE_CENTER: {
    bodyPlacement: 'above',
    bodyPosition: 'center',
    arrowPlacement: 'arrow-bottom',
    arrowPosition: 'arrow-x-center',
  },
  ABOVE_END: {
    bodyPlacement: 'above',
    bodyPosition: 'right',
    arrowPlacement: 'arrow-bottom',
    arrowPosition: 'arrow-x-end',
  },
  BEFORE_START: {
    bodyPlacement: 'before',
    bodyPosition: undefined,
    arrowPlacement: 'arrow-right',
    arrowPosition: undefined,
  },
  BEFORE_CENTER: {
    bodyPlacement: 'before',
    bodyPosition: 'middle',
    arrowPlacement: 'arrow-right',
    arrowPosition: 'arrow-y-center',
  },
  BEFORE_END: {
    bodyPlacement: 'before',
    bodyPosition: 'bottom',
    arrowPlacement: 'arrow-right',
    arrowPosition: 'arrow-y-end',
  },
  BOTTOM_START: {
    bodyPlacement: undefined,
    bodyPosition: undefined,
    arrowPlacement: undefined,
    arrowPosition: undefined,
  },
  BOTTOM_CENTER: {
    bodyPlacement: undefined,
    bodyPosition: 'center',
    arrowPlacement: undefined,
    arrowPosition: 'arrow-x-center',
  },
  BOTTOM_END: {
    bodyPlacement: undefined,
    bodyPosition: 'right',
    arrowPlacement: undefined,
    arrowPosition: 'arrow-x-end',
  },
  AFTER_START: {
    bodyPlacement: 'after',
    bodyPosition: undefined,
    arrowPlacement: 'arrow-left',
    arrowPosition: undefined,
  },
  AFTER_CENTER: {
    bodyPlacement: 'after',
    bodyPosition: 'middle',
    arrowPlacement: 'arrow-left',
    arrowPosition: 'arrow-y-center',
  },
  AFTER_END: {
    bodyPlacement: 'after',
    bodyPosition: 'bottom',
    arrowPlacement: 'arrow-left',
    arrowPosition: 'arrow-y-end',
  },
}