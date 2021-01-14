import React,{ useState, useEffect,useContext }  from 'react'
import ProductoApi from "../../includes/productoApi/ProductoApi.json";
import {useParams} from 'react-router-dom'
import Cantidad from './cantidad/Cantidad';
import {Store} from '../../../store'

const ProductoDetalle = ({ accion }) => {

  const [data, setData] = useContext(Store);

    const { productName } = useParams ();

    const [items, setItems] = useState([]);
   
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        const lista =  ProductoApi.find((item)=> 
          item.nombre === productName
        );
        resolve(lista);
      }, 2000);
    });
  
    useEffect(() => {
      getProducts.then((rta) => setItems(rta));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const carrito = (cantidad)=>{
      const productoAgregado = {
        ...items
      }
      
        if(data.items.find(item =>  item.nombre === items.nombre )){
          const productoEncontrado = data.items.find(item =>  item.nombre === items.nombre )
          productoEncontrado.cantidad += cantidad
          console.log('repetido');
          setData({
            ...data,
            cantidad: data.cantidad + cantidad,
            items:[...data.items]
          })
      }else{
        productoAgregado.cantidad = cantidad
        setData({
          ...data,
          cantidad: data.cantidad + cantidad,
          items:[...data.items,productoAgregado]
        })
      } 
    }

    return (
        <>
            {
                <div className="row">
               <div className="col-4">
                   <img 
                   src={items.imagen}
                   alt="Imagen del producto"
                   className="img-fluid"
                   />
               </div>
               <div className="col-md-6">
                     <h1>{items.nombre}</h1>
                    <p>{items.descripcion}</p>
                    <h3>{items.precio}</h3>
                    <Cantidad id={items.id} stock={5} initial={1} carrito={carrito}/>
                  
               </div>
           </div>
            }
        </>
    )
}

export default ProductoDetalle
