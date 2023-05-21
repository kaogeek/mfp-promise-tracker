import {
  groupBy,
  filteredPromise,
  getGroupTitle,
  computedPromisePerPage,
  pageLength,
  pageNumberArray,
  currentPagePromises,
} from '@/components/explore/topic-group/topic-utils';
import { PromiseTopic, PromiseStatus, TrackingPromise } from '@/models/promise';

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
    links: [],
    timelines: [],
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
    links: [],
    timelines: [],
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
    links: [],
    timelines: [],
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
    links: [],
    timelines: [],
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
    links: [],
    timelines: [],
  },
];

test('should return an object on groupBy', () => {
  expect(groupBy('culture', '')).toEqual({ by: 'topic', where: 'culture' });
  expect(groupBy('', 'done')).toEqual({ by: 'status', where: 'done' });
  expect(groupBy('', '')).toEqual({ by: '', where: '' });
  expect(groupBy('culture', 'done')).toEqual({ by: '', where: '' });
});

test('should filter promise according to params', () => {
  expect(filteredPromise(promises, 'topic', 'culture')).toEqual(
    promises.slice(0, 4)
  );
  expect(filteredPromise(promises, 'topic', 'administration')).toEqual(
    promises.slice(4, 5)
  );
  expect(filteredPromise(promises, 'status', 'nodata')).toEqual(
    promises.slice(1, 5)
  );
  expect(filteredPromise(promises, 'status', 'done')).toEqual(
    promises.slice(0, 1)
  );
  expect(filteredPromise(promises, '', '')).toEqual(promises);
});

test('should return group title', () => {
  expect(getGroupTitle('topic', 'culture')).toBe('ประเด็นศาสนาและวัฒนธรรม');
  expect(getGroupTitle('status', 'nodata')).toBe('สถานะ: ไม่พบความเคลื่อนไหว');
  expect(getGroupTitle('topic', 'hi')).toBe('');
  expect(getGroupTitle('status', 'hi')).toBe('');
  expect(getGroupTitle('', 'hi')).toBe('');
  expect(getGroupTitle('', '')).toBe('');
});

test('should return a computed promise per page', () => {
  expect(computedPromisePerPage(-1, 10)).toBe(10);
  expect(computedPromisePerPage(0, 10)).toBe(10);
  expect(computedPromisePerPage(1, 10)).toBe(1);
  expect(computedPromisePerPage(3, 10)).toBe(3);
});

test('should return the correct page length', () => {
  expect(pageLength(3, -1)).toBe(0);
  expect(pageLength(3, 0)).toBe(0);
  expect(pageLength(3, 3)).toBe(1);
  expect(pageLength(9, 3)).toBe(3);
  expect(pageLength(10, 3)).toBe(4);
  expect(pageLength(11, 3)).toBe(4);
});

test('should return the correct pageNumberArray', () => {
  expect(pageNumberArray(1, 1)).toEqual([1]);
  expect(pageNumberArray(2, 1)).toEqual([1, 2]);
  expect(pageNumberArray(4, 1)).toEqual([1, 2, 3, 4]);
  expect(pageNumberArray(5, 1)).toEqual([1, 2, '...', 5]);
  expect(pageNumberArray(24, 1)).toEqual([1, 2, '...', 24]);
  expect(pageNumberArray(24, 2)).toEqual([1, 2, '...', 24]);
  expect(pageNumberArray(24, 3)).toEqual([1, '...', 3, 4, '...', 24]);
  expect(pageNumberArray(24, 4)).toEqual([1, '...', 4, 5, '...', 24]);
  expect(pageNumberArray(24, 21)).toEqual([1, '...', 21, 22, '...', 24]);
  expect(pageNumberArray(24, 22)).toEqual([1, '...', 22, 23, 24]);
  expect(pageNumberArray(24, 23)).toEqual([1, '...', 22, 23, 24]);
  expect(pageNumberArray(24, 24)).toEqual([1, '...', 22, 23, 24]);
  expect(pageNumberArray(1, 2)).toEqual([]);
  expect(pageNumberArray(0, 0)).toEqual([]);
  expect(pageNumberArray(-1, 0)).toEqual([]);
  expect(pageNumberArray(-1, -1)).toEqual([]);
});

test('should return promises within the page', () => {
  expect(currentPagePromises(promises, 1, 3)).toEqual(promises.slice(0, 3));
  expect(currentPagePromises(promises, 2, 3)).toEqual(promises.slice(3, 6));
  expect(currentPagePromises(promises, 1, 2)).toEqual(promises.slice(0, 2));
  expect(currentPagePromises(promises, 2, 2)).toEqual(promises.slice(2, 4));
  expect(currentPagePromises(promises, 3, 2)).toEqual(promises.slice(4));
  expect(currentPagePromises(promises, 1, 1)).toEqual(promises.slice(0, 1));
  expect(currentPagePromises(promises, 0, 1)).toEqual([]);
  expect(currentPagePromises(promises, -1, 3)).toEqual([]);
  expect(currentPagePromises(promises, 1, 0)).toEqual([]);
});
