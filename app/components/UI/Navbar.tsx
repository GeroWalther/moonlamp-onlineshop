'use client';
import { useState } from 'react';

import Image from 'next/image';

import logo from '@/public/moonlamplogo2.png';

import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { BsCart4, BsFillBagHeartFill } from 'react-icons/bs';
import Link from 'next/link';

export const Navbar = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);
  function mobileMenuHandler() {
    setMobileMenu((openMobileMenu) => !openMobileMenu);
  }
  return (
    <nav className='py-3 bg-stone-50'>
      <div className='w-[89%] m-auto flex justify-between items-center max-width-[1400px]'>
        <Image src={logo} width={200} height={200} alt='logo' />
        <ul
          className={`md:flex items-center gap-8 md:static absolute text-dark  ${
            openMobileMenu
              ? 'top-12 py-10 w-full bg-background left-0 text-center space-y-10 text-dark drop-shadow-lg z-20 font-medium'
              : 'hidden'
          }`}>
          <li>
            <Link href={'/'}>Shop</Link>
          </li>
          <li>
            <Link href={'/'}>More Info</Link>
          </li>
          <li>
            <Link href={'/'}>FAQ</Link>
          </li>
          <li>
            <Link href={'/'}>Contact</Link>
          </li>
        </ul>
        <div className='flex gap-4 items-center text-dark ml-auto md:ml-0'>
          <div>
            <BsCart4 size={20} />
          </div>
          <div>
            <BsFillBagHeartFill size={20} />
          </div>
        </div>
        <div className='md:hidden ml-4' onClick={mobileMenuHandler}>
          {!openMobileMenu ? <FiMenu size={25} /> : <MdClose size={25} />}
        </div>
      </div>
    </nav>
  );
};
