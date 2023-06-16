import { RawParty } from '../extracts/party';
import { Party, PartySide } from '~/models/party';

export function transformToParties(rawParties: RawParty[]): Party[] {
  return rawParties.map((p) => {
    try {
      return {
        name: p.name,
        side: mapSide(p.side),
      };
    } catch (e) {
      (e as Error).message += ` on party = "${p.name}"`;
      throw e;
    }
  });
}

const sideMap = new Map<string, PartySide>([
  ['government', PartySide.Government],
  ['opposition', PartySide.Opposition],
]);

function mapSide(side: string): PartySide {
  const mapped = sideMap.get(side);
  if (mapped) {
    return mapped;
  }
  throw new Error(`Cannot find side to map "${side}"`);
}
