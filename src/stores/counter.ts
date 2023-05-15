import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  function increase(this: CounterStore) {
    console.log(this);
    if (typeof count.value === 'number') {
      count.value += 1;
    }
  }

  return {
    count,
    increase
  }
})
export type CounterStore = ReturnType<typeof useCounterStore>
