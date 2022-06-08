import { useState } from "react";

const Form = ({orden}) => {

    const [clientData, setClientData] = useState({name:"", phone:"", email:""})
    function changeHandler(e) {
      setClientData({
        ...clientData,[e.target.name]: e.target.value
      })
    }

    async function enviarDatos () {
      console.log(clientData);
      orden.buyer = { name: ' ', email: ' ', phone: ' ' }
      orden.buyer = clientData.map(clientData => {
        const name = clientData.name
        const phone = clientData.phone
        const email = clientData.email

        return {name, phone, email}
      })
      console.log(orden.buyer);
    }

    return (
      <>

      <div>
          <p>FORMULARIO</p>
          <h3>Complete sus datos para finalizar la compra</h3>
          
          <form action="post">
            <input 
              type="text" 
              name="nombre" 
              value={clientData.name} 
              onChange={(e) => changeHandler(e)}
              required
            /> 
            <input 
              type="text" 
              name="email" 
              value={clientData.email} 
              onChange={(e) => changeHandler(e)} 
              required
            /> 
            <input 
              type="text" 
              name="phone" 
              value={clientData.phone} 
              onChange={(e) => changeHandler(e)} 
              required
            /> 
          <button type="submit" onClick={enviarDatos}>Enviar pedido</button>
          </form>
      </div>
      </>
    
  )
}

export default Form