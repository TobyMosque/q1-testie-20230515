import { store } from 'quasar/wrappers';
import { Basket, useBasket } from 'src/composables/basket';

export function defineState<T>(key: string, cb: () => T): (basket?: Basket) => T {
  return function (basket) {
    basket ||= useBasket();
    if (!basket[key]) {
      basket[key] = cb();
    }
    return basket[key] as T;
  }
}

export default store(({}) => {
  const store: Basket = {};  return store as never;
})
