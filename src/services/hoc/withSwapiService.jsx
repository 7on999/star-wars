import React from 'react';
import {SwapiServiceConsumer} from '../swapi-service-context';

 const withSwapiService=(Сomponent)=>{
    return (props) => {
            return ( 
                 <SwapiServiceConsumer>
                    {
                        (swapiService)=>{
                            return (
                                <Сomponent {...props} swapiService={swapiService}/>
                            )
                        }
                    }
                </SwapiServiceConsumer>   
            )
     }
}

export default  withSwapiService;






