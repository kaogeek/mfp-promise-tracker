import { mount } from '@vue/test-utils';
import StatusLegend from '@/components/explanation/status-legend.vue';

describe('Inline handling', () => {
  test('renders column wise', () => {
    const wrapper = mount(StatusLegend, {
      propsData: { showInline: false },
    });
    const container = wrapper.find('[data-testid="status-legend-container"]');
    expect(container.classes()).toEqual([]);
  });
  test('renders inline', () => {
    const wrapper = mount(StatusLegend, {
      propsData: { showInline: true },
    });
    const container = wrapper.find('[data-testid="status-legend-container"]');
    expect(container.classes()).toEqual(['flex']);
  });
});

describe('Details handling', () => {
  test('renders details', () => {
    const wrapper = mount(StatusLegend, {
      propsData: { showDetail: true },
    });
    const detail = wrapper.find('p');
    expect(detail.exists()).toBe(true);
  });
  test('does not render details', () => {
    const wrapper = mount(StatusLegend, {
      propsData: { showDetail: false },
    });
    const detail = wrapper.find('p');
    expect(detail.exists()).toBe(false);
  });
});

describe('Style handling', () => {
  test('show only selected legend', () => {
    const expectedClasses: [] = [];
    const wrapper = mount(StatusLegend, {
      propsData: { showOnly: 'ไม่พบความเคลื่อนไหว' },
    });
    const text = wrapper.find('[data-testid="status-legend-text"]');
    expect(text.classes()).toEqual(expect.arrayContaining(expectedClasses));
  });
  test('show detail', () => {
    const expectedClasses = ['mr-2', 'w-32', 'mb-2'];
    const wrapper = mount(StatusLegend, {
      propsData: { showDetail: true },
    });
    const text = wrapper.find('[data-testid="status-legend-text"]');
    expect(text.classes()).toEqual(expect.arrayContaining(expectedClasses));
  });
  test('show inline without detail', () => {
    const expectedClasses = ['mr-2'];
    const wrapper = mount(StatusLegend, {
      propsData: { showDetail: false, showInline: true },
    });
    const text = wrapper.find('[data-testid="status-legend-text"]');
    expect(text.classes()).toEqual(expect.arrayContaining(expectedClasses));
  });
  test('no inline, no detail', () => {
    const expectedClasses = ['w-32'];
    const wrapper = mount(StatusLegend, {
      propsData: { showInline: true },
    });
    const text = wrapper.find('[data-testid="status-legend-text"]');
    expect(text.classes()).toEqual(expect.arrayContaining(expectedClasses));
  });
});

describe('Selection handling', () => {
  const expectedText = [
    { id: 0, text: 'ไม่พบความเคลื่อนไหว' },
    { id: 1, text: 'นำเข้า ครม.' },
    { id: 2, text: 'ถูกระงับ' },
    { id: 3, text: 'กำลังดำเนินการ' },
    { id: 4, text: 'สำเร็จ' },
  ];

  test.each(expectedText)('should render "$text"', ({ id, text }) => {
    const wrapper = mount(StatusLegend, {
      propsData: { showDetail: false },
    });

    const spans = wrapper.findAll('[data-testid="status-legend-text"]');

    expect(spans.at(id).text()).toEqual(text);
  });

  test('selects one', () => {
    const expectedText = ['ไม่พบความเคลื่อนไหว'];
    const wrapper = mount(StatusLegend, {
      propsData: { showDetail: false, showOnly: 'ไม่พบความเคลื่อนไหว' },
    });
    const spans = wrapper.findAll('[data-testid="status-legend-text"]');
    expect(spans.length).toEqual(expectedText.length);
    expect(spans.at(0).text()).toBe(expectedText[0]);
  });
});
