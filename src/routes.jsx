import './routes.css'
import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom"
import { NavBar } from '../src/components/navBar/navBar'
import { ItemListContainer } from '../src/components/itemListContainer/itemListContainer'
import { ItemDetailContainer } from '../src/components/ItemDetailContainer/itemDetailContainer'
import { Cart } from '../src/components/shoppingCart/shoppingCart'

export const Routes = () => {
  return (
        <Router>
            <main className="routes">
                <NavBar/>
                    <Switch>
                        <Route exact path="/">
                            <ItemListContainer />
                        </Route>
                        <Route path="/category/:id">
                            <ItemListContainer />
                        </Route>
                        <Route path="/item/:id">
                            <ItemDetailContainer />
                        </Route>
                        <Route path="/cart">
                            <Cart/>
                        </Route>
                    </Switch>
            </main>
        </Router>
  );
}