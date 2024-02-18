import React from 'react'
import Class from './Header.module.css'
import icon from '../../../assets/icons/icons8-todo-list-50.png'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className={Class.commonHeader}>
     <img src={icon} alt="todo" />

      <ul className={Class.flexRow}>
        <li>
          <Link to='/'>Главная</Link>
        </li>
        <li>
          <Link to='/todo'>Список ToDo</Link>
        </li>
      </ul>
    </div>
  )
}

export {Header}
