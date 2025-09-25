import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaTwitch } from "react-icons/fa";
import style from "./style.module.css";

function Rodape() {
  return (
    <footer className={style.rodape}>
      <div className={style.redesSociais}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter size={24} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube size={24} />
        </a>
        <a href="https://twitch.tv" target="_blank" rel="noreferrer">
          <FaTwitch size={24} />
        </a>
      </div>
      <p>
        Desenvolvido por{" "}
        <a
          href="https://github.com/Facco4211"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rafael Facco
        </a>
      </p>
      <p>©2025 Rafael Facco. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Rodape;
