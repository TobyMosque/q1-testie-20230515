import { Basket } from 'src/composables/basket';
import { useApi } from 'src/composables/api';
import { useRoute, useRouter } from 'src/composables/router';

export function useSampleStore(basket?: Basket) {
  const api = useApi(basket);
  const router = useRouter(basket);
  const route = useRoute(basket);
  function test() {
    console.log({ api, router, route })
  }

  return {
    test
  }
}
