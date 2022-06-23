/* Importations */
import Item from "./Item";
import './styles/ItemList.css'

//Mapping the product list to show all the products asked
const ItemList = ({ products }) => {
  return (
    products.map((prod) =>  <Item key={prod.id} prod={prod} />  )
  )
}
  
export default ItemList