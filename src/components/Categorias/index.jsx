import React from 'react';
import style from './style.module.css';
import {
  GiSpellBook,
  GiRifle,
  GiPunchBlast,
  GiRetroController,
  GiRaceCar,
  GiSteeringWheel
} from 'react-icons/gi';

export default function Categorias() {
  return (
    <section className={style.categorias}>
      <h2>Categorias</h2>
      <p>Explore por tema e encontre os conteúdos que mais combinam com você.</p>
      <div className={style.listaCategorias}>
        <div className={style.categoria}>
          <div className={style.iconeCategoria}>
            <GiSpellBook />
          </div>
          <h3>RPG</h3>
          <p>Últimos reviews e análises de RPG</p>
          <button className={style.botao}>Ver mais</button>
        </div>
        <div className={style.categoria}>
          <div className={style.iconeCategoria}>
            <GiRifle />
          </div>
          <h3>FPS</h3>
          <p>Notícias e dicas para jogos de tiro</p>
          <button className={style.botao}>Ver mais</button>
        </div>
        <div className={style.categoria}>
          <div className={style.iconeCategoria}>
            <GiPunchBlast />
          </div>
          <h3>Ação</h3>
          <p>Top notícias e análises de jogos de ação</p>
          <button className={style.botao}>Ver mais</button>
        </div>
        <div className={style.categoria}>
          <div className={style.iconeCategoria}>
            <GiRetroController />
          </div>
          <h3>Indie</h3>
          <p>Destaques e reviews de jogos indie</p>
          <button className={style.botao}>Ver mais</button>
        </div>
        <div className={style.categoria}>
          <div className={style.iconeCategoria}>
            <GiRaceCar />
          </div>
          <h3>Corrida</h3>
          <p>Lançamentos e análises de jogos de corrida</p>
          <button className={style.botao}>Ver mais</button>
        </div>
        <div className={style.categoria}>
          <div className={style.iconeCategoria}>
            <GiSteeringWheel />
          </div>
          <h3>Simulação</h3>
          <p>Reviews e novidades sobre jogos de simulação realistas</p>
          <button className={style.botao}>Ver mais</button>
        </div>
      </div>
    </section>
  );
}
