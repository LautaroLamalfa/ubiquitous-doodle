import './App.css';
import { NavBar } from "../../components/navBar/navBar"
import { ItemList } from "../../components/ItemListContainer/itemListContainer"

function App() {
  const mensaje = 'Proximamente tendremos mas articulos para vender'
  return (
    <div className="App">
      <NavBar/>
      <section>
        <ItemList user = {mensaje}/>
      </section>
    </div>
  );
}

export default App;
