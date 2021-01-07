import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './navbar.css'
import {Store} from '../../../store'

const Navbar = () => {
    const [data, setData] = useContext(Store);

    return (
        <>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">HolApp</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                            aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarID">
                            <div className="navbar-nav">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>   
                                <Link className="nav-link active" aria-current="page" to="/categoria/camionetas">Camionetas</Link>   
                                <Link className="nav-link active" aria-current="page" to="/categoria/motocicleta">Motos</Link>   
                                <Link className="nav-link active" aria-current="page" to="/categoria/carro">Carros</Link>   
                            </div>
                        </div>
                    </div>
                    <Link to="/cart">
                    <div className="navcart">
                       <span>{data.cantidad}</span>
                        <AiOutlineShoppingCart/>
                    </div>
                    </Link>
                </nav>
        </>
    )
}

export default Navbar
