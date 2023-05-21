import { mount } from '@vue/test-utils';
import FormLink from '@/components/form-link.vue';
import Button from '@/components/button.vue';

describe('Form link', () => {
  test('should trigger a form click', async () => {
    const wrapper = mount(FormLink);

    const button = wrapper.findComponent(Button);
    await button.trigger('click');

    expect(wrapper.emitted('tagClicked')).toBeTruthy();
  });
});
