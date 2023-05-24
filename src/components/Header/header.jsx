import { Outlet, Link } from 'react-router-dom';
import { FiSmartphone } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import './header.css';
import { useContext, useState } from 'react';
import { ShopContext } from '../../context/shopContext';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { numberOfItems } = useContext(ShopContext);

  return (
    <>
      <div className='w-full h-12 flex justify-between items-center border-gray-500 border-b-[1px] z-50'>
        <Link to={'/'} className='flex items-center'>
          <img src='src/assets/android.jpg' className='w-16 p-2' />
          <h1 className='text-3xl'>Android</h1>
        </Link>

        <div
          style={{ backgroundColor: 'rgb(20, 20, 22)' }}
          className={`${
            isActive && 'active'
          } nav-menu flex flex-col gap-2 duration-300 mr-4 w-full fixed left-[-100%] py-2 top-12 border-b-[1px] border-gray-500 md:border-none md:w-auto md:gap-6 md:flex-row md:static md:py-0`}>
          <Link
            className='flex items-center justify-center'
            to={'/products'}
            onClick={() => setIsActive(!isActive)}>
            <FiSmartphone className='mr-1' /> Products
          </Link>
          <Link
            className='flex items-center justify-center'
            to={'/about'}
            onClick={() => setIsActive(!isActive)}>
            <AiOutlineInfoCircle className='mr-1' />
            About
          </Link>
          <Link
            className='flex items-center justify-center'
            to={'/cart'}
            onClick={() => setIsActive(!isActive)}>
            <BsCart3 className='mr-1' />
            Cart - {numberOfItems}
          </Link>
        </div>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${isActive && 'active'} hamburger mr-4`}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
