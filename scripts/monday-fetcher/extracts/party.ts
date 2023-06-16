import { fetchNocoDB } from './helpers';

export interface RawParty {
  name: string;
  side: string;
}

export async function getRawParties(): Promise<RawParty[]> {
  return (await fetchNocoDB('/parties')) as RawParty[];
}
