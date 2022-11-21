import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Themes } from '../lib'
import { FormSelect } from '../lib/components/form/FormSelect'

import { ShellBar } from '../lib/components/shellbar/ShellBar'
import { changeTheme } from '../services/theme.service'
import AppSelectors from '../store/app/app.selectors'

export const AppHeader = () => {

  // Hooks //

  const dispatch = useDispatch()

  const theme = useSelector(AppSelectors.theme)

  // Events //

  const handleThemeChanged = (theme: any) => {
    changeTheme(dispatch, theme)
  }

  // Rendering //

  return (
    <ShellBar
      logo='/images/sap-logo.png'
      logoAlt='Fundamental React'
      title='Fundamental React'
      actions={[
        <FormSelect
          alignRight={true}
          label='Choose Theme'
          horizontal
          compact
          placeholder={theme.name}
          items={Themes.map((t) => {
            return {
              id: t.id,
              text: t.name,
              name: t.name,
              family: t.family,
              selected: t === theme
            }
          })}
          onChange={handleThemeChanged}
        />
      ]}
    />
  )
}