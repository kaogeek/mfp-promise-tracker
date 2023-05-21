<template>
  <div
    class="flex flex-col items-center z-10 bg-no-repeat bg-fixed bg-cover"
    :style="{
      backgroundImage: `url(${$config.path.images}/background/blog_bg.png)`,
    }"
  >
    <div class="blog-header wv-font-kondolar wv-h10">
      <img
        class="w-16 h-16 mr-3"
        :src="`${$config.path.images}/status/default.png`"
        alt="promise-logo"
      />
      <div>
        <h1 class="wv-font-bold">PROMISE TRACKER</h1>
        <h2>สำรวจคำสัญญาของพรรคการเมืองที่ผ่านมารักษาคำสัญญาได้แค่ไหน ?</h2>
      </div>
    </div>
    <div
      class="mt-10 sm:mt-20 grid gap-6 max-w-4xl justify-items-center px-2 sm:px-6"
    >
      <PromiseCard
        v-if="promise"
        class="shadow-2xl"
        :open-state="true"
        :promise="promise"
      />
      <LinkBanner
        theme="ultramarine"
        icon-image="article/explore.png"
        title-text="PROMISE TRACKER"
        body-text="สำรวจคำสัญญาของพรรคการเมืองที่ผ่านมารักษาคำสัญญาได้แค่ไหน ?"
        button-text="ดูคำสัญญา"
        button-url="/explore"
      />
      <LinkBanner
        theme="ultramarine"
        icon-image="article/article.png"
        title-text="วิธีตรวจสอบคำสัญญา"
        body-text="หากนัก/พรรคการเมืองที่ได้เข้าไปเป็น รัฐบาล แล้วไม่ทำตามสัญญา มีกระบวนการตรวจ สอบอย่างไรบ้าง"
        button-text="อ่านเพิ่มเติม"
        button-url="/guide"
      />
      <FormLink />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  matchedPromise,
  titleText,
  descriptionMap,
  imageUrl,
} from '@/utils/promises-meta';
import promises from '@/data/promises.json';
import PromiseCard from '@/components/promise-card/promise-card.vue';
import LinkBanner from '@/components/link-banner.vue';
import FormLink from '@/components/form-link.vue';
import { PromiseStatus, TrackingPromise } from '@/models/promise';
import { createMetadata } from '~/utils/metadata';

export default Vue.extend({
  name: 'PromisePage',
  components: {
    PromiseCard,
    LinkBanner,
    FormLink,
  },
  data() {
    return {
      slug: this.$route.params,
    };
  },
  head(): {} {
    if (!this.promise) return createMetadata();

    const baseImageUrl = `https://raw.githubusercontent.com/wevisdemo/promise-tracker/main/static/og`;
    const { title, party, status } = this.promise as TrackingPromise;

    return createMetadata({
      pageName: titleText(title, party),
      description: descriptionMap.get(status as PromiseStatus),
      image: imageUrl(baseImageUrl, status),
    });
  },
  computed: {
    id(): number {
      return parseInt(this.slug.id, 10);
    },
    promise(): TrackingPromise | {} {
      return matchedPromise(promises as TrackingPromise[], this.id);
    },
  },
});
</script>

<style scoped>
.blog-header {
  @apply flex justify-center items-center bg-gradient-to-b from-ultramarine to-transparent text-white w-full h-28 p-4;
}
</style>
