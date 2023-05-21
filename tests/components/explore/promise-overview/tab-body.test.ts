import { mount } from '@vue/test-utils';
import TabBody from '@/components/explore/promise-overview/tab-body.vue';
import ChartItem from '@/components/explore/promise-overview/chart-item.vue';
import { TrackingPromise, PromiseStatus, PromiseTopic } from '@/models/promise';
import { FilterType } from '@/models/filter';
import { groupPromisesBy } from '~/components/explore/promise-overview/promises-aggregator';

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

test('should render chart item based on promise aggregator', () => {
  const wrapper = mount(TabBody, {
    propsData: { promises, groupBy: FilterType.Topic },
  });

  const { charts } = groupPromisesBy(
    FilterType.Topic,
    promises as TrackingPromise[]
  );

  expect(wrapper.findAllComponents(ChartItem).length).toEqual(charts.length);
});
