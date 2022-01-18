import React, {useEffect, useState} from 'react';
import './App.css';
import {fetchApi} from './services/api';

function App() {
  const[city,setCity]=useState(null);
  const[input,setInput]=useState("Delhi");

  const getData=async()=>{
    try{
         const resdata= await fetchApi(input);
         console.log(resdata);
         const actual= resdata.data;
         setCity(actual.main);  
         console.log({city});
       }catch(error){
    alert("Error!! Please enter a valid city.");
    }
  }

  useEffect(() => {
    getData();
  },[])

  return(
   <div className="App">
     <div className="details">
       <h2 className="title"><i className="fa fa-cloud"></i> Weather App</h2>
       <div className="search-form"> 
         <input type="text" placeholder="Enter your city name" value={input} onChange={(event)=>{setInput(event.target.value)}}/>
         <span  className="btn"><button type="button" onClick={()=>getData()}>Search</button></span>
       </div>
       <div className="main-container">
         <h4>Live Weather Condition</h4>
         {!city?(<p>No Data Found</p>):( 
            <>
            <div className="temp">
              <h1>{city.temp}&deg;C</h1>
            </div>
            <div className="place">
              <h3><i className="fa fa-street-view"></i>{input}</h3>
            </div>
            <div className="temperature-range">
              <h6>Min: {city.temp_min}&deg;C || Max: {city.temp_max}&deg;C || Humidity: {city.humidity}%</h6>
            </div>
            </>
         )}
       </div>
     </div>
   </div>
 ); 
}

export default App;