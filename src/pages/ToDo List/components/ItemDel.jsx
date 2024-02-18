import React from 'react'
import CaseDeletion from '../../../components/CaseDeletion'
import CommonCheckbox from '../../../UI/checkbox/CommonCheckbox'
import Class from './ItemDel.module.css'

function ItemDel({datasListAndItem, setDatasListAndItem, textDelo, indexItem, indexList, type}) {
  return (
    <div className={[Class.commonStyleItemDel, Class.itemDelFlex, Class.flexCol].join(' ')}>
      <div className={[Class.itemDelFlex, Class.itemDelPos, Class.itemDelMargin].join(' ')}>
        <CommonCheckbox className={[Class.itemDelMargin].join(' ')}/>

        <div>{textDelo}</div>
      </div>

      <CaseDeletion type={type} indexList={indexList} indexItem={indexItem} datasListAndItem={datasListAndItem} setDatasListAndItem={setDatasListAndItem}/>
    </div>
  )
}

export default ItemDel
