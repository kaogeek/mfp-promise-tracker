<template>
  <div :id="`promise-card-${promise.id}`" class="w-full">
    <SingleCard
      :openState="openState"
      :promise="promise"
      @readmore="handleReadClick($event)"
    />
    <ExpandedCard :expanded="readMoreState" :promise="promise" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import SingleCard from './single-card.vue';
import ExpandedCard from './expanded-card.vue';
import { TrackingPromise } from '@/models/promise';

export default Vue.extend({
  name: 'PromiseCard',
  components: { SingleCard, ExpandedCard },
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
      readMoreState: this.$props.openState,
    };
  },
  methods: {
    handleReadClick(clickState: boolean) {
      this.readMoreState = clickState;
    },
  },
});
</script>
