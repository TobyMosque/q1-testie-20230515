import { boot } from 'quasar/wrappers';
import { Basket } from 'src/composables/basket';
import { useSampleStore } from 'src/stores/sample';

export default boot(({ store }) => {
  const basket = store as never as Basket

  const sampleStore = useSampleStore(basket);
  sampleStore.test();
});
