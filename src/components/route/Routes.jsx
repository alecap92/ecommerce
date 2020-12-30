import React,{Fragment} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "../includes/navbar/Navbar";
import Inicio from "../pages/Inicio";
// import Producto from "../pages/producto/Producto";
import ProductoDetalle from "../pages/producto/ProductoDetalle";



export const AppRouter = () => {
    
  return  (
        <Router>
           <Navbar/>
          <Fragment>
              <div className="container py-5">
            <Switch>

            <Route exact path="/producto/:productName">
                <ProductoDetalle/>
             </Route>
             <Route exact path="/categoria/:category">
                <Inicio/>
             </Route>
             <Route exact path="/">
                <Inicio/>
             </Route>
            </Switch>

            </div>
          </Fragment>
        </Router>
      );
}

export default AppRouter;