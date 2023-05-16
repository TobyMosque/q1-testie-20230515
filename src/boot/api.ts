import axios from 'axios'
import { boot } from 'quasar/wrappers';
import { apiKey } from 'src/composables/api';
import { Basket } from 'src/composables/basket';

export default boot(({ app, store }) => {
  const basket = store as never as Basket
  const api = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' });

  app.provide ||= {}
  app.provide[apiKey as never] = api as never;
  basket.api = api;
});
