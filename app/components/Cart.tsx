import { useCartStore } from '@/store/useCartStore';
import Image from 'next/image';
import formatPrice from '@/utils/formatPrice';
import { totalPrice } from '@/utils/totalPrice';
import DecrementButton from './UI/DecrementButton';
import IncrementButton from './UI/IncrementButton';

const Cart = () => {
  const cartStore = useCartStore();
  const total = totalPrice(cartStore.cart);
  return (
    <div
      onClick={() => cartStore.toggleCart()}
      className='fixed w-full h-screen top-0 left-0 bg-stone-900/25 z-50'>
      <div
        onClick={(e) => e.stopPropagation()}
        className='bg-stone-50 absolute right-0 top-0 md:w-2/5 w-3/4 h-screen p-12'>
        <>
          <button
            onClick={() => cartStore.toggleCart()}
            className='text-dark text-sm underline'>
            Back to Store
          </button>
          {cartStore.cart.map((prod) => (
            <div className='flex py-4 items-center border-b-2 border-b-stone-600 justify-between mb-5'>
              <Image
                src={prod.image}
                width={150}
                height={150}
                alt='product image'
              />
              <h2 className='font-medium'>{prod.name}</h2>
              <div className='flex gap-2 justify-center items-center bg-stone-900/10 px-2 rounded-sm'>
                <DecrementButton product={prod} />
                <h3>{prod.quantity}</h3>
                <IncrementButton product={prod} />
              </div>
            </div>
          ))}
          {cartStore.cart.length > 0 ? (
            <span>Total: {formatPrice(total)}</span>
          ) : null}
        </>
        {cartStore.cart.length < 1 ? (
          <div className='h-full flex items-center justify-center'>
            <span className='text-lg uppercase font-extralight whitespace-nowrap text-dark'>
              Your cart is empty
            </span>
          </div>
        ) : null}
        {cartStore.cart.length > 0 ? (
          <button className='bg-primary py-2 mt-4 w-full rounded-md text-stone-200'>
            Checkout
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
