import React from 'react';
import ItemPage from '../itemPage/itemPage';
import withSwapiService from '../../services/hoc/withSwapiService';



const StarshipPage = ({swapiService})=>{
  const {getAllStarships, getStarship}=swapiService;
  return (
    <ItemPage itemsKind={'starships'} getDataList={getAllStarships} 
    getItemInfo={getStarship} />
  )
}
                
    
 

  export default withSwapiService(StarshipPage);

