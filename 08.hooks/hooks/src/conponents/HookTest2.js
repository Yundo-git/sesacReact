import React, { useState, useCallback } from 'react';

const products = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' }
];

const ShoppingCartApp = () => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((value) => {


    // console.log(value)
        setCart((preCart)=>
            [
                ...preCart,
            {
            id : value.id,
            name : value.name,
        }
    ])
        console.log('cart >>>',cart);
        
}, [products]);

  const removeFromCart = useCallback((productId) => {
    // 장바구니에서 상품 제거 로직 작성
    console.log('>>>>>>>>',productId.id)
        setCart((list)=>
            list.filter((remove)=> remove.id !== productId.id)
            
        )

  }, [products]);


	// addToCart 참조값 변경 여부 확인 [useEffect]

  // removeFromCart 참조값 변경 여부 확인 [useEffect]
  console.log('cart >>>>>',cart)
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {
            products.map((value)=>{
                return <li>{value.name}<button onClick={()=>{addToCart(value)}}>add to cart</button></li>
            })
        }

      </ul>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((value)=>{
               return <li>{value.name} <button onClick={()=>removeFromCart(value)}>del to product</button></li>
        })}
      </ul>
    </div>
  );
};

export default ShoppingCartApp;
