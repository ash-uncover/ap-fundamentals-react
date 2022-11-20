import {
  CaseReducer,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'

import Theme from '../../lib/constants/Theme'

import AppSliceState from '../../store/app/app.state'

// STATE //

const initialState: AppSliceState = {
  busy: false,
  busyMessage: '',
  theme: Theme.HORIZON.id,
}

// REDUCERS //

type PayloadBusy = {
  busy: boolean,
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

const setTheme: CaseReducer<AppSliceState, PayloadAction<string>> = (state, action) => {
  state.theme = action.payload
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
