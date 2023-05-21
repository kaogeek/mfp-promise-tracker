import { mount, config } from '@vue/test-utils';
import ChartItem from '@/components/explore/promise-overview/chart-item.vue';
import { PromiseStatus } from '@/models/promise';

const data = [
  { status: PromiseStatus.NoData, count: 10 },
  { status: PromiseStatus.Proposed, count: 5 },
];

const max = 30;

test('should render given label and data count as a text', () => {
  const label = 'ไม่พบความเคลื่อนไหว';
  const wrapper = mount(ChartItem, { propsData: { label, data } });

  expect(wrapper.find('p').text()).toBe(`${label} (15)`);
});

test('should render given icon', () => {
  const icon = 'test.png';
  const wrapper = mount(ChartItem, { propsData: { data, icon } });

  expect(wrapper.find('img').attributes('src')).toBe(
    `${config.mocks.$config.path.images}/${icon}`
  );
});

test('should render corrected total bar width from given data and max', () => {
  const wrapper = mount(ChartItem, { propsData: { data, max } });

  expect(wrapper.getComponent({ ref: 'barchart' }).attributes('style')).toBe(
    `width: 50%;`
  );
});

test('should render corrected subbar width from given data and max', () => {
  const wrapper = mount(ChartItem, { propsData: { data, max } });

  const subbars = wrapper.getComponent({ ref: 'barchart' }).findAll('div');

  expect(subbars.length).toBe(3);
  expect(subbars.at(1).attributes('style')).toBe(`width: 67%;`);
  expect(subbars.at(2).attributes('style')).toBe(`width: 33%;`);
});

test('should render corrected subbar color from given data and max', () => {
  const wrapper = mount(ChartItem, { propsData: { data, max } });

  const subbars = wrapper.getComponent({ ref: 'barchart' }).findAll('div');

  expect(subbars.at(1).classes()).toContain('bg-status-nodata');
  expect(subbars.at(2).classes()).toContain('bg-status-proposed');
});

test('should render overall percentage from given data as a text', () => {
  const total = 60;

  const wrapper = mount(ChartItem, { propsData: { data, total } });

  expect(wrapper.find('span').text()).toBe('25%');
});

test('should render overall percentage with decimal point if exist from given data as a text', () => {
  const total = 45;

  const wrapper = mount(ChartItem, { propsData: { data, total } });

  expect(wrapper.find('span').text()).toBe('33.3%');
});
