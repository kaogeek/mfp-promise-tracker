import { mount } from '@vue/test-utils';
import ActiveFilters from '@/components/explore/promise-overview/active-filters.vue';
import FilterChip from '@/components/explore/promise-overview/filter-chip.vue';
import promises from '@/data/promises-example.json';
import { FilterType } from '@/models/filter';
import { PromiseStatus, PromiseTopic } from '@/models/promise';

test('should render ไม่พบคำสัญญาที่คุณค้นหา text if promises is empty', () => {
  const wrapper = mount(ActiveFilters, { propsData: { promises: [] } });

  expect(wrapper.text()).toBe('ไม่พบคำสัญญาที่คุณค้นหา');
});

test('should render promises count', () => {
  const wrapper = mount(ActiveFilters, { propsData: { promises } });

  const countLabel = wrapper.getComponent({ ref: 'countLabel' });

  expect(countLabel.text()).toBe(`${promises.length} คำสัญญา`);
});

test('should render FilterChip from given filters', () => {
  const filters = [
    {
      type: FilterType.Party,
      value: 'พลังประชารัฐ',
    },
    {
      type: FilterType.Keyword,
      value: 'รถเมล์',
    },
  ];

  const wrapper = mount(ActiveFilters, { propsData: { promises, filters } });

  const filterChips = wrapper.findAllComponents(FilterChip);

  expect(filterChips.length).toBe(filters.length);
  expect(wrapper.text().includes('จากทุกพรรค ในทุกประเด็น')).toBeFalsy();
});

test('should render images from given filters, except keyword', () => {
  const filters = [
    {
      type: FilterType.Party,
      value: 'พลังประชารัฐ',
    },
    {
      type: FilterType.Status,
      value: PromiseStatus.NoData,
    },
    {
      type: FilterType.Topic,
      value: PromiseTopic.Environmental,
    },
    {
      type: FilterType.Keyword,
      value: 'รถเมล์',
    },
  ];

  const wrapper = mount(ActiveFilters, { propsData: { promises, filters } });

  const images = wrapper.findAll('.active-image');

  expect(images.length).toBe(filters.length - 1);
});

test('should render จากทุกพรรค ในทุกประเด็น text if filters is empty', () => {
  const wrapper = mount(ActiveFilters, {
    propsData: { promises, filters: [] },
  });

  const filterChips = wrapper.findAllComponents(FilterChip);

  expect(filterChips.length).toBe(0);
  expect(wrapper.text().includes('จากทุกพรรค ในทุกประเด็น')).toBeTruthy();
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

  const wrapper = mount(ActiveFilters, { propsData: { promises, filters } });

  const firstFilterChip = wrapper.findComponent(FilterChip);

  firstFilterChip.get('button').trigger('click');

  expect(wrapper.emitted().removefilter).toBeTruthy();
  expect(wrapper.emitted().removefilter?.[0][0]).toEqual(filters[0]);
});
