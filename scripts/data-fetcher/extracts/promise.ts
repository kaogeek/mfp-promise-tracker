import { fetchNocoDB } from './helpers';

export interface RawLink {
  name: string;
  url: string;
}

export interface RawImage {
  url?: string;
  path?: string;
  title: string;
  mimetype: string;
  size: number;
}

export interface RawPromise {
  promiseId: number;
  party: string;
  topic: string;
  promiseTitle: string;
  status: string;
  explain: string;
  isNCPO: boolean;
  images: RawImage[];
  vdo: string | null;
  links: RawLink[];
}

const NAME_LINK_PREFIX = 'nameLink';

export async function getRawPromises(): Promise<RawPromise[]> {
  const parsed = await fetchNocoDB('/promises');

  const mapped = parsed.map((e): RawPromise => {
    const linkKeys = Object.keys(e).filter(
      (key: string) => key.startsWith(NAME_LINK_PREFIX) && e[key] !== ''
    );
    const links: RawLink[] = linkKeys.map(createRawLink(e));

    return {
      promiseId: Number(e.id),
      party: e.party,
      topic: e.topic,
      promiseTitle: e.promiseTitle,
      status: e.status,
      explain: e.explain,
      isNCPO: e.isNCPO,
      images: e.images,
      vdo: guardEmptiness(e.vdo),
      links,
    };
  });

  return mapped;
}

function createRawLink(data: {
  [key: string]: string;
}): (key: string) => RawLink {
  return (key: string): RawLink => ({
    name: data[key],
    url: data[`urlLink${key.replace(NAME_LINK_PREFIX, '')}`],
  });
}

export function guardEmptiness(value: string): string | null {
  if (value === '-' || value === '') return null;
  return value;
}
