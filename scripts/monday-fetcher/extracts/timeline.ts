import { TaskItem, extractsColValue } from './helpers';

export interface RawTimeline {
  name: string;
  range: string;
}

export interface RawPromiseTimeline {
  promiseId: number;
  timelines: RawTimeline[];
}

export function getRawPromiseTimelines(
  parsed: TaskItem[]
): RawPromiseTimeline[] {
  const mapped = parsed.map((e): RawPromiseTimeline => {
    const timelines: RawTimeline[] = [];
    if (Array.isArray(e.subitems) && e.subitems.length !== 0) {
      for (const item of e.subitems) {
        const form = extractsColValue(
          'startDate',
          item.column_values
        ).replaceAll('-', '/');
        const to = extractsColValue('endDate', item.column_values).replaceAll(
          '-',
          '/'
        );
        const timeRange = to ? form + '-' + to : form;
        timelines.push({ name: item.name, range: timeRange });
      }
    }

    return {
      promiseId: Number(e.id),
      timelines,
    };
  });

  return mapped;
}
