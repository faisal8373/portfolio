import React from 'react';
import './SkillSet.css'
import Html from '../../assets/html.png'
import Css from '../../assets/css.png'
import Js from '../../assets/js.png'
import Bootstrap from '../../assets/bootstrap.png'
import Git from '../../assets/git.png'
import ReactImg from '../../assets/react.png'
import ReduxImg from '../../assets/redux.png'
import ReactNative from '../../assets/react-native.png'

export default function SkillSet() {
    return (
        <div className='background container'>
        
    <h1 className="display-4 text-white">My Skillset </h1>

<div className="scrollmenu container">
  
  <span  className='card'><img className="img-fluid" src={Html} alt='Html 5' width='85%'  /></span>
  <span  className='card'><img className="img-fluid" src={Css} alt='Html 5' width='90%' /></span>
  <span  className='card'><img className='img-fluid' src={Js} alt='Html 5' width='85%'/></span>
  <span  className='card'><img className='img-fluid' src={Bootstrap} alt='Html 5' width='85%' /></span>
  <span  className='card'><img className='img-fluid' src={Git} alt='Html 5' width='75%' /></span>
  <span  className='card'><img className='img-fluid' src={ReactImg} alt='Html 5' width='85%' /></span>
  <span  className='card'><img className='img-fluid' src={ReduxImg} alt='Html 5' width='85%' /></span>  
  <span  className='card'><img className='img-fluid' src={ReactNative} alt='Html 5' width='85%' /></span>
 
</div>



        </div>
    )
}
