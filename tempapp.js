import React, {useEffect, useState} from 'react';
import "./css/style.css"
const tempapp =() =>{

   const [city, setCity]= useState(null);
   const [search, setSearch]= useState("Delhi");

   useEffect(()=>{
       const fetchApi=async()=>{
        const url="http://api.openweathermap.org/geo/1.0/direct?q='"+search+"'&limit=5&appid=b14425a6554d189a2d7dc18a8e7d7263";
        const response=await fetch(url);

        const resJson=response.json();

        setCity(resJson);
       }  
     
    fetchApi();
   },[Search]) 

       return(
           <>
            <div className='box'>
                 <div className='inputData'>

                    <input type="search" className='inputField' value={search} 
                     onchange={(event)=>{

                           setSearch(event.target.value)
                     }}
                    ></input>
                 </div>
              
        
         {
            !city?(
                <p className='errorMsg'>No Data Found</p>
            ) :(
            <div>

              <div className='info'>
                <h2 className='location'>
                <i className="fa-solid fa-street-view"></i>{search}

                </h2>
               <h1 className='temp'>
                   {city.temp}*Cel
               </h1>

               <h3 className='tempmin_max'>Min : {city.temp_min}*Cel | Max:  {city.temp_max}*Cel</h3>
            </div>
           
           <div className='wave -one'> </div>
           <div className='wave -two'></div>
           <div className='wave -three'></div>
            </div>

            )}
           

           </div>
           </>

       )

}

export default tempapp;

