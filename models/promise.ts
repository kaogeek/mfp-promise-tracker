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
  Army = 'army',
  Economy = 'economy',
  Decentralize = 'decentralize',
  Corruption	= 'corruption',
  Government = 'government',
  Tax = 'tax',
  Public =	'public',
  Land = 'land',
  Labor =	'labor',
  Environment =	'environment',
  Rights = 'rights',
  Peace	= 'peace',
  Diversity = 'diversity',
  Politics =	'politics',
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
  PromiseLawsTopic.Army,
  PromiseLawsTopic.Economy,
  PromiseLawsTopic.Decentralize,
  PromiseLawsTopic.Corruption,
  PromiseLawsTopic.Government,
  PromiseLawsTopic.Tax,
  PromiseLawsTopic.Public,
  PromiseLawsTopic.Land,
  PromiseLawsTopic.Labor,
  PromiseLawsTopic.Environment,
  PromiseLawsTopic.Rights,
  PromiseLawsTopic.Peace,
  PromiseLawsTopic.Diversity,
  PromiseLawsTopic.Politics,
];

export const promiseLawsTopicTextMap = new Map<
  PromiseLawsTopic,
  { long: string; short: string }
>([
  [PromiseLawsTopic.Army, { long: 'กองทัพ', short: 'กองทัพ' }],
  [PromiseLawsTopic.Decentralize, { long: 'กระจายอำนาจ', short: 'กระจายอำนาจ' }],
  [PromiseLawsTopic.Economy, { long: 'การแข่งขันทางการค้า', short: 'การแข่งขันทางการค้า' }],
  [PromiseLawsTopic.Corruption, { long: 'การทุจริต', short: 'การทุจริต' }],
  [PromiseLawsTopic.Government, { long: 'ระบบราชการ', short: 'ระบบราชการ' }],
  [PromiseLawsTopic.Tax, { long: 'ระบบภาษี', short: 'ระบบภาษี' }],
  [PromiseLawsTopic.Public, { long: 'บริการสาธารณะ', short: 'บริการสาธารณะ' }],
  [PromiseLawsTopic.Land, { long: 'ที่ดิน', short: 'ที่ดิน' }],
  [PromiseLawsTopic.Labor, { long: 'แรงงาน', short: 'แรงงาน' }],
  [PromiseLawsTopic.Environment, { long: 'สิ่งแวดล้อม', short: 'สิ่งแวดล้อม' }],
  [PromiseLawsTopic.Rights, { long: 'สิทธิเสรีภาพ', short: 'สิทธิเสรีภาพ' }],
  [PromiseLawsTopic.Peace, { long: 'สันติภาพ/ความขัดแย้ง', short: 'สันติภาพ/ความขัดแย้ง' }],
  [PromiseLawsTopic.Diversity, { long: 'ความหลากหลาย', short: 'ความหลากหลาย' }],
  [PromiseLawsTopic.Politics, { long: 'พัฒนาการเมือง', short: 'พัฒนาการเมือง' }],
]);

export const promiseStatusTextMap = new Map<PromiseStatus, string>([
  [PromiseStatus.NoData, 'เตรียมยื่นเข้าสภา'],
  [PromiseStatus.Proposed, 'ยื่นเข้าสภาแล้ว'],
  [PromiseStatus.Paused, 'ถูกระงับ/ปัดตก'],
  [PromiseStatus.Working, 'กำลังดำเนินการ'],
  [PromiseStatus.Done, 'สำเร็จ'],
]);
