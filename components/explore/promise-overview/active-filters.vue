<template>
  <div
    class="flex-1 md:h-80 bg-white flex flex-row p-8 space-x-8 items-center justify-center rounded-t-xl"
  >
    <div class="flex flex-col -space-y-4">
      <div
        v-for="({ type, value, src }, i) in filterImages"
        :key="type"
        :class="filterImages.length > 1 ? 'w-24 h-24' : 'w-32 h-32'"
        :style="{ zIndex: -i + filterImages.length }"
      >
        <img
          class="object-contain active-image w-full h-full"
          :src="`${$config.path.images}/${src}`"
          :alt="value"
        />
      </div>
    </div>
    <div v-if="promises.length > 0" class="flex flex-col space-y-2">
      <h1 class="wv-h8 wv-font-kondolar wv-font-black">
        สำรวจคำสัญญา พรรคก้าวไกล
      </h1>
      <p
        ref="countLabel"
        class="wv-h10 wv-font-kondolar wv-font-black text-ultramarine"
      >
        {{ promises.length }} นโยบาย
      </p>
      <div
        v-if="filters.length > 0"
        class="flex flex-col items-start space-y-1"
      >
        <FilterChip
          v-for="filter in filters"
          :key="filter.type"
          :filter="filter"
          @remove="$emit('removefilter', filter)"
        />
      </div>
      <p v-else class="wv-u4 wv-font-semibold">ในทุกประเด็น</p>
    </div>
    <div v-else>
      <h1 class="wv-h8 wv-font-kondolar wv-font-black">
        ไม่พบคำสัญญาที่คุณค้นหา
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import FilterChip from './filter-chip.vue';

import { Filter, FilterType } from '@/models/filter';
import { TrackingPromise } from '@/models/promise';

export default Vue.extend({
  name: 'ActiveFilters',
  components: {
    FilterChip,
  },
  props: {
    promises: {
      type: Array as PropType<TrackingPromise[]>,
      default: () => [],
    },
    filters: {
      type: Array as PropType<Filter[]>,
      default: () => [],
    },
  },
  computed: {
    filterImages() {
      return (this.promises as TrackingPromise[]).length === 0
        ? [
            {
              type: 'default',
              value: 'all',
              src: 'status/notfound.png',
            },
          ]
        : (this.filters as Filter[]).length === 0
        ? [
            {
              type: 'default',
              value: 'all',
              src: 'status/mfp-logo.png',
            },
          ]
        : this.filters
            .filter(({ type }) => type !== FilterType.Keyword)
            .map(({ type, value }) => ({
              type,
              value,
              src: `${type}/${value.split('/')[0]}.${
                type === FilterType.Party ? 'jpg' : 'png'
              }`,
            }));
    },
  },
});
</script>
