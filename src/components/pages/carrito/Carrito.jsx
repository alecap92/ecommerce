import React,{useContext} from 'react'
import {Store} from '../../../store'

const Carrito = () => {

    const [data, setData] = useContext(Store);

    const vaciarCarrito = ()=>{
        setData({
            items:[],
            cantidad:0
          });
    }

    const eliminarProducto = (id) => {
        
        // console.log(data.items)
        const filtro = data.items.filter((item)=> item.id !== id )
        
        setData({
            ...data,
            cantidad: data.cantidad - 1,
            items:filtro
          })
    }

    return (
        <>
         <h1>Este es tu Carrito</h1>
               {
                 data.items.map((i)=>
                    <>
                    <div key={i.id}>
                      <h3>{i.nombre}</h3>
                      <button className="btn btn-danger" onClick={()=>{eliminarProducto(i.id)}}>Eliminar Producto</button>
                    </div>
                    </>
                    )
                }   
                <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
        </>
    )
}

export default Carrito
