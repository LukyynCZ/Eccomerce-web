import { useContext } from 'react';
import { ShopContext } from '../../context/shopContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ productId, productBrand, productName, productImage, productPrice }) => {
  const { addToCart } = useContext(ShopContext);

  const notify = () =>
    toast.success('Item added to cart!', {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  return (
    <div className='product'>
      <ToastContainer
        position='top-center'
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <img className='product-image' src={productImage} />
      <div className='w-[90%] mx-auto'>
        <div className='flex justify-between mt-2 font-semibold'>
          <h1>{productName}</h1>
          <h1>{productPrice}$</h1>
        </div>

        <h1 className='text-zinc-500'>{productBrand}</h1>
      </div>
      <div className='flex justify-center'>
        <button
          onClick={() => {
            addToCart(productId);
            notify();
          }}
          className='w-[90%] border-[1px] rounded-2xl mt-2 py-1 hover:font-semibold hover:bg-white duration-150 hover:text-black'>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
