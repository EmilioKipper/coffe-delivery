import { createContext, ReactNode, useReducer } from 'react';
import { CheckoutFormData } from '../pages/Checkout';
import {
  addCartItem,
  deleteCartItem,
  updateCartItem,
  finishOrder,
} from '../reducers/cart/actions';
import { cartReducer, CartState, Product } from '../reducers/cart/reducer';

interface CartContextProvider {
  children: ReactNode;
}

interface CartContextProps extends CartState {
  addProduct: (newProduct: Product) => void;
  deleteProduct: (id: string) => void;
  finishCart: (data: any) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProvider) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    total: {
      quantity: 0,
      price: 0,
    },
    products: [],
    finishedOrder: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
      paymentMethod: '',
    },
  });

  const { products, total, finishedOrder } = cartState;

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

  function finishCart(data: CheckoutFormData) {
    dispatch(finishOrder(data));
  }

  return (
    <CartContext.Provider
      value={{
        products,
        total,
        finishedOrder,
        addProduct,
        deleteProduct,
        finishCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
