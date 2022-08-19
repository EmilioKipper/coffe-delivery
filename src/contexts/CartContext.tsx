import { createContext, ReactNode, useReducer } from 'react';
import {
  addCartItem,
  deleteCartItem,
  updateCartItem,
} from '../reducers/cart/actions';
import { cartReducer, Product } from '../reducers/cart/reducer';

interface CartContextProvider {
  children: ReactNode;
}

interface CartContextProps {
  products: Product[];
  total: {
    quantity: number;
    price: number;
  };
  addProduct: (newProduct: Product) => void;
  deleteProduct: (id: string) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProvider) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    total: {
      quantity: 0,
      price: 0,
    },
    products: [],
  });

  const { products, total } = cartState;

  function addProduct(newProduct: Product) {
    const hasProductInCart = products.some(
      (product) => product.name === newProduct.name,
    );
    if (hasProductInCart) {
      dispatch(updateCartItem(newProduct));
    } else {
      dispatch(addCartItem(newProduct));
    }
  }

  function deleteProduct(id: string) {
    dispatch(deleteCartItem(id));
  }

  return (
    <CartContext.Provider
      value={{
        products,
        total,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
