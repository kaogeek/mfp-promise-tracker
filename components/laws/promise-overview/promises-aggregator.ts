import { FilterType } from '@/models/filter';
import {
  PromiseStatus,
  promiseStatusTextMap,
  promiseStatusOrder,
} from '@/models/promise';
import {
  TrackingPromiseLaws,
  promiseLawsTopicTextMap,
  promiseLawsTopicOrder,
} from '@/models/promise-laws';

export interface ChartData {
  status: PromiseStatus;
  count: number;
}

export interface Chart {
  label: string;
  icon?: string;
  isNCPO?: boolean;
  data: ChartData[];
}

interface StatusPair {
  [status: string]: number;
}

const parseChartDataFromStatusPair = (statuses: StatusPair): ChartData[] =>
  statuses
    ? promiseStatusOrder.reduce<ChartData[]>(
        (list, status) =>
          status in statuses
            ? [...list, { status, count: statuses[status] }]
            : list,
        []
      )
    : [];

export const groupPromisesBy = (
  groupBy: FilterType.Party | FilterType.Status | FilterType.Category,
  promises: TrackingPromiseLaws[],
  maxGroup = 9
): {
  max: number;
  total: number;
  charts: Chart[];
} => {
  const groupedPromiseObject = promises.reduce<{
    [key: string]: { isNCPO: boolean; count: number; statuses: StatusPair };
  }>((obj, promise) => {
    const group = promise[groupBy];

    if (!(group in obj)) {
      obj[group] = {
        isNCPO: false,
        count: 1,
        statuses: {},
      };
    } else {
      obj[group].count++;
    }

    if (!(promise.status in obj[group].statuses)) {
      obj[group].statuses[promise.status] = 1;
    } else {
      obj[group].statuses[promise.status]++;
    }

    if (promise.isNCPO === true) {
      obj[group].isNCPO = true;
    }

    return obj;
  }, {});

  let charts: Chart[] =
    groupBy === FilterType.Party
      ? Object.entries(groupedPromiseObject)
          .map<Chart>(([label, group]) => ({
            label,
            icon: `party/${label.split('/')[0]}.jpg`,
            isNCPO: group.isNCPO,
            data: parseChartDataFromStatusPair(group.statuses),
          }))
          .sort(
            (a, z) =>
              groupedPromiseObject[z.label].count -
              groupedPromiseObject[a.label].count
          )
      : groupBy === FilterType.Category
      ? promiseLawsTopicOrder.map<Chart>((key) => ({
          label: promiseLawsTopicTextMap.get(key)?.short as string,
          icon: `topic/laws/${key}_small.png`,
          data: parseChartDataFromStatusPair(
            groupedPromiseObject[key]?.statuses
          ),
        }))
      : promiseStatusOrder.map<Chart>((key) => ({
          label: promiseStatusTextMap.get(key) as string,
          icon: `status/${key}_small.png`,
          data: parseChartDataFromStatusPair(
            groupedPromiseObject[key]?.statuses
          ),
        }));

  if (charts.length > maxGroup) {
    const otherParties = charts.slice(maxGroup);

    charts = [
      ...charts.slice(0, maxGroup),
      {
        label: 'อื่นๆ',
        icon: `other-group.png`,
        data: promiseStatusOrder
          .map<ChartData>((status) => ({
            status,
            count: otherParties.reduce(
              (sum, { data }) =>
                sum + (data.find((d) => d.status === status)?.count || 0),
              0
            ),
          }))
          .filter(({ count }) => count > 0),
      },
    ];
  }

  const chartsCount = charts.map(({ data }) =>
    data.reduce((sum, { count }) => sum + count, 0)
  );

  return {
    max: Math.max(...chartsCount),
    total: chartsCount.reduce((sum, count) => sum + count, 0),
    charts,
  };
};
