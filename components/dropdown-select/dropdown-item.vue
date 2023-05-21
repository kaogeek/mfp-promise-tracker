<template>
  <div v-if="option.isHeader" class="dropdown-item wv-font-anuphan wv-u4">
    <div class="header-dash" />
    <span class="opacity-70">{{ option.label }}</span>
    <div class="header-dash" />
  </div>
  <button
    v-else
    class="dropdown-item wv-font-anuphan wv-u4 hover:bg-gray hover:bg-opacity-20"
    @click="click"
  >
    <img
      v-if="option.iconUrl"
      class="w-5 h-5 rounded-full border border-gray border-opacity-10"
      :src="`${$config.path.images}${option.iconUrl}`"
    />
    <span>{{ option.label }}</span>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Option } from './dropdown-select.vue';

export default Vue.extend({
  name: 'DropdownItem',
  props: {
    option: {
      type: Object as PropType<Option>,
      default: undefined,
    },
  },
  methods: {
    click() {
      if (this.option?.isHeader) {
        return;
      }
      this.$emit('click', this.option.value);
    },
  },
});
</script>

<style scoped>
.dropdown-item {
  @apply flex flex-row items-center py-2.5 px-2 space-x-2;
}
.header-dash {
  @apply flex-1 h-1 border-b border-gray border-dashed;
}
</style>
