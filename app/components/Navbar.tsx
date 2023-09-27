'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import Cart from './Cart';
import { useCartStore } from '@/store/useCartStore';

import logo from '@/public/moonlamplogo2.png';

import { UserButton, useUser } from '@clerk/nextjs';

import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from 'react-icons/ai';

export const Navbar = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const cartStore = useCartStore();

  const { isSignedIn, user } = useUser();

  function mobileMenuHandler() {
    setMobileMenu((openMobileMenu) => !openMobileMenu);
  }

  // disable scrolling when mobile menu is open
  // useEffect(() => {
  //   if (openMobileMenu) {
  //     document.body.style.overflowY = 'hidden';
  //   } else {
  //     document.body.style.overflowY = 'auto';
  //   }
  // }, [openMobileMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAnchorWithOffset = (event: any, offset: number = 60) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - offset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    setMobileMenu(false);
  };

  return (
    <nav
      className={`py-4 w-full bg-stone-50 ${
        isScrolling ? 'fixed top-0 shadow-md z-10' : 'relative'
      }`}>
      <div className='w-[89%] m-auto flex justify-between items-center max-width-[1400px]'>
        <Image src={logo} width={150} height={150} alt='logo' />
        <ul
          className={`md:flex items-center gap-8 md:static absolute text-dark  ${
            openMobileMenu
              ? 'top-12 py-10 w-full bg-stone-50 left-0 text-center space-y-10 text-dark drop-shadow-lg z-20 font-medium'
              : 'hidden'
          }`}>
          <li>
            <Link
              onClick={(event) => {
                scrollToAnchorWithOffset(event);
              }}
              href={'/'}>
              Shop
            </Link>
          </li>
          <li>
            <Link
              onClick={(event) => {
                scrollToAnchorWithOffset(event);
              }}
              href={'#features'}>
              Features
            </Link>
          </li>
          <li>
            <Link
              onClick={(event) => {
                scrollToAnchorWithOffset(event);
              }}
              href={'#faq'}>
              FAQ
            </Link>
          </li>
          <li>
            <Link
              onClick={(event) => {
                scrollToAnchorWithOffset(event);
              }}
              href={'#contact'}>
              Contact
            </Link>
          </li>
          <li>
            <Link onClick={(event) => {}} href={'/orders'}>
              My Orders
            </Link>
          </li>
        </ul>
        <div className='flex gap-4 items-center text-dark ml-auto md:ml-0'>
          <div
            onClick={() => {
              cartStore.toggleCart();
            }}
            className='cursor-pointer relative'>
            <AiOutlineShoppingCart size={20} />
            {cartStore.cart.length > 0 && (
              <span className='text-red-700 text-md font-semibold w-4 h-4 rounded-full absolute right-3 bottom-4 felx items-center justify-center'>
                {cartStore.cart
                  .map((e) => e.quantity)
                  .reduce((acc: any, sum: any) => acc + sum, 0)}
              </span>
            )}
          </div>
          {/* <div>
            <AiOutlineHeart size={20} />
          </div> */}
          {!isSignedIn ? (
            <Link href={'/sign-in'}>
              <AiOutlineUser size={25} />
            </Link>
          ) : (
            <div>
              <UserButton />
            </div>
          )}
        </div>
        <div className='md:hidden ml-4' onClick={mobileMenuHandler}>
          {!openMobileMenu ? <FiMenu size={25} /> : <MdClose size={25} />}
        </div>
      </div>
      {cartStore.isOpen && <Cart />}
    </nav>
  );
};
