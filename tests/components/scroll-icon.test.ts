import { mount } from '@vue/test-utils';
import ScrollIcon from '@/components/scroll-icon.vue';

describe('ScrollIcon', () => {
  test('should render slot', () => {
    const SLOT_TEXT = 'scroll down';
    const wrapper = mount(ScrollIcon, {
      slots: {
        default: SLOT_TEXT,
      },
    });

    expect(wrapper.text()).toEqual(SLOT_TEXT);
  });
});
