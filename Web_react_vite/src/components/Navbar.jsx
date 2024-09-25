import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, setIsMenuOpen, getCartCount } = useContext(ShopContext);

    const toggleMenu = (state) => {
        setVisible(state);
        setIsMenuOpen(state);  // Informamos al contexto si el menú está abierto o cerrado
    };

    // Verificar si el usuario tiene un token de autenticación en localStorage
    const token = localStorage.getItem('token');

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to='/'><img src={assets.logo} className='w-40' alt="Logo" /></Link>
          
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="Search" />
                <div className='group relative'>
                    {token ? (
                        <Link to='/profile'><img src={assets.profile_icon} className='w-5 cursor-pointer' alt="Profile" /></Link>
                    ) : (
                        <Link to='/login'><img src={assets.profile_icon} className='w-5 cursor-pointer' alt="Login" /></Link>
                    )}
                    <div className='group-hover:block hidden absolute dropdown menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            {token ? (
                                <>
                                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                                    <p className='cursor-pointer hover:text-black'>Order</p>
                                    <p className='cursor-pointer hover:text-black' onClick={() => {
                                        localStorage.removeItem('token');
                                        window.location.reload();
                                    }}>Logout</p>
                                </>
                            ) : (
                                <p className='cursor-pointer hover:text-black' onClick={() => window.location.href='/login'}>Login</p>
                            )}
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-6 min-w-5' alt="Cart Icon" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>

                <img onClick={() => toggleMenu(true)} src={assets.menu_icon} className='w-7 cursor-pointer sm:hidden' alt="Menu" />
            </div>
            
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => toggleMenu(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Back" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => toggleMenu(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={() => toggleMenu(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => toggleMenu(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                    <NavLink onClick={() => toggleMenu(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


