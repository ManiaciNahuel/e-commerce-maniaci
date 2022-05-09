import React, {useState} from "react";

/* estilos */
import './styles/ItemListContainer.css'

const ItemListContainer = ({initial, stock}) => {
    const [contador, SetContador] = useState(initial)

    function sumar() {
        /* (contador >= stock)?console.log("No hay más de 5"):SetContador(contador + 1);console.log("Sumando"); */
        if (contador >= stock) {
            console.log("No hay más de 5");
        } else {
            SetContador(contador + 1)
            console.log("Sumando");
        }
    }
    function restar() {
        /* (contador <= initial)?console.log("No se puede restar más"):SetContador(contador - 1);console.log("Restando"); */
        if (contador <= initial) {
            console.log("No se puede restar más");
        } else {
            SetContador(contador - 1)
            console.log("Restando");
        }
    }
    function cargar() {
        console.log("Productos agregados al carrito: ", contador);
    }

    return (
        <div className="ItemContainer">
            <img src="media/swimming_album.jpg" alt="" />
            <div className="botones">
                <button onClick={restar}>Restar</button>
                <p>{contador}</p>
                <button onClick={sumar}>Sumar</button>
            </div>
            <button className="btn-agregar" onClick={cargar}>Agregar al carrito</button>
        </div>
    )

}

export default ItemListContainer