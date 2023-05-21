<template>
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 6L0.669873 1.38009e-07L9.33013 8.95112e-07L5 6Z"
      :fill="theme"
    />
  </svg>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

type IconTheme = 'white' | 'black';

export default Vue.extend({
  name: 'DowndownIcon',
  props: {
    theme: {
      type: String as PropType<IconTheme>,
      default: 'white',
    },
  },
});
</script>
