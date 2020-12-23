import React,{Fragment} from 'react'
import Navbar from './components/includes/navbar/Navbar'
import Inicio from './components/pages/Inicio';
import ProductoDetalle from './components/pages/producto/ProductoDetalle';

const App = () => {
    return (
        <Fragment>
            <Navbar/>
       
        <div className="container p-5">
            <Inicio/>
        </div>
        <ProductoDetalle />
        </Fragment>
    )
}

export default App;