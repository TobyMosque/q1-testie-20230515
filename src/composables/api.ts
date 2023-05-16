import { AxiosInstance } from 'axios';
import { InjectionKey, inject } from 'vue';
import { Basket } from './basket';

export const apiKey: InjectionKey<AxiosInstance> = Symbol('api-key');
export function useApi(basket?: Basket) {
  const api = basket?.api || inject(apiKey);
  if (!api) {
    throw new Error('api not injected')
  }
  return api;
}
