import React from 'react'
import Producto from './producto/Producto'

const Inicio = () => {
    
    const agregarCarrito = () => {
        alert(`Agregado al carrito `);
      }
    
   
    return (
        <>
            <Producto accion={agregarCarrito}/>
        </>
    )
}

export default Inicio
