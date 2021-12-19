import React, {useEffect, useState} from 'react';
import './App.css';
const baseUrl="http://api.openweathermap.org/data/2.5/weather?";
const apiKey="2abe78ccdc3580d00b9cb312be79c29c";
function App() {

  const[city,setCity]=useState(null);
  const[search,setSearch]=useState("Delhi");
  const fetchApi=async()=>{
    const data=baseUrl+`q=${search}&units=metric&appid=${apiKey}`;
    const response=await fetch(data);
    const resJson=await response.json();
    console.log(resJson);
    setCity(resJson.main);
  } 
    const getData=async()=>{
    try{
      const data=await fetchApi();
      console.log(data);
    }catch(error){
      console.log(error.message);
    }
  }
  useEffect(() => {
    fetchApi();
  },[])
 return(
   <div className="App">
     <div className="card">
       <h2 className="title"><i className="fa fa-cloud"></i>Weather App</h2>
       <div className="search-form"> 
         <input type="text" placeholder="Enter your city name" value={search} onChange={(event)=>{setSearch(event.target.value)}}/>
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
              <h3><i className="fa fa-street-view"></i>{search}</h3>
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