import React,{useState} from 'react'
import Producto from './producto/Producto'

const Inicio = () => {
    
    const [carrito, setCarrito] = useState([])




    const agregarCarrito = (item) => {
        alert(`Agregado al carrito `);
        setCarrito([
           ...carrito,
            item
        ])
      }
    
   
    return (
        <>
            <Producto accion={agregarCarrito}/>
        </>
    )
}

export default Inicio
