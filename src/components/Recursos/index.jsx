import React from 'react';
import style from './style.module.css';
import { SiAntdesign } from "react-icons/si";
import { LuFolderCode } from "react-icons/lu";
import { AiFillDatabase } from "react-icons/ai";
import { BsIntersect } from "react-icons/bs";


export default function Recursos() {
  return (
    <section className={style.secaoRecursos}>

      <div className={style.skills}>
        <div className={style.listaRecursos}>
          <div className={style.titulo}>
          <h2>Minhas <strong>Habilidade</strong></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>

          <div className={style.recursoAtivado}>
            <SiAntdesign className={style.icone} />
            <div className={style.texto}>
            <h3>UI</h3>
            <p>
              Design de seu web site
            </p>
            </div>
          </div>

          <div className={style.recurso}>
            <LuFolderCode className={style.icone} />
            <div className={style.texto}>
            <h3>Codigo</h3>
            <p>
             Funcionalidade de seu web site
            </p>
            </div>
          </div>

          <div className={style.recurso}>
            <AiFillDatabase className={style.icone} />
            <div className={style.texto}>
            <h3>Banco De Dados</h3>
            <p>
             Back end de seu web site
            </p>
            </div>
          </div>

          <div className={style.recurso}>
            <BsIntersect className={style.icone} />
            <div className={style.texto}>
            <h3>Interação</h3>
            <p>
            Um web site mais interativo
            </p>
            </div>
          </div>
        </div>
        <div className={style.apresentacao}>
          <img src="https://astrophotons.b-cdn.net/wp-content/uploads/2025/05/nebula-drift-4k-wallpaper.jpg" alt=""  />
        </div>
      </div>
    </section>
  );
}
