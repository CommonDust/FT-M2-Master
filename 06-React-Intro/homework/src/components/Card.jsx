import React from 'react';
import style from './Card.module.css'

export default function Card(props) {
  // acá va tu código
  
  return  (
    <div className={style.divCard}>
      <div className={style.btnDiv}>
      <button onClick={props.onClose} className={style.btn}>X</button>
      </div>
    <h3 className={style.cityName}>{props.name}</h3>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='Estado del clima'></img>
    <ul className={style.ulCard}>
      <p className={style.tempMin}> Min: {props.min} </p>
    </ul>
    <ul className={style.ulCard}>
      <p className="tempMax"> Max: {props.min}</p>
    </ul>
    
    </div>
  ) 
};