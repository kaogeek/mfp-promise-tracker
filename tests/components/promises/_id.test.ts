import { createLocalVue, mount } from '@vue/test-utils';
import VueMeta from 'vue-meta';
import promises from '@/data/promises.json';
import PromisePage from '@/pages/promises/_id.vue';
import PromiseCard from '@/components/promise-card/promise-card.vue';
import {
  PromiseTopic,
  PromiseStatus,
  TrackingPromise,
  promiseTopicTextMap,
} from '@/models/promise';
import {
  matchedPromise,
  titleText,
  descriptionMap,
  imageUrl,
} from '@/utils/promises-meta';

const baseImageUrl =
  'https://raw.githubusercontent.com/wevisdemo/promise-tracker/main/static/og';

describe('PromisePage', () => {
  test('should render content based on id', () => {
    const ID = 94;
    const $route = {
      path: `promises/${ID}`,
      params: { id: `${ID}` },
    };
    const promise = matchedPromise(promises as TrackingPromise[], ID);
    const wrapper = mount(PromisePage, {
      mocks: {
        $route,
      },
    });

    const card = wrapper.findComponent(PromiseCard);
    const party = card.find(`#single-card-${ID}-party-name`);
    const topic = card.find(`#single-card-${ID}-topic-name`);
    const title = card.find(`#single-card-${ID}-title`);
    const description = card.find(`#expanded-card-${ID}-description`);

    expect(party.text()).toEqual(promise.party);
    expect(topic.text()).toEqual(
      promiseTopicTextMap.get(promise.topic as PromiseTopic)?.short
    );
    expect(title.text()).toEqual(promise.title);
    expect(description.text()).toEqual(promise.description);
  });

  const IDs = [1, 27, 30, 14, 26];
  const localVue = createLocalVue();
  localVue.use(VueMeta, { keyName: 'head' });

  test.each(IDs)('should render meta title based on status (id = %s)', (ID) => {
    const $route = {
      path: `promises/${ID}`,
      params: { id: `${ID}` },
    };
    const promise = matchedPromise(promises as TrackingPromise[], ID);
    const wrapper = mount(PromisePage, {
      mocks: {
        $route,
      },
      localVue,
    });

    expect(wrapper.vm.$meta().refresh().metaInfo.title).toContain(
      titleText(promise.title, promise.party)
    );
  });

  test.each(IDs)(
    'should render meta description & og based on status (id = %s)',
    (ID) => {
      const $route = {
        path: `promises/${ID}`,
        params: { id: `${ID}` },
      };
      const promise = matchedPromise(promises as TrackingPromise[], ID);
      const wrapper = mount(PromisePage, {
        mocks: {
          $route,
        },
        localVue,
      });

      const meta = wrapper.vm.$meta().refresh().metaInfo.meta as Array<any>;
      const description = meta[0].content;
      const ogTitle = meta[1].content;
      const ogImage = meta[3].content;

      expect(description).toBe(
        descriptionMap.get(promise.status as PromiseStatus)
      );
      expect(ogTitle).toContain(titleText(promise.title, promise.party));
      expect(ogImage).toBe(imageUrl(baseImageUrl, promise.status));
    }
  );

  test('should render fallback page', () => {
    const ID = 0;
    const $route = {
      path: `promises/${ID}`,
      params: { id: `${ID}` },
    };
    const wrapper = mount(PromisePage, {
      mocks: {
        $route,
      },
    });
    const card = wrapper.findComponent(PromiseCard);

    expect(card.exists()).toBeFalsy();
  });

  test('should render fallback meta data', () => {
    const ID = 0;
    const $route = {
      path: `promises/${ID}`,
      params: { id: `${ID}` },
    };
    const wrapper = mount(PromisePage, {
      mocks: {
        $route,
      },
      localVue,
    });

    const title = wrapper.vm.$meta().refresh().metaInfo.title;
    const meta = wrapper.vm.$meta().refresh().metaInfo.meta as Array<any>;
    const description = meta[0].content;
    const ogTitle = meta[1].content;
    const ogImage = meta[3].content;

    expect(title).toBe('Promise Tracker');
    expect(description).toBe(
      'สำรวจ รับรู้ ร่วมติดตาม ให้พรรคการเมืองทำตามคำสัญญาที่ให้ไว้กับเรา'
    );
    expect(ogTitle).toBe('Promise Tracker');
    expect(ogImage).toBe(`${baseImageUrl}/default.jpg`);
  });
});
