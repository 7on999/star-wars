import React from 'react';
import ItemPage from '../itemPage/itemPage';
import withSwapiService from '../../services/hoc/withSwapiService';


const PlanetPage = ({swapiService})=>{
  const {getAllPlanets, getPlanet} = swapiService;
  return (
        <ItemPage itemsKind={'planets'} getDataList={getAllPlanets} 
        getItemInfo={getPlanet} />
    )
}



  export default withSwapiService(PlanetPage);