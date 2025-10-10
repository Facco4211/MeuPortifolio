import { FaChevronRight, FaChevronLeft  } from "react-icons/fa";
import style from './style.module.css';
import Site1 from '../../imagens/SitesCarrosel/Template1.png';
import Site2 from '../../imagens/SitesCarrosel/Template2.png';
import Site3 from '../../imagens/SitesCarrosel/Template3.png';
import Site4 from '../../imagens/SitesCarrosel/Template4.png';
import Site5 from '../../imagens/SitesCarrosel/Template5.png';
import Site6 from '../../imagens/SitesCarrosel/Template6.png';
import we from '../../imagens/Wallpaper.png';
import asd from '../../imagens/SitesCarrosel/Template4.png';
import { useState } from "react";

export default function Carrossel3() {
  const series = [
    { src: Site1, title: "Site 1", description: "Descrição do site 1..." },
    { src: Site2, title: "Site 2", description: "Descrição do site 2..." },
    { src: Site3, title: "Site 3", description: "Descrição do site 3..." },
    { src: Site4, title: "Site 4", description: "Descrição do site 4..." },
    { src: Site5, title: "Site 5", description: "Descrição do site 5..." },
    { src: Site6, title: "Site 6", description: "Descrição do site 6..." },
    { src: we, title: "site 7", description: "Descrição do site 6..." },
    { src: asd, title: "site 7", description: "Descrição do site 6..." },
  ];

  const [indice, setIndice] = useState(0);
  const [startX, setStartX] = useState(null);

  const proximaImagem = () => setIndice((indice + 1) % series.length);
  const imagemAnterior = () =>
    setIndice((indice - 1 + series.length) % series.length);

  // --- Touch events (mobile)
  const handleTouchStart = (e) => setStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    handleSwipe(endX - startX);
  };

  // --- Mouse events (desktop)
  const handleMouseDown = (e) => setStartX(e.clientX);
  const handleMouseUp = (e) => {
    if (startX === null) return;
    handleSwipe(e.clientX - startX);
  };
  const handleMouseLeave = (e) => {
    if (startX !== null) {
      handleMouseUp(e);
    }
  };

  // --- Função genérica de swipe
  const handleSwipe = (deltaX) => {
    if (deltaX > 50) {
      imagemAnterior(); // arrastou pra direita
    } else if (deltaX < -50) {
      proximaImagem(); // arrastou pra esquerda
    }
    setStartX(null);
  };

  // setInterval(() => {
  //   proximaImagem()
  // }, 3000);

  return (
    <div className={style.secaoCarrossel}>
      <h1>Meus Projetos</h1>

      <div
        className={style.carrossel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <button onClick={imagemAnterior} className={style.seta}>
          <FaChevronLeft  size={40} />
        </button>

        <div className={style.container}>
          {series.map((item, i) => {
            let offset = (i - indice + series.length) % series.length;
            if (offset > series.length / 2) offset -= series.length;

            return (
              <div
                key={i}
                className={style.card}
                style={{
                  transform: `translateX(${offset * 50}%) scale(${
                    offset === 0 ? 0.85 : 0.50
                  })`,
                  zIndex: offset === 0 ? 3 : 2,
                  opacity: Math.abs(offset) > 1 ? 0 : 1,
                  pointerEvents: Math.abs(offset) > 1 ? "none" : "auto",
                }}
              >
                <img src={item.src} alt={item.title} />
                <div className={style.info}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={proximaImagem} className={style.seta}>
          <FaChevronRight size={40} />
        </button>
      </div>

      {/* Indicadores (bolinhas) */}
      <div className={style.indicadores}>
        {series.map((_, i) => (
          <span
            key={i}
            className={`${style.bolinha} ${i === indice ? style.ativa : ""}`}
            onClick={() => setIndice(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
