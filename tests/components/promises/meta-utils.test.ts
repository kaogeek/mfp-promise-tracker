import { titleText, imageUrl } from '@/utils/promises-meta';
import { PromiseStatus } from '@/models/promise';

test('should output title text', () => {
  expect(titleText('ที่ 1', 'พลังประชารวย')).toBe(
    `โครงการที่ 1 โดยพรรคพลังประชารวย`
  );
});

test('should output image url path', () => {
  expect(imageUrl('https://github.com', 'nodata' as PromiseStatus)).toBe(
    'https://github.com/nodata.jpg'
  );
  expect(imageUrl('https://github.com', 'proposed' as PromiseStatus)).toBe(
    'https://github.com/proposed.jpg'
  );
  expect(imageUrl('https://github.com', 'paused' as PromiseStatus)).toBe(
    'https://github.com/paused.jpg'
  );
  expect(imageUrl('https://github.com', 'working' as PromiseStatus)).toBe(
    'https://github.com/working.jpg'
  );
  expect(imageUrl('https://github.com', 'done' as PromiseStatus)).toBe(
    'https://github.com/done.jpg'
  );
});
