import React from 'react';
import style from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
  <div className={style.divSB}>
    <input type="text" placeholder="¿Que ciudad estas buscando" className={style.inputSB}></input>
    <button onClick={() => props.onSearch("Holas")} className={style.btnSearch}>Buscar</button>
  </div>
  )
};