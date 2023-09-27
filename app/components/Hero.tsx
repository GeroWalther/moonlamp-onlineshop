'use client';
import Image from 'next/image';
import heroImg from '@/public/moonlamphero.png';
import PrimaryBtn from './UI/reusable/PrimaryBtn';
import Link from 'next/link';
function Hero() {
  const scrollToAnchorWithOffset = (event: any, offset: number = 120) => {
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
  };

  return (
    <div className='bg-background py-10'>
      <div className='w-[89%] m-auto grid lg:grid-cols-2 grid-cols-1 items-center max-w-[1400px] gap-20'>
        <div>
          <h1 className='text-4xl font-semibold text-dark'>
            Illuminate Your World: Discover Moonlamp Magic
          </h1>
          <p className='mt-5 text-primary'>
            With every purchase of our moonlamp 10% of the sale will go to
            donation. We love to give back to the community.
          </p>
          <div className='flex gap-5 mt-8'>
            <Link
              className='py-2 px-5 rounded-xl text-stone-600 underline'
              onClick={(event) => {
                scrollToAnchorWithOffset(event);
              }}
              href={'#features'}>
              More Info
            </Link>
            <Link
              className='bg-dark py-2 px-5 rounded-xl text-stone-200 hover:bg-primary transition-all duration-500 text-base'
              onClick={(event) => {
                scrollToAnchorWithOffset(event);
              }}
              href={'#shop'}>
              Buy Now
            </Link>
          </div>
        </div>
        <div className='flex lg:justify-end justify-center items-center'>
          <Image src={heroImg} width={600} height={600} alt='hero image' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
