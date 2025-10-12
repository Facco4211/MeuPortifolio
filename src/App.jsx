import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Recursos from "./components/Recursos";
import Rodape from "./components/Rodape";
import Ferramentas from "./components/Ferramentas";
function App() {
  return (
    <>
      <div className="parteCima">
        <Header />
        <Hero />
      </div>
      <Recursos />
      <Ferramentas />
      {/* <Rodape />  */}
    </>
  );
}

export default App;
