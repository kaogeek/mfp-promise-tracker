<template>
  <div
    class="flex flex-col bg-status-proposed lg:w-80 self-start fixed lg:sticky bottom-0 left-0 right-0 lg:h-auto lg:top-10 lg:mr-12 z-50 border-white border"
    :class="{ 'h-screen': isDialogOpenInMobile }"
  >
    <div class="flex lg:hidden flex-row text-white p-3 space-x-2 items-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path
          d="M4.37478 2.29169C4.83502 2.29168 5.20812 2.66477 5.20812 3.12501L5.20818 8.37809C6.12053 8.71659 6.77067 9.59489 6.77067 10.625C6.77067 11.6552 6.12053 12.5335 5.20818 12.872L5.20812 16.875C5.20812 17.3353 4.83502 17.7084 4.37478 17.7084C3.91454 17.7083 3.54145 17.3352 3.54146 16.875L3.54151 12.8719C2.62916 12.5334 1.979 11.6552 1.979 10.625C1.979 9.59488 2.62916 8.71659 3.54151 8.37809L3.54146 3.12503C3.54145 2.66479 3.91454 2.29169 4.37478 2.29169ZM9.99986 2.29169C10.4601 2.29169 10.8332 2.66479 10.8332 3.12503L10.8332 4.62809C11.7455 4.96659 12.3957 5.84488 12.3957 6.87502C12.3957 7.90516 11.7455 8.78345 10.8332 9.12195L10.8332 16.875C10.8332 17.3353 10.4601 17.7084 9.99985 17.7084C9.53961 17.7084 9.16652 17.3353 9.16652 16.875L9.16651 9.12195C8.25415 8.78345 7.604 7.90516 7.604 6.87502C7.604 5.84488 8.25415 4.96659 9.16651 4.62809L9.16652 3.12502C9.16652 2.66478 9.53962 2.29168 9.99986 2.29169ZM15.6249 2.29169C16.0851 2.29169 16.4582 2.66479 16.4582 3.12503L16.4582 10.8781C17.3705 11.2166 18.0207 12.0949 18.0207 13.125C18.0207 14.1552 17.3705 15.0334 16.4582 15.3719L16.4582 16.875C16.4583 17.3352 16.0852 17.7083 15.6249 17.7084C15.1647 17.7084 14.7916 17.3353 14.7916 16.875L14.7915 15.372C13.8792 15.0335 13.229 14.1552 13.229 13.125C13.229 12.0949 13.8792 11.2166 14.7915 10.8781L14.7916 3.12501C14.7916 2.66478 15.1647 2.29168 15.6249 2.29169ZM9.99984 6.14585C9.59713 6.14585 9.27067 6.47231 9.27067 6.87502C9.27067 7.27773 9.59713 7.60419 9.99984 7.60419C10.4025 7.60419 10.729 7.27773 10.729 6.87502C10.729 6.47231 10.4025 6.14585 9.99984 6.14585ZM4.37485 9.89585C3.97213 9.89585 3.64567 10.2223 3.64567 10.625C3.64567 11.0277 3.97213 11.3542 4.37485 11.3542C4.77755 11.3542 5.104 11.0277 5.104 10.625C5.104 10.2223 4.77755 9.89585 4.37485 9.89585ZM15.6248 12.3959C15.2221 12.3959 14.8957 12.7223 14.8957 13.125C14.8957 13.5277 15.2221 13.8542 15.6248 13.8542C16.0275 13.8542 16.354 13.5277 16.354 13.125C16.354 12.7223 16.0275 12.3959 15.6248 12.3959Z"
        />
      </svg>
      <p class="wv-u4 wv-font-semibold flex-1">คัดกรองร่างกฎหมาย</p>
      <button
        class="flex justify-center items-center w-7 h-7 p-1.5 bg-white rounded-full text-ultramarine"
        @click="isDialogOpenInMobile = !isDialogOpenInMobile"
      >
        <svg
          v-if="isDialogOpenInMobile"
          viewBox="0 0 18 17"
          fill="currentColor"
        >
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
        <svg
          v-else
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="currentColor"
        >
          <path
            d="M5.26771 0.621964C5.33963 0.549866 5.42506 0.492664 5.51912 0.453635C5.61318 0.414605 5.71401 0.394516 5.81584 0.394516C5.91767 0.394516 6.01851 0.414605 6.11256 0.453635C6.20662 0.492664 6.29205 0.549866 6.36397 0.621964L11.0091 5.26712C11.1545 5.4125 11.2362 5.60967 11.2362 5.81525C11.2362 6.02084 11.1545 6.21801 11.0091 6.36338C10.8638 6.50876 10.6666 6.59042 10.461 6.59042C10.2554 6.59042 10.0582 6.50876 9.91287 6.36338L5.81584 2.2648L1.71881 6.36338C1.64683 6.43536 1.56137 6.49246 1.46733 6.53142C1.37328 6.57037 1.27248 6.59042 1.17068 6.59042C1.06888 6.59042 0.968082 6.57037 0.874034 6.53142C0.779986 6.49246 0.694532 6.43536 0.62255 6.36338C0.550569 6.2914 0.49347 6.20595 0.454514 6.1119C0.415558 6.01785 0.395508 5.91705 0.395508 5.81525C0.395508 5.71346 0.415558 5.61266 0.454514 5.51861C0.49347 5.42456 0.550569 5.33911 0.62255 5.26712L5.26771 0.621964V0.621964Z"
          />
        </svg>
      </button>
    </div>

    <div
      :class="`flex flex-col overflow-y-auto ${
        isDialogOpenInMobile ? 'flex-1' : 'h-0 lg:flex-1'
      }`"
    >
      <div
        class="flex-1 flex flex-col p-5 space-y-2 wv-font-anuphan wv-u5 border-white border-t"
      >
        <p class="text-white wv-font-semibold">คัดกรองร่างกฎหมาย</p>
        <DropdownSelect
          v-model="selectedTopic"
          :options="topicOptions"
          placeholder="ทุกประเด็นร่างกฎหมาย"
          placeholder-selecting="เลือกประเด็น"
          :selected="selectedTopic"
        />

        <p class="text-white wv-font-semibold">เลือกดูร่างกฎหมายตามสถานะ</p>
        <ToggleList v-model="selectedStatus" :options="statusOptions" />

        <p class="text-white wv-font-semibold">ค้นหาตามคีย์เวิร์ด</p>
        <div class="flex flex-row p-1 rounded-sm bg-white space-x-1">
          <div class="bg-status-proposed rounded p-1.5">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0748 7.05784C11.0748 9.30714 9.25899 11.1157 7.0374 11.1157C4.8158 11.1157 3 9.30714 3 7.05784C3 4.80855 4.8158 3 7.0374 3C9.25899 3 11.0748 4.80855 11.0748 7.05784ZM10.81 13.0169C9.71969 13.7126 8.42547 14.1157 7.0374 14.1157C3.15075 14.1157 0 10.9558 0 7.05784C0 3.1599 3.15075 0 7.0374 0C10.924 0 14.0748 3.1599 14.0748 7.05784C14.0748 8.47643 13.6575 9.79727 12.9393 10.9036L17.5006 15.4967L15.3867 17.6254L10.81 13.0169Z"
                fill="white"
              />
            </svg>
          </div>
          <input
            v-model="keyword"
            class="flex-1 px-1"
            type="text"
            placeholder="พิมพ์คำเพื่อค้นหาร่างกฎหมาย"
          />
        </div>
        <p class="text-white wv-font-semibold">
          พิมพ์คำ , รัฐธรรมนูญ, เกณฑ์ทหาร
        </p>
      </div>

      <div class="flex flex-row space-x-2 p-3 border-white border-t">
        <Button class="flex-1" theme="primary-blue" @click="reset">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          >
            <path
              d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
              stroke-miterlimit="10"
            />
            <path
              d="M6.875 10H13.125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>ยกเลิกทั้งหมด</span>
        </Button>
        <Button class="flex-1" theme="primary-blue" @click="apply">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          >
            <path
              d="M13.4375 8.125L8.85414 12.5L6.5625 10.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>ค้นหาเลย</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import DropdownSelect, {
  Option,
} from '@/components/dropdown-select/dropdown-select.vue';
import ToggleList, { ListOption } from '@/components/toggle/toggle-list.vue';
import { Filter, FilterType } from '@/models/filter';
import parties from '@/data/parties.json';
import {
  PromiseStatus,
  promiseStatusOrder,
  promiseStatusTextMap,
} from '~/models/promise';
import {
  PromiseLawsTopic,
  promiseLawsTopicOrder,
  promiseLawsTopicTextMap,
} from '~/models/promise-laws';
import Button from '@/components/button.vue';

const [oppositionParties] = parties.reduce<[Option[], Option[]]>(
  ([government, opposition], { side, name }) => {
    const option: Option = {
      value: name,
      label: name,
      iconUrl: `/party/${name.split('/')[0]}.jpg`,
    };

    return side === 'government'
      ? [[...government, option], opposition]
      : [government, [...opposition, option]];
  },
  [[], []]
);

export default Vue.extend({
  name: 'FilterPanel',
  components: { DropdownSelect, ToggleList, Button },
  props: {
    value: {
      type: Array as PropType<Filter[]>,
      default: () => [],
    },
  },
  data() {
    return {
      partyOptions: [
        ...oppositionParties.sort((a, z) => a.label.localeCompare(z.label)),
      ] as Option[],
      topicOptions: promiseLawsTopicOrder.map((topic) => ({
        value: topic,
        label: promiseLawsTopicTextMap.get(topic)?.short,
        iconUrl: `/topic/laws/${topic}_small.png`,
      })) as Option[],
      statusOptions: [
        {
          value: '',
          label: 'ทุกสถานะร่างกฎหมาย',
        },
        ...promiseStatusOrder.map((status) => ({
          value: status,
          label: promiseStatusTextMap.get(status),
          colorClass: `bg-status-${status}`,
        })),
      ] as ListOption[],
      selectedParty: 'ก้าวไกล',
      selectedTopic: '' as PromiseLawsTopic | '',
      selectedStatus: '' as PromiseStatus | '',
      keyword: '',
      isDialogOpenInMobile: false,
    };
  },
  watch: {
    value(newFilters: Filter[]) {
      this.selectedParty = '';
      this.selectedTopic = '';
      this.selectedStatus = '';
      this.keyword = '';

      newFilters.forEach(this.updateInputFromFilter);
    },
  },
  methods: {
    apply() {
      const filters = [
        {
          type: FilterType.Party,
          value: this.selectedParty,
        },
        {
          type: FilterType.Topic,
          value: this.selectedTopic,
        },
        {
          type: FilterType.Status,
          value: this.selectedStatus,
        },
        {
          type: FilterType.Keyword,
          value: this.keyword,
        },
      ].filter(({ value }) => value) as Filter[];

      this.$emit('input', filters);
      this.isDialogOpenInMobile = false;
    },
    reset() {
      this.selectedParty = '';
      this.selectedTopic = '';
      this.selectedStatus = '';
      this.keyword = '';

      this.$emit('input', []);
      this.isDialogOpenInMobile = false;
    },
    updateInputFromFilter({ type, value }: Filter) {
      switch (type) {
        case FilterType.Party:
          this.selectedParty = value;
          break;
        case FilterType.Status:
          this.selectedStatus = value as PromiseStatus;
          break;
        case FilterType.Topic:
          this.selectedTopic = value as PromiseLawsTopic;
          break;
        case FilterType.Keyword:
          this.keyword = value;
      }
    },
  },
});
</script>
