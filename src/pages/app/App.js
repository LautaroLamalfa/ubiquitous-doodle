import './App.css';
import { NavBar } from "../../components/navBar/navBar"

function App() {
  const Name = 'lautaro'
  const LastName = 'lamalfa'
  const fullname = `${Name} ${LastName}`
  return (
    <div className="App">
      <NavBar/>
      <section>
        <h1>Hola, me llamo {fullname} </h1>
      </section>
    </div>
  );
}

export default App;
