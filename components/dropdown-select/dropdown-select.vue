<template>
  <div class="relative">
    <button
      id="select-box"
      class="flex w-full space-x-1 justify-between items-center py-2.5 px-2 rounded-sm wv-font-anuphan wv-font-semibold wv-u5 border-white border"
      :class="selectClasses"
      @click="toggleSelecting"
    >
      <div v-if="value" class="flex items-center">
        <img
          v-if="options"
          class="w-5 h-5 rounded-full border border-gray border-opacity-10 mr-1"
          :src="`${$config.path.images}${selectedOption.iconUrl}`"
        />
        <span v-if="options">{{ selectedOption.label }}</span>
      </div>
      <span v-else-if="!selecting">{{ placeholder }}</span>
      <span v-else>{{ placeholderSelecting }}</span>
      <DropdownIcon
        :theme="selecting ? 'white' : 'black'"
        :class="selecting ? 'transform rotate-180' : null"
      />
    </button>
    <template v-if="selecting">
      <div class="hidden md:fixed inset-0" @click="selecting = false" />

      <div
        id="item-list"
        class="md:absolute inset-x-0 top-full z-10 md:max-h-64 overflow-y-scroll mt-1 bg-white rounded overflow-hidden"
      >
        <div class="flex flex-col bg-opacity-20">
          <DropdownItem
            :option="{ label: placeholder, value: '' }"
            @click="select($event)"
          />
          <DropdownItem
            v-for="option in options"
            :key="option.value"
            :option="option"
            @click="select($event)"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import DropdownIcon from './dropdown-icon.vue';
import DropdownItem from './dropdown-item.vue';

export interface Option {
  isHeader?: boolean;
  label: string;
  value: string;
  iconUrl?: string;
}

export default Vue.extend({
  name: 'DropdownSelect',
  components: { DropdownIcon, DropdownItem },
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    placeholderSelecting: {
      type: String,
      default: '',
    },
    options: {
      type: Array as PropType<Option[]>,
      default: () => [],
    },
  },
  data() {
    return {
      selecting: false,
    };
  },
  computed: {
    selectClasses() {
      if (this.selecting) {
        return 'text-white bg-transparent';
      }
      return 'bg-white';
    },
    selectedOption() {
      return this.options.find((o) => o.value === this.value);
    },
  },
  methods: {
    toggleSelecting() {
      this.selecting = !this.selecting;
    },
    select(value: string) {
      this.$emit('input', value);
      this.toggleSelecting();
    },
  },
});
</script>
