import { TaskItem, extractsColValue, fetchAllPromise } from './helpers';

export interface RawLink {
  name: string;
  url: string;
}

export interface RawImage {
  url?: string;
  path?: string;
  title: string;
  mimetype?: string;
  size?: number;
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

export async function getRawPromises(): Promise<{
  rawPromises: RawPromise[];
  taskItems: TaskItem[];
}> {
  const parsed = await fetchAllPromise();

  const mapped = parsed.map((e): RawPromise => {
    const images: RawImage[] = [];
    const links: RawLink[] = [];

    images.push({
      title: e.name,
      url: extractsColValue('imageUrl', e.column_values),
    });

    return {
      promiseId: Number(e.id),
      party: extractsColValue('party', e.column_values),
      topic: extractsColValue('topic', e.column_values),
      promiseTitle: e.name,
      status: extractsColValue('status', e.column_values),
      explain: extractsColValue('detail', e.column_values),
      isNCPO: false, // National Council for Peace and Order ?
      images,
      vdo: guardEmptiness(extractsColValue('vdo', e.column_values)),
      links,
    };
  });

  return { rawPromises: mapped, taskItems: parsed };
}

export function guardEmptiness(value: string): string | null {
  if (value === '-' || value === '') return null;
  return value;
}
