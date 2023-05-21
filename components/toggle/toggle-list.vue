<template>
  <div class="flex gap-1" :class="alignmentClass">
    <ToggleItem
      v-for="option in options"
      :key="option.value"
      :selected="option.value === value"
      :option="option"
      @selected="$emit('input', option.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import ToggleItem from './toggle-item.vue';

enum Alignment {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

export interface ListOption {
  label: string;
  value: string;
  colorClass?: string;
}

export default Vue.extend({
  name: 'ToggleList',
  components: { ToggleItem },
  props: {
    value: {
      type: String,
      default: '',
    },
    options: {
      type: Array as PropType<ListOption[]>,
      default: () => [],
    },
    align: {
      type: String,
      default: Alignment.Vertical,
    },
  },
  computed: {
    alignmentClass() {
      return this.align === Alignment.Vertical ? 'flex-col' : 'flex-row';
    },
  },
});
</script>
