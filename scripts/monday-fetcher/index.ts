/* eslint-disable no-console */
import { writeFile } from 'fs/promises';
import { getRawPromises } from './extracts/promise';
import { getRawPromiseTimelines } from './extracts/timeline';
import { getRawParties } from './extracts/party';
import { transformToTrackingPromises } from './transforms/promise';
import { transformToParties } from './transforms/party';

async function fetchData() {
  const promises = transformToTrackingPromises(
    // @todo getRawPromises can contain data that present in getRawPromiseTimelines so that can reduce fetch loop
    await getRawPromises(),
    await getRawPromiseTimelines()
  );
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
