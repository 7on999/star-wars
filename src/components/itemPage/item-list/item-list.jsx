import React, { Component } from 'react';
import Speener from '../../../services/speener/speener';
import './item-list.css';

export default class ItemList extends Component {


  state={
    itemList: null,
  }

  componentDidMount(){
    this.props.getDataList()
    .then(itemList=>{
      this.setState({
        itemList
      })
    })
  }

  renderItem(arr){
    return arr.map((item)=>{
      const {id}=item;
      return (
          <li className="list-group-item"
          key={id}
          onClick={()=>{this.props.onItemSelected(id)}}> {item.name} </li>
      )
    })
  }

  render() {
    const {itemList} = this.state;

    if (!itemList) {
      return <Speener/>
    }

    const items = this.renderItem(itemList)
    return (
      <ul className="item-list list-group">
      {items}
      </ul>
    );
  }
}