export enum PromiseTopic {
  Democracy = 'democracy',
  Welfare = 'welfare',
  Administration = 'administration',
  Government = 'government',
  Education = 'education',
  Agriculture = 'agriculture',
  Environmental = 'environmental',
  Health = 'health',
  Economics = 'economics',
}

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

export enum PromiseStatus {
  NoData = 'nodata',
  Proposed = 'proposed',
  Paused = 'paused',
  Working = 'working',
  Done = 'done',
}

export interface PromiseLink {
  name: string;
  url: string;
}

export interface PromiseTimeline {
  label: string;
  from: string;
  to?: string;
}

export interface TrackingPromise {
  id: number;
  party: string;
  title: string;
  topic: PromiseTopic;
  status: PromiseStatus;
  description: string;
  isNCPO: boolean;
  imageUrl?: string;
  links: PromiseLink[];
  timelines: PromiseTimeline[];
}

export const promiseStatusOrder: PromiseStatus[] = [
  PromiseStatus.NoData,
  PromiseStatus.Proposed,
  PromiseStatus.Paused,
  PromiseStatus.Working,
  PromiseStatus.Done,
];

export const promiseTopicOrder: PromiseTopic[] = [
  PromiseTopic.Democracy,
  PromiseTopic.Welfare,
  PromiseTopic.Administration,
  PromiseTopic.Government,
  PromiseTopic.Education,
  PromiseTopic.Agriculture,
  PromiseTopic.Environmental,
  PromiseTopic.Health,
  PromiseTopic.Economics,
];

export const promiseTopicTextMap = new Map<
  PromiseTopic,
  { long: string; short: string }
>([
  [PromiseTopic.Democracy, { long: 'ประชาธิปไตยเต็มใบ', short: 'ประชาธิปไตย' }],
  [PromiseTopic.Welfare, { long: 'สวัสดิการครบวงจร', short: 'สวัสดิการ' }],
  [
    PromiseTopic.Administration,
    { long: 'จังหวัดจัดการตนเอง', short: 'จังหวัดจัดการตนเอง' },
  ],
  [
    PromiseTopic.Government,
    { long: 'ราชการเพื่อราษฎร', short: 'ราชการเพื่อราษฎร' },
  ],
  [PromiseTopic.Education, { long: 'ปฏิวัติการศึกษา', short: 'การศึกษา' }],
  [PromiseTopic.Agriculture, { long: 'เกษตรก้าวหน้า', short: 'เกษตร' }],
  [
    PromiseTopic.Environmental,
    { long: 'สิ่งแวดล้อมยั่งยืน', short: 'สิ่งแวดล้อม' },
  ],
  [PromiseTopic.Health, { long: 'สุขภาพดีทั้งกาย-ใจ', short: 'สุขภาพ' }],
  [PromiseTopic.Economics, { long: 'เศรษฐกิจโตเพื่อทุกคน', short: 'เศรษฐกิจ' }],
]);

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

export const promiseStatusTextMap = new Map<PromiseStatus, string>([
  [PromiseStatus.NoData, 'ไม่พบความเคลื่อนไหว'],
  [PromiseStatus.Proposed, 'ยื่นเข้าสภา'],
  [PromiseStatus.Paused, 'ถูกระงับ'],
  [PromiseStatus.Working, 'กำลังดำเนินการ'],
  [PromiseStatus.Done, 'สำเร็จ'],
]);
