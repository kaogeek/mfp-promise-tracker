import { mount } from '@vue/test-utils';
import PromiseCard from '@/components/promise-card/promise-card.vue';
import SingleCard from '@/components/promise-card/single-card.vue';
import ExpandedCard from '@/components/promise-card/expanded-card.vue';

describe('Promise Card', () => {
  const promise = {
    id: 94,
    party: 'พลังประชารัฐ',
    title: 'ต่อยอดบัตรสวัสดิการแห่งรัฐ',
    topic: 'equality',
    status: 'done',
    description: 'เป็นโครงการที่ต่อยอด',
    isNCPO: true,
    imageUrl:
      'https://spreadsheet.wevis.info/dl/promise_tracker_9tvh/db/nc_9tvh__promises/image_0C6onm_ก้าวไกล_9.jpg',
    links: [
      {
        name: 'ตรวจสอบสิทธิ์สวัสดิการแห่งรัฐ ',
        url: 'https://govwelfare.cgd.go.th/welfare/check\n',
      },
    ],
    timelines: [
      {
        label: 'เปิดโอกาสให้ผู้มีรายได้น้อยลงทะเบียน ',
        from: '2016-04-03',
        to: '2016-05-15',
      },
    ],
  };

  test('should have default props', () => {
    const wrapper = mount(PromiseCard);

    expect(wrapper.props().promise).toEqual({});
    expect(wrapper.props().openState).toBe(false);
  });

  test('should render single card component alone by default', () => {
    const wrapper = mount(PromiseCard, {
      propsData: {
        promise,
      },
    });

    const singleCard = wrapper.findComponent(SingleCard);
    const expandedCard = wrapper.findComponent(ExpandedCard);

    expect(singleCard.exists()).toBeTruthy();
    expect(expandedCard.html()).toBe('');
  });

  test('should render expanded card if openState is set to true', () => {
    const wrapper = mount(PromiseCard, {
      propsData: {
        promise,
        openState: true,
      },
    });

    const expandedCard = wrapper.findComponent(ExpandedCard);

    expect(expandedCard.html()).not.toBe('');
  });

  test('should render expanded card on readmore-click', async () => {
    const wrapper = mount(PromiseCard, {
      propsData: {
        promise,
      },
    });

    const singleCard = wrapper.findComponent(SingleCard);
    const button = singleCard.find('button');
    await button.trigger('click');
    const expandedCard = wrapper.findComponent(ExpandedCard);

    expect(singleCard.emitted('readmore')).toBeTruthy();
    expect(expandedCard.html()).not.toBe('');
  });
});
