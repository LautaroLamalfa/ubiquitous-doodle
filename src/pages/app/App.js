import './App.css';
import { NavBar } from "../../components/navBar/navBar"
import { Container } from "../../components/ItemListContainer/itemListContainer"
import { Counter } from "../../components/ItemCount/itemCount"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <section>
        <Container user = {""}/>
      </section>
        <Counter inicial={1} stock={9} onAdd={"Hola"}/>
      <section>
        
      </section>
    </div>
  );
}

export default App;
