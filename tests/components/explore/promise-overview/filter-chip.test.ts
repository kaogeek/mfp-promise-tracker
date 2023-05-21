import { mount } from '@vue/test-utils';
import FilterChip from '@/components/explore/promise-overview/filter-chip.vue';
import { Filter, FilterType } from '@/models/filter';
import {
  PromiseStatus,
  promiseStatusTextMap,
  PromiseTopic,
  promiseTopicTextMap,
} from '@/models/promise';

const filterTestCases: [Filter, string][] = [
  [
    {
      type: FilterType.Party,
      value: 'พลังประชารัฐ',
    },
    'พลังประชารัฐ',
  ],
  [
    {
      type: FilterType.Status,
      value: PromiseStatus.NoData,
    },
    `สถานะ: ${promiseStatusTextMap.get(PromiseStatus.NoData)}`,
  ],
  [
    {
      type: FilterType.Keyword,
      value: 'รถเมล์',
    },
    'คำค้นหา: รถเมล์',
  ],
  [
    {
      type: FilterType.Topic,
      value: PromiseTopic.Environmental,
    },
    `ประเด็น${promiseTopicTextMap.get(PromiseTopic.Environmental)?.short}`,
  ],
];

describe('should render correct text content for each filter type', () => {
  test.each(filterTestCases)(
    '%p -> %s',
    (filter: Filter, expectedText: string) => {
      const wrapper = mount(FilterChip, { propsData: { filter } });

      expect(wrapper.text()).toBe(expectedText);
    }
  );
});

test('should emit remove event when remove button is click', () => {
  const wrapper = mount(FilterChip, {
    propsData: { filter: filterTestCases[0][0] },
  });

  const button = wrapper.get('button');
  button.trigger('click');

  expect(wrapper.emitted().remove).toBeTruthy();
});
