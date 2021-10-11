import React from 'react'
import {Facebook, Twitter} from 'react-bootstrap-icons'
import './FooterStyle.css'

export default function Footer() {
    return (
        <div className='bottom'>
        <div className='row justify-content-center text-center footer'>
            <div className="col-lg-1 followLinks" >
            <Facebook color='royalblue' size='30px' />
            <p>Facebook</p>
            </div>
            <div className="col-lg-1 followLinks" >
            <Twitter color='#0581f5' size='30px' />
<p>Twitter</p>
</div>
          
        </div>
         Follow me on social networks
         </div>
    )
}
