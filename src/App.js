import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const APIKey = '0118399d8c956bae435ec93fa75eca4f';

  const [location, setLocation] = useState('');
  const [query, setQuery] = useState('London');

  const [temp, setTemp] = useState([]);
  const [locationName, setLocationName] = useState([])
  const [weather, setWeather] = useState([])


  useEffect(()=>{

    const Call = async () => {

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APIKey}&units=metric`);
      const data= await response.json();
    
      setTemp(data.main);
      setLocationName(data.name);
      setWeather(data.weather[0]);
    
     }

    Call();

  }, [query])



 const HandelSearch = (e) => {
  
  if(e.key === 'Enter'){
  
  setQuery(location);
  setLocation('');

  }

 }

  return (
    <div className={( temp.temp > 16 ? 'App-warm' : 'App')}>

      <div className='main'>

        <div className='search-wrap'>

          <input type="text" onKeyPress={HandelSearch} placeholder='Location' onChange={i=>setLocation(i.target.value)}/>

        </div>

      <div className='wrap'>

        {(typeof temp !== "undefined") ? (

        <>

         <p>{locationName}</p>
         <div className='temp'>
         <h1>{Math.round(temp.temp)} °c</h1>
         </div>
         <h2>{weather.description}</h2>

         </>

        ) : ('')}

         
      </div>

      </div>
      
    </div>
  );
}

export default App;
