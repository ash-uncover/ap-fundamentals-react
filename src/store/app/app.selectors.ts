import { RootSliceState } from '../../store/state'

const AppSelectors = {
  busy: (state: RootSliceState) => state.app.busy,
  theme: (state: RootSliceState) => state.app.theme,
}

export default AppSelectors
