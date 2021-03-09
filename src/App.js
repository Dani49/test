import React from "react"
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Home from "./Views/Home"
import About from "./Views/About"
import Products from "./Views/Products"
import Cart from "./Views/Cart"
import Header from "./Header"



function App(){
  return (
    <BrowserRouter>
    <Header/>
        <main>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path ="/about">
              <About/>
            </Route>
            <Route exact path="/products">
              <Products/>
            </Route>
            <Route exact path="/cart">
              <Cart/>
            </Route>
          </Switch>
        </main>
        
        </BrowserRouter>
  )
}

export default App;
