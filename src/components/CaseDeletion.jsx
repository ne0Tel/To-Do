import React, { useEffect, useState } from 'react'
import CommonButton from '../UI/button/CommonButton'
import Class from './CaseDeletion.module.css'
import Krest from '../assets/img/pngwing.com.png'

function CaseDeletion({indexList, indexItem, datasListAndItem, setDatasListAndItem, type, ...props}) {

  let action = [indexList, indexItem];
  console.log(action)

  const deleteItem = (indexList, indexItem) => {
    let arr = [...datasListAndItem]

    arr[indexList].items[indexItem] = null
    setDatasListAndItem(arr)
  }

  const deleteList = (indexList) => {///Данные остаются в виде Null
    let arr = [...datasListAndItem]

    arr[indexList] = null
    setDatasListAndItem(arr)
  }

  const handleClick = (indexList, indexItem) =>{
    if (action[0] === indexList && action[1] === indexItem){
      deleteItem(indexList, indexItem); 
    }
    if (action[0] === indexList && action[1] === undefined) {
      deleteList(indexList); 
    }
  }

  // return(
  //   <>
  //   {/* <CommonButton {...props} className={Class.caseDeletionCommon}><img src={Krest} alt="krest"/></CommonButton> Варик - 1*/}
  //   </>
  // )

  // if(type === "List") {
  //   return(
  //     <>
  //       <CommonButton onClick={() => deleteList(indexList)} className={Class.caseDeletionCommon}><img src={Krest} alt="krest"/></CommonButton>     
  //     </>
  //   )
  // }
  // else if (type === "Item"){
  //   return(
  //   <>
  //     <CommonButton onClick={() => deleteItem(indexList, indexItem)} className={Class.caseDeletionCommon}><img src={Krest} alt="krest"/></CommonButton>
  //   </>
  //   )
  // } Варик - 2

  return (
    <>
      <CommonButton onClick={() => handleClick(indexList, indexItem)} className={Class.caseDeletionCommon}><img src={Krest} alt="krest"/></CommonButton>
    </>
  )
}

export default CaseDeletion
