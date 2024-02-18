import React, { useState } from 'react'

function CommonCheckbox({...props}) {

  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked);
  };

  
  return (
    <input
    {...props}
    checked={checked}
    onChange={handleChange}
    type='checkbox'/>
  )
}

export default CommonCheckbox
