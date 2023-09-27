import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex w-screen h-screen justify-center items-center bg-stone-300'>
      <SignUp />;
    </div>
  );
}
