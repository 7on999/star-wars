import React from 'react';

 const Record = ({item})=>{
    return (
        <li className="list-group-item">
              <span className="term">{item.field}</span>
              <span>{item.label}</span>
        </li>
       )
}

export default Record