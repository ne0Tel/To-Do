import React, { useState } from 'react'
import { Slider } from '../../../modules/Slider/components/Slider'
import Class from './TwoButton.module.css'
import CommonButton from '../../../UI/button/CommonButton'
import fillArray from '../../../helpers/fillArray'

function TwoButton() {

  const arrayItems = fillArray(2, CommonButton);

  return (
    <div className={Class.CommonStyleTwoButton}>
      <Slider items={arrayItems}></Slider>
    </div>
  )
}

export default TwoButton