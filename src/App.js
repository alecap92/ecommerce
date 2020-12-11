import React,{Fragment} from 'react'
import Navbar from './components/includes/navbar/Navbar'
import Inicio from './components/pages/Inicio'

const App = () => {
    return (
        <Fragment>
            <Navbar/>
        <div className="container p-5">
            <Inicio/>
        </div>
        </Fragment>
    )
}

export default App;