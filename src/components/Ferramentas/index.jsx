import React from "react";
import style from "./style.module.css";
import { FaReact, FaCss3, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiPhp } from "react-icons/si";
import WallpaperEspaco from '../../imagens/estrelaWalpaper.png';

function Ferramentas() {
  const ferramentaQueUso = [
    {
      nome: "React",
      Icone: FaReact,
      descricao: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    },
    {
      nome: "Css",
      Icone: FaCss3 ,
      descricao: "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML. ",
    },
    {
      nome: "Html",
      Icone: FaHtml5,
      descricao: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.",
    },
    {
      nome: "JavaScript",
      Icone: IoLogoJavascript,
      descricao: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",
    },
    {
      nome: "php",
      Icone: SiPhp,
      descricao: "PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações atuantes no lado do servidor.",
    },
  ];

  return (
    <>
    <img src={WallpaperEspaco} alt="" className={style.wallpaper}/>
    <section className={style.ferramentaQueUso}>
      <ul className={style.ferramentasGrid}>
        {ferramentaQueUso.map((Ferramenta, index) => {
          const Icone = Ferramenta.Icone;
          return (
            <li key={index} className={style.ferramentaItem}>
              <div className={style.icones}>
                <Icone className={style.icon} />
              </div>
              <div className={style.info}>
                <span className={style.nome}>{Ferramenta.nome}</span>
                <p className={style.descricao}>{Ferramenta.descricao}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
    </>
  );
}

export default Ferramentas;