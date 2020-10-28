import React from 'react'
import '../staticFile/Bikelist.css'
import img1 from '../staticFile/img/2.jpg'
import img2 from '../staticFile/img/1.jpg'
import img3 from '../staticFile/img/1.jpg'

function credit() {
    return (
        <div className="bikesList container mt-4 mb-4">
            <div className="text-center mb-4">
            <h1>Rent AnyRide ,AnyTime , Anywhere!</h1>
            </div>
            <div className="row ">
                <div className="col">
                <div className="card">
  <img src={img3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
                <div className="col">
                <div className="card">
  <img src={img1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
                <div className="col">
                <div className="card" >
  <img src={img2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>

            </div>
        </div>
    )
}
export default credit
