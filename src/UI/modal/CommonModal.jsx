import React, { useState } from 'react'
import CommonInput from '../input/CommonInput'
import CommonButton from '../button/CommonButton'
import CloseButton from '../../components/CloseButton'
import Class from './CommonModal.module.css'

function CommonModal({children, title, addListToggle, addItemToggle}) {
  return (
    <div className={[Class.modalCenter].join(' ')}>
      <form className={[Class.modalCommon].join(' ')}>
        {/* заголовок и кнопка закрытия */}
          <CloseButton onClick={addListToggle}/>
        <div>
          <div>{title}</div>
        </div>

        {/* Весь остальной контент */}
        {children}
      </form>
    </div>
  )
}

export default CommonModal