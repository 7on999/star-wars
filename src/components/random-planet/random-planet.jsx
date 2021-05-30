import React, { Component } from 'react';
import swapiService from '../../services/swapi-service';
import './random-planet.css';
import Speener from '../../services/speener/speener';
import ErrorIndicator from '../../services/errorIndicator/errorIndicator';

export default class RandomPlanet extends Component {

  swapiService = new swapiService();

  state={
    planet: {},
    loading: true,
    error:false,
  }

componentDidMount() {
  this.updatePlanet();
  this.interval = setInterval(this.updatePlanet, 5000); 
}

componentWillUnmount(){
  clearInterval(this.interval);
}

  updatePlanet=()=>{
    const id = Math.floor(Math.random()*25)+2;
     this.swapiService.getPlanet(id)
      .then(planet=>{
        this.setState({planet, loading: false})
      })
      .catch(err=>{
        this.setState({error:true}) 
      })
  }

  render() {
    const {planet, loading, error} = this.state;  
    return (
      <div className="random-planet jumbotron rounded">         
        {error&&<ErrorIndicator/>}          
       {!error&&loading && <Speener/>}
       {!error&&!loading&&<RandomPlanetContent planet={planet}/>}
     
      </div>
    );
  }
}

const RandomPlanetContent =({planet})=>{
  const {name, population, rotationPeriod, diameter, id}=planet;
  return (
    <>
    <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
             alt='this planet has not been photographed by somebody yet' />
        <div>
          <h4> {name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population:</span>
              <span>{`${population} livind creatures`}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period:</span>
              <span>{`${rotationPeriod} hours`}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter:</span>
              <span>{`${diameter} meters`}</span>
            </li>
          </ul>
        </div>
    </>
  )
}