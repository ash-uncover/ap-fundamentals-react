export type BarType =
  'header' |
  'header-with-subheader' |
  'subheader' |
  'footer' |
  'floating-footer'

export const BarTypes: {
  HEADER: BarType,
  HEADER_WITH_SUBHEADER: BarType,
  SUBHEADER: BarType,
  FOOTER: BarType,
  FOOTER_FLOATING: BarType,
} = {
  HEADER: 'header',
  HEADER_WITH_SUBHEADER: 'header-with-subheader',
  SUBHEADER: 'subheader',
  FOOTER: 'footer',
  FOOTER_FLOATING: 'floating-footer',
}