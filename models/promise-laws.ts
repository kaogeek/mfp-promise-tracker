import { PromiseStatus } from './promise';

export enum PromiseLawsTopic {
  Politics = 'politics',
  Rights = 'rights',
  Land = 'land',
  Government = 'government',
  Public = 'public',
  Economy = 'economy',
  Environment = 'environment',
  Labor = 'labor',
}

export interface PromiseLawsLink {
  name: string;
  url: string;
}

export interface PromiseLawsTimeline {
  label: string;
  from: string;
  to?: string;
}

export interface TrackingPromiseLaws {
  id: number;
  party: string;
  title: string;
  category: PromiseLawsTopic;
  status: PromiseStatus;
  description: string;
  isNCPO: boolean;
  imageUrl?: string;
  links: PromiseLawsLink[];
  timelines: PromiseLawsTimeline[];
}

export const promiseLawsTopicOrder: PromiseLawsTopic[] = [
  PromiseLawsTopic.Politics,
  PromiseLawsTopic.Rights,
  PromiseLawsTopic.Land,
  PromiseLawsTopic.Government,
  PromiseLawsTopic.Public,
  PromiseLawsTopic.Economy,
  PromiseLawsTopic.Environment,
  PromiseLawsTopic.Labor,
];

export const promiseLawsTopicTextMap = new Map<
  PromiseLawsTopic,
  { long: string; short: string }
>([
  [PromiseLawsTopic.Politics, { long: 'กฎหมายการเมือง', short: 'การเมือง' }],
  [
    PromiseLawsTopic.Rights,
    { long: 'กฎหมายสิทธิเสรีภาพ', short: 'สิทธิเสรีภาพ' },
  ],
  [
    PromiseLawsTopic.Land,
    { long: 'กฎหมายปฎิรูปที่ดิน', short: 'ปฎิรูปที่ดิน' },
  ],
  [
    PromiseLawsTopic.Government,
    { long: 'กฎหมายปฏิรูประบบบริหารราชการ', short: 'ระบบบริหารราชการ' },
  ],
  [
    PromiseLawsTopic.Public,
    { long: 'กฎหมายบริการสาธารณะ', short: 'บริการสาธารณะ' },
  ],
  [PromiseLawsTopic.Economy, { long: 'กฎหมายเศรษฐกิจ', short: 'เศรษฐกิจ' }],
  [
    PromiseLawsTopic.Environment,
    { long: 'กฎหมายสิ่งแวดล้อม', short: 'สิ่งแวดล้อม' },
  ],
  [PromiseLawsTopic.Labor, { long: 'กฎหมายแรงงาน', short: 'แรงงาน' }],
]);
