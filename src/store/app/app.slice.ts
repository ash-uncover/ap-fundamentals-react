import {
  CaseReducer,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'

import { Theme, ThemeInfo } from '../../lib/constants/Theme'

import AppSliceState from '../../store/app/app.state'

// STATE //

const initialState: AppSliceState = {
  busy: false,
  busyMessage: '',
  theme: Theme.FIORI_3,
}

// REDUCERS //

interface PayloadBusy {
  busy: boolean
  busyMessage?: string
}
const setBusy: CaseReducer<AppSliceState, PayloadAction<PayloadBusy>> = (state, action) => {
  const {
    busy,
    busyMessage
  } = action.payload
  state.busy = busy
  state.busyMessage = busy ? busyMessage || '' : ''
}

interface PayloadTheme {
  theme: ThemeInfo
}
const setTheme: CaseReducer<AppSliceState, PayloadAction<PayloadTheme>> = (state, action) => {
  state.theme = action.payload.theme
}

// SLICE //

const AppSlice = createSlice({
  name: 'app',
  initialState,

  reducers: {
    setBusy,
    setTheme,
  },
})

export default AppSlice
