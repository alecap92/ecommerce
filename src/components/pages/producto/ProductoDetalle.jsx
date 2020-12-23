import React,{ useState, useEffect }  from 'react'
import ProductoApi from "../../includes/productoApi/ProductoApi.json";


const ProductoDetalle = () => {


    const [items, setItems] = useState([]);
   
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ProductoApi[0]);
      }, 2000);
    });
  
    useEffect(() => {
      getProducts.then((rta) => setItems(rta));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  


    return (
        <>
            {
             
                <div className="row">
               <div className="col-4">
                   <img 
                   src={items.imagen}
                   alt=""
                   className="img-fluid"
                   />
               </div>
               <div className="col-md-6">
                     <h1>{items.nombre}</h1>
                    <p>{items.descripcion}</p>
                    <h3>{items.precio}</h3>
                    <button className="btn btn-primary">Agregar al Carrito</button>
               </div>
           </div>
            }
        </>
    )
}

export default ProductoDetalle
