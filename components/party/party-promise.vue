<template>
  <div
    class="grid grid-cols-6 gap-4 p-4 sm:p-6 max-w-4xl bg-gray bg-opacity-10 rounded-xl"
  >
    <div class="col-span-6 sm:col-span-2">
      <h5 class="wv-h5 wv-font-kondolar wv-font-bold">สำรวจสถานะ</h5>
      <h5 class="wv-h5 wv-font-kondolar wv-font-bold pb-6">300 นโยบาย</h5>
      <StatusLegend class="text-white" :show-detail="false" />
    </div>
    <div class="col-span-6 sm:col-span-4">
      <div class="flex flex-col gap-6">
        <div
          v-for="{ name, parties } in partySides"
          :key="name"
          class="flex flex-col gap-4"
        >
          <!-- <span class="wv-h8 wv-font-kondolar wv-font-bold">
            {{ name }} {{ parties.length }} พรรค
          </span> -->
          <div class="flex flex-col gap-1">
            <PartyCard
              v-for="{ label, icon, data } in parties"
              :key="label"
              :party-logo="icon"
              :party-name="label"
              :party-promises="data"
              :button-url="`explore?party=${label}`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PartyCard from '~/components/party/party-card.vue';
import StatusLegend from '@/components/explanation/status-legend.vue';
import { groupPromisesBy } from '@/components/explore/promise-overview/promises-aggregator';
import promises from '@/data/promises.json';
import parties from '@/data/parties.json';
import { FilterType } from '@/models/filter';

const [governmentParties, oppositionParties] = groupPromisesBy(
  FilterType.Party,
  promises,
  50
).charts.reduce(
  ([govParties, oppParties], party) =>
    parties.find(({ name }) => name === party.label)?.side === 'government'
      ? [[...govParties, party], oppParties]
      : [govParties, [...oppParties, party]],
  [[], []]
);

export default {
  name: 'PartyPromise',
  components: {
    PartyCard,
    StatusLegend,
  },
  data() {
    return {
      partySides: [
        { name: 'ฝ่ายรัฐบาล', parties: governmentParties },
        { name: 'ฝ่ายค้าน', parties: oppositionParties },
      ],
    };
  },
};
</script>
