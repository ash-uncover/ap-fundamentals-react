import appSlice from '../store/app/app.slice'
import { injectThemeCss } from '../lib/helpers/ThemeHelper'
import { ThemeInfo } from '../lib/constants/Theme'

export const changeTheme = (dispatch: any, theme: ThemeInfo) => {
  dispatch(appSlice.actions.setBusy({ busy: true, busyMessage: 'Changing Theme' }))
  dispatch(appSlice.actions.setTheme(theme.id))
  injectThemeCss(theme)
    .finally(() => {
      dispatch(appSlice.actions.setBusy({ busy: false }))
    })
}