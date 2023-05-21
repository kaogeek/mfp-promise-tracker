import { getRawPromiseTimelines } from '../../extracts/timeline';
import { fetchNocoDB } from '../../extracts/helpers';

jest.mock('../../extracts/helpers');
describe('getRawPromiseTimelines', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should fetch timelines from NocoDB API', async () => {
    const RESOURCE_PATH = '/timelines';
    mockResolvedFetchNocoDB([]);

    await getRawPromiseTimelines();

    expect(fetchNocoDB).toBeCalledWith(RESOURCE_PATH);
  });

  test('should extract promiseId as number', async () => {
    mockResolvedFetchNocoDB([
      {
        ...getStubJSONTimeline(),
        promiseId: 10,
      },
    ]);

    const timelines = await getRawPromiseTimelines();

    expect(timelines[0].promiseId).toBe(10);
  });

  describe('extract timelines', () => {
    test('single timeline', async () => {
      mockResolvedFetchNocoDB([
        {
          ...getStubJSONTimeline(),
          name1: 'name1',
          timeline1: 'range1',
        },
      ]);

      const timelines = await getRawPromiseTimelines();

      expect(timelines[0].timelines).toEqual([
        {
          name: 'name1',
          range: 'range1',
        },
      ]);
    });

    test('2 timelines', async () => {
      mockResolvedFetchNocoDB([
        {
          ...getStubJSONTimeline(),
          name1: 'name1',
          timeline1: 'range1',
          name2: 'name2',
          timeline2: 'range2',
        },
      ]);

      const timelines = await getRawPromiseTimelines();

      expect(timelines[0].timelines).toEqual([
        {
          name: 'name1',
          range: 'range1',
        },
        {
          name: 'name2',
          range: 'range2',
        },
      ]);
    });

    test('be able to handle dynamic number of timelines according to headers', async () => {
      mockResolvedFetchNocoDB([
        {
          ...getStubJSONTimeline(),
          name1: 'name1',
          timeline1: 'range1',
          name2: 'name2',
          timeline2: 'range2',
          name3: 'name3',
          timeline3: 'range3',
          name4: 'name4',
          timeline4: 'range4',
        },
      ]);

      const timelines = await getRawPromiseTimelines();

      expect(timelines[0].timelines).toEqual([
        {
          name: 'name1',
          range: 'range1',
        },
        {
          name: 'name2',
          range: 'range2',
        },
        {
          name: 'name3',
          range: 'range3',
        },
        {
          name: 'name4',
          range: 'range4',
        },
      ]);
    });
  });

  function getStubJSONTimeline() {
    return {
      promiseId: 0,
    };
  }

  function mockResolvedFetchNocoDB(
    raw: { [key: string]: string | number }[]
  ): void {
    (fetchNocoDB as unknown as any).mockResolvedValue(raw);
  }
});
