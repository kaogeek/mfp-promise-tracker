<template>
  <div class="flex-1 md:h-80 bg-white flex flex-col py-10 px-6 rounded-t-xl">
    <div class="flex flex-col mb-4">
      <div
        v-for="({ type, value, src }, i) in filterImages"
        :key="type"
        :class="filterImages.length > 1 ? 'w-20 logo-ratio' : 'w-24 logo-ratio'"
        :style="{ zIndex: -i + filterImages.length }"
      >
        <img
          class="active-image w-full h-full"
          :src="`${$config.path.images}/${src}`"
          :alt="value"
        />
      </div>
    </div>
    <div v-if="promises.length > 0" class="flex flex-col space-y-2">
      <h1 class="wv-h6 wv-font-kondolar wv-font-black whitespace-nowrap">
        สำรวจร่างกฎหมาย<br />
        พรรคก้าวไกล
      </h1>
      <p
        ref="countLabel"
        class="wv-h10 wv-font-kondolar wv-font-black text-mfp-orange"
      >
        {{ promises.length }} ร่างกฎหมาย
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
      <p v-else class="wv-u4 wv-font-semibold">
        ที่ก้าวไกลพร้อมยื่นทันทีหลังเปิดสภา
      </p>
    </div>
    <div v-else>
      <h1 class="wv-h8 wv-font-kondolar wv-font-black">
        ไม่พบร่างกฎหมายที่คุณค้นหา
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import FilterChip from './filter-chip.vue';

import { Filter, FilterType } from '@/models/filter';
import { TrackingPromiseLaws } from '@/models/promise-laws';

export default Vue.extend({
  name: 'ActiveFilters',
  components: {
    FilterChip,
  },
  props: {
    promises: {
      type: Array as PropType<TrackingPromiseLaws[]>,
      default: () => [],
    },
    filters: {
      type: Array as PropType<Filter[]>,
      default: () => [],
    },
  },
  computed: {
    filterImages() {
      return (this.promises as TrackingPromiseLaws[]).length === 0
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

<style>
.logo-ratio {
  aspect-ratio: 400/344;
}
</style>
