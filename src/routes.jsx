import './routes.css'
import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom"
import { NavBar } from './components/navBar/navBar'
import { Container } from './components/ItemListContainer/itemListContainer'
import { DContainer } from './components/itemDetailContainer/itemDetailContainer'
import { Cart } from './components/shoppingCart/shoppingCart'

export const Routes = () => {
  return (
    <Router>
        <main className="routes">
            <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <Container />
                    </Route>
                    <Route exact path="/category/:id">
                        <Container />
                    </Route>
                    <Route exact path="/item/:id">
                        <DContainer />
                    </Route>
                    <Route exact path="/cart">
                        <Cart/>
                    </Route>
                </Switch>
        </main>
    </Router>
  );
}