import React from 'react';
import style from './style.module.css';
import { FaReact , FaHtml5 , FaCss3  } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";


export default function Recursos() {
  return (
    <section className={style.secaoRecursos}>
      <h2>Skills</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className={style.listaRecursos}>
        <div className={style.recurso}>
          <FaReact className={style.icone} />
          <h3>React</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>

        <div className={style.recurso}>
          <FaHtml5  className={style.icone} />
          <h3>Html</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>

        <div className={style.recurso}>
          <FaCss3  className={style.icone} />
          <h3>Css</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>

        <div className={style.recurso}>
          <IoLogoJavascript className={style.icone} />
          <h3>Java Script</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>
    </section>
  );
}
