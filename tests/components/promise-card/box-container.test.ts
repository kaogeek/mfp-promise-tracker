import { mount } from '@vue/test-utils';
import BoxContainer from '@/components/promise-card/box-container.vue';

describe('BoxContainer', () => {
  test('should render slot', () => {
    const slotContent = '<p>test slot test</p>';
    const wrapper = mount(BoxContainer, { slots: { default: slotContent } });

    const container = wrapper.find('div');

    expect(container.html()).toContain(slotContent);
  });
});
