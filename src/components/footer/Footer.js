import React from 'react'
import {Facebook, Twitter} from 'react-bootstrap-icons'
import './FooterStyle.css'

export default function Footer() {
    return (
        <div className='bottom'>
        <div className='row justify-content-center text-center footer'>
       
            <div className="col-lg-1 followLinks" >
            <a href='https://www.facebook.com/profile.php?id=100004358266124' target="_blank">
            <Facebook color='royalblue' size='30px' />
            <p>Facebook</p></a>
            </div>
            <div className="col-lg-1 followLinks" >
            <a href='https://twitter.com/faisaljaved205' target="_blank">
            <Twitter color='#0581f5' size='30px' />
<p>Twitter</p></a>
</div>
          
        </div>
         Follow me on social networks
         </div>
    )
}
