<template>
  <div v-if="promisesLength > 0" class="mb-8">
    <div
      :id="`group-${groupBy.where}-header`"
      class="group-header"
      :class="
        groupBy.by === 'topic'
          ? 'bg-status-proposed'
          : `bg-status-${groupBy.where}`
      "
    >
      <div class="flex items-center">
        <img
          class="w-8 my-2 ml-6 mr-2"
          :src="`images/${groupBy.by}/${groupBy.where}_small.png`"
          :alt="groupBy.where"
        />
        <p class="wv-h10 wv-font-bold wv-font-kondolar pl-2">
          {{ groupTitle }}
        </p>
      </div>
      <p class="flex flex-shrink-0 wv-u4 wv-font-semibold wv-font-anuphan pr-4">
        {{ promisesLength }} คำสัญญา
      </p>
    </div>
    <PromiseCard
      v-for="promise in currentPagePromises"
      :key="`${groupBy.where}-group-promise-card-${promise.id}`"
      class="pb-2"
      :promise="promise"
    />
    <div
      v-if="promisesLength > 0 && promisePerPage > 0"
      class="flex justify-between items-center"
    >
      <div class="flex items-center">
        <button
          :id="`${groupBy.where}-left-navigation-button`"
          class="transform rotate-180 navigation-button mr-1"
          :class="currentPage > 1 ? 'border border-white' : ''"
          @click="currentPage > 1 ? (currentPage -= 1) : null"
        >
          <IconRight />
        </button>
        <div
          v-for="(pageNumber, index) in pageNumberArray"
          :id="`${groupBy.where}-page-${pageNumber}-key-${index}`"
          :key="`${groupBy.where}-page-${pageNumber}-key-${index}`"
          class="mr-1"
        >
          <button
            class="wv-font-anuphan wv-u5 wv-font-bold rounded-sm"
            :class="
              pageNumber !== '...'
                ? pageNumber === currentPage
                  ? 'bg-white text-black border border-white w-6 h-6'
                  : 'text-white border border-white w-6 h-6'
                : 'text-white w-3'
            "
            @click="pageNumber !== '...' ? (currentPage = pageNumber) : null"
          >
            {{ pageNumber }}
          </button>
        </div>
        <button
          :id="`${groupBy.where}-right-navigation-button`"
          class="navigation-button"
          :class="currentPage < pageLength ? 'border border-white' : ''"
          @click="currentPage < pageLength ? (currentPage += 1) : null"
        >
          <IconRight />
        </button>
      </div>
      <Button theme="secondary-white" @click="viewAll"
        >ดูประเด็นนี้ทั้งหมด</Button
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import IconRight from './icon-right.vue';
import {
  Group,
  groupBy,
  getGroupTitle,
  filteredPromise,
  computedPromisePerPage,
  pageLength,
  pageNumberArray,
  currentPagePromises,
  getPromisesLength,
} from './topic-utils';
import PromiseCard from '@/components/promise-card/promise-card.vue';
import Button from '@/components/button.vue';
import { TrackingPromise, PromiseTopic, PromiseStatus } from '@/models/promise';

export default Vue.extend({
  name: 'TopicGroup',
  components: { PromiseCard, Button, IconRight },
  props: {
    topic: {
      type: String as PropType<PromiseTopic>,
      default: '',
    },
    status: {
      type: String as PropType<PromiseStatus>,
      default: '',
    },
    promises: {
      type: Array as PropType<TrackingPromise[]>,
      default: () => [{}],
    },
    promisePerPage: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    groupBy(): Group {
      return groupBy(this.$props.topic, this.$props.status);
    },
    groupTitle(): string | undefined {
      return getGroupTitle(this.groupBy.by, this.groupBy.where);
    },
    filteredPromise(): TrackingPromise[] {
      return filteredPromise(
        this.$props.promises,
        this.groupBy.by,
        this.groupBy.where
      );
    },
    computedPromisePerPage(): number {
      return computedPromisePerPage(
        this.$props.promisePerPage,
        this.filteredPromise.length
      );
    },
    pageLength(): number {
      return pageLength(
        this.filteredPromise.length,
        this.computedPromisePerPage
      );
    },
    pageNumberArray(): (string | number)[] {
      return pageNumberArray(this.pageLength, this.currentPage);
    },
    currentPagePromises(): TrackingPromise[] {
      return currentPagePromises(
        this.filteredPromise,
        this.currentPage,
        this.computedPromisePerPage
      );
    },
    promisesLength(): number {
      return getPromisesLength(this.filteredPromise);
    },
  },
  methods: {
    viewAll() {
      this.currentPage = 1;
      this.$emit('viewGroup');
    },
  },
});
</script>

<style scoped>
.group-header {
  @apply flex items-center justify-between rounded-xl border border-white text-white overflow-hidden mb-6;
}
.navigation-button {
  @apply w-6 h-6 flex justify-center items-center rounded-sm;
}
</style>
