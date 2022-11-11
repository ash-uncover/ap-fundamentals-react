import React from 'react'

import { ShellBar } from '../lib/components/shellbar/ShellBar'

export const AppHeader = () => {

  // Rendering //
  
  return (
    <ShellBar
      logo='/images/sap-logo.png'
      logoAlt='Fundamental React'
      title='Fundamental React'
    />
  )
}