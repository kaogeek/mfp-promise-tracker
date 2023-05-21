<template>
  <div
    v-if="expanded"
    :id="`expanded-card-${promise.id}`"
    class="grid bg-white px-6 py-3 rounded-lg overflow-hidden"
    :class="promise.timelines.length > 0 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'"
  >
    <div>
      <h2 class="wv-h10 wv-font-kondolar wv-font-black py-4">รายละเอียด</h2>
      <p
        :id="`expanded-card-${promise.id}-description`"
        class="wv-font-baijamjuri wv-b5"
      >
        {{ promise.description }}
      </p>
      <NCPO v-if="promise.isNCPO" />
      <h2 class="wv-h10 wv-font-kondolar wv-font-black py-4">
        ลิงก์ / ข้อมูลที่เกี่ยวข้อง
      </h2>
      <BoxContainer class="border-black border mb-3">
        <img
          :id="`expanded-card-${promise.id}-image`"
          :src="promise.imageUrl"
          :alt="`image-${promise.id}`"
        />
      </BoxContainer>
      <div v-if="promise.links.length > 0">
        <Link
          v-for="(link, index) in promise.links"
          :key="`promise-${promise.id}-link-${index}`"
          :link="link"
        />
      </div>
    </div>
    <div v-if="promise.timelines.length > 0" class="sm:pl-6 pb-3">
      <h2 class="timeline wv-h10 wv-font-kondolar wv-font-black py-4">
        ไทม์ไลน์
      </h2>
      <Timeline
        v-for="(timeline, index) in promise.timelines"
        :key="`promise-${promise.id}-timeline-${index}`"
        :timeline="timeline"
        :is-last-item="index === promise.timelines.length - 1 ? true : false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import BoxContainer from './box-container.vue';
import Link from './link.vue';
import Timeline from './timeline.vue';
import NCPO from './ncpo.vue';
import { TrackingPromise } from '@/models/promise';

export default Vue.extend({
  name: 'ExpandedCard',
  components: { BoxContainer, Link, Timeline, NCPO },
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
    promise: {
      type: Object as PropType<TrackingPromise>,
      default: () => ({}),
    },
  },
});
</script>
