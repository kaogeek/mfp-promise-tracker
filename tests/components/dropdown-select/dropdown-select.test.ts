import { mount } from '@vue/test-utils';
import DropdownSelect from '@/components/dropdown-select/dropdown-select.vue';
import DropdownItem from '@/components/dropdown-select/dropdown-item.vue';

describe('non-selecting state', () => {
  test('should have white background with black text', () => {
    const wrapper = mount(DropdownSelect, {
      propsData: {
        options: [{ label: 'party1' }],
      },
    });

    expect(wrapper.find('#select-box').classes()).toContain('bg-white');
  });

  test('should NOT show items', () => {
    const wrapper = mount(DropdownSelect, {
      propsData: {
        options: [{ label: 'party1' }],
      },
    });

    const item = wrapper.findComponent(DropdownItem);

    expect(item.exists()).toBe(false);
  });

  test('should show placeholder', () => {
    const PLACEHOLDER = 'select party';
    const wrapper = mount(DropdownSelect, {
      propsData: {
        options: [{ label: 'party1' }],
        placeholder: PLACEHOLDER,
      },
    });

    expect(wrapper.html()).toContain(PLACEHOLDER);
  });
});

describe('selecting state', () => {
  test('should have transparent background with white text', async () => {
    const wrapper = mount(DropdownSelect, {
      propsData: {
        options: [{ label: 'party1' }],
      },
    });

    const selectBox = wrapper.find('#select-box');
    await selectBox.trigger('click');

    expect(selectBox.classes()).toContain('bg-transparent');
  });

  test('should show items with default option', async () => {
    const OPTIONS = [{ label: 'party1' }, { label: 'party2' }];
    const wrapper = mount(DropdownSelect, {
      propsData: {
        options: OPTIONS,
      },
    });

    await wrapper.find('#select-box').trigger('click');

    const items = wrapper.findAllComponents(DropdownItem);
    expect(items.length).toBe(OPTIONS.length + 1);
  });

  test('should show selecting placeholder instead of normal placeholder', async () => {
    const PLACEHOLDER = 'select party';
    const SELECTING_PLACEHOLDER = 'select one from the list';
    const wrapper = mount(DropdownSelect, {
      propsData: {
        options: [{ label: 'party1' }],
        placeholder: PLACEHOLDER,
        placeholderSelecting: SELECTING_PLACEHOLDER,
      },
    });

    await wrapper.find('#select-box').trigger('click');

    expect(wrapper.html()).toContain(SELECTING_PLACEHOLDER);
  });
});

describe('selected state', () => {
  test('should show selected item', async () => {
    const SELECTED_OPTION = {
      label: 'party1',
      iconUrl: '/party/party1.jpg',
    };
    const wrapper = mount(DropdownSelect, {
      propsData: {
        options: [SELECTED_OPTION],
        selected: SELECTED_OPTION.label,
      },
    });

    await wrapper.find('#select-box').trigger('click');

    expect(wrapper.html()).toContain(SELECTED_OPTION.label);
    expect(wrapper.find('img').attributes('src')).toContain(
      SELECTED_OPTION.iconUrl
    );
  });
});

test('should emit input event when select on selectable item', async () => {
  const OPTION = { label: 'party1', value: 'p1' };
  const wrapper = mount(DropdownSelect, {
    propsData: {
      options: [OPTION],
    },
  });

  await wrapper.find('#select-box').trigger('click');
  await wrapper.findAllComponents(DropdownItem).at(1).trigger('click');

  expect(wrapper.emitted().input![0]).toEqual([OPTION.value]);
});

test('should NOT display items when select on item', async () => {
  const OPTION = { label: 'party1' };
  const wrapper = mount(DropdownSelect, {
    propsData: {
      options: [OPTION],
    },
  });

  await wrapper.find('#select-box').trigger('click');
  await wrapper.findComponent(DropdownItem).trigger('click');

  expect(wrapper.findComponent(DropdownItem).exists()).toBe(false);
});
