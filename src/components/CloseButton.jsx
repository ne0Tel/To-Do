import React from 'react'
import CommonButton from '../UI/button/CommonButton'
import Krest from '../assets/img/pngwing.com.png'
import Class from './CloseButton.module.css'

function CloseButton({...props}) {
  return (
    <>
      <CommonButton {...props} className={[Class.closeButtonCommon].join(' ')}><img src={Krest} alt="krest"/></CommonButton>
    </>
  )
}

export default CloseButton
