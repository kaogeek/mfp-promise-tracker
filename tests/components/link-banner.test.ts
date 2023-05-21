import { mount } from '@vue/test-utils';
import LinkBanner from '@/components/link-banner.vue';

describe('Theme handling', () => {
  test('renders transparent-gray', () => {
    const expectedClasses = ['bg-gray', 'bg-opacity-10', 'text-white'];
    const wrapper = mount(LinkBanner, {
      propsData: { theme: 'transparent-gray' },
    });
    const theme = wrapper.get('[data-testid="theme"]');
    expect(theme.classes()).toEqual(expect.arrayContaining(expectedClasses));
  });

  test('renders ultramarine', () => {
    const expectedClasses = ['bg-status-proposed', 'text-white'];
    const wrapper = mount(LinkBanner, {
      propsData: { theme: 'ultramarine' },
    });
    const theme = wrapper.get('[data-testid="theme"]');
    expect(theme.classes()).toEqual(expect.arrayContaining(expectedClasses));
  });
});

describe('Props handling', () => {
  test('renders icon on passed prop', () => {
    const wrapper = mount(LinkBanner, {
      propsData: { iconImage: 'topic/culture_small.png' },
    });
    const image = wrapper.find('img');
    expect(image.exists()).toBe(true);
  });

  test('do not render icon on empty prop', () => {
    const wrapper = mount(LinkBanner);
    const image = wrapper.find('img');
    expect(image.exists()).toBe(false);
  });

  test('renders title text', () => {
    const titleText = 'PROMISE TRACKER';
    const wrapper = mount(LinkBanner, {
      propsData: {
        titleText,
      },
    });
    const heading = wrapper.find('h1');
    expect(heading.text()).toContain(titleText);
  });

  test('renders body text', () => {
    const bodyText =
      'สำรวจคำสัญญาของพรรคการเมืองที่ผ่านมารักษาคำสัญญาได้แค่ไหน ?';
    const wrapper = mount(LinkBanner, {
      propsData: {
        bodyText,
      },
    });
    const body = wrapper.find('p');
    expect(body.text()).toContain(bodyText);
  });

  test('renders button text', () => {
    const buttonText = 'อ่านต่อ';
    const wrapper = mount(LinkBanner, {
      propsData: {
        buttonText,
      },
    });
    const button = wrapper.find('button');
    expect(button.text()).toContain(buttonText);
  });
});
