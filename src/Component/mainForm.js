import React, { useState } from 'react'
import '../staticFile/Formmain.css'
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Googlemap from './Googlemap'

function MainForm() {
const [location,setLocation]=useState({
  'content':false
});

const [fromdate,setFromdate]=useState();

const [todate,setTodate]=useState();

const handleSubmit=(e)=>{
  e.preventDefault();
  if(location.lat!==''){

    if(fromdate   > todate || fromdate===todate){
      alert('Date input is Incorrect')
    }
    else{
      alert('continue')
    }

  }
  else{
    alert('location not clicked')
  }
  
}
  
 const showlocation=async(lat,log)=>{
  await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${log}&localityLanguage=en`)
   .then(res=>{
     setLocation({
       'principalSubdivision':res.data.principalSubdivision,
       'locality':res.data.locality,
       'latitude':lat,
       'longitude':log,
       'content':true
     })
    })
   .catch(err=>{ alert('Check your network and try again '+ err)
  })
  //  document.getElementById("result").innerHTML=
 }
 


  const showPosition=()=>{
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          showlocation(position.coords.latitude,position.coords.longitude)
           
      });

  } else {
      alert("Sorry, your browser does not support HTML5 geolocation.");
  }
  }

  


    return (
    <div className="bodyForm w-100">
    
    <form className="form-group container p-3"  onSubmit={handleSubmit} >
    <div className="input-group d-flex justify-content-center align-items-center row">
      

      <div className="date-section col-sm-3 ">
      <label htmlFor="Fromdate">From</label>
     <div className=" mb-3">
       <DatePicker className="form-control" id="Fromdate" selected={fromdate} onChange={date=>setFromdate(date)} required/>
      </div> 
      </div>
      
      <div className="date-section col-sm-3">
      <label htmlFor="Todate">To</label>
     <div className="mb-3">
       <DatePicker className="form-control"  id="Todate " selected={todate} onChange={date=>setTodate(date)} required/>
      </div>
      </div>

      <div className="date-section col-sm-3">
      <label htmlFor="Location">Location</label>
     <div className="mb-3">
        {location.locality?(<div id="result" >{location.locality+" , "+location.principalSubdivision}<button className="ml-3 btn btn-lg btn-danger" onClick={()=>setLocation('')}>Retry</button>
      </div>):(<input type="button" onClick={showPosition} value="Get Location" id="locationFind" required/>)} 
     
      </div>
      </div>
     

      <div className="date-section-btn col-sm-3"> 
      
<button type="submit" className="btn btn-success btn-lg p-3">Search a Vehicle</button>
      </div>


   
     
    </div>
  </form>  
  <div className="google-map">
        {location.content && <Googlemap lat={location.latitude} long={location.longitude}/>}
  </div>
        

    </div>
         
    )
}

export default MainForm

