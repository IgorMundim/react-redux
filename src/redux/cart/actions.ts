import CartActionTypes from '@/redux/cart/action-types';
import { ProductProps } from '@/redux/cart/reducer';

export const addProductToCart = (payload: ProductProps) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductToCart = (payload: ProductProps) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseProductQuantity = (payload: ProductProps) => ({
  type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
});
export const decreaseProductQuantity = (payload: ProductProps) => ({
  type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
  payload,
});
