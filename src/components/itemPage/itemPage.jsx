import React from 'react';
import ItemList from './item-list/item-list';
import ItemDetails from './item-details/item-details';
import Row from '../../services/Row'

const ItemPage = (props)=> {
      const [selectedItem, setSelectedItem] = React.useState(null);
      return (
        <Row left={ <ItemList  
             getDataList={props.getDataList} 
             onItemSelected={(id)=>{
                 setSelectedItem(id) }}
                />} 
              rigth={<ItemDetails itemsKind={props.itemsKind} selectedId={selectedItem} 
               getItemInfo={props.getItemInfo}/>}/>
    )
}

export default ItemPage;


