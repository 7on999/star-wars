import React from 'react';
import './secretPage.css';
import BL from './../../assets/BL.jpg'
import P from './../../assets/P.jpg'
import T from './../../assets/3.jpg'

const SecretPage=({isLogged})=>{

    const [visibleFirst, setVisibleFirst] = React.useState(false)
    const [visibleSecond, setVisibleSecond] = React.useState(false)
    const [visibleThird, setVisibleThird] = React.useState(false)

    const onClickLuce=()=>{
        setVisibleFirst(true)
      }

      const onClickPresident=()=>{
        setVisibleSecond(true)
      }

      const onThirdClick=()=>{
        setVisibleThird(true)
      }

      const luceSecret = <div> <span className='surprise'>
          who would have thought! 
          </span> <img className='secret' src={BL} alt="BL" /></div>

          
      const presidentSecret = <div> <span className='surprise'>
      Yes! It is hi
      </span> <img className='secret' src={P} alt="P" /></div>

const lastSecret = <div> <span className='surprise'>
The same!
</span> <img className='secret' src={T} alt="T" /></div>



    if (isLogged){
        return ( <div>
            <div className='jumbotron text-center'>
                <h3> this page is full of secrets </h3>
            </div>
            <div>
            {!visibleFirst&&<span className='surprise' onClick={onClickLuce}> 
            click here to find out who is father of Luce </span>}
            {visibleFirst&&luceSecret}
            </div>

            <div>
            {!visibleSecond&&<span className='surprise' onClick={onClickPresident}> 
            click here to find out Who killed President Kennedy </span>}
            {visibleSecond&&presidentSecret}
            </div>

            <div>
            {!visibleThird&&<span className='surprise' onClick={onThirdClick}> 
            click here to find out who prevented the end of the world in 2012 </span>}
            {visibleThird&&lastSecret}
            </div>
            </div>
        )
    }
    return <h3>You have not enough сredentials. You should to log in system</h3>
}

export default SecretPage;