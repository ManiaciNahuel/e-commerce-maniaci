export const productList = [
  {id: 1, name: 'Swimming', price: 500, image:'https://i.postimg.cc/KjqLgh7f/Swimming.jpg', stock: 8, }, 
  {id: 2, name: 'Circles', price: 400, image:'https://i.postimg.cc/9XJyky39/Circles.jpg', stock: 10, }, 
  {id: 3, name: 'The Divine Feminine', price: 350, image:'https://i.postimg.cc/j2dP5SfC/The-Divine-Feminine.jpg', stock: 6, }, 
  {id: 4, name: 'Faces', price: 650, image:'https://i.postimg.cc/prKP8Hxk/Mac-Miller-Faces-2021.jpg', stock: 6, }, 
];



export const getProducts = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const query = id ? productList.find(producto => producto.id === id) : productList
      resolve(query)
    }, 1000)
  })
}

/* export const getOneProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(productList)
  }, 2000)
});
 */


