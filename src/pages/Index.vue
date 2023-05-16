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

import { useApi } from 'src/composables/api';
import { useCounterStore } from 'src/stores/counter';
import { useTestStore } from 'src/stores/test';
import { defineComponent, onMounted } from 'vue';
import { useRoute, useRouter } from 'src/composables/router';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const api = useApi();
    const router = useRouter();
    const route = useRoute();
    console.log('page', { api, router, route })

    const counterStore = useCounterStore();
    const sampleStore = useTestStore();

    onMounted(() => {
      sampleStore.test('store.page');
    })

    const { count, increase } = counterStore;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return { count, increase };
  }
});

</script>
