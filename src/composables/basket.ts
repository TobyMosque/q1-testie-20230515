import { AxiosInstance } from 'axios';
import { InjectionKey, inject } from 'vue';
import VueRouter from 'vue-router';

export interface Basket extends Record<string, unknown> {
  api?: AxiosInstance,
  router?: VueRouter,
  route?: VueRouter['currentRoute']
}

export const basketKey: InjectionKey<Basket> = Symbol('basket-key');
export function useBasket() {
  const basket = inject(basketKey);
  if (!basket) {
    throw new Error('basket not injected')
  }
  return basket;
}
