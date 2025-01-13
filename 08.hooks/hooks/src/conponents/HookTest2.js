import React, { useState, useCallback } from 'react';

const products = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' }
];

const ShoppingCartApp = () => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    if(products.id === product.id){
        setCart(product)
    }
    

}, [products]);

//   const removeFromCart = useCallback((productId) => {
//     // 장바구니에서 상품 제거 로직 작성
//   }, [/* 의존성 배열 */]);


	// addToCart 참조값 변경 여부 확인 [useEffect]

  // removeFromCart 참조값 변경 여부 확인 [useEffect]
  
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {
            products.map((value)=>{
                return <li>{value.name}<button value={value} onClick={addToCart}>add to cart</button></li>
            })
        }

      </ul>

      <h2>Shopping Cart</h2>
      <ul>
       {cart.map((value)=>{
            return <li>{value.name}</li>
       })}
      </ul>
    </div>
  );
};

export default ShoppingCartApp;
