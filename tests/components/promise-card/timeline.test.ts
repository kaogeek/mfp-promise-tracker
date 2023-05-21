import { mount } from '@vue/test-utils';
import Timeline from '@/components/promise-card/timeline.vue';
import { PromiseTimeline } from '@/models/promise';
import BoxContainer from '@/components/promise-card/box-container.vue';
import TimelineArrow from '@/components/promise-card/timeline-arrow.vue';

describe('Timeline', () => {
  test('should have ultramarine container', () => {
    const EXPECTED_CLASSES = ['bg-status-proposed', 'text-white'];
    const wrapper = mount(Timeline, {
      propsData: {
        timeline: {
          label: 'หาเสียงประกาศนโยบาย',
          from: '2019-01',
        },
      },
    });

    const box = wrapper.findComponent(BoxContainer);

    expect(box.classes()).toEqual(expect.arrayContaining(EXPECTED_CLASSES));
  });

  test('should have default props', () => {
    const wrapper = mount(Timeline);

    expect(wrapper.props().timeline.label).toBe('');
    expect(wrapper.props().timeline.from).toBe('');
  });

  test('should render partial from date', () => {
    const wrapper = mount(Timeline, {
      propsData: {
        timeline: {
          label: 'หาเสียงประกาศนโยบาย',
          from: '2019-01',
        },
      },
    });

    const p = wrapper.findAll('p');

    expect(p.at(0).text()).toEqual('มกราคม 2562');
  });

  test('should render full from date', () => {
    const wrapper = mount(Timeline, {
      propsData: {
        timeline: {
          label: 'หาเสียงประกาศนโยบาย',
          from: '2019-03-01',
        },
      },
    });

    const p = wrapper.findAll('p');

    expect(p.at(0).text()).toEqual('1 มีนาคม 2562');
  });

  test('should render partial from-to date', () => {
    const wrapper = mount(Timeline, {
      propsData: {
        timeline: {
          label: 'หาเสียงประกาศนโยบาย',
          from: '2019-04',
          to: '2020-01',
        },
      },
    });

    const p = wrapper.findAll('p');

    expect(p.at(0).text()).toEqual('เมษายน 2562 - มกราคม 2563');
  });

  test('should render full from-to date', () => {
    const wrapper = mount(Timeline, {
      propsData: {
        timeline: {
          label: 'หาเสียงประกาศนโยบาย',
          from: '2019-05-10',
          to: '2019-08-02',
        },
      },
    });

    const p = wrapper.findAll('p');

    expect(p.at(0).text()).toEqual('10 พฤษภาคม 2562 - 2 สิงหาคม 2562');
  });

  const invalidDates: PromiseTimeline[] = [
    { label: 'timeline-1', from: '' },
    { label: 'timeline-2', from: '2019' },
    { label: 'timeline-3', from: '2019-02-01-03' },
  ];

  test.each(invalidDates)('should not render date = "$from"', (timeline) => {
    const wrapper = mount(Timeline, {
      propsData: {
        timeline,
      },
    });

    const p = wrapper.findAll('p');

    expect(p.at(0).text()).toEqual('');
  });

  test('should render label', () => {
    const timeline = {
      label: 'หาเสียงประกาศนโยบาย',
      from: '2019-05-10',
    };
    const wrapper = mount(Timeline, {
      propsData: {
        timeline,
      },
    });

    const p = wrapper.findAll('p');

    expect(p.at(1).text()).toEqual(timeline.label);
  });

  test('should render arrow', () => {
    const timeline = {
      label: 'timeline',
      from: '2019-05-10',
    };
    const wrapper = mount(Timeline, {
      propsData: {
        timeline,
        isLastItem: false,
      },
    });

    const arrow = wrapper.findComponent(TimelineArrow);

    expect(arrow.exists()).toBeTruthy();
  });

  test('should not render arrow', () => {
    const timeline = {
      label: 'timeline',
      from: '2019-05-10',
    };
    const wrapper = mount(Timeline, {
      propsData: {
        timeline,
        isLastItem: true,
      },
    });

    const arrow = wrapper.findComponent(TimelineArrow);

    expect(arrow.exists()).toBeFalsy();
  });
});
