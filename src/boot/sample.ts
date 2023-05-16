import { boot } from 'quasar/wrappers';
import { Basket } from 'src/composables/basket';
import { useTestStore } from 'src/stores/test';

export default boot(({ store }) => {
  const basket = store as never as Basket

  const sampleStore = useTestStore(basket);
  sampleStore.test('store.boot');
});
