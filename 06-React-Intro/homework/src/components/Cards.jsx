import React from 'react';
import Card from './Card.jsx';
import cities from '../data.js'; 

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  
  return (<div>
   {cities.map((el) => {
   return <Card name={cities[el]} min={props.min}key={el}/>
   })} 
  </div>)
};