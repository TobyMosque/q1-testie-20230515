import { Basket } from 'src/composables/basket';
import { ref } from 'vue';
import { defineState } from '.';

export function useCounterStore(basket?: Basket) {
  const state = defineState('counter', basket, () => {
    const count = ref(0);
    return {
      count
    }
  });

  function increase() {
    state.count.value += 1;
  }

  return {
    ...state,
    increase
  }
}
