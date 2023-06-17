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

export enum PromiseLawsStatus {
  NoData = 'nodata',
  Proposed = 'proposed',
  Paused = 'paused',
  Working = 'working',
  Done = 'done',
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
  topic: PromiseLawsTopic;
  status: PromiseLawsStatus;
  description: string;
  isNCPO: boolean;
  imageUrl?: string;
  links: PromiseLawsLink[];
  timelines: PromiseLawsTimeline[];
}

export const promiseLawsStatusOrder: PromiseLawsStatus[] = [
  PromiseLawsStatus.NoData,
  PromiseLawsStatus.Proposed,
  PromiseLawsStatus.Paused,
  PromiseLawsStatus.Working,
  PromiseLawsStatus.Done,
];

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
  [PromiseLawsTopic.Politics, { long: 'การเมือง', short: 'การเมือง' }],
  [PromiseLawsTopic.Rights, { long: 'สิทธิเสรีภาพ', short: 'สิทธิเสรีภาพ' }],
  [PromiseLawsTopic.Land, { long: 'ปฎิรูปที่ดิน', short: 'ปฎิรูปที่ดิน' }],
  [
    PromiseLawsTopic.Government,
    { long: 'ระบบบริหารราชการ', short: 'ระบบบริหารราชการ' },
  ],
  [PromiseLawsTopic.Public, { long: 'บริการสาธารณะ', short: 'บริการสาธารณะ' }],
  [PromiseLawsTopic.Economy, { long: 'เศรษฐกิจ', short: 'เศรษฐกิจ' }],
  [PromiseLawsTopic.Environment, { long: 'สิ่งแวดล้อม', short: 'สิ่งแวดล้อม' }],
  [PromiseLawsTopic.Labor, { long: 'แรงงาน', short: 'แรงงาน' }],
]);

export const promiseStatusTextMap = new Map<PromiseLawsStatus, string>([
  [PromiseLawsStatus.NoData, 'ไม่พบความเคลื่อนไหว'],
  [PromiseLawsStatus.Proposed, 'นำเข้า ครม.'],
  [PromiseLawsStatus.Paused, 'ถูกระงับ'],
  [PromiseLawsStatus.Working, 'กำลังดำเนินการ'],
  [PromiseLawsStatus.Done, 'สำเร็จ'],
]);
