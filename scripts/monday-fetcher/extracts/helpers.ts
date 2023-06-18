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

interface PageInfo {
  totalRows: number;
  page: number;
  pageSize: number;
  isFirstPage: boolean;
  isLastPage: boolean;
}

type Row = { [key: string]: any };

interface PublicViewResponse {
  list: Row[];
  pageInfo: PageInfo;
}

/**
 * fetch board info from monday
 * @param {number} boardId - monday board's ID
 */
export async function fetchBoard(boardId: number): Promise<MondayResponse> {
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
 * fetch board's task info
 * @param {number} boardId - task item ID
 * @param {number} page - items on board's page
 */
export async function fetchBoardTask(
  boardId: number,
  page: number
): Promise<MondayResponse> {
  const query = `query { boards (ids: ${boardId}) { items (limit: ${LIMIT},page:${page}) { id name } } }`;
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
 * fectch board task details
 * @param {number} taskId - task item ID
 * @returns
 */
export async function fetchTask(taskId: number) {
  // todo: can `subitems` and `column_values` be optimize fetch to reduce API query cost?
  const query = `query { items (ids: ${taskId}) { id name column_values { title text } subitems { id name column_values { title text } } } }`;
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

// TODO: fetch board data from monday
export function fetchMondayData() {
  // TODO: get board info
  // TODO: get board's task items
  // TODO: get task info
  // TODO: get subtask items
}

export async function fetchNocoDB(resourcePath: string): Promise<Row[]> {
  const apiPath = process.env.NOCODB_API_PATH;
  const apiToken = process.env.NOCODB_API_TOKEN || '';

  let currentPageInfo: PageInfo | null = null;
  const rows: Row[] = [];

  do {
    const res = await fetch(
      `${apiPath}${resourcePath}?limit=${LIMIT}&offset=${
        currentPageInfo ? currentPageInfo.page * currentPageInfo.pageSize : 0
      }`,
      {
        headers: {
          'xc-token': apiToken,
        },
      }
    );

    const { list, pageInfo } = (await res.json()) as PublicViewResponse;

    rows.push(...list);
    currentPageInfo = pageInfo;
  } while (!currentPageInfo?.isLastPage);

  return rows;
}
