<template>
  <div class="flex flex-row text-white">
    <div class="flex-1 flex flex-row items-center space-x-1">
      <img
        v-if="icon"
        :src="`${$config.path.images}/${icon}`"
        class="w-4 h-4 rounded-full"
        :alt="label"
      />
      <p class="wv-u5 wv-font-semibold">{{ label }} ({{ count }})</p>
    </div>
    <div
      class="flex flex-row flex-1 space-x-1 wv-u5 wv-font-semibold items-center"
    >
      <div
        ref="barchart"
        class="flex flex-row h-5"
        :style="{ width: `${Math.round((count / max) * 100)}%` }"
      >
        <div
          v-for="item in data"
          :key="item.status"
          :style="{ width: `${Math.round((item.count / count) * 100)}%` }"
          :class="`bg-status-${item.status}`"
        />
      </div>
      <span>{{ percentage }}%</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { PromiseStatus } from '~/models/promise';

export default Vue.extend({
  name: 'ChartItem',
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
    data: {
      type: Array as PropType<{ status: PromiseStatus; count: number }[]>,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  computed: {
    count() {
      return this.data.reduce((sum, { count }) => sum + count, 0);
    },
    percentage() {
      return (((this as any).count / this.total) * 100).toLocaleString(
        'th-TH',
        {
          maximumFractionDigits: 1,
        }
      );
    },
  },
});
</script>
