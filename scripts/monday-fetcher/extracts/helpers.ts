import fetch from 'node-fetch';

export const LIMIT = 1000;

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
