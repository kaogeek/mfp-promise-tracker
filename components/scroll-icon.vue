<template>
  <div class="flex flex-col items-center scroll-animation">
    <slot />
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.7079 9.292C28.801 9.38489 28.8749 9.49524 28.9253 9.61673C28.9758 9.73822 29.0017 9.86847 29.0017 10C29.0017 10.1315 28.9758 10.2618 28.9253 10.3833C28.8749 10.5048 28.801 10.6151 28.7079 10.708L16.7079 22.708C16.615 22.8011 16.5047 22.875 16.3832 22.9254C16.2617 22.9758 16.1315 23.0018 15.9999 23.0018C15.8684 23.0018 15.7381 22.9758 15.6167 22.9254C15.4952 22.875 15.3848 22.8011 15.2919 22.708L3.29192 10.708C3.10415 10.5202 2.99866 10.2656 2.99866 10C2.99866 9.73445 3.10415 9.47977 3.29192 9.292C3.47969 9.10423 3.73437 8.99874 3.99992 8.99874C4.26547 8.99874 4.52015 9.10423 4.70792 9.292L15.9999 20.586L27.2919 9.292C27.3848 9.19888 27.4952 9.12499 27.6167 9.07458C27.7381 9.02416 27.8684 8.99821 27.9999 8.99821C28.1315 8.99821 28.2617 9.02416 28.3832 9.07458C28.5047 9.12499 28.615 9.19888 28.7079 9.292Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ScrollIcon',
});
</script>

<style scoped>
.scroll-animation {
  transform: translateY(0px);
  animation: scrollBounce 1.5s infinite ease;
}
@keyframes scrollBounce {
  0% {
    transform: translateY(0px);
  }
  40% {
    transform: translateY(20px);
  }
  90% {
    transform: translateY(0px);
  }
}
</style>
