<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ExternalLink',
  props: {
    url: {
      type: String,
      default: '',
    },
  },
});
</script>
