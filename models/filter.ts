import { PromiseStatus, PromiseTopic } from './promise';
import { PromiseLawsTopic } from './promise-laws';

export enum FilterType {
  Party = 'party',
  Status = 'status',
  Keyword = 'keyword',
  Topic = 'topic',
  Category = 'category',
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
    }
  | {
      type: FilterType.Category;
      value: PromiseLawsTopic;
    };
