import { useContext } from 'react';
import { ShopContext } from '../../context/shopContext';
import { PRODUCTS } from '../../products';
import CartProduct from './CartProduct';

const Cart = () => {
  const { cartItems, numberOfItems } = useContext(ShopContext);
  console.log(numberOfItems);
  return (
    <>
      <h1 className='text-4xl text-center my-14 font-semibold'>Cart</h1>
      {numberOfItems === 0 && (
        <h1 className='text-xl text-center'>{'Your cart is empty :('}</h1>
      )}
      <div className='max-w-7xl w-11/12 md:w-4/5 mx-auto'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartProduct product={product} />;
          }
        })}
      </div>
    </>
  );
};

export default Cart;
