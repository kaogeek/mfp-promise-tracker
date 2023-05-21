import { transformToParties } from '../../transforms/party';
import { PartySide } from '~/models/party';

describe('transformToParties', () => {
  test('should map name directly', () => {
    const raw = [
      { name: 'พลังประชารัฐ', side: 'government' },
      { name: 'เพื่อไทย', side: 'opposition' },
    ];

    const parties = transformToParties(raw);

    expect(parties[0].name).toBe('พลังประชารัฐ');
    expect(parties[1].name).toBe('เพื่อไทย');
  });

  describe('transform side', () => {
    test('should transform side to PartySide', () => {
      const raw = [
        { side: 'government', name: 'พลังประชารัฐ' },
        { side: 'opposition', name: 'เพื่อไทย' },
      ];

      const parties = transformToParties(raw);

      expect(parties[0].side).toBe(PartySide.Government);
      expect(parties[1].side).toBe(PartySide.Opposition);
    });

    test('should throw error when cannot map to any side', () => {
      const CANNOT_BE_MAPPED_SIDE = 'center';
      const PARTY_NAME = 'กลางใจเธอ';
      const raw = [{ side: CANNOT_BE_MAPPED_SIDE, name: PARTY_NAME }];

      expect(() => transformToParties(raw)).toThrowError(
        `Cannot find side to map "${CANNOT_BE_MAPPED_SIDE}" on party = "${PARTY_NAME}"`
      );
    });
  });
});
