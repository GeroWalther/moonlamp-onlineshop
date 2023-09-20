'use client';
import { useState } from 'react';
import Image from 'next/image';

import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { motion } from 'framer-motion';

import image1 from '@/public/productimage1.jpeg';
import image2 from '@/public/productimage2.jpeg';
import image3 from '@/public/productimage3.jpeg';
import image4 from '@/public/productimage4.jpeg';
import AddToCartButton from './UI/AddToCartButton';
import AddToWishList from './UI/AddToWishListButton';
import { ProductType } from '@/types/productTypes';

const Products = ({
  name,
  image,
  unit_amount,
  id,
  description,
  quantity,
}: ProductType) => {
  const [currImg, setCurrImg] = useState(0);
  const productData = { name, image, unit_amount, id, description, quantity };
  const productImgs = [image1, image2, image3, image4];

  return (
    <section id='shop' className='py-20'>
      <div className='w-[89%] m-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
        {/* LEFT SIDE */}
        <div className='flex gap-4 items-center'>
          <div className='flex flex-col gap-4'>
            {productImgs.map((img, i) => (
              <Image
                key={i}
                src={img}
                width={100}
                height={100}
                alt='product image'
                onClick={() => setCurrImg(i)}
                className='rounded-md cursor-pointer'
              />
            ))}
          </div>
          <div className='flex items-center'>
            <motion.div
              initial={{ opacity: 0, y: 0, x: -100, scale: 0.5 }}
              animate={{
                opacity: 1,
                y: 0,
                x: 20,
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              key={currImg}>
              <Image
                src={productImgs[currImg]}
                width={480}
                height={480}
                alt='main product image'
                className='rounded-md'
              />
            </motion.div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className='text-center flex flex-col items-center px-10 md:mt-0 mt-12'>
          <h2 className='text-3xl font-bold text-dark mb-5'>
            Wireless Moonlamp
          </h2>
          <div className='flex gap-1 text-yellow-400 justify-center items-center mb-5'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <span>(5.0)</span>
          </div>
          <div className='mb-5 flex items-center'>
            <span className='text-2xl font-semibold mr-3 text-dark'>
              29.99€
            </span>
            <span className='text-gray-400 line-through'>49.99€</span>
          </div>
          <p className='mb-5'>
            Our customers love the moonlamp, hence it got a 5 star rating. Order
            yours now!
          </p>
          <div className='flex justify-center items-center gap-5'>
            <AddToCartButton {...productData} />
            <AddToWishList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
