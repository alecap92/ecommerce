import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "./cantidad.css";

const Cantidad = ({ id, stock, initial }) => {
  const [cantidad, setCantidad] = useState(initial);

  const operacion = (accion) => {
    if (cantidad >= initial) {
        if(cantidad < stock){
            accion ? setCantidad(cantidad + 1) : setCantidad(cantidad - 1);
        }else{setCantidad(initial)}
    } else {
      setCantidad(initial);
    }
  };

  return (
    <>
      <div className="row row-cols-auto">
        <div>
          <FaMinus
            onClick={() => {
              operacion(false);
            }}
          />
        </div>
        <input
          type="text"
          className="col-2"
          value={cantidad}
          id={`cantidad${id}`}
        />
        <div>
          <FaPlus
            onClick={() => {
              operacion(true);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Cantidad;
