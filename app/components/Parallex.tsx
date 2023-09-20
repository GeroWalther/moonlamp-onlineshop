const Parallex = () => {
  return (
    <div className='flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover flex-col'>
      <h1 className='text-3xl font-medium text-stone-50 uppercase text-center drop-shadow-2xl'>
        Subscribe to our Newsletter!
      </h1>
      <div className='bg-stone-50 py-2 px-4 flex items-center justify-between border border-stone-50 rounded-lg mb-[49px] mt-10'>
        <input
          className='outline-none ml-5 w-[200px] bg-stone-50 md:w-[400px]'
          placeholder='Enter your email...'
          type='email'
        />
        <div>
          <button
            className='flex 
          md:py-[10px] md:px-[26px]  items-center py-[5px] px-[13px] rounded-lg font-medium md:text-lg text-stone-100 bg-dark whitespace-nowrap flex-1 w-fit'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parallex;
