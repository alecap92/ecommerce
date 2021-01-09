import React,{Fragment, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "../includes/navbar/Navbar";
import Category from "../pages/catogory/Category";
import Inicio from "../pages/Inicio";
// import Producto from "../pages/producto/Producto";
import ProductoDetalle from "../pages/producto/ProductoDetalle";
import {Store} from '../../store';
import Carrito from "../pages/carrito/Carrito";
import CartWidget from "../includes/cartWidget/CartWidget";


export const AppRouter = () => {
  
  const [data, setData] = useState({
    items:[],
    cantidad:0
  });

  return  (
    <Store.Provider value={[data, setData]}>
        <Router>
           <Navbar/>
           <CartWidget/>
          <Fragment>
              <div className="container py-5">
            <Switch>

            <Route exact path="/producto/:productName">
                <ProductoDetalle/>
             </Route>
             <Route exact path="/categoria/:nombreCategoria">
                <Category/>
             </Route>
             <Route exact path="/">
                <Inicio/>
             </Route>
             <Route exact path="/cart">
               <Carrito/>
             </Route>
            </Switch>

            </div>
          </Fragment>
        </Router>
        </Store.Provider>
      );
}

export default AppRouter;