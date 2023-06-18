import fetch from 'node-fetch';

/**
 * monday's default limit results set
 * @type {number} - page limit
 * @see https://developer.monday.com/api-reference/docs/rate-limits#pagination
 */
export const LIMIT: number = 25;

/**
 * monday's API base URL
 * @type {string} - monday's api v2 base url
 * @see https://developer.monday.com/api-reference/docs
 */
const MONDAY_API_URL: string = 'https://api.monday.com/v2';

export interface ColumnValues {
  title: string;
  text: string;
}

interface TaskItem {
  id: number;
  name: string;
  column_values: ColumnValues[];
  subitems?: TaskItem[];
}

interface BoardInfo {
  id: number;
  name: string;
  items_count?: number;
  items?: TaskItem[];
}

interface MondayResponse {
  data: {
    boards?: BoardInfo[];
    items?: TaskItem[];
  };
  account_id: number;
}

export function extractsColValue(
  colName: string,
  colValues: ColumnValues[]
): string {
  return colValues.find((col) => col.title === colName)?.text ?? '';
}

/**
 * fetch board info from monday
 * @param {number | string} boardId - monday board's ID
 */
async function fetchBoardInfo(
  boardId: number | string
): Promise<MondayResponse> {
  const query = `query { boards (ids: ${boardId}) { id name items_count } }`;
  const response = await fetch(MONDAY_API_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.MONDAY_API_TOKEN || '',
    },
    body: JSON.stringify({
      query,
    }),
  });
  return (await response.json()) as MondayResponse;
}

/**
 * fetch board's task info aka promise
 * @param {number | string} boardId - task item ID
 * @param {number} page - items on board's page
 */
async function fetchBoardPromise(
  boardId: number | string,
  page: number
): Promise<MondayResponse> {
  // todo: can `subitems` and `column_values` be optimize fetch to reduce API query cost?
  const query = `query { boards (ids: ${boardId}) { items (limit: ${LIMIT},page:${page}) { id name column_values { title text } } } }`;
  const response = await fetch(MONDAY_API_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.MONDAY_API_TOKEN || '',
    },
    body: JSON.stringify({
      query,
    }),
  });
  return (await response.json()) as MondayResponse;
}

/**
 * fectch board sub task details aka promise timelines
 * @param {number | string} promiseId - task ID
 */
export async function fetchPromiseTimelines(
  promiseId: number | string
): Promise<MondayResponse> {
  // todo: can `subitems` and `column_values` be optimize fetch to reduce API query cost?
  const query = `query { items (ids: ${promiseId}) { id name subitems { id name column_values { title text } } } }`;
  const response = await fetch(MONDAY_API_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.MONDAY_API_TOKEN || '',
    },
    body: JSON.stringify({
      query,
    }),
  });
  return (await response.json()) as MondayResponse;
}

/**
 * fetch all promise from board task
 */
export async function fetchAllPromise(): Promise<TaskItem[]> {
  const boardId = process.env.MONDAY_BOARD_ID || '';
  // TODO: get board info
  const boardInfo = await fetchBoardInfo(boardId);

  const rows: TaskItem[] = [];
  let page: number = 1;

  // get all board item aka promises
  do {
    const resp = await fetchBoardPromise(boardId, page++);
    if (Array.isArray(resp.data.items) && resp.data.items.length !== 0) {
      rows.push(...resp.data.items);
    }
  } while (rows.length < (boardInfo.data.boards?.[0]?.items_count ?? 0));

  return rows;
}

export async function fetchAllTimelines(promises?: TaskItem[] | undefined) {
  if (!Array.isArray(promises)) {
    promises = await fetchAllPromise();
  }
  const rows: TaskItem[] = [];
  for (const promise of promises) {
    const resp = await fetchPromiseTimelines(promise.id);
    if (Array.isArray(resp.data.items) && resp.data.items.length !== 0) {
      const item = resp.data.items[0];
      rows.push(item);
    }
  }
  return rows;
}
