import { RawPromise } from '../extracts/promise';
import { RawPromiseTimeline } from '../extracts/timeline';
import {
  PromiseLawsTopic,
  TrackingPromiseLaws,
  PromiseLawsTimeline,
} from '~/models/promise-laws';
import { PromiseStatus } from '~/models/promise';

export function transformToTrackingPromises(
  rawPromises: RawPromise[],
  rawTimelines: RawPromiseTimeline[]
): TrackingPromiseLaws[] {
  return rawPromises.map((r) => {
    try {
      const category = mapTopic(r.topic);
      const status = mapStatus(r.status);

      const timelines = (
        rawTimelines.find((tl) => tl.promiseId === r.promiseId)?.timelines || []
      )
        .filter(({ name, range }) => name && range)
        .map((tl): PromiseLawsTimeline => {
          const { from, to } = convertRangeToFromTo(tl.range);
          return {
            label: tl.name,
            from,
            to,
          };
        });

      const [image] = r.images;

      const imageUrl =
        image?.url ||
        (image?.path
          ? `${new URL(process.env.NOCODB_API_PATH as string).origin}/${
              image?.path
            }`
          : undefined);

      return {
        id: r.promiseId,
        party: r.party,
        title: r.promiseTitle,
        // topic,
        category,
        status,
        description: r.explain,
        solution: r.solution,
        url: r.url,
        isNCPO: r.isNCPO,
        imageUrl,
        links: r.links,
        timelines,
      };
    } catch (e) {
      (e as Error).message += ` on promiseId = ${r.promiseId}`;
      throw e;
    }
  });
}

function mapTopic(value: string): PromiseLawsTopic {
  if (Object.values(PromiseLawsTopic).includes(value as PromiseLawsTopic)) {
    return value as PromiseLawsTopic;
  }
  throw new Error(`Cannot find topic to map "${value}"`);
}

function mapStatus(value: string): PromiseStatus {
  if (Object.values(PromiseStatus).includes(value as PromiseStatus)) {
    return value as PromiseStatus;
  }
  throw new Error(`Cannot find status to map "${value}"`);
}

function convertRangeToFromTo(value: string): {
  from: string;
  to: string | undefined;
} {
  const [from, to] = value.split('-').map((e) => e.trim());
  if (from === '' || to === '') {
    throw new Error(`Incorrect timeline "${value}"`);
  }
  return {
    from: convertDateToISOFormat(from),
    to: to ? convertDateToISOFormat(to) : undefined,
  };
}

function convertDateToISOFormat(date: string): string {
  const splited = date.split('/');
  if (splited.length === 3) {
    const [year, month, day] = splited;
    return `${year}-${month}-${day}`;
  } else if (splited.length === 2) {
    const [month, year] = splited;
    return `${year}-${month}`;
  }
  throw new Error(`Incorrect timeline "${date}"`);
}
