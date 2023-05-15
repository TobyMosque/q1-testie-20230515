import axios, { AxiosInstance } from 'axios'
import { Pinia } from 'pinia';
import { boot } from 'quasar/wrappers';
import { apiKey } from 'src/composables/api';
import { provide } from 'vue'

declare module 'pinia' {
  interface PiniaCustomProperties {
    api: AxiosInstance;
  }
}

export default boot(({ store }) => {
  const pinia = store as never as Pinia;

  const api = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' })

  provide(apiKey, api)
  pinia.use(() => ({ api }))
});
