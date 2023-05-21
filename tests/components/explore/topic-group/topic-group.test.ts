import { config, mount } from '@vue/test-utils';
import TopicGroup from '@/components/explore/topic-group/topic-group.vue';
import {
  PromiseTopic,
  PromiseStatus,
  promiseTopicTextMap,
  TrackingPromise,
  promiseStatusTextMap,
} from '@/models/promise';
import {
  filteredPromise,
  getPromisesLength,
} from '@/components/explore/topic-group/topic-utils';
import PromiseCard from '@/components/promise-card/promise-card.vue';
import Button from '@/components/button.vue';

describe('Topic Group', () => {
  const promises: TrackingPromise[] = [
    {
      id: 1,
      party: 'พลังประชารัฐ',
      title: 'ต่อยอดบัตรสวัสดิการแห่งรัฐ',
      topic: 'culture' as PromiseTopic,
      status: 'done' as PromiseStatus,
      description: 'เป็นโครงการที่ต่อยอด',
      isNCPO: true,
      imageUrl:
        'https://spreadsheet.wevis.info/dl/promise_tracker_9tvh/db/nc_9tvh__promises/image_eigCql_ประชาชนปฏิรูป_1.jpg',
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
    },
    {
      id: 2,
      party: 'พลังประชารวย',
      title: 'ต่อยอดซัมติง',
      topic: 'culture' as PromiseTopic,
      status: 'nodata' as PromiseStatus,
      description: 'เป็นโครงการที่ต่อยอด',
      isNCPO: true,
      imageUrl:
        'https://spreadsheet.wevis.info/dl/promise_tracker_9tvh/db/nc_9tvh__promises/image_eigCql_ประชาชนปฏิรูป_1.jpg',
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
    },
    {
      id: 3,
      party: 'รวมพลังประชาชาติไทย',
      title: 'มีสำนักงานตำรวจที่ขึ้นกับจังหวัดและประชาชนในพื้นที่ ',
      topic: 'culture' as PromiseTopic,
      status: 'nodata' as PromiseStatus,
      description:
        'เป็นนโยบายกระจายอำนาจการบริหารงาน การจัดสรรงบประมาณและกำลังคนของตำรวจลงสู่จังหวัด ให้แต่ละจังหวัดมีสำนักงานตำรวจที่ขึ้นกับจังหวัดและประชาชนในพื้นที่\n\nโดยเฉพาะให้มีตำรวจที่มีหน้าที่จัดการแก้ปัญหายาเสพติดระดับจังหวัดขึ้นเป็นการเฉพาะ ซึ่งมีขีดความสามารถในการป้องกันและปราบปรามยาเสพติด กำกับ ควบคุมโดยประชาชนในจังหวัด\n\nซึ่งไม่พบข้อมูล',
      isNCPO: false,
      imageUrl:
        'https://spreadsheet.wevis.info/dl/promise_tracker_9tvh/db/nc_9tvh__promises/image_eigCql_ประชาชนปฏิรูป_1.jpg',
      links: [
        {
          name: 'เว็บไซต์พรรครวมพลังประชาชาติไทย',
          url: 'https://act-party.org/',
        },
        {
          name: "กาง 10 นโยบายพรรค'รวมพลังประชาชาติไทย'เพื่ออนาคต ของประเทศ  - ไทยโพสต์",
          url: 'https://www.thaipost.net/main/detail/32014',
        },
      ],
      timelines: [
        {
          label: 'หาเสียงประกาศนโยบาย',
          from: '2019-01',
          to: '2019-03',
        },
        {
          label: 'แต่งตั้งรัฐบาล',
          from: '2019-07-10',
        },
        {
          label: 'แถลงนโยบายต่อรัฐสภา',
          from: '2019-07-25',
        },
      ],
    },
    {
      id: 4,
      party: 'ไทรักธรรม',
      title:
        'มีอาชีพเสริมเพิ่มรายได้จากอาชีพหลักพร้อมจัดหาการตลาดให้อันนำไปสู่การลดภาระหนี้สิน',
      topic: 'culture' as PromiseTopic,
      status: 'nodata' as PromiseStatus,
      description:
        'เป็นนโยบายที่ให้ประชาชนมีรายได้เสริม เพิ่มรายได้จากอาชีพหลักพร้อมทำการตลาดให้ \n\nซึ่งไม่พบข้อมูลอย่างเป็นรูปธรรม แต่พบว่าการสร้างอาชีพเสริมรายได้ ขณะนั้นคือ การทำดอกไม้จันทน์ สามารถทำได้ทันที ไม่ได้จูงใจด้วยทรัพย์สินอื่นใดให้เข้ามาเป็นสมาชิกพรรค \n\nโดยก่อนประกาศผลการเลือกตั้ง กกต. ได้รับรายงานกรณีมีเหตุอันควรสงสัยว่า นายพีระวิทย์ เรื่องลือดลภาค หัวหน้าพรรค กับพวกซึ่งเป็นผู้สมัคร ส.ส.แบบแบ่ง และสมาชิกพรรคไทรักธรรม  ในพื้นที่จังหวัดพิจิตร รวม 10 ราย กระทำการฝ่าฝืน พระราชบัญญัติประกอบรัฐธรรมนูญ (พ.ร.ป.) ว่าด้วยพรรคการเมือง พ.ศ.2560 มาตรา 30 กรณีเสนอว่าจะให้ หรือสัญญาว่าจะให้เงิน ทรัพย์สิน หรือประโยชน์อื่นใดไม่ว่าโดยทางตรงหรือทางอ้อม เพื่อจูงใจให้บุคคลหนึ่งบุคคลใดสมัครเข้าเป็นสมาชิกพรรคไทรักธรรม ทำให้กกต.ยื่นร้องขอให้ยุบพรรคต่อศาลรัฐธรรมนูญ เมื่อวันที่ 7 มกราคม พ.ศ. 2565',
      isNCPO: false,
      imageUrl:
        'https://spreadsheet.wevis.info/dl/promise_tracker_9tvh/db/nc_9tvh__promises/image_eigCql_ประชาชนปฏิรูป_1.jpg',
      links: [
        {
          name: 'นโยบายพรรคไทรักธรรม - line today',
          url: 'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=19',
        },
        {
          name: 'กกต. เอาผิด ‘พีระวิทย์’ พร้อมพวก 8 ราย - มติชน',
          url: 'https://www.matichon.co.th/politics/news_2502019',
        },
        {
          name: 'กกต.ยื่นยุบ"ไทรักธรรม"ปมจูงใจสมัครสมาชิก - PPTV online',
          url: 'https://www.pptvhd36.com/news/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87/164059',
        },
      ],
      timelines: [
        {
          label: 'หาเสียงประกาศนโยบาย',
          from: '2019-01',
          to: '2019-03',
        },
        {
          label: 'แต่งตั้งรัฐบาล',
          from: '2019-07-10',
        },
        {
          label: 'แถลงนโยบายต่อรัฐสภา',
          from: '2019-07-25',
        },
      ],
    },
    {
      id: 5,
      party: 'รวมพลังประชาชาติไทย',
      title: 'ยกฐานะทุกจังหวัดเป็นองค์กรปกครองท้องถิ่นรูปแบบพิเศษ',
      topic: 'administration' as PromiseTopic,
      status: 'nodata' as PromiseStatus,
      description:
        'นโยบายยกฐานะทุกจังหวัดเป็นองค์กรปกครองท้องถิ่นรูปแบบพิเศษ รวมบรรดาหน่วยราชการส่วนกลาง ส่วนภูมิภาคและส่วนท้องถิ่นในพื้นที่จังหวัดหนึ่งๆ เข้ามาไว้ด้วยกัน จึงทำให้จังหวัดรูปแบบใหม่ จะมีขีดความสามารถเพิ่มขึ้นอย่างมหาศาล ประหยัดงบประมาณและกำลังคนในภาครัฐ เพราะได้รับการจัดสรรงบประมาณจากรัฐโดยตรง ไม่ผ่านกระทรวงและกรม นายกรัฐมนตรีจะกำกับดูแลและส่งเสริมการบริหารและการพัฒนาของจังหวัดผ่านการประชุมระหว่างนายกรัฐมนตรีและผู้ว่าราชการจังหวัดเป็นประจำเดือนละ 1 ครั้ง จังหวัดของประชาชน จะสามารถบริหารจัดการทุกอย่างในพื้นที่ได้เอง ยกเว้นเรื่องความมั่นคง การต่างประเทศ\n\nซึ่งไม่พบข้อมูล และรูปแบบการบริหารราชการแผ่นดิน ยังคงยึดตามพ.ร.บ. ระเบียบบริหารราชการแผ่นดิน 2534 และแก้ไขเพิ่มเติมฉ. 8 พ.ศ.2553',
      isNCPO: false,
      imageUrl:
        'https://spreadsheet.wevis.info/dl/promise_tracker_9tvh/db/nc_9tvh__promises/image_eigCql_ประชาชนปฏิรูป_1.jpg',
      links: [
        {
          name: 'เว็บไซต์พรรครวมพลังประชาชาติไทย',
          url: 'https://act-party.org/',
        },
        {
          name: "กาง 10 นโยบายพรรค'รวมพลังประชาชาติไทย'เพื่ออนาคต ของประเทศ  - ไทยโพสต์",
          url: 'https://www.thaipost.net/main/detail/32014',
        },
        {
          name: 'พระราชบัญญัติระเบียบบริหารราชการแผ่นดิน พ.ศ.2534',
          url: 'http://www.krisdika.go.th/librarian/get?sysid=640806&ext=htm',
        },
      ],
      timelines: [
        {
          label: 'หาเสียงประกาศนโยบาย',
          from: '2019-01',
          to: '2019-03',
        },
        {
          label: 'แต่งตั้งรัฐบาล',
          from: '2019-07-10',
        },
        {
          label: 'แถลงนโยบายต่อรัฐสภา',
          from: '2019-07-25',
        },
      ],
    },
  ];

  const promisesSmall = promises.filter((promise) => promise.id < 3);

  const promisesTopicSmall = {
    topic: PromiseTopic.Welfare,
    promises: promisesSmall,
    promisePerPage: 3,
  };
  const promisesStatusSmall = {
    status: PromiseStatus.NoData,
    promises: promisesSmall,
    promisePerPage: 3,
  };
  const promisesTopicFull = {
    topic: PromiseTopic.Welfare,
    promises,
    promisePerPage: 3,
  };
  const promisesStatusFull = {
    status: PromiseStatus.NoData,
    promises,
    promisePerPage: 3,
  };
  const noPromisePerPage = {
    topic: PromiseTopic.Welfare,
    promises,
    promisePerPage: 0,
  };

  test('should have default props', () => {
    const wrapper = mount(TopicGroup);

    expect(wrapper.props().topic).toBe('');
    expect(wrapper.props().promises).toEqual([{}]);
    expect(wrapper.props().promisePerPage).toBe(0);
  });

  test('should render topic header box', () => {
    const EXPECTED_CLASSES = ['group-header', 'bg-status-proposed'];
    const wrapper = mount(TopicGroup, {
      propsData: promisesTopicSmall,
    });

    const header = wrapper.find(`#group-${promisesTopicSmall.topic}-header`);

    expect(header.classes()).toEqual(expect.arrayContaining(EXPECTED_CLASSES));
  });

  test('should render status header box', () => {
    const EXPECTED_CLASSES = ['group-header', 'bg-status-nodata'];
    const wrapper = mount(TopicGroup, {
      propsData: promisesStatusSmall,
    });

    const header = wrapper.find(`#group-${promisesStatusSmall.status}-header`);

    expect(header.classes()).toEqual(expect.arrayContaining(EXPECTED_CLASSES));
  });

  test('should render topic header icon', () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisesTopicSmall,
    });

    const header = wrapper.find(`#group-${promisesTopicSmall.topic}-header`);
    const headerImage = header.find('img');

    expect(headerImage.attributes('src')).toEqual(
      `/images/topic/${promisesTopicSmall.topic}_small.png`
    );
    expect(headerImage.attributes('alt')).toEqual(promisesTopicSmall.topic);
  });

  test('should render status header icon', () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisesStatusSmall,
    });

    const header = wrapper.find(`#group-${promisesStatusSmall.status}-header`);
    const headerImage = header.find('img');

    expect(headerImage.attributes('src')).toEqual(
      `/images/status/${promisesStatusSmall.status}.png`
    );
    expect(headerImage.attributes('alt')).toEqual(promisesStatusSmall.status);
  });

  test('should render topic header icon from config path', () => {
    const CONFIG_PATH = '/test';
    config.mocks.$config = {
      path: {
        base: '',
        images: CONFIG_PATH,
      },
    };
    const wrapper = mount(TopicGroup, {
      propsData: promisesTopicSmall,
    });

    const header = wrapper.find(`#group-${promisesTopicSmall.topic}-header`);
    const headerImage = header.find('img');

    expect(headerImage.attributes('src')).toEqual(
      `${CONFIG_PATH}/topic/${promisesTopicSmall.topic}_small.png`
    );
  });

  test('should render status header icon from config path', () => {
    const CONFIG_PATH = '/test';
    config.mocks.$config = {
      path: {
        base: '',
        images: CONFIG_PATH,
      },
    };
    const wrapper = mount(TopicGroup, {
      propsData: promisesStatusSmall,
    });

    const header = wrapper.find(`#group-${promisesStatusSmall.status}-header`);
    const headerImage = header.find('img');

    expect(headerImage.attributes('src')).toEqual(
      `${CONFIG_PATH}/status/${promisesStatusSmall.status}.png`
    );
  });

  test('should render topic header title', () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisesTopicSmall,
    });

    const header = wrapper.find(`#group-${promisesTopicSmall.topic}-header`);
    const p = header.findAll('p');

    expect(p.at(0).text()).toEqual(
      `ประเด็น${promiseTopicTextMap.get(promisesTopicSmall.topic)?.long}`
    );
  });

  test('should render status header title', () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisesStatusSmall,
    });

    const header = wrapper.find(`#group-${promisesStatusSmall.status}-header`);
    const p = header.findAll('p');

    expect(p.at(0).text()).toEqual(
      `สถานะ: ${promiseStatusTextMap.get(promisesStatusSmall.status)}`
    );
  });

  test('should render topic header promise count', () => {
    const LENGTH = getPromisesLength(
      filteredPromise(
        promises as TrackingPromise[],
        'topic',
        PromiseTopic.Welfare
      )
    );
    const wrapper = mount(TopicGroup, {
      propsData: promisesTopicFull,
    });

    const header = wrapper.find(`#group-${promisesTopicFull.topic}-header`);
    const p = header.findAll('p');

    expect(p.at(1).text()).toEqual(`${LENGTH} คำสัญญา`);
  });

  test('should render status header promise count', () => {
    const LENGTH = getPromisesLength(
      filteredPromise(
        promises as TrackingPromise[],
        'status',
        PromiseStatus.NoData
      )
    );
    const wrapper = mount(TopicGroup, {
      propsData: promisesStatusFull,
    });

    const header = wrapper.find(`#group-${promisesStatusFull.status}-header`);
    const p = header.findAll('p');

    expect(p.at(1).text()).toEqual(`${LENGTH} คำสัญญา`);
  });

  test('should render all PromiseCards if the amount of cards are less than the promise per page', () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisesTopicSmall,
    });

    const promiseCards = wrapper.findAllComponents(PromiseCard);

    expect(promiseCards.length).toEqual(promisesSmall.length);
  });

  test('should render all available PromiseCards', () => {
    const wrapper = mount(TopicGroup, {
      propsData: noPromisePerPage,
    });

    const promiseCards = wrapper.findAllComponents(PromiseCard);

    expect(promiseCards.length).toEqual(
      filteredPromise(
        noPromisePerPage.promises,
        'topic',
        noPromisePerPage.topic
      ).length
    );
  });

  test('should render PromiseCards within the page', () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisesTopicFull,
    });

    const promiseCards = wrapper.findAllComponents(PromiseCard);

    expect(promiseCards.length).toEqual(promisesTopicFull.promisePerPage);
  });

  test('should render viewAll button', () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisesTopicFull,
    });

    const button = wrapper.findComponent(Button);

    expect(button.text()).toEqual('ดูประเด็นนี้ทั้งหมด');
  });

  test('should emit event on viewAll', async () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisesTopicFull,
    });

    const button = wrapper.findComponent(Button);
    await button.trigger('click');

    expect(wrapper.emitted('viewGroup')).toBeTruthy();
  });

  test('should render promise cards according to the selected page', async () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisesTopicFull,
    });

    let promiseCards = wrapper.findAllComponents(PromiseCard);
    expect(promiseCards.length).toEqual(3);

    const page = wrapper.find('#culture-page-2-key-1');
    const pageButton = page.find('button');
    await pageButton.trigger('click');
    promiseCards = wrapper.findAllComponents(PromiseCard);

    expect(promiseCards.length).toEqual(1);
  });

  test('should render next set of promise cards on next page click', async () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisesTopicFull,
    });

    let promiseCards = wrapper.findAllComponents(PromiseCard);
    expect(promiseCards.length).toEqual(3);

    const nextPageButton = wrapper.find('#culture-right-navigation-button');
    await nextPageButton.trigger('click');
    promiseCards = wrapper.findAllComponents(PromiseCard);

    expect(promiseCards.length).toEqual(1);
  });

  test('should render previous set of promise cards on previous page click', async () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisesTopicFull,
      data() {
        return {
          currentPage: 2,
        };
      },
    });

    let promiseCards = wrapper.findAllComponents(PromiseCard);
    expect(promiseCards.length).toEqual(1);

    const previousPageButton = wrapper.find('#culture-left-navigation-button');
    await previousPageButton.trigger('click');
    promiseCards = wrapper.findAllComponents(PromiseCard);

    expect(promiseCards.length).toEqual(3);
  });
});
