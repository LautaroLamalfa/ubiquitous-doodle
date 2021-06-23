import './App.css';
import { NavBar } from "../../components/navBar/navBar"
import { ItemList } from "../../components/ItemListContainer/itemListContainer"
import { ItemCount } from "../../components/ItemCount/itemCount"

function App() {
  const mensaje = 'Proximamente tendremos mas articulos para vender... Mientras tanto, aca tenes un contador!'
  return (
    <div className="App">
      <NavBar/>
      <section>
        <ItemList user = {mensaje}/>
      </section>
        <ItemCount inicial={1} stock={10} onAdd={"Hola"}/>
      <section>
        
      </section>
    </div>
  );
}

export default App;
