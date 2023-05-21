import { PromiseStatus, PromiseTopic } from './promise';

export enum FilterType {
  Party = 'party',
  Status = 'status',
  Keyword = 'keyword',
  Topic = 'topic',
}

export type Filter =
  | {
      type: FilterType.Party | FilterType.Keyword;
      value: string;
    }
  | {
      type: FilterType.Status;
      value: PromiseStatus;
    }
  | {
      type: FilterType.Topic;
      value: PromiseTopic;
    };
