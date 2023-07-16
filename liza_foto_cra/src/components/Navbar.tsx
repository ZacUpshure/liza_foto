import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import github from '../assets/github.png'; 
import { styles } from '../styles'; 

// import {styles} from '../styles';

const Navbar = () => {

    const [active, setActive] = useState("");
  return (
    <nav className={
        `${styles.paddingX} w-full py-5 fixed top-0 z-20 bg-primary`
    }>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
            <Link 
            to="/"
            className='flex items-center gap-2'
            onClick={() => {
                setActive("");
                window.scrollTo(0, 0)
            }}
            >
                <img src={github} alt='logo' className='w-9 h-9 object-contain' />
                <p className='text-white text-[18px] font-bold cursor-pointer'>Liza <span className='sm:block hidden'>Foto</span></p>
            </Link>

        </div>
    </nav>
  )
}

export default Navbar