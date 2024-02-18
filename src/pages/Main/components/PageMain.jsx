import React from 'react'
import Class from './PageMain.module.css'
import {Header} from '../../../modules/Header/index'
import TwoButton from './TwoButton'
import { Footer } from '../../../modules/Footer/components/Footer'

function PageMain() {
  return (
    <div>
      <Header/>
      <TwoButton/>
      <Footer/>
    </div>
  )
}

export default PageMain
