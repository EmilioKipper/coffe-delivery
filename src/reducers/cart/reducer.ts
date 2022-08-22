import { produce } from 'immer';
import { ActionTypes } from './actions';

export interface Product {
  tags: string[];
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartState {
  total: {
    quantity: number;
    price: number;
  };
  products: Product[];
  finishedOrder: {
    cep: string;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    uf: string;
    paymentMethod: string;
  };
}

interface Action {
  type: `${ActionTypes}`;
  payload: any;
}

function calculateCart(cart: CartState) {
  cart.total.quantity = cart.products.reduce(
    (prev, curr) => prev + curr.quantity,
    0,
  );
  cart.total.price = cart.products.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0,
  );
}

export function cartReducer(state: CartState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_CART_ITEM:
      return produce(state, (draft) => {
        draft.products.push(action.payload.cartItem);

        calculateCart(draft);
      });
    case ActionTypes.UPDATE_CART_ITEM:
      return produce(state, (draft) => {
        const productToUpdate = draft.products.findIndex(
          (p) => p.name === action.payload.cartItem.name,
        );

        draft.products[productToUpdate].quantity =
          action.payload.cartItem.quantity;

        calculateCart(draft);
      });
    case ActionTypes.DELETE_CART_ITEM:
      return produce(state, (draft) => {
        draft.products = draft.products.filter(
          (p) => p.name !== action.payload.id,
        );

        calculateCart(draft);
      });
    case ActionTypes.FINISH_ORDER:
      return produce(state, (draft) => {
        draft.finishedOrder = action.payload.finishedOrder;

        draft.products = [];
        draft.total.price = 0;
        draft.total.quantity = 0;
      });
    default:
      return state;
  }
}
