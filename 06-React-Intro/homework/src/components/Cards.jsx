import React from 'react';
import Card from './Card.jsx';
import style from './Cards.module.css'

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  
  
  if(!cities.length) return alert("Escribe tu ciudad")
  
  
  return (
  
  <div  className={style.divCards}>
    
   {cities.map((city) => {
   return <Card
    max={city.main.temp_max}
   min={city.main.temp_min}
   name={city.name}
   img={city.weather[0].icon}
   key={city.id}
   onClose={() => alert(city.name)}
   
   />
   
   })} 
  </div>)
};