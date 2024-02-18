import React from 'react'

function CommonButton({children, ...props}) {

  return (
    <button {...props}>
      {children}
    </button>
  ) 
}

export default CommonButton
