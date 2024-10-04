import Componente1 from "./Componente1";
import Componente2 from "./Componente2";
import Componente3 from "./Componente3";

function App() {
  return (
    <div className="App">
      <h1>Finalmente ci siamo con React</h1>
      <Componente1></Componente1>
      <Componente2></Componente2> {/* Per richiamare l'elemento dentro al componente possiamo usare due metodi di scrittura */}
      <Componente3 /> {/* Per richiamare l'elemento dentro al componente possiamo usare due metodi di scrittura */}
    </div>
  );
}

export default App;
