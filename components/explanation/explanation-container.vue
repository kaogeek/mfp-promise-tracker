<template>
  <div
    class="flex flex-col items-center bg-gray bg-opacity-10 rounded-xl max-w-4xl divide-y divide-white divide-dashed p-4 sm:p-6"
  >
    <h1 class="wv-h5 wv-font-kondolar wv-font-bold text-white pb-4">
      {{ title }}
    </h1>
    <div
      class="flex flex-col items-center sm:flex-row sm:items-start pt-4 sm:p-4"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ExplanationContainer',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
  },
});
</script>
