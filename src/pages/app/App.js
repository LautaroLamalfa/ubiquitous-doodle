import './App.css';
import { NavBar } from "../../components/navBar/navBar"
import { Container } from '../../components/ItemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <section>
        <Container user = {""}/>
      </section>
    </div>
  );
}

export default App;
