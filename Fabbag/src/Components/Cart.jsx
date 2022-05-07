import styled from "styled-components";
import PriceSection from "./PriceSection";
import ProductSection from "./ProductSection";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "../Redux/cart/actions";
const CartWrapper = styled.div`
   #cart-details{
      display: flex;
      align-items: flex-start;
    }
}
  @media (max-width: 767.98px) {
     #cart-details{
      display: block;
    }
}
`;
function Cart() {
  const updateCart = () => {
    console.log("updated cart");
  };

  // const [products, setProducts] = useState([]);
  const cartItems = useSelector(store => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartItems("62726e3abe5681299166cb87"));
  }, []);


  return (
    <CartWrapper>
      <div>
        <h1>My Cart</h1>
        <div id="cart-details">
          <ProductSection products={cartItems} updateCart={updateCart} />
          <PriceSection  updateCart={updateCart} total={cartItems.reduce((acc,cur)=> acc+cur.price,0)} />
        </div>
      </div>
    </CartWrapper>
  );
}

export default Cart;
