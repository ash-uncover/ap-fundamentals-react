import React from 'react'
import { useDispatch } from 'react-redux'
import { Themes } from '../lib'
import { FormSelect } from '../lib/components/form/FormSelect'

import { ShellBar } from '../lib/components/shellbar/ShellBar'
import { changeTheme } from '../services/theme.service'

export const AppHeader = () => {

  // Hooks //

  const dispatch = useDispatch()

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
          placeholder='Select'
          items={Themes.map((theme) => {
            return {
              id: theme.id,
              text: theme.name,
              family: theme.family
            }
          })}
          onChange={handleThemeChanged}
        />
      ]}
    />
  )
}