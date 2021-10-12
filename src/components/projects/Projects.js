import React from 'react';
import jenkin from '../../assets/jenkins.PNG'
import foodstore from '../../assets/foodstore.PNG'
import olx from '../../assets/olx.PNG'


export default function Projects() {
    return (
        <>
        <div className='row justify-content-evenly pt-5'>
            <div className="container col-5" >
  <img src={jenkin} className="img-fluid" width = '50%' alt="..." />
  <div className="card-body">
    <h5 className="card-title">Jenkins</h5>

    <div className='row justify-content-evenly'>
    <a href="https://github.com/faisal8373/web-dev/tree/master/assignment-18" target='_blank'  className="btn btn-primary">Soruce Code</a>
    <a href="https://jenkins-6c8d2.web.app/" target='_blank' className="btn btn-secondary">Live Demo</a>
    </div>
  </div>
</div>
<div className="container col-5" >
  <img src={foodstore} className="img-fluid" width = '48%' alt="..." />
  <div className="card-body">
    <h5 className="card-title">Food Store (Hackthone)</h5>
    <div className='row justify-content-evenly'>
    <a href="" className="btn btn-primary ">Soruce Code</a>
    <a href="" className="btn btn-secondary">Live Demo</a>
    </div>
  </div>
</div>
</div>
<div className='row justify-content-evenly pt-5'>
            <div className="container col-5" >
  <img src={olx} className="img-fluid" width = '50%' alt="..." />
  <div className="card-body">
    <h5 className="card-title">OLX</h5>

    <div className='row justify-content-evenly'>
    <a href="https://github.com/faisal8373/leart-react/tree/main/assginment-22" target='_blank'  className="btn btn-primary">Soruce Code</a>
    <a href="https://olxapp-50be6.web.app/" target='_blank' className="btn btn-secondary">Live Demo</a>
    </div>
  </div>
</div>

</div>

</>
    )
}
