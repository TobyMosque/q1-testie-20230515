import { store } from 'quasar/wrappers';
import { Basket, useBasket } from 'src/composables/basket';

export function defineState<T>(key: string, basket: Basket | undefined, cb: () => T) {
  basket ||= useBasket();
  if (!basket[key]) {
    basket[key] = cb();
  }
  return basket[key] as T;
}

export default store(({}) => {
  const store: Basket = {};  return store as never;
})
