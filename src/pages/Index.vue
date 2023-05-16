<template>
  <q-page class="items-center justify-evenly">
    <div class="row" style="max-width: 720px">
      <div class="col">
        <q-input label="Count" v-model="count" readonly filled dense></q-input>
      </div>
      <div class="col col-auto">
        <q-btn label="Increase" @click="increase"></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">

import { useCounterStore } from 'src/stores/counter';
import { useSampleStore } from 'src/stores/sample';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const counterStore = useCounterStore();
    const sampleStore = useSampleStore();

    console.log(counterStore)
    onMounted(() => {
      sampleStore.test();
    })

    const { count, increase } = counterStore;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return { count, increase };
  }
});

</script>
