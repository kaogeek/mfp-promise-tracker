/* eslint-disable no-console */
import { writeFile } from 'fs/promises';
import { getRawPromises } from './extracts/promise';
import { getRawPromiseTimelines } from './extracts/timeline';
import { getRawParties } from './extracts/party';
import { transformToTrackingPromises } from './transforms/promise';
import { transformToParties } from './transforms/party';

async function fetchData() {
  const { rawPromises, taskItems } = await getRawPromises();
  const rawTimelines = getRawPromiseTimelines(taskItems);
  // @todo transformToTrackingPromises need to optimize for reduce data transforms
  const promises = transformToTrackingPromises(rawPromises, rawTimelines);
  const parties = transformToParties(await getRawParties());
  await writeFile('./data/laws.json', JSON.stringify(promises, null, 2));
  await writeFile('./data/parties.json', JSON.stringify(parties, null, 2));
  await writeFile(
    './data/metadata.json',
    JSON.stringify({ lastUpdated: new Date() })
  );
}

try {
  fetchData();
} catch (e) {
  console.error(e);
  process.exit(1);
}
