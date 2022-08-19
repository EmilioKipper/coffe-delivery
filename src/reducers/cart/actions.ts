import { Product } from './reducer';

export enum ActionTypes {
  ADD_CART_ITEM = 'ADD_CART_ITEM',
  UPDATE_CART_ITEM = 'UPDATE_CART_ITEM',
  DELETE_CART_ITEM = 'DELETE_CART_ITEM',
}

export function addCartItem(cartItem: Product) {
  return {
    type: ActionTypes.ADD_CART_ITEM,
    payload: { cartItem },
  };
}

export function updateCartItem(cartItem: Product) {
  return {
    type: ActionTypes.UPDATE_CART_ITEM,
    payload: { cartItem },
  };
}

export function deleteCartItem(id: string) {
  return {
    type: ActionTypes.DELETE_CART_ITEM,
    payload: { id },
  };
}
