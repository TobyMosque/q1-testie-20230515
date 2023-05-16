import { Basket } from 'src/composables/basket';
import { useApi } from 'src/composables/api';
import { useRoute, useRouter } from 'src/composables/router';

export function useTestStore (basket?: Basket) {
  const api = useApi(basket);
  const router = useRouter(basket);
  const route = useRoute(basket);
  function test(name: string) {
    console.log(name, { api, router, route })
  }
  return {
    test
  }
}
