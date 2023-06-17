<template>
  <div class="flex flex-row space-x-1 bg-white md:bg-transparent">
    <button
      v-for="{ label, type } in displayButtons"
      :key="type"
      :class="`wv-u4 wv-font-semibold text-white w-1/3 px-3 py-2 rounded-t border border-white ${
        activeTab === type ? 'bg-status-proposed border-b-0' : 'bg-black'
      }`"
      @click="onChange(type)"
    >
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Filter, FilterType } from '@/models/filter';

export const buttons = [
  { label: 'ดูตามสถานะ', type: FilterType.Status },
  // { label: 'ดูตามพรรค', type: FilterType.Party },
  { label: 'ดูตามประเด็น', type: FilterType.Topic },
];

export default Vue.extend({
  name: 'TabNavigation',
  props: {
    filters: {
      type: Array as PropType<Filter[]>,
      default: () => [],
    },
    activeTab: {
      type: String as PropType<FilterType>,
      default: null,
    },
  },
  computed: {
    displayButtons() {
      const displayButtons = buttons.filter(
        ({ type }) => !this.filters.find((filter) => filter.type === type)
      );

      if (
        displayButtons.length > 0 &&
        !displayButtons.some(({ type }) => type === this.activeTab)
      ) {
        this.onChange(displayButtons[0].type);
      }

      return displayButtons;
    },
  },
  methods: {
    onChange(type: FilterType) {
      this.$emit('change', type);
    },
  },
});
</script>
