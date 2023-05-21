<template>
  <div
    class="flex flex-row py-1 px-2 text-ultramarine space-x-2 bg-gray rounded-sm bg-opacity-10"
  >
    <div class="flex items-center">
      <img
        v-if="topic !== 'keyword'"
        class="h-4 w-4 object-cover rounded-full shadow-xl"
        :src="`${$config.path.images}/${topic}/${icon}`"
        :alt="text"
      />
    </div>
    <span class="wv-u4 wv-font-semibold">{{ text }}</span>
    <button @click="$emit('remove')">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
        <path
          d="M8.83597 0.664218C8.88836 0.716469 8.92992 0.778542 8.95827 0.84688C8.98663 0.915218 9.00123 0.98848 9.00123 1.06247C9.00123 1.13646 8.98663 1.20972 8.95827 1.27806C8.92992 1.34639 8.88836 1.40847 8.83597 1.46072L0.960972 9.33572C0.85535 9.44134 0.712095 9.50068 0.562722 9.50068C0.41335 9.50068 0.270095 9.44134 0.164472 9.33572C0.0588497 9.2301 -0.00048828 9.08684 -0.000488281 8.93747C-0.000488282 8.78809 0.0588497 8.64484 0.164472 8.53922L8.03947 0.664218C8.09172 0.611834 8.1538 0.570273 8.22214 0.541916C8.29047 0.513559 8.36373 0.498962 8.43772 0.498962C8.51171 0.498962 8.58497 0.513559 8.65331 0.541916C8.72165 0.570273 8.78372 0.611834 8.83597 0.664218V0.664218Z"
        />
        <path
          d="M0.164279 0.664218C0.111895 0.716469 0.0703344 0.778542 0.0419771 0.84688C0.0136199 0.915218 -0.000976562 0.98848 -0.000976562 1.06247C-0.000976562 1.13646 0.0136199 1.20972 0.0419771 1.27806C0.0703344 1.34639 0.111895 1.40847 0.164279 1.46072L8.03928 9.33572C8.1449 9.44134 8.28816 9.50068 8.43753 9.50068C8.5869 9.50068 8.73016 9.44134 8.83578 9.33572C8.9414 9.2301 9.00074 9.08684 9.00074 8.93747C9.00074 8.78809 8.9414 8.64484 8.83578 8.53922L0.960779 0.664218C0.908528 0.611834 0.846455 0.570273 0.778117 0.541916C0.709779 0.513559 0.636517 0.498962 0.562529 0.498962C0.488541 0.498962 0.415279 0.513559 0.346941 0.541916C0.278603 0.570273 0.21653 0.611834 0.164279 0.664218V0.664218Z"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Filter, FilterType } from '@/models/filter';
import {
  PromiseStatus,
  promiseStatusTextMap,
  PromiseTopic,
  promiseTopicTextMap,
} from '@/models/promise';

export default Vue.extend({
  name: 'FilterChips',
  props: {
    filter: {
      type: Object as PropType<Filter>,
      required: true,
    },
  },
  computed: {
    topic() {
      const { type } = this.filter as Filter;
      return type;
    },
    text() {
      const { type, value } = this.filter as Filter;

      switch (type) {
        case FilterType.Party:
          return value;
        case FilterType.Status:
          return `สถานะ: ${promiseStatusTextMap.get(value as PromiseStatus)}`;
        case FilterType.Keyword:
          return `คำค้นหา: ${value}`;
        case FilterType.Topic:
          return `ประเด็น${
            promiseTopicTextMap.get(value as PromiseTopic)?.short
          }`;
        default:
          return '';
      }
    },
    icon() {
      const { type, value } = this.filter as Filter;

      switch (type) {
        case FilterType.Party:
          return `${value.split('/')[0]}.jpg`;
        case FilterType.Status:
          return `${value}_small.png`;
        case FilterType.Topic:
          return `${value}_small.png`;
        default:
          return '';
      }
    },
  },
});
</script>
