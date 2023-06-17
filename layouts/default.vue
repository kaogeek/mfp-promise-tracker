<template>
  <div class="flex flex-col min-h-screen wv-font-anuphan wv-b5">
    <div class="z-20 wv_navbar wv_navbar--white">
      <div class="wv_navbar__logo items-center">
        <a href="/" class="wv_navbar__logo__wevis">
          <img src="/images/logo-9geek.png" class="wv_navbar__logo__addon"
        /></a>
        <div class="px-4">ติดตาม 300 นโยบาย</div>
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
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://discord.gg/kaogeek"
        class="wv_footer__logo"
        >kaogeek</a
      >
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
        { label: 'ดูคำสัญญา', path: '/explore' },
        { label: 'ติดตามร่างกฎหมาย', path: '/laws' },
        // { label: 'เกี่ยวกับโครงการ', path: '/about' },
      ],
    };
  },
});
</script>
