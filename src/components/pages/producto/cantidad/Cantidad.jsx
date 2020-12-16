import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "./cantidad.css";

const Cantidad = ({ id, stock, initial }) => {
  
  const [cantidad, setCantidad] = useState(initial);

  const sumar = () => {
    cantidad < stock ? setCantidad(cantidad + 1) : setCantidad(stock)
  }
  const restar = () => {
    cantidad > 1 ? setCantidad(cantidad - 1) : setCantidad(initial)
  }

  return (
    <>
      <div className="row row-cols-auto">
        <div>
          <FaMinus
            onClick={()=>{restar()}}
          />
        </div>
        <input
          type="text"
          className="col-2"
          value={cantidad}
          id={`cantidad${id}`}
          readOnly
        />
        <div>
          <FaPlus
             onClick={()=>{sumar()}}
          />
        </div>
      </div>
    </>
  );
};

export default Cantidad;
