import React from "react";
import "./producto.css";
import ProductoApi from "../../includes/productoApi/ProductoApi.json";

import Cantidad from "./cantidad/Cantidad";
const Producto = () => {
 

  return (
    <>
        <div className="row">
        
      {ProductoApi.map((producto) => (
        <div className="card" key={producto.id}>
          <img
            src={producto.imagen}
            className="card-img-top"
            alt="algo"
            
            height="300px"
          />
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">
            {producto.descripcion}
            </p>
            <strong>{producto.precio}</strong>

            <Cantidad id={producto.id} stock={5} initial={1} />

            <br/>
            <a href="/" className="btn btn-primary">
            Comprar
            </a>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default Producto;
