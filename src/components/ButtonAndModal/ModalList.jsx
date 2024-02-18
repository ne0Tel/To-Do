import React, { useState } from 'react'
import Class from './ModalList.module.css'
import CommonModal from '../../UI/modal/CommonModal'
import CommonInput from '../../UI/input/CommonInput'
import CommonButton from '../../UI/button/CommonButton'

function ModalList({addListToggle, datasListAndItem, setDatasListAndItem}) {

  const [dataModal, setDataModal] = useState();//Название списка

  const addList = (e) => {
    addListToggle(e);

    if (dataModal !== undefined) {//Проверка того что dataModal имеет название для списка
        let newValue = {
          nameList: `${dataModal}`,
          items: [null],
        };

      setDatasListAndItem([...datasListAndItem, newValue]);//Push значений
    }
  }

  return (
    <div className={[Class.modalAbs].join(' ')}>
      <CommonModal addListToggle={addListToggle} title={'Форма для добавления List'}>
        <div>
          <label style={{margin: '0px 15px 0px 0px'}} htmlFor="NazvanieList">Название List</label>
          <CommonInput value={dataModal} onChange={(e) => setDataModal(e.target.value)} style={{border: "1px solid green", padding: '5px'}} id={"NazvanieList"} placeholder={"Название List"}/>
        </div>
        
        <CommonButton onClick={addList} style={{background: '#fff', border: "1px solid green", padding: '5px'}}>Подтверждение</CommonButton>
      </CommonModal>
  </div>
  )
}

export default ModalList
