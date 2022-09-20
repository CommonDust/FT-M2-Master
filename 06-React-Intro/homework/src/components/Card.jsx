import React from 'react';
import App from '../App';
import data from "../data"

export default function Card(props) {
  // acá va tu código
  return  (
    <div>
      <button>X</button>
    <h3 className='CityName'>{props.name}</h3>
    <img src={`http://openweathermap.org/img/wn/03n@2x.png`} alt='Estado del clima'></img>
    <ul>
      <p className="tempMin"> Min: {props.min} </p>
    </ul>
    <ul>
      <p className="tempMax"> Max: {props.min}</p>
    </ul>
    
    </div>
  ) 
};