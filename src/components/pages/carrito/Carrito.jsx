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
    return (
        <>
         <h1>Este es tu Carrito</h1>
               {
                 data.items.map((i)=>
                    <>
                    <div key={i.id}>
                      <h3>{i.nombre}</h3>
                      <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                    </div>
                    </>
                    )
               }   
        </>
    )
}

export default Carrito
