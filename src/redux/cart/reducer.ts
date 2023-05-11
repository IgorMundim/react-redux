import CartActionTypes from '@/redux/cart/action-types';

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartAction {
  payload: ProductProps;
  type: string;
}
const initialState = {
  products: [] as ProductProps[],
  productsTotalPrice: 0,
};

const cartReducer = (state = initialState, action: CartAction) => {
  let productIsAlreadyInCard = null;
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      productIsAlreadyInCard = state.products.some((product: ProductProps) => product.id === action.payload.id);
      if (productIsAlreadyInCard) {
        return {
          ...state,
          products: state.products.map((product: ProductProps) =>
            product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };
    case CartActionTypes.REMOVE_PRODUCT:
      console.log(action.payload.id);
      return {
        ...state,
        products: state.products.filter((product: ProductProps) => product.id !== action.payload.id),
      };
    case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product: ProductProps) =>
          product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product
        ),
      };
    case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products
          .map((product: ProductProps) =>
            product.id === action.payload.id ? { ...product, quantity: product.quantity - 1 } : product
          )
          .filter((product: ProductProps) => product.quantity > 0),
      };
    default:
      return state;
  }
};
export default cartReducer;
