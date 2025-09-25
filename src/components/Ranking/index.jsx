import React from "react";
import style from "./style.module.css";


function Ranking() {
  const topGames = [
    {
      nome: "The Witcher 3",
      avaliacao: 9.7,
      // imagem: WitcherMini,
    },
    {
      nome: "God of War",
      avaliacao: 9.5,
      // imagem: GodMini,
    },
    {
      nome: "Elden Ring",
      avaliacao: 9.3,
      // imagem: EldenMini,
    },
    {
      nome: "Horizon Zero Dawn",
      avaliacao: 9.1,
      // imagem: horizonMini,
    },
    {
      nome: "Red Dead Redemption 2",
      avaliacao: 9.0,
      // imagem: RedMini,
    },
    {
      nome: "Cyberpunk 2077",
      avaliacao: 8.8,
      // imagem: CyberMini,
    },
    {
      nome: "Assassin's Creed Valhalla",
      avaliacao: 8.6,
      // imagem: ValhallaMini,
    },
    {
      nome: "Doom Eternal",
      avaliacao: 9.0,
      // imagem: DoomMini,
    },
  ];


  return (
    <section className={style.topJogos}>
      <h2>Top Jogos da Semana</h2>
      <ul className={style.gamesGrid}>
        {topGames.map((game, index) => (
          <li key={index} className={style.gameItem}>
            <div className={style.thumbnailWrapper}>
              <img
                src={game.imagem}
                alt={game.nome}
                className={style.thumbnail}
              />
            </div>
            <div className={style.info}>
              <span className={style.posicao}>{index + 1}º</span>
              <span className={style.nome}>{game.nome}</span>
              <span className={style.avaliacao}>Nota: {game.avaliacao}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Ranking;
