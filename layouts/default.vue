<template>
  <div class="flex flex-col min-h-screen wv-font-anuphan wv-b5">
    <div class="z-20 wv_navbar wv_navbar--white">
      <div class="wv_navbar__logo items-center">
        <a href="/" class="flex items-center">
          <img
            src="/images/logo-mfp.png"
            class="wv_navbar__logo__addon"
            width="33"
            height="28"
            alt="logo-mfp"
          />
          <div class="px-4 whitespace-nowrap">พรรคก้าวไกล</div>
        </a>
      </div>

      <NuxtLink v-for="{ label, path } in routes" :key="path" :to="path">
        <WvNavButton :active="path === $route.path">{{ label }}</WvNavButton>
      </NuxtLink>

      <!-- <button class="wv_navbar__hamburger-button"><svg width="15" height="12" viewBox="0 0 15 12">
          <rect width="15" height="2"></rect>
          <rect y="5" width="15" height="2"></rect>
          <rect y="10" width="15" height="2"></rect>
        </svg></button> -->
    </div>
    <div class="flex-1">
      <Nuxt />
    </div>
    <div class="wv_footer wv_footer--white">
      <div class="flex">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://discord.gg/kaogeek"
          class="wv_footer__logo flex gap-4"
        >
          <img
            src="/images/logo-9geek.png"
            alt="logo-9geek-footer"
            width="50"
            height="50"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import WvNavButton from '@wevisdemo/ui/components/nav-button.vue';

export default Vue.extend({
  components: { WvNavButton },
  data() {
    return {
      routes: [
        { label: 'หน้าแรก', path: '/' },
        // { label: 'ดูคำสัญญา', path: '/explore' },
        { label: 'ติดตามร่างกฎหมาย', path: '/laws' },
        // { label: 'เกี่ยวกับโครงการ', path: '/about' },
      ],
    };
  },
});
</script>
