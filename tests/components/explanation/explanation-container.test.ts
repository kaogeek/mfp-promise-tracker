import { mount } from '@vue/test-utils';
import ExplanationContainer from '@/components/explanation/explanation-container.vue';

test('renders title', () => {
  const titleText = 'test title text';
  const wrapper = mount(ExplanationContainer, {
    propsData: { title: titleText },
  });
  const title = wrapper.find('h1');
  expect(title.text()).toBe(titleText);
});

test('renders slot content', () => {
  const slotContent = '<p>test slot test</p>';
  const wrapper = mount(ExplanationContainer, {
    propsData: { title: 'test title text' },
    slots: { default: slotContent },
  });
  expect(wrapper.html()).toContain(slotContent);
});
