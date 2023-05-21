import { mount } from '@vue/test-utils';
import TabNavigation from '@/components/explore/promise-overview/tab-navigation.vue';
import { Filter, FilterType } from '@/models/filter';
import { PromiseStatus, PromiseTopic } from '@/models/promise';

const keywordFilter: Filter = {
  type: FilterType.Keyword,
  value: '',
};

const partyFilter: Filter = {
  type: FilterType.Party,
  value: '',
};

const statusFilter: Filter = {
  type: FilterType.Status,
  value: PromiseStatus.NoData,
};

const topicFilter: Filter = {
  type: FilterType.Topic,
  value: PromiseTopic.Welfare,
};

const filterTestCases: [Filter[], string[]][] = [
  [[], ['ดูตามสถานะ', 'ดูตามพรรค', 'ดูตามประเด็น']],
  [[keywordFilter], ['ดูตามสถานะ', 'ดูตามพรรค', 'ดูตามประเด็น']],
  [[partyFilter], ['ดูตามสถานะ', 'ดูตามประเด็น']],
  [[statusFilter], ['ดูตามพรรค', 'ดูตามประเด็น']],
  [[topicFilter], ['ดูตามสถานะ', 'ดูตามพรรค']],
  [[statusFilter, partyFilter], ['ดูตามประเด็น']],
  [[statusFilter, topicFilter], ['ดูตามพรรค']],
  [[partyFilter, topicFilter], ['ดูตามสถานะ']],
  [[partyFilter, topicFilter, statusFilter], []],
];

describe('should render buttons which are not in the filters', () => {
  test.each(filterTestCases)(
    '%p -> %p',
    (filters: Filter[], expectedButtonTexts: string[]) => {
      const wrapper = mount(TabNavigation, {
        propsData: { filters },
      });

      const buttons = wrapper.findAll('button');

      expectedButtonTexts.forEach((text, index) =>
        expect(buttons.at(index).text()).toBe(text)
      );
    }
  );
});

test('active button should have ultramarine color, the rest are black', () => {
  const wrapper = mount(TabNavigation, {
    propsData: { filters: filterTestCases[0], activeTab: FilterType.Party },
  });

  const buttons = wrapper.findAll('button');

  expect(buttons.at(0).classes()).toContain('bg-black');
  expect(buttons.at(1).classes()).toContain('bg-status-proposed');
  expect(buttons.at(2).classes()).toContain('bg-black');
});

test('should fire change event when button is clicked', () => {
  const wrapper = mount(TabNavigation, {
    propsData: { filters: filterTestCases[0] },
  });

  const button = wrapper.find('button');

  button.trigger('click');

  expect(wrapper.emitted().change).toBeTruthy();
  expect(wrapper.emitted().change?.[0][0]).toBe(FilterType.Status);
});
