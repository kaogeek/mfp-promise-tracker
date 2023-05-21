<template>
  <div class="p-3 rounded-md overflow-hidden w-full">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BoxContainer',
});
</script>
