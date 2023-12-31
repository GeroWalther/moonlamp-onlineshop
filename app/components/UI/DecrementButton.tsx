import { useCartStore } from '@/store/useCartStore';
import { ProductType } from '@/types/productTypes';
import { BiMinus } from 'react-icons/bi';
interface DecrementPropType {
  product: ProductType;
}
export default function DecrementButton({ product }: DecrementPropType) {
  const cartStore = useCartStore();
  return (
    <button
      onClick={() =>
        cartStore.removeProduct({
          id: product.id,
          unit_amount: product.unit_amount,
          quantity: product.quantity,
          name: product.name,
          image: product.image,
        })
      }>
      <BiMinus />
    </button>
  );
}
