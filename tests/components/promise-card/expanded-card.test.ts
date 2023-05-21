import { mount } from '@vue/test-utils';
import ExpandedCard from '@/components/promise-card/expanded-card.vue';
import NCPO from '@/components/promise-card/ncpo.vue';
import Link from '@/components/promise-card/link.vue';
import Timeline from '@/components/promise-card/timeline.vue';

describe('Expanded Card', () => {
  const promise = {
    id: 1,
    description: 'เป็นโครงการที่ต่อยอดจากโครงการสำคัญของรัฐบาลพลเอกประยุทธ์',
    links: [],
    timelines: [],
  };

  test('should have default props', () => {
    const wrapper = mount(ExpandedCard);

    expect(wrapper.props().promise).toEqual({});
  });

  test('should be collasped', () => {
    const wrapper = mount(ExpandedCard, {
      propsData: {
        promise,
        expanded: false,
      },
    });

    const card = wrapper.find(`#expanded-card-${promise.id}`);

    expect(card.exists()).toBeFalsy();
  });

  test('should be expanded', () => {
    const wrapper = mount(ExpandedCard, {
      propsData: {
        promise,
        expanded: true,
      },
    });

    const card = wrapper.find(`#expanded-card-${promise.id}`);

    expect(card.exists()).toBeTruthy();
  });

  test('should render description', () => {
    const wrapper = mount(ExpandedCard, {
      propsData: {
        promise,
        expanded: true,
      },
    });

    const description = wrapper.find(
      `#expanded-card-${promise.id}-description`
    );

    expect(description.text()).toEqual(promise.description);
  });

  test('should not render NCPO', () => {
    const promise = {
      id: 1,
      description: 'เป็นโครงการที่ต่อยอดจากโครงการสำคัญของรัฐบาลพลเอกประยุทธ์',
      isNCPO: false,
      links: [],
      timelines: [],
    };
    const wrapper = mount(ExpandedCard, {
      propsData: {
        promise,
        expanded: true,
      },
    });

    const ncpo = wrapper.findComponent(NCPO);

    expect(ncpo.exists()).toBeFalsy();
  });

  test('should render NCPO', () => {
    const promise = {
      id: 1,
      description: 'เป็นโครงการที่ต่อยอดจากโครงการสำคัญของรัฐบาลพลเอกประยุทธ์',
      isNCPO: true,
      links: [],
      timelines: [],
    };
    const wrapper = mount(ExpandedCard, {
      propsData: {
        promise,
        expanded: true,
      },
    });

    const ncpo = wrapper.findComponent(NCPO);

    expect(ncpo.exists()).toBeTruthy();
  });

  test('should render links', () => {
    const promise = {
      id: 1,
      description: 'เป็นโครงการที่ต่อยอดจากโครงการสำคัญของรัฐบาลพลเอกประยุทธ์',
      isNCPO: true,
      links: [
        {
          name: 'link-1',
          url: 'https://link-1.com',
        },
        {
          name: 'link-2',
          url: 'https://link-2.com',
        },
      ],
      timelines: [],
    };
    const wrapper = mount(ExpandedCard, {
      propsData: {
        promise,
        expanded: true,
      },
    });

    const links = wrapper.findAllComponents(Link);

    expect(links.length).toEqual(promise.links.length);
  });

  test('should not render timeline', () => {
    const promise = {
      id: 1,
      description: 'เป็นโครงการที่ต่อยอดจากโครงการสำคัญของรัฐบาลพลเอกประยุทธ์',
      isNCPO: true,
      links: [],
      timelines: [],
    };
    const wrapper = mount(ExpandedCard, {
      propsData: {
        promise,
        expanded: true,
      },
    });

    const timeline = wrapper.findAllComponents(Timeline);
    const timelineText = wrapper.find('.timeline');

    expect(timeline.exists()).toBeFalsy();
    expect(timelineText.exists()).toBeFalsy();
  });

  test('should render timelines', () => {
    const promise = {
      id: 1,
      description: 'เป็นโครงการที่ต่อยอดจากโครงการสำคัญของรัฐบาลพลเอกประยุทธ์',
      isNCPO: true,
      links: [],
      timelines: [
        {
          label: 'เปิดโอกาสให้ผู้มีรายได้น้อยลงทะเบียน ',
          from: '2016-04-03',
          to: '2016-05-15',
        },
        {
          label: 'เริ่มแจกบัตรสวัสดิการแห่งรัฐ',
          from: '2017-09-21',
        },
      ],
    };
    const wrapper = mount(ExpandedCard, {
      propsData: {
        promise,
        expanded: true,
      },
    });

    const timeline = wrapper.findAllComponents(Timeline);
    const timelineText = wrapper.find('.timeline');

    expect(timeline.length).toEqual(promise.timelines.length);
    expect(timelineText.exists()).toBeTruthy();
  });

  test('should display image and alt', () => {
    const promise = {
      id: 1,
      description: 'เป็นโครงการที่ต่อยอดจากโครงการสำคัญของรัฐบาลพลเอกประยุทธ์',
      isNCPO: true,
      imageUrl:
        'https://spreadsheet.wevis.info/dl/promise_tracker_9tvh/db/nc_9tvh__promises/image_0C6onm_ก้าวไกล_9.jpg',
      links: [],
      timelines: [],
    };
    const wrapper = mount(ExpandedCard, {
      propsData: {
        promise,
        expanded: true,
      },
    });

    const img = wrapper.find(`#expanded-card-${promise.id}-image`);

    expect(img.attributes('src')).toEqual(promise.imageUrl);
    expect(img.attributes('alt')).toEqual(`image-${promise.id}`);
  });
});
