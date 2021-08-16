import './routes.css'
import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom"
import { NavBar } from '../src/components/navBar/navBar'
import { Itemlistcontainer } from '../src/components/itemListContainer/itemListContainer'
import { ItemDetailContainer } from '../src/components/ItemDetailContainer/itemDetailContainer'
import { Cart } from '../src/components/shoppingCart/shoppingCart'

export const Routes = () => {
  return (
        <Router>
            <main className="routes">
                <NavBar/>
                    <Switch>
                        <Route exact path="/">
                            <Itemlistcontainer />
                        </Route>
                        <Route path="/category/:id">
                            <Itemlistcontainer />
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