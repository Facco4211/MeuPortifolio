import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import style from './style.module.css';
import Site1 from '../../imagens/SitesCarrosel/Template1.png';
import Site2 from '../../imagens/SitesCarrosel/Template2.png';
import Site3 from '../../imagens/SitesCarrosel/Template3.png';
import Site4 from '../../imagens/SitesCarrosel/Template4.png';
import Site5 from '../../imagens/SitesCarrosel/Template5.png';
import Site6 from '../../imagens/SitesCarrosel/Template6.png';

import { useState } from "react";

import { } from 'react-icons';
export default function Carrossel3() {
    
    const series = [
        {
          src: Site1,
          title: "Site 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          src: Site6,
          title: "Site 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          src: Site3,
          title: "Site 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          src: Site4,
          title: "Site 4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          src: Site5,
          title: "Site 5",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          src: Site2,
          title: "Site 6",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
      ];
      
      const [ indice, setIndice] = useState(0);

      function proximaImagem() {
        var novoIndice = indice + 1 
        if(novoIndice >= series.length){
            novoIndice = 0
        }
        setIndice(novoIndice)
      }
      function imagemAnterior() {
        var novoIndice = indice - 1 
        if(novoIndice < 0){
            novoIndice = series.length - 1
        }
        setIndice(novoIndice)
      }

      function ajustarindice(valor){
        if(valor >= series.length) {
            return valor - series.length
        }
        return valor;
      }

      const item1 = series[ajustarindice(indice)]
      const item2 = series[ajustarindice(indice + 1)]
      const item3 = series[ajustarindice(indice + 2)]

    return (
      <div className={style.secaoCarrossel}>
        <h1>Meus Projetos</h1>
        <div className={style.carrossel}>
            <button onClick={imagemAnterior}>
        <FaArrowLeft color="#ffffffff" size={40}/>
            </button>
            <div className={style.carrosselItens}>
                <div className={style.item}>
                    <img src={item1.src} alt="" />
                    <div className={style.informacaoCarrossel}>
                        <h3>{item1.title}</h3>
                        <p>{item1.description}</p>
                    </div>
                </div>
                <div className={style.item}>
                    <img src={item2.src} alt="" />
                    <div className={style.informacaoCarrossel}>
                        <h3>{item2.title}</h3>
                        <p>{item2.description}</p>
                    </div>
                </div>
                <div className={style.item}>
                    <img src={item3.src} alt="" />
                    <div className={style.informacaoCarrossel}>
                        <h3>{item3.title}</h3>
                        <p>{item3.description}</p>
                    </div>
                </div>

            </div>
            <button onClick={proximaImagem}>
        <FaArrowRight color="#ffffffff" size={40}/>
            </button>
        </div>
      </div>
    )
}