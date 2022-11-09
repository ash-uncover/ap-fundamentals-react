import React, { ReactElement, useState } from 'react'

import './CodePanel.css'

export interface CodePanelProperties {
  title?: string
  result?: ReactElement | ReactElement[]
  code?: ReactElement | ReactElement[]
}
export const CodePanel = ({
  title,
  result,
  code,
}: CodePanelProperties) => {

  // Hooks //

  const [showCode, setShowCode] = useState(false)

  // Events //

  const onShowCode = () => {
    setShowCode(!showCode)
  }

  // Rendering //

  return (
    <div className='code-panel'>
      <div className='header'>
        {title}
      </div>
      <div className='rendering'>
        {result}
        <button className='button-show' onClick={onShowCode}>
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>
      {showCode ?
        <div className='code'>
          {code}
          <button className='button-copy'>Copy</button>
        </div>
        : null}
    </div>
  )
}
