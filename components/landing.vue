<template>
  <div
    class="relative justify-center w-full landing-bg bg-cover bg-center overflow-hidden"
    :style="`background-image: url(${$config.path.images}/background/Background-Blur.png)`"
  >
    <div
      class="flex flex-col relative z-10 items-center text-center pt-16 sm:pt-32 pb-20"
    >
      <StatusAnimation />
      <h2 class="wv-h6 wv-font-bold wv-font-kondolar py-2">ติดตาม</h2>
      <h1 class="wv-h4 wv-font-bold wv-font-kondolar text-mfp-orange pb-2">
        14 ชุดกฎหมาย<br class="block sm:hidden" /><br class="hidden sm:block" />
      </h1>
      <h1 class="wv-h4 wv-font-bold wv-font-kondolar pb-2">เปลี่ยนประเทศ</h1>
      <p class="wv-b5 wv-font-kondolar px-4">พร้อมยื่นเข้าสภา</p>
      <div class="flex flex-col items-center py-4 w-full px-4">
        <NuxtLink class="mt-3 mb-6 mx-auto" to="/laws">
          <Button
            theme="primary-white"
            class="h-10 w-full sm:w-max wv-font-anuphan wv-u4 flex justify-center"
          >
            <span>ดูร่างกฎหมายทั้งหมด</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-2.26862e-07 6.74994L-2.92429e-07 5.24994L9 5.24994L4.875 1.12494L5.94 0.0599401L11.88 5.99994L5.94 11.9399L4.875 10.8749L9 6.74994L-2.26862e-07 6.74994Z"
              />
            </svg>
          </Button>
        </NuxtLink>
        <!-- <div class="p-2 wv-font-anuphan wv-u5 bg-gray bg-opacity-10 rounded-sm">
          อัปเดตล่าสุด {{ updatedDate }}
        </div> -->
      </div>
      <!-- <div class="w-5xl w-full px-4">
        <div class="block w-full border-b border-white border-dashed h-1">
          {{ ` ` }}
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StatusAnimation from './status-animation.vue';
import Button from './button.vue';
import { lastUpdated } from '@/data/metadata.json';

export default Vue.extend({
  name: 'Landing',
  components: { StatusAnimation, Button },
  data() {
    return {
      updatedDate: new Date(lastUpdated).toLocaleDateString('th-TH', {
        year: '2-digit',
        month: 'short',
        day: 'numeric',
      }),
    };
  },
});
</script>

<style scoped>
.landing-bg {
  height: 460px;
}

@media (min-width: 547px) {
  .landing-bg {
    height: 520px;
  }
}

@media (min-width: 640px) {
  .landing-bg {
    height: 580px;
  }
}

@media (min-width: 768px) {
  .landing-bg {
    height: 630px;
  }
}
</style>
