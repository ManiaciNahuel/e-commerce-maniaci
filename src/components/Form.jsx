
import "./styles/Form.css"


const Form = ({changeHandler, clientData, generarOrden, btnDisable}) => {

    return (
      <>

      <div className="form">
          <h2>FORMULARIO</h2>
          <h3>Complete sus datos para finalizar la compra</h3>
          
          <form action="">
            <label htmlFor="name">Nombre y Apellido</label>
            <input 
              type="text" 
              name="name" 
              value={clientData.name} 
              onChange={(e) => changeHandler(e)}
              placeholder="Juan Perez"
              required
            /> 
            
            <label htmlFor="email">Correo Electrónico</label>
            <input 
              type="text" 
              name="email" 
              value={clientData.email} 
              onChange={(e) => changeHandler(e)} 
              placeholder="juanperez@gmail.com"
              required

            /> 
            
            <label htmlFor="phone">Número de télefono</label>
            <input 
              type="text" 
              name="phone" 
              value={clientData.phone} 
              onChange={(e) => changeHandler(e)} 
              placeholder="351123456"
              required
            /> 
            
          </form>
          <button onClick={generarOrden} disabled={btnDisable?true:false}>Enviar pedido</button>
      </div>
      </>
    
  )
}

export default Form