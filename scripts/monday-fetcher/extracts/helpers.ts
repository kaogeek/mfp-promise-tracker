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

interface ColumnValues {
  title: string;
  text: string;
}

export interface TaskItem {
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
  // @todo can `subitems` and `column_values` be optimize fetch to reduce API query cost?
  const query = `query { boards (ids: ${boardId}) { items (limit: ${LIMIT},page:${page}) { id name column_values { title text } subitems { id name column_values { title text } } } } }`;
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
  const boardInfo = await fetchBoardInfo(boardId);
  const itemCount = boardInfo.data.boards?.[0]?.items_count ?? 0;

  const rows: TaskItem[] = [];
  let page: number = 1;

  // get all board item aka promises
  do {
    const resp = await fetchBoardPromise(boardId, page++);
    if (Array.isArray(resp.data.boards) && resp.data.boards.length !== 0) {
      const items = resp.data.boards[0].items;
      if (Array.isArray(items)) {
        rows.push(...items);
      }
    }
  } while (rows.length < itemCount);

  return rows;
}
