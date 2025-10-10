import React from 'react';
import style from './style.module.css';
import DarkVeil from '../DarkVeil';

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.conteudo}>
        <h1 className={style.titulo}>Rafael Facco</h1>
        <p className={style.descricao}>Programador e Designer</p>
        <div className={style.botoes}>
        <button className={style.botao}>Ver Mais</button>
        <button className={style.botao2}>Contatar-me</button>
        </div>
      </div>
      <DarkVeil  />
    </section>
  );
}
