<template>
  <div class="flex flex-col items-center">
    <BoxContainer class="bg-status-proposed text-white">
      <p class="wv-u5 wv-font-anuphan">
        <span>{{ formatDate(timeline.from) }}</span>
        <span v-if="timeline.to">- {{ formatDate(timeline.to) }}</span>
      </p>
      <p class="wv-b5 wv-font-baijamjuri">{{ timeline.label }}</p>
    </BoxContainer>
    <TimelineArrow v-if="!isLastItem" class="p-2" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import BoxContainer from './box-container.vue';
import TimelineArrow from './timeline-arrow.vue';
import { PromiseTimeline } from '@/models/promise';

export default Vue.extend({
  name: 'Timeline',
  components: { BoxContainer, TimelineArrow },
  props: {
    timeline: {
      type: Object as PropType<PromiseTimeline>,
      default: () => ({
        label: '',
        from: '',
      }),
    },
    isLastItem: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    formatDate(isoDate: string) {
      const dateArray = isoDate.split('-').map((date) => parseInt(date, 10));
      if (dateArray.length === 2) {
        const date = new Date(dateArray[0], dateArray[1] - 1, 1);
        const formattedDate = date.toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
        });
        return formattedDate;
      } else if (dateArray.length === 3) {
        const date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
        const formattedDate = date.toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        return formattedDate;
      } else {
        return '';
      }
    },
  },
});
</script>
