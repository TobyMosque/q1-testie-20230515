import { boot } from 'quasar/wrappers';
import { basketKey, Basket } from 'src/composables/basket';

export default boot(({ app, store, router }) => {
  const basket = store as never as Basket;
  basket.router = router;

  app.provide ||= {}
  app.provide[basketKey as never] = basket as never;
});
