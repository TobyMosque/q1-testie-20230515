import { AxiosInstance } from 'axios';
import { InjectionKey, inject } from 'vue';

export const apiKey: InjectionKey<AxiosInstance> = Symbol('api-key');
export function useApi() {
  const api = inject(apiKey);
  if (!api) {
    throw new Error('api not injected')
  }
  return api;
}
