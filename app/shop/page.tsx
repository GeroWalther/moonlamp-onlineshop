import Features from '../components/Features';
import Hero from '../components/Hero';
import Parallex from '../components/Parallex';
import Product from '../components/Product';
import { FetchProducts } from '@/utils/fetchStripeProducts';
import FAQComponent from '../components/FAQ';
import Contact from '../components/Contact';

const Home = async () => {
  const products = await FetchProducts();
  return (
    <>
      <Hero />
      <Features />
      <Parallex />
      <>
        {products.map((prod) => (
          <Product {...prod} key={prod.id} />
        ))}
      </>
      <FAQComponent />
      <Contact />
    </>
  );
};

export default Home;
