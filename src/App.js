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
         //return resdata;
       }catch(error){
    console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  },[])

  return(
   <div className="App">
     <div className="card">
       <h2 className="title"><i className="fa fa-cloud"></i>Weather App</h2>
       <div className="search-form"> 
         <input type="text" placeholder="Enter your city name" value={input} onChange={(event)=>{setInput(event.target.value)}}/>
         <button type="button" onClick={()=>getData()}>Search</button>
       </div>
       <div className="main-container">
         <h4>Live Weather Condition</h4>
         {!city?(<p>No Data Found</p>):( 
            <>
            <div className="temperature">
              <h1>{city.temp}&deg;C</h1>
            </div>
            <div className="location">
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