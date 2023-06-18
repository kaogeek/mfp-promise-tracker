import { extractsColValue, fetchAllTimelines } from './helpers';

export interface RawTimeline {
  name: string;
  range: string;
}

export interface RawPromiseTimeline {
  promiseId: number;
  timelines: RawTimeline[];
}

export async function getRawPromiseTimelines(): Promise<RawPromiseTimeline[]> {
  const parsed = await fetchAllTimelines();

  const mapped = parsed.map((e): RawPromiseTimeline => {
    const timelines: RawTimeline[] = [];
    if (Array.isArray(e.subitems) && e.subitems.length !== 0) {
      for (const item of e.subitems) {
        const form = extractsColValue('date', item.column_values);
        if (timelines.length !== 0 && form !== '') {
          timelines[timelines.length - 1].range +=
            '-' + form.replaceAll('-', '/');
        }
        timelines.push({ name: item.name, range: form.replaceAll('-', '/') });
      }
    }

    return {
      promiseId: Number(e.id),
      timelines,
    };
  });

  return mapped;
}
