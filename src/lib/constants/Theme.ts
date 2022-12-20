export interface ThemeInfo {
  id: string
  name: string
  family: string
}

export const Theme: {
  FIORI_3: ThemeInfo,
  FIORI_3_DARK: ThemeInfo,
  FIORI_3_HCB: ThemeInfo,
  FIORI_3_HCW: ThemeInfo,
  FIORI_3_LIGHT_DARK: ThemeInfo,
  HORIZON: ThemeInfo,
  HORIZON_DARK: ThemeInfo,
  HORIZON_HCB: ThemeInfo,
  HORIZON_HCW: ThemeInfo,
} = {
  FIORI_3: {
    id: 'sap_fiori_3',
    name: 'Fiori 3',
    family: 'sap_fiori_3',
  },
  FIORI_3_DARK: {
    id: 'sap_fiori_3_dark',
    name: 'Fiori 3 Dark',
    family: 'sap_fiori_3',
  },
  FIORI_3_HCB: {
    id: 'sap_fiori_3_hcb',
    name: 'Fiori 3 High Contrast Black',
    family: 'sap_fiori_3',
  },
  FIORI_3_HCW: {
    id: 'sap_fiori_3_hcw',
    name: 'Fiori 3 High Contrast White',
    family: 'sap_fiori_3',
  },
  FIORI_3_LIGHT_DARK: {
    id: 'sap_fiori_3_light_dark',
    name: 'Fiori 3 High Light Dark',
    family: 'sap_fiori_3',
  },
  HORIZON: {
    id: 'sap_horizon',
    name: 'Horizon',
    family: 'sap_horizon',
  },
  HORIZON_DARK: {
    id: 'sap_horizon_dark',
    name: 'Horizon Dark',
    family: 'sap_horizon',
  },
  HORIZON_HCB: {
    id: 'sap_horizon_hcb',
    name: 'Horizon High Contrast Black',
    family: 'sap_horizon',
  },
  HORIZON_HCW: {
    id: 'sap_horizon_hcw',
    name: 'Horizon High Contrast White',
    family: 'sap_horizon',
  },
}

export const Themes = Object.values(Theme)
