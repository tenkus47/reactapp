import React from 'react'
import { Map, GoogleApiWrapper }  from 'google-maps-react';

function Googlemap({google,lat,long}) {
  

    const mapStyles = {
        width: '40vw',
        height: '30vh'
      };
    return (
        <div className="map">
             <Map
        google={google}
        zoom={11}
        style={mapStyles}
        initialCenter={
          {
            lat: lat,
            lng: long
          }
        }
      />
        </div>
     
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCbxyT5e2RFjZWLmXQVTdD6oFb3JtCPPPo'
  })(Googlemap);



