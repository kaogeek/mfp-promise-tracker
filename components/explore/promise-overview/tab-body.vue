<template>
  <div>
    <div
      class="flex flex-col p-4 space-y-4 bg-status-proposed rounded-b-xl md:rounded-bl-none md:h-80"
    >
      <div class="flex-1 flex flex-col space-y-2 m-2">
        <ChartItem
          v-for="{ label, icon, data } in group.charts"
          :key="label"
          :label="label"
          :icon="icon"
          :data="data"
          :max="group.max"
          :total="group.total"
        />
      </div>
      <!-- <Button class="justify-center" @click="isExplanationDialogOpen = true"
        ><svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.75 5.74975H8.25V4.24976H6.75V5.74975ZM7.5 13.9998C4.1925 13.9998 1.5 11.3073 1.5 7.99975C1.5 4.69226 4.1925 1.99976 7.5 1.99976C10.8075 1.99976 13.5 4.69226 13.5 7.99975C13.5 11.3073 10.8075 13.9998 7.5 13.9998ZM7.5 0.499756C6.51509 0.499756 5.53981 0.693749 4.62987 1.07066C3.71993 1.44757 2.89314 2.00002 2.1967 2.69645C0.790176 4.10298 0 6.01063 0 7.99975C0 9.98888 0.790176 11.8965 2.1967 13.3031C2.89314 13.9995 3.71993 14.5519 4.62987 14.9289C5.53981 15.3058 6.51509 15.4998 7.5 15.4998C9.48912 15.4998 11.3968 14.7096 12.8033 13.3031C14.2098 11.8965 15 9.98888 15 7.99975C15 7.01484 14.806 6.03957 14.4291 5.12963C14.0522 4.21969 13.4997 3.39289 12.8033 2.69645C12.1069 2.00002 11.2801 1.44757 10.3701 1.07066C9.46018 0.693749 8.48491 0.499756 7.5 0.499756ZM6.75 11.7498H8.25V7.24975H6.75V11.7498Z"
          />
        </svg>
        <span>ข้อมูลเพิ่มเติม</span></Button
      > -->
    </div>

    <div
      v-if="isExplanationDialogOpen"
      class="fixed inset-0 bg-status-proposed z-50 flex justify-center overflow-y-scroll hide-scrollbar"
    >
      <button
        class="fixed top-4 right-4 flex justify-center items-center w-7 h-7 p-1.5 bg-white rounded-full text-ultramarine"
        @click="isExplanationDialogOpen = false"
      >
        <svg viewBox="0 0 18 17" fill="currentColor">
          <rect
            x="17.8691"
            y="1.12683"
            width="22.5558"
            height="1.87965"
            rx="0.939827"
            transform="rotate(135 17.8691 1.12683)"
          />
          <rect
            x="16.54"
            y="16.9243"
            width="22.5558"
            height="1.87965"
            rx="0.939827"
            transform="rotate(-135 16.54 16.9243)"
          />
        </svg>
      </button>
      <StatusExplanation class="bg-status-proposed my-4 md:my-8" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import ChartItem from './chart-item.vue';
import { groupPromisesBy } from './promises-aggregator';
import Button from '@/components/button.vue';
import StatusExplanation from '@/components/explanation/status-explanation.vue';
import { TrackingPromise } from '@/models/promise';
import { FilterType } from '@/models/filter';

export default Vue.extend({
  name: 'TabBody',
  components: { Button, ChartItem, StatusExplanation },
  props: {
    promises: {
      type: Array as PropType<TrackingPromise[]>,
      default: () => [],
    },
    groupBy: {
      type: String as PropType<
        FilterType.Party | FilterType.Status | FilterType.Topic
      >,
      required: true,
    },
  },
  data() {
    return {
      isExplanationDialogOpen: false,
    };
  },
  computed: {
    group() {
      return groupPromisesBy(this.groupBy, this.promises);
    },
  },
});
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
