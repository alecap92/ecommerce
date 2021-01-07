import React, { useState, useEffect } from "react";
import {Link,useParams} from 'react-router-dom';
import "./producto.css";
import ProductoApi from "../../includes/productoApi/ProductoApi.json";
import Cantidad from "./cantidad/Cantidad";

const Producto = ({ accion }) => {
  const [items, setItems] = useState([]);
  const {nombreCategoria} = useParams();

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {  
    resolve(ProductoApi);
    }, 2000);
  });
  
  useEffect(() => {
    getProducts.then( ( rta ) => { 
      // console.log(rta)
        if(nombreCategoria){ 
          
        const productoCategoria = rta.filter((item)=>nombreCategoria === item.categoria)
        setItems(productoCategoria)

      }else{ 
        setItems(rta) } 
      } )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nombreCategoria]);

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
                
                <br />
                <Link to={`/producto/${item.nombre}`}><button className="btb btn-primary">Ver producto</button></Link> 
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
