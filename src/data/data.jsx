export const productList = [
  {id: '1', name: 'Swimming', price: 500, image:'https://i.postimg.cc/KjqLgh7f/Swimming.jpg', stock: 8, category: 'new'}, 
  {id: '2', name: 'Circles', price: 400, image:'https://i.postimg.cc/9XJyky39/Circles.jpg', stock: 10, category: 'new'}, 
  {id: '3', name: 'The Divine Feminine', price: 350, image:'https://i.postimg.cc/j2dP5SfC/The-Divine-Feminine.jpg', stock: 6, category: 'old'}, 
  {id: '4', name: 'Faces', price: 650, image:'https://i.postimg.cc/prKP8Hxk/Mac-Miller-Faces-2021.jpg', stock: 6, category: 'old'}, 
];



export const getProduct = (id) => {
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = productList.find(producto => producto.id === id)
      const query = id ? found : productList;
      resolve(query)
    }, 0)
  })
} 

/* export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList)
    }, 0)
  });
} */
  


