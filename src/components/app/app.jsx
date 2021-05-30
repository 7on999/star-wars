import React from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PersonPage from '../PersonPage/PersonPage';
import PlanetPage from '../PlanetPage/PlanetPage';
import StarshipPage from '../StarshipPage/StarshipPage';
import {SwapiServiceProvider} from '../../services/swapi-service-context';
import ErrorBoundary from '../../services/error-boundary';
import swapiService from '../../services/swapi-service';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SecretPage from '../secretPage/secretPage';
import LoginPage from '../login-page';


import './app.css';

export  default class App extends React.Component {

  swapiService = new swapiService();

  state={
    isLogged:false,
  }

  render() {
   
  return (
    <ErrorBoundary>
      <SwapiServiceProvider value = {this.swapiService}> 
      <BrowserRouter> 
       <div className="stardb-app">

        <Header />
        <RandomPlanet/>
        <Switch> 
          <Route path='/' render={()=><h1> welcome to starDB</h1>} exact/>
          <Route path='/persons' component={PersonPage}/>
          <Route path='/planets' component={PlanetPage}/>
          <Route path='/starships' exact component={StarshipPage}/>

          <Route path='/login' render={()=> <LoginPage isLogged={this.state.isLogged} 
            onLogin={()=>{this.setState({isLogged:true})}}/>}/>

          <Route path='/secret' render={()=> <SecretPage isLogged={this.state.isLogged}/>}/>
          <Route render={()=><h2>Page not found</h2>}/>
        </Switch>

       </div>
       </BrowserRouter>
    </SwapiServiceProvider> 
    </ErrorBoundary>
 
  );
 }
}


