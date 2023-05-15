import { Pinia, PiniaVuePlugin } from 'pinia';
import { boot } from 'quasar/wrappers';
import VueRouter from 'vue-router';

declare module 'pinia' {
  interface PiniaCustomProperties {
    router: VueRouter;
  }
}

export default boot(({ Vue, app, store, router }) => {
  Vue.config.devtools = false;

  const pinia = store as never as Pinia;
  pinia.use(() => ({ router }))
  Vue.use(PiniaVuePlugin);
  app.pinia = pinia;
});
