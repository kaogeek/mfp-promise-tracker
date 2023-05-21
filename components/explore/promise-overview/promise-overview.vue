<template>
  <div class="w-full flex flex-col lg:flex-row">
    <div class="flex-1 flex items-end">
      <ActiveFilters
        :class="
          promises.length === 0
            ? 'lg:rounded-xl bg-gray bg-opacity-10 text-white'
            : 'lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-xl'
        "
        :filters="filters"
        :promises="promises"
        @removefilter="(filter) => $emit('removefilter', filter)"
      />
    </div>
    <div v-if="promises.length !== 0" class="flex-1">
      <TabNavigation
        :filters="filters"
        :active-tab="activeTab"
        @change="(type) => (activeTab = type)"
      />
      <TabBody :promises="promises" :group-by="activeTab" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import ActiveFilters from './active-filters.vue';
import TabNavigation from './tab-navigation.vue';
import TabBody from './tab-body.vue';
import { TrackingPromise } from '@/models/promise';
import { Filter, FilterType } from '@/models/filter';

export default Vue.extend({
  name: 'PromiseOverview',
  components: { TabBody, TabNavigation, ActiveFilters },
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
  data() {
    return {
      activeTab: FilterType.Status,
    };
  },
});
</script>
