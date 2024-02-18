import React, { useState, useRef} from 'react'
import {Header} from '../../../modules/Header/index'
import { Footer } from '../../../modules/Footer/components/Footer'
import ListDel from './ListDel'
import AdditionBtnList from '../../../components/ButtonAndModal/AdditionBtnList'
import Class2 from '../../../components/ButtonAndModal/AdditionBtnList.module.css'
import Class from './ToDoList.module.css'
import ModalList from '../../../components/ButtonAndModal/ModalList'
import ModalItem from '../../../components/ButtonAndModal/ModalItem'

function ToDoList() {

  const [datasListAndItem, setDatasListAndItem]  = useState([
    {
      nameList: 'Программирование',
      items: ['Дело G 1', 'Дело G 2', 'Дело G 3'],
    },
    {
      nameList: 'Творчество',
      items: ['Дело D 1', 'Дело D 2', 'Дело D 3'],
    },
    {
      nameList: 'Работа',
      items: ['Дело T 1', 'Дело T 2', 'Дело T 3'],
    },
  ]);
  const [modalWindowList, setmodalWindowList] = useState(false);//Показание модальных окно
  const [modalWindowItem, setmodalWindowItem] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const addList = (e) => {
    e.preventDefault();
    setmodalWindowList(!modalWindowList);
  }//Измение состояние модальных окон

  const addItem = (e, data) => {
    if (e && e.preventDefault) {
    e.preventDefault();
  }
  if(data !== null){
    setActiveItem(data);
  }
  setmodalWindowItem(!modalWindowItem);
  }

  if (modalWindowList) {
    return (
      <div className={Class.toDoListCommon}>
        <Header/>
        <ListDel datasListAndItem={datasListAndItem} setDatasListAndItem={setDatasListAndItem}/>
        <AdditionBtnList className={Class2.addListCommmon}>Add List</AdditionBtnList>
        <ModalList datasListAndItem={datasListAndItem} setDatasListAndItem={setDatasListAndItem} addListToggle={addList}/>
        <Footer/>
      </div>
    )
  } 
  if(modalWindowItem) {
    return (
      <div className={Class.toDoListCommon}>
        <Header/>
        <ListDel datasListAndItem={datasListAndItem} setDatasListAndItem={setDatasListAndItem}/>
        <AdditionBtnList className={Class2.addListCommmon}>Add List</AdditionBtnList>
        <ModalItem activeItem={activeItem} datasListAndItem={datasListAndItem} setDatasListAndItem={setDatasListAndItem} addItemToggle={addItem}/>
        <Footer/>
      </div>
    )
  } else{
    return (
      <div className={Class.toDoListCommon}>
        <Header/>
        <ListDel addItem={addItem} datasListAndItem={datasListAndItem} setDatasListAndItem={setDatasListAndItem}/>
        <AdditionBtnList onClick={addList} className={Class2.addListCommmon}>Add List</AdditionBtnList>
        <Footer/>
      </div>
    )
  }
}

export default ToDoList
