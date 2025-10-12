import "./App.css";
import Categorias from "./components/Categorias";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Recursos from "./components/Recursos";
import Rodape from "./components/Rodape";
import DarkVeil from './components/DarkVeil';
import Ranking from "./components/Ranking";
function App() {
  return (
    <>
      <div className="parteCima">
        <Header />
        <Hero />
      </div>
      
      <Recursos />
      {/* <Categorias />
      <Ranking />  */}
      {/* { <Rodape /> }  */}
    </>
  );
}

export default App;
