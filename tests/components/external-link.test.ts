import { mount } from '@vue/test-utils';
import ExternalLink from '@/components/external-link.vue';

describe('External Link', () => {
  test('should contain passed url', () => {
    const URL = 'www.google.com';
    const wrapper = mount(ExternalLink, {
      propsData: {
        url: URL,
      },
    });

    const a = wrapper.find('a');

    expect(a.attributes('href')).toEqual(URL);
  });

  test('should render slot', () => {
    const SLOT_TEXT = 'Test Button';
    const wrapper = mount(ExternalLink, { slots: { default: SLOT_TEXT } });

    const a = wrapper.find('a');

    expect(a.text()).toBe(SLOT_TEXT);
  });
});
