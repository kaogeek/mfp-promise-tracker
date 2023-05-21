import { mount } from '@vue/test-utils';
import Button from '@/components/button.vue';

test('should render slot', () => {
  const SLOT_TEXT = 'Test Button';
  const wrapper = mount(Button, { slots: { default: SLOT_TEXT } });

  const button = wrapper.getComponent({ name: 'button' });

  expect(button.text()).toBe(SLOT_TEXT);
});

test('should emit event on click', () => {
  const wrapper = mount(Button);
  const button = wrapper.getComponent({ name: 'button' });
  button.trigger('click');
  expect(wrapper.emitted('click')).toBeTruthy();
});

describe('should render correct theme from given prop', () => {
  test('primary-blue', () => {
    const EXPECTED_CLASS = [
      'border-ultramarine',
      'text-ultramarine',
      'bg-white',
      'hover:border-white',
      'hover:text-white',
      'hover:bg-status-proposed',
    ];

    const wrapper = mount(Button, { propsData: { theme: 'primary-blue' } });

    const button = wrapper.getComponent({ name: 'button' });

    expect(button.classes()).toEqual(expect.arrayContaining(EXPECTED_CLASS));
  });

  test('primary-white', () => {
    const EXPECTED_CLASS = [
      'border-white',
      'text-white',
      'bg-status-proposed',
      'hover:border-ultramarine',
      'hover:text-ultramarine',
      'hover:bg-white',
    ];

    const wrapper = mount(Button, { propsData: { theme: 'primary-white' } });

    const button = wrapper.getComponent({ name: 'button' });

    expect(button.classes()).toEqual(expect.arrayContaining(EXPECTED_CLASS));
  });

  test('secondary-white', () => {
    const EXPECTED_CLASS = [
      'border-white',
      'text-white',
      'bg-transparent',
      'hover:border-ultramarine',
      'hover:text-ultramarine',
      'hover:bg-white',
    ];

    const wrapper = mount(Button, { propsData: { theme: 'secondary-white' } });

    const button = wrapper.getComponent({ name: 'button' });

    expect(button.classes()).toEqual(expect.arrayContaining(EXPECTED_CLASS));
  });

  test('secondary-blue', () => {
    const EXPECTED_CLASS = [
      'border-ultramarine',
      'text-ultramarine',
      'bg-transparent',
      'hover:border-white',
      'hover:text-white',
      'hover:bg-status-proposed',
    ];

    const wrapper = mount(Button, { propsData: { theme: 'secondary-blue' } });

    const button = wrapper.getComponent({ name: 'button' });

    expect(button.classes()).toEqual(expect.arrayContaining(EXPECTED_CLASS));
  });
});
