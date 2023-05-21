import { mount, config } from '@vue/test-utils';
import WvSharer from '@wevisdemo/ui/components/sharer.vue';
import {
  PromiseTopic,
  PromiseStatus,
  promiseTopicTextMap,
  promiseStatusTextMap,
} from '@/models/promise';
import SingleCard from '@/components/promise-card/single-card.vue';
import StatusLegend from '@/components/explanation/status-legend.vue';
import IconUp from '@/components/promise-card//icon-up.vue';

describe('Single card', () => {
  const promise = {
    id: 1,
    status: 'nodata',
    title: 'โครงการบ้านล้านหลังประชารัฐ',
    topic: 'equality',
    party: 'พลังประชารัฐ',
    imageUrl:
      'https://spreadsheet.wevis.info/dl/promise_tracker_9tvh/db/nc_9tvh__promises/image_0C6onm_ก้าวไกล_9.jpg',
  };
  const wrapper = mount(SingleCard, {
    propsData: {
      promise,
    },
  });

  test('should have default props', () => {
    const wrapper = mount(SingleCard);

    expect(wrapper.props().promise).toEqual({});
    expect(wrapper.props().openState).toBe(false);
  });

  test('should render color according to status', () => {
    const statusColor = wrapper.find('#single-card-1-status-color');

    expect(statusColor.classes()).toEqual(
      expect.arrayContaining([`bg-status-${promise.status}`])
    );
  });

  test('should render status icon', () => {
    const status = wrapper.findComponent(StatusLegend);

    expect(status.text()).toEqual(
      promiseStatusTextMap.get(promise.status as PromiseStatus)
    );
  });

  test('should render title', () => {
    const title = wrapper.find(`#single-card-${promise.id}-title`);

    expect(title.text()).toEqual(promise.title);
  });

  test('should render topic icon', () => {
    const icon = wrapper.find(`#single-card-${promise.id}-topic-icon`);

    expect(icon.attributes('src')).toEqual(
      `/images/topic/${promise.topic}_small.png`
    );
    expect(icon.attributes('alt')).toEqual(promise.topic);
  });

  test('should fetch topic icon from config path', () => {
    const CONFIG_PATH = '/test';
    config.mocks.$config = {
      path: {
        base: '',
        images: CONFIG_PATH,
      },
    };
    const wrapper = mount(SingleCard, {
      propsData: {
        promise,
      },
    });

    const icon = wrapper.find(`#single-card-${promise.id}-topic-icon`);

    expect(icon.attributes('src')).toEqual(
      `${CONFIG_PATH}/topic/${promise.topic}_small.png`
    );
  });

  test('should render topic name', () => {
    const topicName = wrapper.find(`#single-card-${promise.id}-topic-name`);

    expect(topicName.text()).toEqual(
      promiseTopicTextMap.get(promise.topic as PromiseTopic)?.short
    );
  });

  test('should render party logo', () => {
    const img = wrapper.find(`#single-card-${promise.id}-party-logo`);

    expect(img.attributes('src')).toEqual(`/images/party/${promise.party}.jpg`);
    expect(img.attributes('alt')).toEqual(promise.party);
  });

  test('should fetch party logo from config path', () => {
    const CONFIG_PATH = '/something';
    config.mocks.$config = {
      path: {
        base: '',
        images: CONFIG_PATH,
      },
    };
    const wrapper = mount(SingleCard, {
      propsData: {
        promise,
      },
    });

    const img = wrapper.find(`#single-card-${promise.id}-party-logo`);

    expect(img.attributes('src')).toEqual(
      `${CONFIG_PATH}/party/${promise.party}.jpg`
    );
  });

  test('should render party name', () => {
    const partyName = wrapper.find(`#single-card-${promise.id}-party-name`);

    expect(partyName.text()).toEqual(promise.party);
  });

  test('should render readmore text by default', () => {
    const readmore = wrapper.find(`#single-card-${promise.id}-readmore`);

    expect(readmore.text()).toEqual('อ่านเพิ่มเติม');
  });

  test('should render close text if openState is set to true', () => {
    const wrapper = mount(SingleCard, {
      propsData: {
        promise,
        openState: true,
      },
    });

    const readmore = wrapper.find(`#single-card-${promise.id}-readmore`);

    expect(readmore.text()).toEqual('ปิด');
  });

  test('should render close text after toggle', async () => {
    const promise = {
      id: 1,
      status: 'nodata',
      title: 'โครงการบ้านล้านหลังประชารัฐ',
      topic: 'equality',
      party: 'พลังประชารัฐ',
    };
    const wrapper = mount(SingleCard, {
      propsData: {
        promise,
      },
    });

    const button = wrapper.find('button');
    await button.trigger('click');
    const readmore = wrapper.find(`#single-card-${promise.id}-readmore`);

    expect(readmore.text()).toEqual('ปิด');
  });

  test('should render iconDown by default', () => {
    const EXPECTED_CLASS = ['transform', 'rotate-180'];
    const up = wrapper.findComponent(IconUp);

    expect(up.classes()).toEqual(expect.arrayContaining(EXPECTED_CLASS));
  });

  test('should render iconUp if openState is set to true', () => {
    const wrapper = mount(SingleCard, {
      propsData: {
        promise,
        openState: true,
      },
    });

    const up = wrapper.findComponent(IconUp);

    expect(up.classes().length).toEqual(0);
  });

  test('should emit event on click', async () => {
    const promise = {
      id: 1,
      status: 'nodata',
      title: 'โครงการบ้านล้านหลังประชารัฐ',
      topic: 'equality',
      party: 'พลังประชารัฐ',
    };
    const wrapper = mount(SingleCard, {
      propsData: {
        promise,
      },
    });

    const button = wrapper.find('button');
    await button.trigger('click');

    expect(wrapper.emitted('readmore')).toBeTruthy();
  });

  test('should render iconUp after click', async () => {
    const promise = {
      id: 1,
      status: 'nodata',
      title: 'โครงการบ้านล้านหลังประชารัฐ',
      topic: 'equality',
      party: 'พลังประชารัฐ',
    };
    const wrapper = mount(SingleCard, {
      propsData: {
        promise,
      },
    });

    const button = wrapper.find('button');
    await button.trigger('click');
    const up = wrapper.findComponent(IconUp);

    expect(up.classes().length).toEqual(0);
  });

  test('should render sharer', () => {
    const status = wrapper.findComponent(WvSharer);

    expect(status).toBeTruthy();
  });

  test('should display thumbnail image and alt', () => {
    const thumbnail = wrapper.find(`#single-card-${promise.id}-thumbnail`);

    expect(thumbnail.attributes('src')).toEqual(promise.imageUrl);
    expect(thumbnail.attributes('alt')).toEqual(`thumbnail-${promise.id}`);
  });
});
