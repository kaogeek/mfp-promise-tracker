export interface RawParty {
  name: string;
  side: string;
}

export async function getRawParties(): Promise<RawParty[]> {
  // TODO: get parties from DB or datasources?
  return (await [{ name: 'ก้าวไกล', side: 'government' }]) as RawParty[];
}
