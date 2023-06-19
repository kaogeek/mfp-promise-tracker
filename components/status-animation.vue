<template>
  <div class="status-animation">
    <img :src="`${$config.path.images}/status/mfp-logo.png`" alt="" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'StatusAnimation',
});
</script>

<style scoped>
.status-animation {
  width: 50px;
  height: 100%;
  margin-bottom: 20px;
  /* background-image: url('/images/status/mfp-logo.png'); */
  /* background-size: contain; */
}
</style>
