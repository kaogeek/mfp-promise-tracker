<template>
  <div
    :class="
      hasFilter
        ? 'flex-1 md:h-80 bg-white flex flex-row p-8 space-x-8 items-center justify-center rounded-t-xl'
        : 'flex-1 md:h-80 bg-white flex flex-col py-10 px-6 rounded-t-xl outline-none md:mb-0 -mb-1'
    "
  >
    <div class="flex flex-col" :class="hasFilter ? '-space-y-4' : 'mb-4'">
      <div
        v-for="({ type, value, src }, i) in filterImages"
        :key="type"
        :class="filterImages.length > 1 ? 'w-20 logo-ratio' : 'w-24 logo-ratio'"
        :style="{ zIndex: -i + filterImages.length }"
      >
        <div :class="type === 'category' ? 'category-img-bg' : ''">
          <img
            class="active-image w-full h-full object-contain relative z-10"
            :src="`${$config.path.images}/${src}`"
            :alt="value"
          />
        </div>
      </div>
    </div>
    <div v-if="promises.length > 0" class="flex flex-col space-y-2">
      <h1
        class="wv-font-kondolar wv-font-black whitespace-nowrap"
        :class="hasFilter ? 'wv-h8' : 'wv-h6'"
      >
        สำรวจร่างกฎหมาย<br />
        พรรคก้าวไกล
      </h1>
      <p
        ref="countLabel"
        class="wv-h10 wv-font-kondolar wv-font-black text-mfp-orange"
      >
        <!-- {{ promises.length }} ร่างกฎหมาย -->
        14 ชุดกฎหมาย
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
        ที่พร้อมยื่นเข้าสภา
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
    hasFilter() {
      return (this.filters as Filter[]).length > 0;
    },
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

.category-img-bg {
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  overflow: hidden;
}

.category-img-bg img {
  width: 50%;
  height: 50%;
}

.category-img-bg::before {
  content: '';
  border-radius: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background: #6b6b6b;
  filter: blur(10px);
}
</style>
