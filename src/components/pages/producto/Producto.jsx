import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import "./producto.css";
import ProductoApi from "../../includes/productoApi/ProductoApi.json";
import Cantidad from "./cantidad/Cantidad";

const Producto = ({ accion }) => {
  const [items, setItems] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ProductoApi);
    }, 2000);
  });

  useEffect(() => {
    getProducts.then((rta) => setItems(rta));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="row">
        {
          items.length ? 
          <>  
           { items.map((item) => (
            <div className="card" key={item.id}>
              <img
                src={item.imagen}
                className="card-img-top"
                alt="algo"
                height="300px"
              />
              <div className="card-body">
                <Link to={`/producto/${item.nombre}`}><h5 className="card-title">{item.nombre}</h5></Link> 
                <p className="card-text">{item.descripcion}</p>
                <strong>{item.precio}</strong>
                <Cantidad id={item.id} stock={5} initial={1} />
                <br />
                <button
                  onClick={() => {
                    accion(item);
                  }}
                  className="btn btn-primary"
                >
                  Ver Producto
                </button>
              </div>
            </div>
            ))}
          </>
         : (
          <p>cargando items</p>
        )}
      </div>
    </>
  );
};

export default Producto;
