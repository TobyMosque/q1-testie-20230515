import { Basket } from 'src/composables/basket';
import { ref } from 'vue';
import { defineState } from '.';

export const useCounterState = defineState('counter', () => {
  const count = ref(0);
  return {
    count
  }
})

export function useCounterStore(basket?: Basket) {
  const { count } = useCounterState(basket);
  function increase() {
    count.value += 1;
  }

  return {
    count,
    increase
  }
}
