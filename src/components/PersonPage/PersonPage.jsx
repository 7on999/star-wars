import React from 'react';
import ItemPage from '../itemPage/itemPage';
import withSwapiService from '../../services/hoc/withSwapiService';


const PersonPage = ({swapiService})=>{
  const {getAllPeople, getPerson}=swapiService
  return (
                     <ItemPage itemsKind={'characters'} getDataList={getAllPeople} 
                      getItemInfo={getPerson} />
  )
}

  export default withSwapiService(PersonPage);