import fetch from 'node-fetch';
import { fetchNocoDB, LIMIT } from '../../extracts/helpers';
jest.mock('node-fetch', () => jest.fn());

const JSON = { list: [{ some: 'value' }], pageInfo: { isLastPage: true } };

describe('fetchNocoDB', () => {
  const MOCK_API_PATH = 'http://nocodb-instance/api';
  const MOCK_TOKEN = 'mock_token';
  let mockFetch: {
    json: jest.Mock<any, any>;
  };

  const originalEnv = {
    NOCODB_API_PATH: process.env.NOCODB_API_PATH,
    NOCODB_API_TOKEN: process.env.NOCODB_API_TOKEN,
  };

  beforeAll(() => {
    process.env.NOCODB_API_PATH = MOCK_API_PATH;
    process.env.NOCODB_API_TOKEN = MOCK_TOKEN;
  });

  afterAll(() => {
    process.env.NOCODB_API_PATH = originalEnv.NOCODB_API_PATH;
    process.env.NOCODB_API_TOKEN = originalEnv.NOCODB_API_TOKEN;
  });

  beforeEach(() => {
    jest.clearAllMocks();
    mockFetch = {
      json: jest.fn().mockResolvedValue(JSON),
    };
    (fetch as unknown as any).mockResolvedValue(mockFetch);
  });

  test('should fetch remote json from given resource', async () => {
    const RESOURCE = '/parties';
    await fetchNocoDB(RESOURCE);
    expect(fetch).toBeCalledWith(
      `${MOCK_API_PATH}${RESOURCE}?limit=${LIMIT}&offset=0`,
      expect.anything()
    );
  });

  test('should add xc-token as header for auth purpose', async () => {
    await fetchNocoDB('/parties');

    expect(fetch).toBeCalledWith(expect.anything(), {
      headers: {
        'xc-token': MOCK_TOKEN,
      },
    });
  });

  test('should return json response to caller', async () => {
    const actual = await fetchNocoDB('/parties');

    expect(actual).toEqual(JSON.list);
  });
});
