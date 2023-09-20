import Image from 'next/image';
import moonlamp from '@/public/transparentmoonlamp.png';
import { BsBatteryCharging } from 'react-icons/bs';
import { MdColorLens } from 'react-icons/md';
import { BiLeaf } from 'react-icons/bi';
import { AiOutlineCheck, AiOutlineBulb, AiOutlineHeart } from 'react-icons/ai';

function Features() {
  return (
    <section id='features' className='py-5 bg-stone-50'>
      <div className='w-[89%] m-auto max-w-[1400px] grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-5'>
        <div>
          <ul className='space-y-10'>
            <li>
              <div className='flex gap-2 font-bold text-dark items-center text-xl'>
                <h3>Battery life</h3>
                <div>
                  <BsBatteryCharging />
                </div>
              </div>
              <p>
                with over 60 hours of battery life it is perfectly suited to
                take on a weekend trip
              </p>
            </li>
            <li>
              <div className='flex gap-2 font-bold text-dark items-center text-xl'>
                <h3>Colors</h3>
                <div>
                  <MdColorLens />
                </div>
              </div>
              <p>
                moonlamp shines in 8 different colors. Choose from static or the
                smooth changing color feature making it a versitile.
              </p>
            </li>
            <li>
              <div className='flex gap-2 font-bold text-dark items-center text-xl'>
                <h3>User friendly</h3>
                <div>
                  <AiOutlineCheck />
                </div>
              </div>
              <p>easy to use with its one button design.</p>
            </li>
          </ul>
        </div>
        <div className='flex justify-center items-center'>
          <Image src={moonlamp} height={500} width={500} alt='product' />
        </div>
        <div>
          <ul className='space-y-10 md:text-right '>
            <li>
              <div className='flex gap-2 font-bold text-dark items-center text-xl md:justify-end'>
                <h3>Bright</h3>
                <div>
                  <AiOutlineBulb />
                </div>
              </div>
              <p>
                It is bright enough to illuminate a tent or a terrace with it's
                460 lumens.
              </p>
            </li>
            <li>
              <div className='flex gap-2 font-bold text-dark items-center text-xl md:justify-end'>
                <h3>Sustainable</h3>
                <div>
                  <BiLeaf />
                </div>
              </div>
              <p>
                we only use reusable materials which are environmental friendly.
              </p>
            </li>
            <li>
              <div className='flex gap-2 font-bold text-dark items-center text-xl md:justify-end'>
                <h3>Donation</h3>
                <div>
                  <AiOutlineHeart />
                </div>
              </div>
              <p>
                With every purchase of our moonlamp 10% of the sale will go to
                donation. We love to give back to the community.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;
