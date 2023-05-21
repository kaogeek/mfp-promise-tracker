import { getRawParties, RawParty } from '../../extracts/party';
import { fetchNocoDB } from '../../extracts/helpers';

jest.mock('../../extracts/helpers');

describe('getRawParties', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should fetch parties from NocoDB API', async () => {
    const RESOURCE_PATH = '/parties';
    await getRawParties();
    expect(fetchNocoDB).toBeCalledWith(RESOURCE_PATH);
  });

  test('should extract name and side for raw party', async () => {
    mockResolvedFetchNocoDB([{ name: 'ก้าวไกล', side: 'opposition' }]);

    const parties = await getRawParties();

    expect(parties[0]).toEqual({
      name: 'ก้าวไกล',
      side: 'opposition',
    });
  });

  function mockResolvedFetchNocoDB(raw: RawParty[]): void {
    (fetchNocoDB as unknown as any).mockResolvedValue(raw);
  }
});
