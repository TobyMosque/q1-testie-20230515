import { createPinia } from 'pinia';
import { store } from 'quasar/wrappers';

export default store(({}) => {
  const store = createPinia();
  return store as never;
})
