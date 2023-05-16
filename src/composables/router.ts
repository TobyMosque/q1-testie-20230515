import { getCurrentInstance } from 'vue';
import { Basket } from './basket';

export function useRouter(basket?: Basket) {
  const router = basket?.router || getCurrentInstance()?.proxy.$root.$router;
  if (!router) {
    throw new Error('router not injected')
  }
  return router;
}

export function useRoute(basket?: Basket) {
  const route = basket?.router?.currentRoute || getCurrentInstance()?.proxy.$root.$route;
  if (!route) {
    throw new Error('route not injected')
  }
  return route;
}
