import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import {Store} from '../../../store'


const CartWidget = () => {

    const [data, SetData] = useContext(Store);

    console.log(data)
    return (
        <>
            <div className="cartWidget d-none">
                <div className="mx-3">
                    <div className="my-5">
                        <h4>{data.items > 0 ?   'Tu carrito esta vacio' : 'Tus productos seleccionados:'}</h4>
                    </div>
                
                    { data.items.map((item)=>
                        <>
                            <p>{data.cantidad} - {item.nombre}</p>
                        </>
                    ) }
                    <br/>
                    <div className="d-flex justify-content-center">
                    <Link to="/cart"> <button className="btn btn-primary mt-5">Ir al carrito</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartWidget
