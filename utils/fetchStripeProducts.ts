import Stripe from 'stripe';

export const FetchProducts = async () => {
  const getProducts = async () => {
    const stripe = new Stripe(
      'sk_test_51MtvFIBwnmq4ruYjcWCVHgTvXwCtmox5iZYvWkTrP4dLqXye1AJ3hVjRNPW21buDqJFoF1ruUuPrBv14JsfvxAHV00PjaPpOaq' as string,
      {
        apiVersion: '2023-08-16',
      }
    );
    const products = await stripe.products.list();

    const priceMap = new Map();

    const prices = await stripe.prices.list();
    prices.data.forEach((price) => {
      if (price.product) {
        if (!priceMap.has(price.product)) {
          priceMap.set(price.product, price);
        } else {
          const existingPrice = priceMap.get(price.product);
          if (price.created > existingPrice.created) {
            priceMap.set(price.product, price);
          }
        }
      }
    });

    const allProducts = products.data.map((product) => {
      const price = priceMap.get(product.id);

      return {
        id: product.id,
        name: product.name,
        unit_amount: price ? price.unit_amount : null,
        image: product.images[0],
        currency: price ? price.currency : null,
        description: product.description,
        metadata: product.metadata,
      };
    });

    return allProducts;
  };

  const products = await getProducts();

  return products;
};
