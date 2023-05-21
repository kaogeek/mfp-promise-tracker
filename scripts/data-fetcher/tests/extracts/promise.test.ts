import { getRawPromises } from '../../extracts/promise';
import { fetchNocoDB } from '../../extracts/helpers';

jest.mock('../../extracts/helpers');

describe('getRawPromises', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should fetch promises from NocoDB API', async () => {
    mockResolvedFetchNocoDB([]);
    const RESOURCE_PATH = '/promises';

    await getRawPromises();

    expect(fetchNocoDB).toBeCalledWith(RESOURCE_PATH);
  });

  test('should extract simple string properties properly', async () => {
    mockResolvedFetchNocoDB([
      {
        id: 171,
        party: 'พลังประชารัฐ',
        topic: 'economics',
        promiseTitle: 'เปลี่ยนรถโดยสาร เป็นรถเมล์ไฟฟ้า',
        status: 'nodata',
        explain: 'เพื่อให้เป็นไปตามนโยบายสีเขียว ...',
        isNCPO: false,
        images: '[]',
        vdo: '',
        nameLink1: '',
        urlLink1: '',
        nameLink2: '',
        urlLink2: '',
        nameLink3: '',
        urlLink3: '',
        nameLink4: '',
        urlLink4: '',
      },
    ]);

    const promises = await getRawPromises();

    expect(promises[0]).toEqual(
      expect.objectContaining({
        party: 'พลังประชารัฐ',
        topic: 'economics',
        promiseTitle: 'เปลี่ยนรถโดยสาร เป็นรถเมล์ไฟฟ้า',
        status: 'nodata',
        explain: 'เพื่อให้เป็นไปตามนโยบายสีเขียว ...',
        isNCPO: false,
      })
    );
  });

  test('should transform promiseId to number', async () => {
    mockResolvedFetchNocoDB([
      {
        ...getStubJSONPromise(),
        id: 171,
      },
    ]);
    const promises = await getRawPromises();

    expect(promises[0].promiseId).toBe(171);
  });

  test('should extract image to its own interface', async () => {
    mockResolvedFetchNocoDB([
      {
        ...getStubJSONPromise(),
        images: [
          {
            url: 'https://path/to/image',
            title: 'title.jpg',
            mimetype: 'image/jpg',
            size: 10,
          },
        ],
      },
    ]);

    const promises = await getRawPromises();

    expect(promises[0].images[0].url).toBe('https://path/to/image');
    expect(promises[0].images[0].title).toBe('title.jpg');
    expect(promises[0].images[0].mimetype).toBe('image/jpg');
    expect(promises[0].images[0].size).toBe(10);
  });

  describe('extract vdo', () => {
    test('should be null when it is marked with dash (-)', async () => {
      mockResolvedFetchNocoDB([
        {
          ...getStubJSONPromise(),
          vdo: '-',
        },
      ]);
      const promises = await getRawPromises();
      expect(promises[0].vdo).toBe(null);
    });

    test('should be null when it is an empty string', async () => {
      mockResolvedFetchNocoDB([
        {
          ...getStubJSONPromise(),
          vdo: '',
        },
      ]);
      const promises = await getRawPromises();
      expect(promises[0].vdo).toBe(null);
    });

    test('should be as original when it is anything else', async () => {
      const MOCK_VDO = 'anything';
      mockResolvedFetchNocoDB([
        {
          ...getStubJSONPromise(),
          vdo: MOCK_VDO,
        },
      ]);

      const promises = await getRawPromises();

      expect(promises[0].vdo).toBe(MOCK_VDO);
    });
  });

  describe('extract links', () => {
    test('single link', async () => {
      mockResolvedFetchNocoDB([
        {
          ...getStubJSONPromise(),
          nameLink1: 'ส.ส.พลังประชารัฐ เสนอใช้รถเมล์ไฟฟ้าลด PM 2.5 - Mthai',
          urlLink1: 'https://news.mthai.com/politics-news/789439.html',
        },
      ]);

      const promises = await getRawPromises();

      expect(promises[0].links).toEqual([
        {
          name: 'ส.ส.พลังประชารัฐ เสนอใช้รถเมล์ไฟฟ้าลด PM 2.5 - Mthai',
          url: 'https://news.mthai.com/politics-news/789439.html',
        },
      ]);
    });

    test('2 links', async () => {
      mockResolvedFetchNocoDB([
        {
          ...getStubJSONPromise(),
          nameLink1: 'ส.ส.พลังประชารัฐ เสนอใช้รถเมล์ไฟฟ้าลด PM 2.5 - Mthai',
          urlLink1: 'https://news.mthai.com/politics-news/789439.html',
          nameLink2:
            'คมนาคมตั้งเป้าเปลี่ยนรถสาธารณะเป็นไฟฟ้าใน 20 ปี-นำร่อง 6 จังหวัด - MGR online',
          urlLink2: 'https://mgronline.com/business/detail/9630000126371',
        },
      ]);

      const promises = await getRawPromises();

      expect(promises[0].links).toEqual([
        {
          name: 'ส.ส.พลังประชารัฐ เสนอใช้รถเมล์ไฟฟ้าลด PM 2.5 - Mthai',
          url: 'https://news.mthai.com/politics-news/789439.html',
        },
        {
          name: 'คมนาคมตั้งเป้าเปลี่ยนรถสาธารณะเป็นไฟฟ้าใน 20 ปี-นำร่อง 6 จังหวัด - MGR online',
          url: 'https://mgronline.com/business/detail/9630000126371',
        },
      ]);
    });

    test('be able to handle dynamic number of links according to headers', async () => {
      mockResolvedFetchNocoDB([
        {
          ...getStubJSONPromise(),
          nameLink1: 'name1',
          urlLink1: 'http://link/1',
          nameLink2: 'name2',
          urlLink2: 'http://link/2',
          nameLink3: 'name3',
          urlLink3: 'http://link/3',
          nameLink4: 'name4',
          urlLink4: 'http://link/4',
          nameLink5: 'name5',
          urlLink5: 'http://link/5',
        },
      ]);
      const promises = await getRawPromises();

      expect(promises[0].links).toEqual([
        {
          name: 'name1',
          url: 'http://link/1',
        },
        {
          name: 'name2',
          url: 'http://link/2',
        },
        {
          name: 'name3',
          url: 'http://link/3',
        },
        {
          name: 'name4',
          url: 'http://link/4',
        },
        {
          name: 'name5',
          url: 'http://link/5',
        },
      ]);
    });
  });

  function getStubJSONPromise() {
    return {
      id: 171,
      party: 'พลังประชารัฐ',
      topic: 'economics',
      promiseTitle: 'เปลี่ยนรถโดยสาร เป็นรถเมล์ไฟฟ้า',
      status: 'nodata',
      explain: 'เพื่อให้เป็นไปตามนโยบายสีเขียว ...',
      isNCPO: false,
      images:
        '[{"url":"https://path/to/image","title":"title.jpg","mimetype":"image/jpg","size":10}]',
      vdo: '',
      nameLink1: '',
      urlLink1: '',
      nameLink2: '',
      urlLink2: '',
      nameLink3: '',
      urlLink3: '',
      nameLink4: '',
      urlLink4: '',
    };
  }

  function mockResolvedFetchNocoDB(raw: { [key: string]: any }[]): void {
    (fetchNocoDB as unknown as any).mockResolvedValue(raw);
  }
});
