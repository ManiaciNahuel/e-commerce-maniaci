/* Importations */
import "./styles/Form.css"

const Form = ({changeHandler, clientData, generateOrder, btnDisable}) => {
    return (
      <>
      <div className="form">
          <h2>FORM</h2>
          <h3>Complete all the fields with your information</h3>
          
          <form action="">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name" 
              value={clientData.name} 
              onChange={(e) => changeHandler(e)}
              placeholder="John Smith"
              required
            /> 
            
            <label htmlFor="phone">Phone</label>
            <input 
              type="text" 
              name="phone" 
              value={clientData.phone} 
              onChange={(e) => changeHandler(e)} 
              placeholder="11351123456"
              required
            /> 
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              value={clientData.email} 
              onChange={(e) => changeHandler(e)} 
              placeholder="johnsmith@gmail.com"
              required
            /> 
            <label htmlFor="email_2">Repeat your email</label>
            <input 
              type="email" 
              name="email_2" 
              value={clientData.email_2} 
              onChange={(e) => changeHandler(e)} 
              placeholder="johnsmith@gmail.com"
              required
            /> 
          </form>
          <button onClick={generateOrder} disabled={btnDisable?true:false}>Send order</button>
      </div>
      </>
  )
}

export default Form