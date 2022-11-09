import React from 'react'

export const ShellBar = (

) => {

  // Rendering //
  return (
    <div className="fd-shellbar">
      <div className="fd-shellbar__group fd-shellbar__group--product">
        <span className="fd-shellbar__logo">
          <img
            src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
            width="48"
            height="24"
            alt="SAP"
          />
        </span>
        <span className="fd-shellbar__title">
          Fundamental React
        </span>
      </div>
    </div>
  )
}