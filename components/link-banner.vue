<template>
  <div
    class="flex flex-col w-full max-w-4xl p-4 rounded-lg sm:flex-row"
    :class="themeClasses"
    data-testid="theme"
  >
    <div class="flex items-center sm:items-start sm:w-2/5">
      <img
        v-if="iconImage"
        class="w-12 mr-4"
        :src="`${$config.path.images}/${iconImage}`"
        :alt="iconImageName"
      />
      <h1 class="wv-h5 wv-font-kondolar wv-font-bold">
        {{ titleText }}
      </h1>
    </div>
    <p class="wv-b5 wv-font-baijamjuri py-4 sm:px-4 sm:py-0 sm:w-1/2">
      {{ bodyText }}
    </p>
    <NuxtLink class="self-start" :to="buttonUrl">
      <Button
        class="w-full h-10 justify-center sm:w-max flex-shrink-0"
        theme="primary-white"
        data-testid="navigation"
      >
        <span class="wv-font-anuphan">
          {{ buttonText }}
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-2.26862e-07 6.74994L-2.92429e-07 5.24994L9 5.24994L4.875 1.12494L5.94 0.0599401L11.88 5.99994L5.94 11.9399L4.875 10.8749L9 6.74994L-2.26862e-07 6.74994Z"
          /></svg
      ></Button>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

type LinkBannerTheme = 'transparent-gray' | 'ultramarine';

export default Vue.extend({
  name: 'LinkBanner',
  props: {
    theme: {
      type: String as PropType<LinkBannerTheme>,
      default: 'ultramarine',
    },
    iconImage: {
      type: String,
      default: '',
    },
    titleText: {
      type: String,
      default: '',
    },
    bodyText: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
    buttonUrl: {
      type: String,
      default: '',
    },
  },
  computed: {
    themeClasses() {
      switch (this.theme as unknown as LinkBannerTheme) {
        case 'transparent-gray':
          return ['bg-gray', 'bg-opacity-10', 'text-white'];
        case 'ultramarine':
        default:
          return ['bg-status-proposed', 'text-white'];
      }
    },
    iconImageName() {
      const pathSplit = this.iconImage.split('/');
      const nameSplit = pathSplit[pathSplit.length - 1].split('.')[0];
      return nameSplit;
    },
  },
});
</script>
