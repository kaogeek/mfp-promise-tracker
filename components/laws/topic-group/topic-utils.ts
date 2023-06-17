import {
  TrackingPromise,
  PromiseTopic,
  promiseTopicTextMap,
  promiseStatusTextMap,
  PromiseStatus,
} from '@/models/promise';

export interface Group {
  by: string;
  where: PromiseTopic | PromiseStatus | string;
}

export const groupBy = (topic: String, status: String) => {
  if (topic !== '' && status === '') {
    return { by: 'topic', where: topic as PromiseTopic };
  } else if (topic === '' && status !== '') {
    return { by: 'status', where: status as PromiseStatus };
  } else {
    return { by: '', where: '' };
  }
};

export const filteredPromise = (
  promises: TrackingPromise[],
  by: String,
  where: PromiseTopic | PromiseStatus | String
): TrackingPromise[] => {
  if (by === 'topic') {
    return promises.filter(
      (promise: TrackingPromise) => promise.topic === (where as PromiseTopic)
    );
  } else if (by === 'status') {
    return promises.filter(
      (promise: TrackingPromise) => promise.status === (where as PromiseStatus)
    );
  } else {
    return promises;
  }
};

export const getPromisesLength = (promises: TrackingPromise[]): number => {
  return promises.length;
};

const getTopicTitle = (topic: PromiseTopic): string | undefined => {
  return promiseTopicTextMap.get(topic)?.long;
};

const getStatusTitle = (status: PromiseStatus): string | undefined => {
  return promiseStatusTextMap.get(status);
};

export const getGroupTitle = (
  by: string,
  where: string
): string | undefined => {
  if (by === 'topic') {
    const title = getTopicTitle(where as PromiseTopic);
    if (title) {
      return 'ประเด็น' + getTopicTitle(where as PromiseTopic);
    } else {
      return '';
    }
  } else if (by === 'status') {
    const title = getStatusTitle(where as PromiseStatus);
    if (title) {
      return 'สถานะ: ' + getStatusTitle(where as PromiseStatus);
    } else {
      return '';
    }
  } else {
    return '';
  }
};

export const computedPromisePerPage = (
  promisePerPage: number,
  promiseLength: number
) => {
  if (promisePerPage > 0) {
    return promisePerPage;
  } else {
    return promiseLength;
  }
};

export const pageLength = (promiseLength: number, promisePerPage: number) => {
  if (promisePerPage <= 0) return 0;
  return Math.ceil(promiseLength / promisePerPage);
};

export const pageNumberArray = (pageLength: number, currentPage: number) => {
  if (currentPage > pageLength || pageLength < 0 || currentPage < 0) return [];
  const fullArray = Array.from({ length: pageLength }, (_, index) => index + 1);
  let returnedArray = [];

  if (fullArray.length <= 4) {
    return fullArray;
  }

  if (currentPage <= 2) {
    returnedArray = [1, 2, '...', fullArray.length];
  } else if (currentPage >= 3 && currentPage < fullArray.length - 2) {
    returnedArray = [
      1,
      '...',
      currentPage,
      currentPage + 1,
      '...',
      fullArray.length,
    ];
  } else if (currentPage >= fullArray.length - 2) {
    returnedArray = [
      1,
      '...',
      fullArray.length - 2,
      fullArray.length - 1,
      fullArray.length,
    ];
  } else {
    return [];
  }
  return returnedArray;
};

export const currentPagePromises = (
  promises: TrackingPromise[],
  currentPage: number,
  promisePerPage: number
) => {
  if (currentPage < 1 || promisePerPage < 0) return [];
  const lastItemIndex: number = currentPage * promisePerPage;
  const firstItemIndex: number = lastItemIndex - promisePerPage;
  return promises.slice(firstItemIndex, lastItemIndex);
};
