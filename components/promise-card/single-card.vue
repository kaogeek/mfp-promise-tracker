<template>
  <div
    :id="`single-card-${promise.id}`"
    class="flex flex-col bg-white rounded-lg border border-white overflow-hidden"
  >
    <div
      :id="`single-card-${promise.id}-status-color`"
      class="h-2 mb-3"
      :class="`bg-status-${promise.status}`"
    />
    <div class="flex justify-between">
      <div>
        <div class="bg-gray bg-opacity-10 rounded w-max p-2 ml-3">
          <StatusLegend
            :show-detail="false"
            :show-only="
              promise.status ? getStatus(promise.status) : 'ไม่พบความเคลื่อนไหว'
            "
          />
        </div>
        <h2
          :id="`single-card-${promise.id}-title`"
          class="wv-h10 wv-font-kondolar wv-font-black px-3 py-4"
        >
          {{ promise.title }}
        </h2>
      </div>
      <div
        class="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 mr-3 mb-3"
      >
        <img
          :id="`single-card-${promise.id}-thumbnail`"
          class="rounded-sm overflow-hidden h-full w-full object-cover"
          :src="promise.imageUrl"
          :alt="`thumbnail-${promise.id}`"
        />
      </div>
    </div>
    <div
      class="flex divide-x-2 divide-gray pb-4 wv-font-anuphan wv-u4 wv-font-bold"
    >
      <div class="flex px-3">
        <div class="w-4 mr-2">
          <img
            :id="`single-card-${promise.id}-topic-icon`"
            :src="`${$config.path.images}/topic/laws-brown/${promise.category}_small.png`"
            :alt="`${promise.category}`"
          />
        </div>
        <p :id="`single-card-${promise.id}-topic-name`">
          {{ getTopic(promise.category) }}
        </p>
      </div>
    </div>
    <div
      class="flex justify-between bg-black text-white wv-font-anuphan wv-u4 wv-font-bold px-1 py-2"
    >
      <button
        :id="`single-card-${promise.id}-readmore`"
        class="flex items-center"
        @click="onReadClick"
      >
        <p class="px-3">
          {{ clicked ? 'ปิด' : 'อ่านเพิ่มเติม' }}
        </p>
        <IconUp :class="clicked ? '' : 'transform rotate-180'" />
      </button>
      <div class="flex items-center">
        <!-- <p class="hidden sm:block">แชร์คำสัญญา</p>
        <WvSharer
          v-if="isMounted"
          class="mr-3"
          label=" "
          :allow-copy-link="true"
          :light="true"
          :outline="true"
          :url="shareUrl"
        /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import WvSharer from '@wevisdemo/ui/components/sharer.vue';
import IconUp from './icon-up.vue';
import StatusLegend from '@/components/explanation/status-legend.vue';
import {
  TrackingPromise,
  PromiseStatus,
  promiseStatusTextMap,
  // PromiseTopic,
  // promiseTopicTextMap,
  PromiseLawsTopic,
  promiseLawsTopicTextMap
} from '@/models/promise';

export default Vue.extend({
  name: 'SingleCard',
  components: { StatusLegend, WvSharer, IconUp },
  props: {
    promise: {
      type: Object as PropType<TrackingPromise>,
      default: () => ({}),
    },
    openState: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      clicked: this.$props.openState,
      isMounted: false,
      shareUrl: '',
    };
  },
  mounted() {
    this.shareUrl = `${location.origin}${this.$config.path.base}/promises/${this.$props.promise.id}`;
    this.isMounted = true;
  },
  methods: {
    onReadClick() {
      this.clicked = !this.clicked;
      this.$emit('readmore', this.clicked);
    },
    getStatus(status: PromiseStatus) {
      return promiseStatusTextMap.get(status as PromiseStatus);
    },
    getTopic(topic: PromiseLawsTopic) {
      return promiseLawsTopicTextMap.get(topic as PromiseLawsTopic)?.short;
    },
  },
});
</script>
