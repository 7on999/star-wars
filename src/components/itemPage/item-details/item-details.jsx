import React, { Component } from 'react';
import './item-details.css';
import Record from '../../../services/Record';
import ErrorIndicator from '../../../services/errorIndicator/errorIndicator';

export default class ItemDetails extends Component {

  state={
    item:null,
  }

  updateItem(){
    const {selectedId}=this.props;
    if (!selectedId) {
      return
    }
    this.props.getItemInfo(selectedId)
    .then(item=>{
      this.setState({item})
    })
  }

  componentDidMount(){
    this.updateItem();
  }

  componentDidUpdate(prevProps){
    if (prevProps.selectedId!==this.props.selectedId){
      this.updateItem();
    }
  }

  renderSwitch(kind, data) {
    switch(kind) {
      case 'planets':
        return (
          <>
          <Record item={{field:'population:', label: `${data.population} living creatures`}}/>
          <Record item={{field:'rotation period:', label: `${data.rotationPeriod} hours`}}/>
          <Record item={{field:'diameter:', label: `${data.diameter} meters`}}/> 
          </>
        )
      case 'starships':
        return (<>
            <Record item={{field:'passengers:', label:data.passengers}}/>
            <Record item={{field:'manufacturer:', label:data.manufacturer}}/>
            <Record item={{field:'Crew:', label: data.crew}}/>
            <Record item={{field:'length:', label: `${data.lengthOfStarship} meters`}}/>
            <Record item={{field:'capacity:', label: `${data.cargoCapacity} horsepower`}}/>
            <Record item={{field:'cost:', label: `${data.costInCredits} credits`}}/>
            <Record item={{field:'consumables:', label: data.consumables}}/>
        </>);
      case 'characters':
          return ( <>
            <Record item={{field:'Gender:', label:data.gender}}/>
            <Record item={{field:'Birth Year:', label:data.birthYear}}/>
            <Record item={{field:'Eye Color:', label: data.eyeColor}}/> 
            <Record item={{field:'skin Color:', label:data.skinColor}}/>
            <Record item={{field:'mass:', label:`${data.mass} kg`}}/>
            <Record item={{field:'height:', label:`${data.height} cm`}}/>
            </>)
 default:
            return (<ErrorIndicator/>)
      
    }
  }
 
  render() {
    if (!this.state.item) {
      return <span> choose anythink from list left </span>
    }

    const {id, name} = this.state.item;

    return (
      <div className="person-details card">
        <img className="person-image" alt='it is very secretive'
          src={`https://starwars-visualguide.com/assets/img/${this.props.itemsKind}/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
             {this.renderSwitch(this.props.itemsKind, this.state.item)}
          </ul>
        </div>
      </div>
    )
  }
}