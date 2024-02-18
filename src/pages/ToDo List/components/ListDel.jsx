import React, { useState } from 'react'
import CommonButton from '../../../UI/button/CommonButton'
import CaseDeletion from '../../../components/CaseDeletion'
import Class from './ListDel.module.css'
import StrelkaZakrs from '../../../assets/icons/free-icon-arrow-5176900.png'
import StrelkaOtkr from '../../../assets/icons/free-icon-arrow-down-sign-to-navigate-32195.png'
import ItemDel from './ItemDel'
import AdditionBtnItem from '../../../components/ButtonAndModal/AdditionBtnItem'
import Class2 from '../../../components/ButtonAndModal/AdditionBtnItem.module.css'

function ListDel({datasListAndItem, setDatasListAndItem, addItem}) {

  const [showItem, setShowItem] = useState(Array(datasListAndItem.length).fill(false))///Состояние скрытия и раскрытия списка
  let type;///Тип кнопки удаления

  const toggleItem = (index) => {
    const arr = [...showItem]
    arr[index] = !arr[index]
    setShowItem(arr)
  }

  return (
    <>
      {datasListAndItem.map((data, index) => {
        let indexList = index;

        if(data !== null){ ///Если значение массива null, то и объекта нет
          return( 
            <div className={[Class.listDelFlex, Class.flexCol, Class.listWrapper].join(' ')}>
              <div>
                <div className={[Class.litsDelCommon, Class.listDelFlex].join(' ')}>
                  <div className={[Class.listDelMargin].join(' ')}>{data.nameList}</div>
                  <CommonButton onClick={() => toggleItem(index)} className={[Class.litsDelCommon].join(' ')}>
                    {index === index && !showItem[index] 
                    ?
                    <img src={StrelkaZakrs} alt="strelka-zakrs" />
                    :
                    <img src={StrelkaOtkr} alt="strelka-otkr" />
                    }
                    </CommonButton>
                </div> 
  
                {index === index && showItem[index] ?
                  data.items.map((textDelo, index) => {
                    type = "Item";
                    
                  if (index === data.items.length - 1){
                    return(
                      <>
                      <ItemDel type={type} indexList={indexList} indexItem={index} datasListAndItem={datasListAndItem} setDatasListAndItem={setDatasListAndItem} textDelo={textDelo}/>  
                      <AdditionBtnItem onClick={(e) => addItem(e, data.nameList)} className={Class2.addItemCommmon }>Add Item</AdditionBtnItem>
                      </>
                    )
                  }//Вывод кнопки добавления Item в конец
            
                  if(data.items[index] !== null) {
                    return(
                      <>
                        <ItemDel type={type} indexList={indexList} indexItem={index} datasListAndItem={datasListAndItem} setDatasListAndItem={setDatasListAndItem} textDelo={textDelo}/>                 
                      </>
                    )
                  }})            
                  :
                  <></>
                }
              </div>
  
  
              <CaseDeletion type={type} indexList={index} datasListAndItem={datasListAndItem} setDatasListAndItem={setDatasListAndItem}/>
            </div>
          )
        }
        else {
          return(
            <></>
          )
        }
      })}
    </>
  )
}

export default ListDel
