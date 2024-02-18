import {React, useState} from 'react'
import Class from './ModalItem.module.css'
import CommonModal from '../../UI/modal/CommonModal'
import CommonInput from '../../UI/input/CommonInput'
import CommonButton from '../../UI/button/CommonButton'

function ModalItem({activeItem, addItemToggle, datasListAndItem, setDatasListAndItem}) {

  const [dataModal, setDataModal] = useState();//Название элемента

  const addItems = (e, data) => {
    addItemToggle(e, data);
    
    if (dataModal !== undefined) {
      const currentIndex = datasListAndItem.findIndex((item) => item.nameList === activeItem);
  
      setDatasListAndItem(datasListAndItem.map((item, index) => {
        if (index === currentIndex) {
          return {
            ...item,
            items: [...item.items, dataModal],
          };
        }
  
        return item;
      }));
    }
  }

  return (
    <div className={[Class.modalAbs1].join(' ')}>
      <CommonModal addItemToggle={addItemToggle} title={'Форма для добавления Item'}>
        <div>
          <label style={{margin: '0px 15px 0px 0px'}} htmlFor="NazvanieItem">Название Item</label>
          <CommonInput value={dataModal} onChange={(e) => setDataModal(e.target.value)} style={{border: "1px solid green", padding: '5px'}} id={"NazvanieItem"} placeholder={"Название Item"}/>
        </div>
        
        <CommonButton onClick={addItems} style={{background: '#fff', border: "1px solid green", padding: '5px'}} type={"submit"}>Подтверждение</CommonButton>
      </CommonModal>
  </div>
  )
}

export default ModalItem
