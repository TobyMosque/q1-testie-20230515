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
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const counterStore = useCounterStore();
    const { count } = storeToRefs(counterStore);
    const { increase } = counterStore;
    return { count, increase };
  }
});

</script>
