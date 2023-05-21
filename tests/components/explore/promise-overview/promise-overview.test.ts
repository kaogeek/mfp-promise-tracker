import { mount } from '@vue/test-utils';
import PromiseOverview from '@/components/explore/promise-overview/promise-overview.vue';
import ChartItem from '@/components/explore/promise-overview/chart-item.vue';
import TabNavigation from '@/components/explore/promise-overview/tab-navigation.vue';
import ActiveFilters from '@/components/explore/promise-overview/active-filters.vue';

import {
  TrackingPromise,
  PromiseStatus,
  PromiseTopic,
  promiseStatusTextMap,
  promiseTopicTextMap,
} from '@/models/promise';
import { FilterType } from '~/models/filter';

const promises: Partial<TrackingPromise>[] = [
  {
    party: 'พลังไทยรักไทย',
    topic: PromiseTopic.Economics,
    status: PromiseStatus.Done,
  },
  {
    party: 'พลังไทยรักไทย',
    topic: PromiseTopic.Environmental,
    status: PromiseStatus.Done,
  },
  {
    party: 'เพื่อไทย',
    topic: PromiseTopic.Welfare,
    status: PromiseStatus.Done,
  },
  {
    party: 'อนาคตใหม่',
    topic: PromiseTopic.Economics,
    status: PromiseStatus.NoData,
  },
  {
    party: 'อนาคตใหม่',
    topic: PromiseTopic.Environmental,
    status: PromiseStatus.Paused,
  },
  {
    party: 'ประชาธิปัติ',
    topic: PromiseTopic.Welfare,
    status: PromiseStatus.Working,
  },
  {
    party: 'พลังประชารัฐ',
    topic: PromiseTopic.Welfare,
    status: PromiseStatus.Proposed,
  },
  {
    party: 'ชาติไทยพัฒนา',
    topic: PromiseTopic.Welfare,
    status: PromiseStatus.NoData,
  },
];

test('should open status tab by default', () => {
  const wrapper = mount(PromiseOverview, { propsData: { promises } });

  const firstChart = wrapper.getComponent(ChartItem);

  expect(firstChart.text()).toContain(
    promiseStatusTextMap.get(PromiseStatus.NoData) as string
  );
});

test('should change tab when navigation is clicked', async () => {
  const wrapper = mount(PromiseOverview, { propsData: { promises } });

  const tabButtons = wrapper.findComponent(TabNavigation).findAll('button');

  await tabButtons.at(1).trigger('click');

  expect(wrapper.getComponent(ChartItem).text()).toContain('พลังไทยรักไทย');

  await tabButtons.at(2).trigger('click');

  expect(wrapper.getComponent(ChartItem).text()).toContain(
    promiseTopicTextMap.get(PromiseTopic.Welfare)?.short as string
  );
});

test('should emit removefilter event with filter detail when filterchip emit remove', () => {
  const filters = [
    {
      type: FilterType.Party,
      value: 'พลังประชารัฐ',
    },
    {
      type: FilterType.Status,
      value: PromiseStatus.NoData,
    },
  ];

  const wrapper = mount(PromiseOverview, { propsData: { promises, filters } });

  wrapper.findComponent(ActiveFilters).vm.$emit('removefilter', filters[0]);

  expect(wrapper.emitted().removefilter).toBeTruthy();
  expect(wrapper.emitted().removefilter?.[0][0]).toEqual(filters[0]);
});
