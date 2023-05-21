export enum PartySide {
  Government = 'government',
  Opposition = 'opposition',
}

export interface Party {
  name: string;
  side: PartySide;
}
