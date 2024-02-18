import React from 'react'
import Class from './Footer.module.css'

function Footer() {
  return (
    <div className={[Class.footerStyle, Class.footerFlex].join(' ')}>
      <ul className={Class.flexCol}>
        <li>О нас</li>
        <li>Реклама</li>
        <li>Приколы</li>
      </ul>
      <ul className={Class.flexCol}>
        <li>Услуги</li>
        <li>Предпринимательское ПО</li>
        <li>Интересное</li>
      </ul>
      <ul className={Class.flexCol}>
        <li>Мультики</li>
        <li>Фильмы</li>
        <li>Сериалы</li>
      </ul>
    </div>
  )
}

export {Footer}
