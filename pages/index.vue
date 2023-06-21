<template>
  <div class="flex flex-col">
    <div class="flex flex-col items-center text-white">
      <div class="gradient-background" />
      <Landing />
      <div class="mt-10 mb-16 space-y-8 px-2">
        <StatusExplanation />
        <!-- <PartyPromise /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Landing from '@/components/landing.vue';
// import LinkBanner from '@/components/link-banner.vue';
import StatusExplanation from '@/components/explanation/status-explanation.vue';
// import ExplanationContainer from '@/components/explanation/explanation-container.vue';
// import FormLink from '@/components/form-link.vue';
// import PartyPromise from '~/components/party/party-promise.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Landing,
    // LinkBanner,
    StatusExplanation,
    // ExplanationContainer,
    // FormLink,
    // PartyPromise,
  },
});
</script>

<style scoped>
.gradient-background {
  z-index: -5;
  /* @apply w-screen h-screen fixed top-0 bg-gradient-to-b from-ultramarine to-black; */
  @apply w-screen h-screen fixed top-0 bg-mfp-bg !important;
}
</style>
