const getStoredCart = ()=>{
  const storeCartString =   localStorage.getItem('cart')
  if(storeCartString){
    return JSON.parse(storeCartString)
  }
  return [];

}
const saveCartToLs = cart =>{
      const cartStringified = JSON.stringify(cart);
      localStorage.setItem('cart',cartStringified);
} 

const addToLs = id =>{
    const cart  =  getStoredCart();
    cart.push(id);
    // save to local storage 
    saveCartToLs(cart);
}
export{addToLs , getStoredCart}