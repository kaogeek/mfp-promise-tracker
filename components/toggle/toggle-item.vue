<template>
  <button
    class="flex px-2.5 py-2 rounded-lg space-x-1 items-center wv-font-anuphan wv-font-semibold wv-u5"
    :class="selected ? 'bg-white text-black' : 'bg-subglass text-white'"
    @click="clickItem"
    v-if="option.value !== 'nodata'"
  >
    <svg
      v-if="selected"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.00002 0.666626C4.40002 0.666626 0.666687 4.39996 0.666687 8.99996C0.666687 13.6 4.40002 17.3333 9.00002 17.3333C13.6 17.3333 17.3334 13.6 17.3334 8.99996C17.3334 4.39996 13.6 0.666626 9.00002 0.666626ZM9.00002 15.6666C5.31669 15.6666 2.33335 12.6833 2.33335 8.99996C2.33335 5.31663 5.31669 2.33329 9.00002 2.33329C12.6834 2.33329 15.6667 5.31663 15.6667 8.99996C15.6667 12.6833 12.6834 15.6666 9.00002 15.6666ZM9.00002 13.1666C11.3012 13.1666 13.1667 11.3011 13.1667 8.99996C13.1667 6.69877 11.3012 4.83329 9.00002 4.83329C6.69883 4.83329 4.83335 6.69877 4.83335 8.99996C4.83335 11.3011 6.69883 13.1666 9.00002 13.1666Z"
        fill="#EA580C"
      />
    </svg>
    <svg
      v-else
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.00002 0.666626C4.40002 0.666626 0.666687 4.39996 0.666687 8.99996C0.666687 13.6 4.40002 17.3333 9.00002 17.3333C13.6 17.3333 17.3334 13.6 17.3334 8.99996C17.3334 4.39996 13.6 0.666626 9.00002 0.666626ZM9.00002 15.6666C5.31669 15.6666 2.33335 12.6833 2.33335 8.99996C2.33335 5.31663 5.31669 2.33329 9.00002 2.33329C12.6834 2.33329 15.6667 5.31663 15.6667 8.99996C15.6667 12.6833 12.6834 15.6666 9.00002 15.6666Z"
        fill="white"
      />
    </svg>
    <div
      v-if="option.colorClass"
      class="rounded-full w-2.5 h-2.5"
      :class="option.colorClass"
    ></div>
    <label class="cursor-pointer">{{ option.label }}</label>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { ListOption } from './toggle-list.vue';

export default Vue.extend({
  name: 'ToggleItem',
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
    option: {
      type: Object as PropType<ListOption>,
      default: undefined,
    },
  },
  methods: {
    clickItem() {
      this.$emit('selected', this.option.label);
    },
  },
});
</script>
