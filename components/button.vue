<template>
  <button
    class="flex flex-row items-center px-4 py-2 border wv-u4 wv-font-bold space-x-2 rounded-sm"
    :class="themeClasses"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

type ButtonTheme =
  | 'primary-white'
  | 'primary-blue'
  | 'secondary-white'
  | 'secondary-blue';

export default Vue.extend({
  name: 'Button',
  props: {
    theme: {
      type: String as PropType<ButtonTheme>,
      default: 'primary',
    },
  },
  computed: {
    themeClasses() {
      switch (this.theme as ButtonTheme) {
        case 'secondary-white':
          return [
            'border-white',
            'text-white',
            'bg-transparent',
            'hover:border-ultramarine',
            'hover:text-ultramarine',
            'hover:bg-white',
          ];

        case 'secondary-blue':
          return [
            'border-ultramarine',
            'text-ultramarine',
            'bg-transparent',
            'hover:border-white',
            'hover:text-white',
            'hover:bg-status-proposed',
          ];

        case 'primary-blue':
          return [
            'border-ultramarine',
            'text-ultramarine',
            'bg-white',
            'hover:border-white',
            'hover:text-white',
            'hover:bg-status-proposed',
          ];

        case 'primary-white':
        default:
          return [
            'border-white',
            'text-white',
            'bg-status-proposed',
            'hover:border-ultramarine',
            'hover:text-ultramarine',
            'hover:bg-white',
          ];
      }
    },
  },
  methods: {
    onClick() {
      this.$emit('click', true);
    },
  },
});
</script>
