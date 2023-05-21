import { fetchNocoDB } from './helpers';

export interface RawTimeline {
  name: string;
  range: string;
}

export interface RawPromiseTimeline {
  promiseId: number;
  timelines: RawTimeline[];
}

const NAME_PREFIX = 'name';

export async function getRawPromiseTimelines(): Promise<RawPromiseTimeline[]> {
  const parsed = await fetchNocoDB('/timelines');

  const mapped = parsed.map((e): RawPromiseTimeline => {
    const linkKeys = Object.keys(e).filter(
      (key: string) => key.startsWith(NAME_PREFIX) && e[key] !== ''
    );
    const timelines: RawTimeline[] = linkKeys.map(createRawTimeline(e));

    return {
      promiseId: Number(e.promiseId),
      timelines,
    };
  });

  return mapped;
}

function createRawTimeline(data: {
  [key: string]: string;
}): (key: string) => RawTimeline {
  return (key: string): RawTimeline => ({
    name: data[key],
    range: data[`timeline${key.replace(NAME_PREFIX, '')}`],
  });
}
